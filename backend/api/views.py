from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import User, Student, Teacher
from .serializers import StudentRegisterSerializer, TeacherRegisterSerializer, StudentReadSerializer, TeacherReadSerializer, UserInfoSerializer

# Register
class CreateStudentView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = StudentRegisterSerializer
    permission_classes = [AllowAny]

class CreateTeacherView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = TeacherRegisterSerializer
    permission_classes = [AllowAny]

# logged in user profile
class StudentProfileView(generics.RetrieveAPIView):
    serializer_class = StudentReadSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.student_profile
    
class TeacherProfileView(generics.RetrieveAPIView):
    serializer_class = TeacherReadSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.teacher_profile

class UserInfoView(generics.RetrieveAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
