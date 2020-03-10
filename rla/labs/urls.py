from rest_framework import routers
from .api import LabViewSet, LabCycleViewSet, ActiveLabViewSet, ActiveLabCycleViewSet
from django.urls import path
from . import views

router = routers.DefaultRouter()
router.register('api/labs', LabViewSet)
router.register('api/labcycles', LabCycleViewSet)
router.register('api/activelabs', ActiveLabViewSet, "activelabs")
router.register('api/activelabcycles', ActiveLabCycleViewSet)

urlpatterns = [
    path('', views.index),
    path('addlabs/', views.addlab)
]
urlpatterns += router.urls
