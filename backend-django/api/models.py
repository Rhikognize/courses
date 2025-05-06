from tastypie.resources import ModelResource
from shop.models import Category, Course
from .authentication import CustomAuthentication
from tastypie.authorization import Authorization


class CateogoryResource(ModelResource):
    class Meta:
        queryset = Category.objects.all()
        resource_name = 'categories'
        allowed_methods = ['get']


class CourseResource(ModelResource):
    class Meta:
        queryset = Course.objects.all()
        resource_name = 'courses'
        allowed_methods = ['get', 'post', 'delete']
        excludes = ['created_at', 'reviews_qty']
        authentication = CustomAuthentication()
        authorization = Authorization()

    def hydrate(self, bundle):
        bundle.obj.category_id = bundle.data['category_id']
        return bundle

    def dehydrate(self, bundle):
        bundle.data['category'] = bundle.obj.category
        bundle.data['category_id'] = bundle.obj.category_id
        return bundle

    def dehydrate_title(self, bundle):
        return bundle.data['title'].upper()
