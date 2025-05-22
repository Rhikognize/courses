from django.urls import path
from . import views
from .views import export_courses_excel
app_name = 'shop'
urlpatterns = [
    path('export-courses/', export_courses_excel, name='export_courses'),
]
