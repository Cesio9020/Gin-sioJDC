# Generated by Django 5.0.6 on 2024-12-26 17:21

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JDC', '0004_book_musculo001_book_musculo002_book_musculo003_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Book',
            new_name='Treinos',
        ),
        migrations.CreateModel(
            name='Alimentacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_week', models.CharField(choices=[('Domingo', 'Domingo')], max_length=10, null=True)),
                ('peqno_almoço', models.CharField(max_length=100, null=True)),
                ('almoço', models.CharField(max_length=100, null=True)),
                ('jantae', models.CharField(max_length=100, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diet', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
