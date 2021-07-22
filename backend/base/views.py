from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import Productdata
from .models import Pricing, Product
from .serializers import ProductSerializer, PricingSerializer, UserProfileSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Create your views here.

@api_view(['GET'])
def getResponse(request):
    return Response("Hello")

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserProfileSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getPricing(request, product):
    pricing = Pricing.objects.filter(product=product)
    serializer = PricingSerializer(pricing, many=True)
    return Response(serializer.data)
