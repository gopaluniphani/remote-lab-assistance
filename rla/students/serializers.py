from rest_framework import serializers
from .models import Student
from accounts.serializers import UserSerializer


class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    activelabs = serializers.HyperlinkedRelatedField(
        view_name="activelabs-detail",
        many=True,
        read_only=True
    )

    class Meta:
        model = Student
        fields = ['id', 'user', 'first_name', 'last_name',
                  'section', 'year', 'department', 'activelabs']
