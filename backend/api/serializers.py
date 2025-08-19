from rest_framework import serializers
from .models import User, Student, Teacher

## Register
class StudentRegisterSerializer(serializers.ModelSerializer):
    dob = serializers.DateField(write_only=True, required=False, allow_null=True)
    favourite_color = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'avatar', 'dob', 'favourite_color')
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        dob = validated_data.pop('dob', None)
        favourite_color = validated_data.pop('favourite_color', None)

        validated_data['role'] = 'student'

        user = User.objects.create_user(**validated_data)


        Student.objects.create(
            user=user,
            dob=dob,
            favourite_color=favourite_color or 'blue',
        )
        return user

class TeacherRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name', 'avatar')
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        validated_data['role'] = 'teacher'
        user = User.objects.create_user(**validated_data)
        Teacher.objects.create(user=user)
        return user
    
## Read
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'role')

class StudentReadSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)

    class Meta:
        model = Student
        fields = ('id', 'user', 'dob', 'favourite_color')

class TeacherReadSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)

    class Meta:
        model = Teacher
        fields = ('id', 'user') 