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
            productname = i['name'],
            image = i['image'].split("/")[2],
        )

        orderItem.save()

    serializer = OrderSerializer(order, many = False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):

    user = request.user

    try:
        order = Order.objects.get(id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'detail': 'Not authorized to view this order'},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': 'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserOrders(request):
    user = request.user
    orders = user.order_set.all()

    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

