
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator

class Product(models.Model):
    name = models.CharField(max_length= 150,null= False,blank= False)
    price = models.DecimalField(max_digits=15,decimal_places=2,null=False,blank=False)
    image  = models.ImageField(upload_to='product/images',null= True,blank= True)
    category = models.CharField(max_length=50,null=True,blank=True)
    description = models.TextField(null=True,blank=True)

