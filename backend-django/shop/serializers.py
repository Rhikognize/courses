from rest_framework import serializers
from .models import *


class CourseSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Course
        fields = ['title', 'price', 'students_qty', 'category']
