from rest_framework import viewsets, permissions
from .serializers import LabSerializer, LabCycleSerializer, ActiveLabSerializer, ActiveLabCycleSerializer, SolutionSerializer
from .models import Lab, LabCycle, ActiveLab, ActiveLabCycle, Solution


class LabViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LabSerializer
    queryset = Lab.objects.all()


class LabCycleViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LabCycleSerializer
    queryset = LabCycle.objects.all()


class ActiveLabViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ActiveLabSerializer

    def get_queryset(self):
        if self.request.query_params.get('instructor_id') != None:
            return ActiveLab.objects.filter(instructor_id=self.request.query_params['instructor_id'])
        else:
            return ActiveLab.objects.all()


class ActiveLabCycleViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ActiveLabCycleSerializer
    queryset = ActiveLabCycle.objects.all()


class SolutionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SolutionSerializer
    queryset = Solution.objects.all()
