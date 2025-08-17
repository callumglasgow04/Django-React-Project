from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import StudentSerializer, TeacherSerializer

class CreateStudentView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]

class CreateTeacherView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [AllowAny]