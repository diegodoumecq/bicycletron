from rest_framework import serializers
from django.db.models import Prefetch
from .models import Brand, Bicycle

class BrandSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        instance = Brand(**validated_data)
        instance.save()
        return instance

    class Meta:
        model = Brand
        fields = ('id' ,'name', 'icon')

class BicycleSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        instance = Bicycle(**validated_data)
        instance.save()
        return instance
    
    class Meta:
        model = Bicycle
        fields = ('sku', 'brand', 'image', 'type', 'model', 'fab_year', 'price')
