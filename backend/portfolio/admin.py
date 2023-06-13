from django.contrib import admin
from .models import Coin,ContactUs,MetalType,Offer,OfferList
admin.site.register(MetalType)
admin.site.register(Coin)
admin.site.register(OfferList)
admin.site.register(Offer)
admin.site.register(ContactUs)

# Register your models here.
