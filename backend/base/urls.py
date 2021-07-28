from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getResponse, name = "getResponse"),
    path('products/', views.getProducts, name = "getProducts"),
    path('products/<int:id>', views.getProduct, name = "getProduct"),
    path('pricing/<int:product>', views.getPricing, name = "getPricing"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='userprofile'),
    path('users/', views.getUsers, name='users'),
    path('users/register/', views.registerUser, name='usersregister'),
]