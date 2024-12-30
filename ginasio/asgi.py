"""
ASGI config for ginasio project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.security.websocket import AllowedHostsOriginValidator
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ginasio.settings')

#application = get_asgi_application()


django_asgi_app = get_asgi_application()

from JDC import routing


application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AllowedHostsOriginValidator(
        AuthMiddlewareStack(URLRouter(routing.websocket_urlpatterns))
    ),
})


