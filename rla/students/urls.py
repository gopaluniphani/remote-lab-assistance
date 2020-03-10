from rest_framework import routers
from .api import StudentViewSet, StudentDetailViewSet
from django.urls import path
from . import views

router = routers.DefaultRouter()
router.register('api/students', StudentViewSet, 'students')
router.register('api/student', StudentDetailViewSet, 'student')

urlpatterns = [
    path('student/', views.index)
]
urlpatterns += router.urls
