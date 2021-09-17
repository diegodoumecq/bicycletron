from django.db import models
from uuid import uuid4

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    icon = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Bicycle(models.Model):
    sku = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    image = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    fab_year = models.IntegerField()
    price = models.DecimalField(max_digits=20, decimal_places=2)
    def __str__(self):
        return self.model
