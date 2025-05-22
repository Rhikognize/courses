
from django.contrib import admin
from django.urls import path, include
from shop.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('wel/', ReactView_Course.as_view(), name="something"),
    path('api/', include('authapp.urls')),
    path('', include('shop.urls')),
]
