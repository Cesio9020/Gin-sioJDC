from django.urls import path
from django.urls import re_path
from .consumers import *



websocket_urlpatterns = [
    path("ws/chatroom/<chatroom_name>", ChatroomConsumer.as_asgi()),
]