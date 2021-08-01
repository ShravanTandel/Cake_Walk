from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from base.models import Pricing, Product
from django.contrib.auth.models import User

from base.serializers import ProductSerializer, PricingSerializer, UserProfileSerializer, UserProfileSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserProfileSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def userRegister(request):
    if(request.method == 'POST'):
        data = request.data
        try:
            user = User.objects.create(
                first_name = data['username'],
                username = data['email'],
                email = data['email'],
                password = make_password(data['password']),
            )
            serializer = UserProfileSerializerWithToken(user, many=False)
            return Response(serializer.data)
        except:
            message = {"detail":"User already exists please enter valid user"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserProfileSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserProfileSerializer(users, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([IsAdminUser])
# def getUserById(request, pk):
#     user = User.objects.get(id=pk)
#     serializer = UserProfileSerializer(user, many=False)
#     return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserProfileSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['username']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])
    
    user.save()
    return Response(serializer.data)