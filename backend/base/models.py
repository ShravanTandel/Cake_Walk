from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=300,null=False, blank=False)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=300, null=False, blank=False)
    description = models.TextField(null=False, blank = False)
    offer = models.IntegerField(null=True, blank = True)
    available = models.BooleanField(null=False, blank=False)
    image = models.ImageField(null=False, blank = False)
    rating = models.DecimalField(max_digits=5, decimal_places=2, default=5)
    createdOn = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Pricing(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    size = models.DecimalField(max_digits=5,decimal_places=1, null=False, blank = False)
    price = models.IntegerField(null=False, blank = False)

    def __str__(self) -> str:
        return str(self.price)

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=5)
    comment = models.TextField(null=True, blank = True)
    createdOn = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    totalprice = models.IntegerField(null=False, blank=False)
    address = models.TextField(null=False, blank=False)
    phone = models.CharField(max_length=13, null=False, blank=False)
    deliveryStatus = models.TextField(null=True, blank=True)
    createdOn = models.DateTimeField(auto_now_add=True)
    deliveriedOn = models.DateTimeField(auto_now_add=False, null=True, blank=False)

    def __str__(self) -> str:
        return str(self.createdOn)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    price = models.IntegerField(null=False, blank=False)
    quantity = models.IntegerField(null=False, blank=False)
    size = models.IntegerField(null=False, blank=False)
    product = models.CharField(max_length=300,null=False, blank=False)

    def __str__(self):
        return self.product




