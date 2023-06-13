from rest_framework import authentication
from portfolio.models import Coin,ContactUs,MetalType,Offer,OfferList
from .serializers import CoinSerializer,ContactUsSerializer,MetalTypeSerializer,OfferSerializer,OfferListSerializer
from rest_framework import viewsets

class MetalTypeViewSet(viewsets.ModelViewSet):
    serializer_class = MetalTypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MetalType.objects.all()

class CoinViewSet(viewsets.ModelViewSet):
    serializer_class = CoinSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Coin.objects.all()

class OfferListViewSet(viewsets.ModelViewSet):
    serializer_class = OfferListSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = OfferList.objects.all()

class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Offer.objects.all()

class ContactUsViewSet(viewsets.ModelViewSet):
    serializer_class = ContactUsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ContactUs.objects.all()