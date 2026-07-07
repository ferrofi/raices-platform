from django.contrib import admin

from .models import Program


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):

    list_display = (
        "code",
        "name",
        "institution",
        "program_type",
        "level",
        "is_published",
        "is_active",
        "created_at",
    )

    list_filter = (
        "institution",
        "program_type",
        "level",
        "is_published",
        "is_active",
    )

    search_fields = (
        "code",
        "name",
        "description",
        "institution__name",
    )

    ordering = (
        "name",
    )

    prepopulated_fields = {
        "slug": (
            "name",
        )
    }