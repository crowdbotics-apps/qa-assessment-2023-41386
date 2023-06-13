
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CoinViewSet,MetalTypeViewSet,OfferViewSet,OfferListViewSet
router = DefaultRouter()
router.register('metaltype', MetalTypeViewSet )
router.register('coin', CoinViewSet )
router.register('offerlist', OfferListViewSet )
router.register('offer', OfferViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
