from django.db import models

# Create your models here.
class MyData(models.Model):
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    sqft_living = models.IntegerField()
    sqft_lot = models.IntegerField()
    condition = models.IntegerField()
    floors = models.IntegerField()
    grade = models.IntegerField()
    yr_built = models.IntegerField()
    view = models.IntegerField()

    objects = models.Manager()

    class Meta:
        app_label = 'myapp'