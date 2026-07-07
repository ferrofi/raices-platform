from django.contrib import admin

from .models import Resource


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):

    list_display = (
        "code",
        "title",
        "lesson",
        "resource_type",
        "order",
        "is_downloadable",
        "is_public",
        "is_active",
    )

    list_filter = (
        "resource_type",
        "lesson",
        "is_downloadable",
        "is_public",
        "is_active",
    )

    search_fields = (
        "code",
        "title",
    )

    ordering = (
        "lesson",
        "order",
    )