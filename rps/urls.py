from django.contrib import admin
from django.urls import path

from core.views import index, score


urlpatterns = [
    path('', index, name="index"),
    path('score/',score, name='score'),
    path("admin/", admin.site.urls),
]
