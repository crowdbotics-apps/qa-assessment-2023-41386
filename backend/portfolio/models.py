from django.conf import settings
from django.db import models
class MetalType(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,blank=True,)
    price = models.FloatField(blank=True,)
    date = models.DateField(auto_now=True,blank=True,)
class Coin(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    metal_type = models.ForeignKey("portfolio.MetalType",on_delete=models.CASCADE,related_name="coin_metal_type",)
    company = models.ForeignKey("company.Company",on_delete=models.CASCADE,related_name="coin_company",)
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="coin_user",)
    price = models.FloatField()
    bid_premium_low = models.FloatField()
    bid_premium_high = models.BigIntegerField()
class OfferList(models.Model):
    'Generated Model'
    quantity = models.BigIntegerField()
    offer = models.ForeignKey("portfolio.Offer",null=True,blank=True,on_delete=models.CASCADE,related_name="offerlist_offer",)
    coin = models.ForeignKey("portfolio.Coin",null=True,blank=True,on_delete=models.CASCADE,related_name="offerlist_coin",)
    user = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="offerlist_user",)
class Offer(models.Model):
    'Generated Model'
    status = models.CharField(max_length=256,)
    created_date = models.DateTimeField(auto_now=True,)
    offerer = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="offer_offerer",)

# Create your models here.
