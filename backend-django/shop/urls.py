from django.urls import path
from . import views
from .views import export_courses_excel
app_name = 'shop'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:course_id>', views.single_course, name='single_course'),
    path('export-courses/', export_courses_excel, name='export_courses'),
]
