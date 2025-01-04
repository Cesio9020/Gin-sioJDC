from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login') ,
    path('loged', views.loged, name='loged') ,
    path('about', views.about, name='about'),
    path('chef', views.chef, name='chef'),
    path('converter', views.converter, name='converter'),
    path('calorias', views.calorias, name='calorias'),
    path('nutricao', views.user_diet, name='nutricao') ,
    path('alimentos', views.alimentos, name='alimentos') ,
    path('treino', views.treino, name='treino'),
    path('user_books', views.user_books, name='user_books'),
    path('videos', views.video_list, name='videos'),

    path('list', views.user_list, name='list'),


    path('home', views.chat_view, name='home'),
    path('chat/<username>', views.get_or_create_chatroom, name="start-chat"),
    path('chat/room/<chatroom_name>', views.chat_view, name="chatroom"),

    path('profile', views.profile_view, name="profile"),
    path('@<username>/', views.profile_view, name="profile"),
    path('edit/', views.profile_edit_view, name="profile-edit"),
    path('onboarding/', views.profile_edit_view, name="profile-onboarding"),
    path('settings/', views.profile_settings_view, name="profile-settings"),
    #path('emailchange/', views.profile_emailchange, name="profile-emailchange"),
    #path('emailverify/', views.profile_emailverify, name="profile-emailverify"),
    #path('delete/', views.profile_delete_view, name="profile-delete"),

]