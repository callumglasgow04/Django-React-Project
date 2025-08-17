from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    RoleChoices = (
        ('student', 'Student'),
        ('teacher', 'Teacher'),
    )
    role = models.CharField(max_length=10, choices=RoleChoices, default='student')
    avatar = models.CharField(max_length=50, blank=True, default='1')

    def __str__(self):
        return f"{self.username} ({self.role})"
    
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    dob = models.DateField(null=True, blank=True)
    favourite_color = models.CharField(max_length=40, blank=True, default='blue')

    def __str__(self):
        return f"{self.user.username}"
    
class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher_profile')

    def __str__(self):
        return f"{self.user.username}"
    
class Classroom(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='classrooms')
    students = models.ManyToManyField(Student, related_name='classrooms', blank=True)
    invite_code = models.CharField(max_length=10, unique=True, blank=True)


    def __str__(self):
        return self.name
    
class Team(models.Model):
    name = models.CharField(max_length=100)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, related_name='teams')
    students = models.ManyToManyField(Student, related_name='teams', blank=True)

    def __str__(self):
        return f"{self.name} ({self.classroom.name})"