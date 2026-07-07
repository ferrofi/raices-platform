from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Role, User, UserRole


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = (
        "code",
        "name",
        "is_active",
        "created_at",
    )

    search_fields = (
        "code",
        "name",
    )

    ordering = (
        "name",
    )


@admin.register(UserRole)
class UserRoleAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "role",
        "created_at",
    )

    list_filter = (
        "role",
    )

    search_fields = (
        "user__email",
        "role__name",
    )


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    model = User

    list_display = (
        "email",
        "username",
        "first_name",
        "last_name",
        "institution",
        "is_staff",
        "is_active",
    )

    list_filter = (
        "institution",
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
                    "institution",
                    "phone",
                    "photo",
                    "firebase_uid",
                )
            },
        ),
    )