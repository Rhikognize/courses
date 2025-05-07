from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from .models import Course
from rest_framework.response import Response
from . serializers import *

# Create your views here.


class ReactView_Course(APIView):
    serializer_course = CourseSerializer

    def get(self, request):
        detail = [{"id": detail.id, "title": detail.title, "price": detail.price,
                   "category": str(detail.category),
                   "students_qty": detail.students_qty}
                  for detail in Course.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


def index(request):
    courses = Course.objects.all()
    return render(request, 'shop/courses.html', {'courses': courses})


def single_course(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    return render(request, 'shop/single_course.html', {'course': course})
