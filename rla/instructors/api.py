from rest_framework import viewsets, permissions
from .serializers import InstructorSerializer
from .models import Instructor


class InstructorViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InstructorSerializer
    
    def get_queryset(self):
        return Instructor.objects.filter(user=self.request.user)