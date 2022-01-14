from pyexpat import model
from django.db import models

# Create your models here.
class TrackingStatus(models.Model):
    tracking_status = models.BooleanField(default=False)
