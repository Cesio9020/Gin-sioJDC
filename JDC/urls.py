from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('chef', views.chef, name='chef'),
    path('converter', views.converter, name='converter'),
    path('nutri', views.nutri, name='nutri'),
    path('alimentos', views.alimentos, name='alimentos'),
    path('login', views.login, name='login') ,
    path('open', views.open, name='open') ,
    path('cards', views.cards, name='cards') ,
    path('signup', views.signup, name='signup'),
]