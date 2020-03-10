from django.urls import path
from rest_framework import routers
from .api import InstructorViewSet
from . import views


router = routers.DefaultRouter()
router.register('api/instructors', InstructorViewSet, "instructors")

urlpatterns = [
    path('instructor/', views.index)
]
urlpatterns += router.urls
