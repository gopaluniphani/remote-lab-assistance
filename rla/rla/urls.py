from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('labs.urls')),
    path('', include('accounts.urls')),
    path('', include('students.urls')),
    path('', include('instructors.urls'))
]
