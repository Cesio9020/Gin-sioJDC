from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login') ,
    path('loged', views.loged, name='loged') ,
    path('about', views.about, name='about'),
    path('chef', views.chef, name='chef'),
    path('converter', views.converter, name='converter'),
    path('nutricao', views.user_diet, name='nutricao') ,
    path('treino', views.treino, name='treino'),
    path('user_books', views.user_books, name='user_books'),


    path('home', views.chat_view, name='home'),


    path('profile', views.profile_view, name="profile"),
    path('edit/', views.profile_edit_view, name="profile-edit"),
    path('onboarding/', views.profile_edit_view, name="profile-onboarding"),
    path('settings/', views.profile_settings_view, name="profile-settings"),
    path('emailchange/', views.profile_emailchange, name="profile-emailchange"),
    path('emailverify/', views.profile_emailverify, name="profile-emailverify"),
    path('delete/', views.profile_delete_view, name="profile-delete"),

]