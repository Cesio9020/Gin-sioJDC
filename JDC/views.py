from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User, auth



# Create your views here.
def index(request):
    return render(request, 'index.html')

    
def about(request):
    return render(request, 'about.html')

def chef(request):
    return render(request, 'chef.html')

def nutri(request):
    return render(request, 'nutri.html')

def alimentos(request):
    return render(request, 'alimentos.html')


def converter(request):
    return render(request, 'converter.html')

def open(request):
    return render(request, 'open.html')

def cards(request):
    return render(request, 'cards.html')






def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            # log user in
            auth.login(request, user)
            return redirect('open')
        else:
            messages.info(request, 'Credênciais inválidas')
            return redirect('login')
        
    return render(request, 'login.html')



def signup(request):
        return render(request, 'signup.html')








