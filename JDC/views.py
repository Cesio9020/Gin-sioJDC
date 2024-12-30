from django.shortcuts import render,redirect, get_object_or_404
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from allauth.account.utils import send_email_confirmation
from django.contrib.auth.views import redirect_to_login
from django.contrib import messages
from django.http import Http404
from .forms import ProfileForm,EmailForm
from django.contrib.auth.models import User, auth
from .models import Treinos, Alimentacao,Anamnése,ChatGroup
from django.contrib.auth.decorators import login_required
from .forms import ChatmessageCreateform


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


def converter(request):
    return render(request, 'converter.html')

def home(request):
    return render(request, 'home.html')


def nutricao(request):
    return render(request, 'profile.html')








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


@login_required
def profile_emailchange(request):
    
    if request.htmx:
        form = EmailForm(instance=request.user)
        return render(request, 'partials/email_form.html', {'form':form})
    
    if request.method == 'POST':
        form = EmailForm(request.POST, instance=request.user)

        if form.is_valid():
            
            # Check if the email already exists
            email = form.cleaned_data['email']
            if User.objects.filter(email=email).exclude(id=request.user.id).exists():
                messages.warning(request, f'{email} is already in use.')
                return redirect('profile-settings')
            
            form.save() 
            
            # Then Signal updates emailaddress and set verified to False
            
            # Then send confirmation email 
            send_email_confirmation(request, request.user)
            
            return redirect('profile-settings')
        else:
            messages.warning(request, 'Form not valid')
            return redirect('profile-settings')
        
    return redirect('home')


@login_required
def profile_emailverify(request):
    send_email_confirmation(request, request.user)
    return redirect('profile-settings')


@login_required
def profile_delete_view(request):
    user = request.user
    if request.method == "POST":
        logout(request)
        user.delete()
        messages.success(request, 'Account deleted, what a pity')
        return redirect('home')
    
    return render(request, 'a_users/profile_delete.html')




"""
Chat views
"""
@login_required
def chat_view(request, chatroom_name='public-chat'):
    chat_group = get_object_or_404(ChatGroup, group_name=chatroom_name)
    chat_messages = chat_group.chat_messages.all()[:30]
    form = ChatmessageCreateform()

    
 

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
     
   

    return render(request,'a_rtchat/chat.html',{'chat_messages': chat_messages, 'form':form})

