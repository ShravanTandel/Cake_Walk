from django.shortcuts import render
from django.http import JsonResponse, response
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from base.models import Pricing, Product, Order, OrderItem
from django.contrib.auth.models import User

from base.serializers import ProductSerializer, PricingSerializer, UserProfileSerializer, UserProfileSerializerWithToken, OrderSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def saveOrder(request):
    user = request.user
    data = request.data
    orderItems = data['orderItems']

    order = Order.objects.create(
        user = user,
        totalprice = data['totalprice'],
        phone = data['phone'],
        address = data['address'],
        deliveryStatus = "Yet to confirm",
    )

    order.save()

    for i in orderItems:
        orderItem = OrderItem.objects.create(
            order = order,
            price = i['price'],
            quantity = i['qty'],
            size = i['size'],
            product = i['name']
        )

        orderItem.save()

    serializer = OrderSerializer(order, many = False)
    return Response(serializer.data)

