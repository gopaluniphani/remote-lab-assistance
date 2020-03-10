from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from django.db.models.signals import post_save
from django.dispatch import receiver
from students.models import Student
from instructors.models import Instructor


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'student', 'is_staff')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'is_staff')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects._create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            is_staff=validated_data['is_staff']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


@receiver(post_save, sender=User)
def create_profiles(sender, instance, **kwargs):
    if instance.is_staff == True:
        Instructor.objects.create(user=instance)
    elif instance.is_staff == False:
        Student.objects.create(user=instance)
