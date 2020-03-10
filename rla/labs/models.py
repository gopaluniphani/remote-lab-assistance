from django.db import models
from instructors import models as instructor_models
from students import models as student_models
from django.conf import settings
from django.core.files.storage import FileSystemStorage
import os


class Lab(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.code + " : " + self.name


class LabCycle(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    lab = models.ForeignKey(
        Lab, related_name='labcycles', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class ActiveLab(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=30)
    instructor = models.ForeignKey(
        instructor_models.Instructor, related_name='activelabs', on_delete=models.CASCADE)
    students = models.ManyToManyField(
        student_models.Student, related_name='activelabs')

    def __str__(self):
        return self.name + " : " + self.instructor.user.username


class ActiveLabCycle(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    lab = models.ForeignKey(
        ActiveLab, related_name='labcycles', on_delete=models.CASCADE)

    students = models.ManyToManyField(
        student_models.Student, through='Solution')

    def __str__(self):
        return self.name


def student_director_path(instance, filename):
    return 'student_{0}/{1}'.format(instance.student.id, filename)


class OverwriteStorage(FileSystemStorage):
    def get_available_name(self, name):
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, name))
        return name


class Solution(models.Model):
    labcycle = models.ForeignKey(ActiveLabCycle, on_delete=models.CASCADE)
    student = models.ForeignKey(
        student_models.Student, on_delete=models.CASCADE)

    code = models.FileField(upload_to=student_director_path,
                            storage=OverwriteStorage(), blank=True)
