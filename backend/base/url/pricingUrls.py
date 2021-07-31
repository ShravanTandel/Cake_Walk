from django.contrib import admin
from django.urls import path
from base.view import productsViews as views

urlpatterns = [
    path('<int:product>', views.getPricing, name = "getPricing"),
]