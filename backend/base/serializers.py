from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Pricing, Order, OrderItem
from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class PricingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pricing
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = [ 'id', 'username', 'email', 'name', 'isAdmin' ]
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name
    def get_isAdmin(self, obj):
        isAdmin = obj.is_staff
        return isAdmin

class UserProfileSerializerWithToken(UserProfileSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = [ 'id', 'username', 'email', 'name', 'isAdmin', 'token']
    
    def get_token(sel, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only = True)
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemsSerializer(items, many = True)
        return serializer.data
    
    def get_user(self, obj):
        user = obj.user
        serializer = UserProfileSerializer(user, many=False)
        return serializer.data