from channels.generic.websocket import WebsocketConsumer
from django.shortcuts import get_object_or_404
from .models import ChatGroup, GroupMessage
from django.utils.timezone import now
from datetime import timedelta
import json
import re
from django.template.loader import render_to_string
from asgiref.sync import async_to_sync
import logging

logger = logging.getLogger(__name__)  # Logging setup for debugging

class ChatroomConsumer(WebsocketConsumer):
    def connect(self):
        self.user = self.scope['user']
        self.chatroom_name = self.scope['url_route']['kwargs']['chatroom_name']
        self.chatroom = get_object_or_404(ChatGroup, group_name=self.chatroom_name)

        # Sanitize the group name to meet Django Channels requirements
        self.chatroom_group_name = self.sanitize_group_name(self.chatroom_name)

        # Add this connection to the group
        async_to_sync(self.channel_layer.group_add)(
            self.chatroom_group_name, self.channel_name
        )

        # Add user to online users list
        if self.user not in self.chatroom.users_online.all():
            self.chatroom.users_online.add(self.user)
            self.update_online_count()

        self.accept()

        logger.info(f"User {self.user} connected to chatroom {self.chatroom_name}")

    def disconnect(self, close_code):
        # Remove connection from the group
        async_to_sync(self.channel_layer.group_discard)(
            self.chatroom_group_name, self.channel_name
        )

        # Remove user from online users list
        if self.user in self.chatroom.users_online.all():
            self.chatroom.users_online.remove(self.user)
            self.update_online_count()

        logger.info(f"User {self.user} disconnected from chatroom {self.chatroom_name}")

    def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            body = text_data_json.get('body', '').strip()

            # Validate body content
            if not body:
                logger.warning("Empty message received; ignoring.")
                return

            # Prevent duplicate messages sent in rapid succession
            recent_time_threshold = now() - timedelta(seconds=3)
            if GroupMessage.objects.filter(
                body=body, author=self.user, group=self.chatroom, created__gte=recent_time_threshold
            ).exists():
                logger.warning("Duplicate message detected; ignoring.")
                return

            # Create and save the message
            message = GroupMessage.objects.create(
                body=body,
                author=self.user,
                group=self.chatroom
            )

            # Broadcast the message to the group
            event = {
                'type': 'message_handler',
                'message_id': message.id,
            }
            async_to_sync(self.channel_layer.group_send)(
                self.chatroom_group_name, event
            )

            logger.info(f"Message sent by {self.user}: {body}")

        except Exception as e:
            logger.error(f"Error processing message: {str(e)}")

    def message_handler(self, event):
        try:
            message_id = event['message_id']
            message = GroupMessage.objects.get(id=message_id)

            context = {
                'message': message,
                'user': self.user,
            }
            html = render_to_string("a_rtchat/partials/chat_message_p.html", context=context)

            self.send(text_data=html)
            logger.info(f"Message delivered to user {self.user}")

        except Exception as e:
            logger.error(f"Error in message_handler: {str(e)}")

    def update_online_count(self):
        try:
            online_count = self.chatroom.users_online.count()

            event = {
                'type': 'online_count_handler',
                'online_count': online_count
            }
            async_to_sync(self.channel_layer.group_send)(self.chatroom_group_name, event)

        except Exception as e:
            logger.error(f"Error updating online count: {str(e)}")

    def online_count_handler(self, event):
        try:
            online_count = event['online_count']
            html = render_to_string("a_rtchat/partials/online_count.html", {'online_count': online_count})
            self.send(text_data=html)
        except Exception as e:
            logger.error(f"Error in online_count_handler: {str(e)}")

    @staticmethod
    def sanitize_group_name(name):
        """
        Sanitizes the group name to comply with Django Channels' naming rules.
        """
        sanitized_name = re.sub(r'[^a-zA-Z0-9._-]', '_', name)
        return sanitized_name[:100]
