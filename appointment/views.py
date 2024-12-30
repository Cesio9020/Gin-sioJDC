
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Macações
from datetime import datetime

@login_required
def create_appointment(request):
    if Macações.objects.filter(user=request.user).exists():
        return redirect('appointment_list')
    
    if Macações.objects.count() >= 16:
        #messages.error(request, "Appointment limit reached. Try again later.")
        return redirect('appointment_list')
    
    if request.method == 'POST':
        date = request.POST.get('date')
        Macações.objects.create(user=request.user, date=date)
        #messages.success(request, "Appointment created successfully!")
        return redirect('appointment_list')
    
    return render(request, 'appointment/create_appointment.html')

@login_required
def cancel_appointment(request):
    try:
        appointment = Macações.objects.get(user=request.user)
        appointment.delete()
       
    except Macações.DoesNotExist:
        1+1==2
    return redirect('appointment_list')

@login_required
def appointment_list(request):
    appointments = Macações.objects.all()
    return render(request, 'appointment/appointment_list.html', {'appointments': appointments})
