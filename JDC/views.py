from django.shortcuts import render,redirect, get_object_or_404
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.contrib.auth.views import redirect_to_login
from django.contrib import messages
from django.http import Http404
from .forms import ProfileForm,EmailForm
from django.contrib.auth.models import User, auth
from .models import Treinos, Alimentacao,Anamnése,ChatGroup, Video
from django.contrib.auth.decorators import login_required
from .forms import ChatmessageCreateform
from django.core.exceptions import ObjectDoesNotExist


# Create your views here.
def index(request):
    return render(request, 'index.html')

    
def about(request,):
    return render(request, 'about.html')


def chef(request):
    return render(request, 'chef.html')

def loged(request):
    return render(request, 'loged.html')

def treino(request):
    return render(request, 'exercises/user_exercises.html')


def calorias(request):
    datas = Anamnése.objects.filter(user=request.user)
    return render(request, 'calorias.html', {'datas':datas})

def converter(request):
    return render(request, 'converter.html')
    

def home(request):
    return render(request, 'home.html')


def alimentos(request):
    return render(request, 'alimentos.html')


def video_list(request):
    videos = Video.objects.all()
    return render(request, 'video_list.html', {'videos': videos})





def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            # log user in
            auth.login(request, user)
            return redirect('loged')
        else:
            messages.info(request, 'Credênciais inválidas')
            return redirect('login')
        
    return render(request, 'login.html')



from django.shortcuts import render
from .models import Treinos, Alimentacao,Anamnése
from django.contrib.auth.decorators import login_required

@login_required
def user_books(request):
    plans = Treinos.objects.filter(user=request.user)
    return render(request, 'usuarios/plano.html', {'plans': plans})


@login_required
def user_diet(request):
    foods = Alimentacao.objects.filter(user=request.user)
    datas = Anamnése.objects.filter(user=request.user)
    return render(request, 'nutricao.html', {'foods': foods, 'datas':datas})




"""
Profile views
"""

def profile_view(request, username=None):
    if username:
        profile = get_object_or_404(User, username=username).profile
    else:
        try:
            profile = request.user.profile
        except:
            return redirect_to_login(request.get_full_path())
    return render(request, 'a_users/profile.html', {'profile':profile})


@login_required
def profile_edit_view(request):
    form = ProfileForm(instance=request.user.profile)  
    
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=request.user.profile)
        if form.is_valid():
            form.save()
            return redirect('profile')
        
    if request.path == reverse('profile-onboarding'):
        onboarding = True
    else:
        onboarding = False
      
    return render(request, 'a_users/profile_edit.html', { 'form':form, 'onboarding':onboarding })


@login_required
def profile_settings_view(request):
    return render(request, 'a_users/profile_settings.html')







"""
Chat views
"""
@login_required
def chat_view(request, chatroom_name='public-chat'):
    chat_group = get_object_or_404(ChatGroup, group_name=chatroom_name)
    chat_messages = chat_group.chat_messages.all()[:30]
    form = ChatmessageCreateform()

    other_user = None
    if chat_group.is_private:
        if request.user not in chat_group.members.all():
            raise Http404()
        for member in chat_group.members.all():
            if member != request.user:
                other_user = member
                break
 

    if request.htmx:
        form = ChatmessageCreateform(request.POST)
        if form.is_valid:
            message = form.save(commit=False)
            message.author = request.user
            message.group = chat_group
            message.save()
            context = {
                'message' : message,
                'user' : request.user
            }
            return render(request, 'a_rtchat/partials/chat_message_p.html', context)
     
    context = {
        'chat_messages': chat_messages,
        'form' : form,
        'other_user' : other_user,
        'chatroom_name' : chatroom_name, 
    }

    return render(request,'a_rtchat/chat.html', context)

@login_required


def get_or_create_chatroom(request, username):
    if request.user.username == username:
        return redirect('home')  # Prevent chatting with oneself

    other_user = get_object_or_404(User, username=username)

    # Check for an existing private chatroom
    chatroom = ChatGroup.objects.filter(is_private=True, members=request.user).filter(members=other_user).first()
    
    if not chatroom:
        # Create a new chatroom if none exists
        chatroom = ChatGroup.objects.create(
            group_name=f"chat_{request.user.username}_{username}",
            is_private=True
        )
        chatroom.members.add(request.user, other_user)

    return redirect('chatroom', chatroom.group_name)

#USER´S LIST
def user_list(request):
    users = User.objects.exclude(id=request.user.id)  # Exclude the current user
    return render(request, 'list.html', {'users': users})

def video_list(request):
    videos = Video.objects.all()
    return render(request, 'video.html', {'videos': videos})