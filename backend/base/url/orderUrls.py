from django.contrib import admin
from django.urls import path
from base.view import orderViews as views

urlpatterns = [
    path("add/", views.saveOrder, name = "saveorder"),
    path("userorders/", views.getUserOrders, name = "getUserOrders"),
    path("<str:pk>/", views.getOrderById, name = "getorderbyid"),
]