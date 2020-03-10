from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Lab, ActiveLab, LabCycle, ActiveLabCycle
from instructors.models import Instructor

import json


def index(request):
    return render(request, 'labs/index.html')


@csrf_exempt
def addlab(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            instructor_id = int(data['instructor_id'])
            lab_id = data['lab_id']
            l = Lab.objects.get(id=lab_id)
            i = Instructor.objects.get(id=instructor_id)
            a = ActiveLab.objects.create(
                code=l.code, name=l.name, instructor=i)
            for labcycle in l.labcycles.all():
                ActiveLabCycle.objects.create(
                    name=labcycle.name, description=labcycle.description, lab=a)
            return JsonResponse(data={"id": a.id, "message": "Lab Added Successfully"})
        except Exception as e:
            print(e)
            return JsonResponse(status=500, data={"message": e})
    else:
        return JsonResponse(status=403, data={"message": "Action not allowed"})


@csrf_exempt
def addstudents(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            students = list(map(int, data['students']))
            lab_id = int(data['lab_id'])
            print(students, lab_id)
            l = ActiveLab.objects.get(id=lab_id)
            lcs = l.labcycles.all()
            for student in students:
                l.students.add(student)
                for lc in lcs:
                    lc.students.add(student)
            l.save()
            for lc in lcs:
                lc.save()
            return JsonResponse(data={"message": "Students added to lab succesfully"})
        except Exception as e:
            print(e)
            return JsonResponse(status=500, data={"message": e})
    else:
        return JsonResponse(status=403, data={"message": "Action not allowed"})
