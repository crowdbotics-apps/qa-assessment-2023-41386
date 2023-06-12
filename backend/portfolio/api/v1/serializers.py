from rest_framework import serializers
from portfolio.models import Coin,MetalType,Offer,OfferList

class MetalTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetalType
        fields = "__all__"

class CoinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coin
        fields = "__all__"

class OfferListSerializer(serializers.ModelSerializer):

    class Meta:
        model = OfferList
        fields = "__all__"

class OfferSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offer
        fields = "__all__"