from django.contrib import admin
from django.urls import path,include

from core.views import index, score,signup


urlpatterns = [
    path('', include('core.urls')),
    path('score/',score, name='score'),
    path("admin/", admin.site.urls),
    # path('signup/', signup, name='signup'),

]
