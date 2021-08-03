from django.contrib import admin
from django.urls import path
from base.view import productsViews as views

urlpatterns = [
    path('', views.getProducts, name = "getProducts"),
    path('<int:id>', views.getProduct, name = "getProduct"),
    path('deleteProduct/<str:pk>/', views.deleteProduct, name = "deleteproduct"),
    path('createProduct/', views.createProduct, name = "createproduct"),
    path('getCategory/', views.getCategory, name = "getcategory"),
]