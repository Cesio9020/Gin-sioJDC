from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Treinos, Alimentacao,Anamnése, Profile, ChatGroup, GroupMessage, Video

admin.site.register(Treinos)
admin.site.register(Alimentacao)
admin.site.register(Anamnése)
admin.site.register(Profile)
admin.site.register(ChatGroup)
admin.site.register(GroupMessage)
admin.site.register(Video)
