# Generated by Django 5.0.6 on 2024-12-26 17:29

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0002_remove_appointment_time_alter_appointment_date_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Appointment',
            new_name='Macações',
        ),
    ]
