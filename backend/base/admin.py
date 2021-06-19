from django.contrib import admin
from .models import Category, Product, Pricing, Review, Order, OrderItem

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Pricing)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)