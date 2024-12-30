
from django.db import models
from django.contrib.auth.models import User



class Macações(models.Model):
    user = models.OneToOneField(User,null=True, on_delete=models.CASCADE)
    date = models.DateTimeField()

    def __str__(self):
        return f"Appointment for {self.user.username} on {self.date}"
            

