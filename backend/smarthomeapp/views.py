from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TrackingStatusSerializer
from .models import TrackingStatus


def index(request, *args, **kwargs):
    return render(request,"frontend/index.html")


class getTrackingStatus(APIView):
    def get(self,request):
        tracking_status = TrackingStatus.objects.all()
        tracking_status_serializer = TrackingStatusSerializer(tracking_status)
        return Response(tracking_status_serializer.data)
