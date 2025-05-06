from django.contrib import admin
from . import models

admin.site.site_header = 'Course Admin'
admin.site.index_title = 'Welocme to Course Admin'
admin.site.site_title = 'My Courses'


class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'category']


class CategoryInline(admin.TabularInline):
    model = models.Course
    exclude = ['created_at']
    extra = 1


class CategotyAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
    fieldsets = [
        (None, {'fields': ['title']}),
        ('Dates', {
            'fields': ['created_at'],
            'classes': ['collapse']
        })
    ]
    inlines = [CategoryInline]


admin.site.register(models.Category, CategotyAdmin)
admin.site.register(models.Course, CourseAdmin)
# Register your models here.
