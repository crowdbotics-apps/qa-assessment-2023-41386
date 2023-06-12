from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    first_name = models.CharField(max_length=200,)
    last_name = models.CharField(max_length=200,)
    email = models.EmailField(max_length=254,)
    date_of_birth = models.DateField()
    address = models.TextField()
    city = models.CharField(max_length=200,)
    state = models.CharField(max_length=200,)
    zip_code = models.CharField(max_length=200,)
    country = models.CharField(max_length=200,)
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="profile_user",)
