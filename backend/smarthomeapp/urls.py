from django.urls import path
from .views import index, getTrackingStatus

urlpatterns = [
    path('',index),
    path('istracking/',getTrackingStatus.as_view()),
    path('signin/',index),
    path('signup/',index),
]
