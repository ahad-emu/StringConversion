from django.urls import path
from StringConvertAPP import views

urlpatterns = [
    path('', views.index, name='index'),
    path('boldText', views.bold, name='bold'),
    path('italic', views.italic, name='italic'),
    path('underlineText', views.underline, name='underline'),
    path('strikeThrough', views.strike, name='strike'),
    path('smallText', views.small, name='small'),
    path('wideText', views.wide, name='wide'),
]
