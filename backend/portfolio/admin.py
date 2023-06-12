from django.contrib import admin
from .models import Coin,MetalType,Offer,OfferList
admin.site.register(MetalType)
admin.site.register(Coin)
admin.site.register(OfferList)
admin.site.register(Offer)

# Register your models here.
