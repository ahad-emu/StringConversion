from django.urls import path
from StringConvertAPP import views

urlpatterns = [
    path('', views.index, name='index'),
]
