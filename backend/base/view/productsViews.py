from base.serializers import CategorySerializer
from base.models import Category
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from base.models import Pricing, Product
from django.contrib.auth.models import User

from base.serializers import ProductSerializer, PricingSerializer, createProductSerializer


from django.contrib.auth.hashers import make_password

from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
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

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(id = pk)
    product.delete()
    return Response("Product Deleted")

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    serializer = createProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getCategory(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many = True)
    return Response(serializer.data)

    