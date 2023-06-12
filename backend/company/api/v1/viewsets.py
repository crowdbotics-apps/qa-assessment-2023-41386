from rest_framework import authentication
from company.models import Company
from .serializers import CompanySerializer
from rest_framework import viewsets

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Company.objects.all()