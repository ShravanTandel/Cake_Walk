from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Pricing

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