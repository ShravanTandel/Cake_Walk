# Generated by Django 3.2 on 2021-08-01 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_pricing_size'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='isDelivered',
        ),
        migrations.AddField(
            model_name='order',
            name='deliveryStatus',
            field=models.TextField(blank=True, null=True),
        ),
    ]
