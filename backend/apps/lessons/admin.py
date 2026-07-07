from django.contrib import admin

from .models import Lesson


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):

    list_display = (
        "code",
        "name",
        "module",
        "lesson_type",
        "order",
        "is_published",
        "is_active",
    )

    list_filter = (
        "lesson_type",
        "module",
        "is_published",
        "is_active",
    )

    search_fields = (
        "code",
        "name",
    )

    ordering = (
        "module",
        "order",
    )

    prepopulated_fields = {
        "slug": (
            "name",
        )
    }