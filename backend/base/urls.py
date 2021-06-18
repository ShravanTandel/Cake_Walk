from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getResponse, name = "getResponse"),
    path('products/', views.getProducts, name = "getProducts"),
    path('products/<str:id>', views.getProduct, name = "getProduct"),
]