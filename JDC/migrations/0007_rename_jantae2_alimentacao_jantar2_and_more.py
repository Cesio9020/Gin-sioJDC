# Generated by Django 5.0.6 on 2024-12-27 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JDC', '0006_rename_jantae_alimentacao_almoço1_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='alimentacao',
            old_name='jantae2',
            new_name='jantar2',
        ),
        migrations.RenameField(
            model_name='alimentacao',
            old_name='jantae3',
            new_name='jantar3',
        ),
        migrations.RenameField(
            model_name='alimentacao',
            old_name='jantae4',
            new_name='jantar4',
        ),
        migrations.RenameField(
            model_name='alimentacao',
            old_name='jantae5',
            new_name='jantar5',
        ),
        migrations.RenameField(
            model_name='alimentacao',
            old_name='jantae6',
            new_name='jantar6',
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche1',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche2',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche3',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche4',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche5',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='alimentacao',
            name='lanche6',
            field=models.CharField(max_length=100, null=True),
        ),
    ]