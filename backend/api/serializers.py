from .models import User, Student, Teacher
from rest_framework import serializers

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'password')
#         extra_kwargs = {"password": {"write_only": True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user

class StudentSerializer(serializers.ModelSerializer):
    dob = serializers.DateField(required=False, allow_null=True)
    favourite_color = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'avatar', 'dob', 'favourite_color', 'role')
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        dob = validated_data.pop('dob', None)
        favourite_color = validated_data.pop('favourite_color', None)

        user = User.objects.create_user(**validated_data)

        student_data = {}
        if dob is not None:
            student_data['dob'] = dob
        if favourite_color is not None:
            student_data['favourite_color'] = favourite_color

        Student.objects.create(
            user=user,
            **student_data
        )
        return user
    
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name', 'avatar', 'role')
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        validated_data['role'] = 'teacher'
        user = User.objects.create_user(**validated_data)
        Teacher.objects.create(user=user)
        return user