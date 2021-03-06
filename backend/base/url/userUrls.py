from django.contrib import admin
from django.urls import path
from base.view import userViews as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='userprofile'),
    path('profile/update/', views.updateUserProfile, name='userprofileupdate'),
    # path('<str:pk>/', views.getUserById, name='user'),
    path('', views.getUsers, name='users'),
    path('register/', views.userRegister, name='usersregister'),
    path('deleteUser/<str:pk>/', views.deleteUser, name='deleteuser'),
]