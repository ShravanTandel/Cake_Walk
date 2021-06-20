from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getResponse, name = "getResponse"),
    path('products/', views.getProducts, name = "getProducts"),
    path('products/<int:id>', views.getProduct, name = "getProduct"),
    path('pricing/<int:product>', views.getPricing, name = "getPricing"),
]