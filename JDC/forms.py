from django.forms import ModelForm
from django import forms
from django.contrib.auth.models import User
from .models import Profile

class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = ['image', 'displayname', 'info' ]
        widgets = {
            'image': forms.FileInput(),
            'displayname' : forms.TextInput(attrs={'placeholder': 'Add display name'}),
            'info' : forms.Textarea(attrs={'rows':3, 'placeholder': 'Add information'})
        }
        
        
class EmailForm(ModelForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['email']




from django.forms import ModelForm
from django import forms
from .models import *

class ChatmessageCreateform(ModelForm):
    class Meta:
        model = GroupMessage
        fields = ['body']
        widgets = {
            'body' : forms.TextInput(attrs={'placeholder': 'Add message...', 'class': 'p-4 text-black', 'maxlenth' : '300', 'autofocus': True}),
        }