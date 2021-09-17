from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from .serializers import BrandSerializer, BicycleSerializer
from rest_framework import viewsets, generics
from .models import Brand, Bicycle

class BrandView(viewsets.ModelViewSet):
    serializer_class = BrandSerializer   
    queryset = Brand.objects.all()

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get("data", {}), list):
            kwargs["many"] = True

        return super(BrandView, self).get_serializer(*args, **kwargs)

class BicycleView(viewsets.ModelViewSet):
    serializer_class = BicycleSerializer
    queryset = Bicycle.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['brand_id']
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get("data", {}), list):
            kwargs["many"] = True

        return super(BicycleView, self).get_serializer(*args, **kwargs)
