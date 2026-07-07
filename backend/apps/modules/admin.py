from django.contrib import admin

from .models import Module


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):

    list_display = (
        "code",
        "name",
        "course",
        "order",
        "is_published",
        "is_active",
    )

    list_filter = (
        "course",
        "is_published",
        "is_active",
    )

    search_fields = (
        "code",
        "name",
    )

    ordering = (
        "course",
        "order",
    )

    prepopulated_fields = {
        "slug": (
            "name",
        )
    }