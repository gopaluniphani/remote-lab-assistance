from django.db import models
from django.contrib.auth.models import User


class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    section = models.CharField(max_length=5, blank=True)
    year = models.CharField(max_length=5, blank=True)
    department = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.user.username + " : " + self.first_name
