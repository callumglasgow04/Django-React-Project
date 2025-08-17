from django.contrib import admin
from django.urls import path, include
from api.views import CreateStudentView, CreateTeacherView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/student/register/", CreateStudentView.as_view(), name="register-student"),
    path("api/teacher/register/", CreateTeacherView.as_view(), name="register-teacher"),


    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    
    path("api-auth/", include("rest_framework.urls")),
]
