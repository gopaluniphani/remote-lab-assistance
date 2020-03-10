from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    activelabs = serializers.HyperlinkedRelatedField(
        view_name="activelabs-detail",
        many=True,
        read_only=True
    )

    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name',
                  'section', 'year', 'department', 'activelabs']
