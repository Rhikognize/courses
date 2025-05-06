from django.urls import path
from . import views
app_name = 'shop'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:course_id>', views.single_course, name='single_course')
]
