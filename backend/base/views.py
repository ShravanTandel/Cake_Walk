from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import Productdata

# Create your views here.

@api_view(['GET'])
def getResponse(request):
    return Response("Hello")

@api_view(['GET'])
def getProducts(request):
    return Response(Productdata.Products)

@api_view(['GET'])
def getProduct(request, id):
    product = None
    for i in Productdata.Products:
        if i["id"] == id:
            product = i
            break
    return Response(product)
