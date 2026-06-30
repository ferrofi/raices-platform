from django.contrib import admin

from .models import Institution


@admin.register(Institution)
class InstitutionAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "city",
        "country",
        "is_active",
    )

    search_fields = (
        "name",
        "city",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }