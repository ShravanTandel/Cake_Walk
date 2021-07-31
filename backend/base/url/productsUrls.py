from django.contrib import admin
from django.urls import path
from base.view import productsViews as views

urlpatterns = [
    path('', views.getProducts, name = "getProducts"),
    path('<int:id>', views.getProduct, name = "getProduct"),
]