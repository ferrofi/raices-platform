from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    model = User

    list_display = (
        "email",
        "username",
        "first_name",
        "last_name",
        "is_staff",
        "is_active",
    )

    list_filter = (
        "is_staff",
        "is_active",
    )

    ordering = (
        "email",
    )

    fieldsets = UserAdmin.fieldsets + (
        (
            "Información RAÍCES",
            {
                "fields": (
                    "phone",
                    "photo",
                    "firebase_uid",
                )
            },
        ),
    )