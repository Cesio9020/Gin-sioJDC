from rest_framework import serializers
from .models import Anamnése



class AnamneseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anamnése
        fields = "__all__"