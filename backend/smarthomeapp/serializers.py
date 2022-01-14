from dataclasses import fields
from rest_framework import serializers
from .models import TrackingStatus

class TrackingStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrackingStatus
        fields = '__all__'
