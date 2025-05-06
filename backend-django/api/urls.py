from api.models import CateogoryResource, CourseResource
from tastypie.api import Api
from django.urls import path, include

api = Api(api_name='v1')

api.register(CourseResource())
api.register(CateogoryResource())

urlpatterns = [
    path('', include(api.urls), name='index'),
]
