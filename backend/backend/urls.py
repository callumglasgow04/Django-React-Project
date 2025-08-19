from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import CreateStudentView, CreateTeacherView, StudentProfileView, TeacherProfileView, UserInfoView

urlpatterns = [
    path('admin/', admin.site.urls),

    # Register
    path("api/student/register/", CreateStudentView.as_view(), name="register-student"),
    path("api/teacher/register/", CreateTeacherView.as_view(), name="register-teacher"),

    # logged in user profile
    path("api/student/profile/", StudentProfileView.as_view(), name="student-profile"),
    path("api/teacher/profile/", TeacherProfileView.as_view(), name="teacher-profile"),
    path("api/user/info/", UserInfoView.as_view(), name="user-info"),

    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    
    path("api-auth/", include("rest_framework.urls")),
]
