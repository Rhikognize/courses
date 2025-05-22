from django.urls import path
from .views import MyTokenObtainPairView, RegisterView, ValidateUserView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
    path('validate-user/', ValidateUserView.as_view(), name='validate-user'),
    path('token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),  # 💡 Эта строка нужна
]
