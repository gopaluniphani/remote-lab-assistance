from rest_framework import serializers
from .models import Lab, LabCycle, ActiveLab, ActiveLabCycle, Solution


class LabCycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabCycle
        fields = '__all__'


class LabSerializer(serializers.HyperlinkedModelSerializer):
    labcycles = serializers.HyperlinkedRelatedField(
        view_name='labcycle-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Lab
        fields = ['id', 'code', 'name', 'labcycles']


class ActiveLabSerializer(serializers.ModelSerializer):
    students = serializers.HyperlinkedRelatedField(
        view_name='student-detail',
        many=True,
        read_only=True
    )

    labcycles = serializers.HyperlinkedRelatedField(
        view_name='activelabcycle-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = ActiveLab
        fields = ['id', 'code', 'name', 'instructor', 'students', 'labcycles']


class ActiveLabCycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActiveLabCycle
        fields = '__all__'


class SolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = '__all__'
