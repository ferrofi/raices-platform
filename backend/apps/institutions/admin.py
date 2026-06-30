from django.contrib import admin

from .models import Institution


@admin.register(Institution)
class InstitutionAdmin(admin.ModelAdmin):
    """
    Administración de Instituciones.
    """

    list_display = (
        "name",
        "type",
        "city",
        "state",
        "country",
        "is_active",
        "created_at",
    )

    list_filter = (
        "type",
        "country",
        "state",
        "is_active",
        "created_at",
    )

    search_fields = (
        "name",
        "short_name",
        "city",
        "state",
        "country",
        "email",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    ordering = (
        "name",
    )

    fieldsets = (
        (
            "Información General",
            {
                "fields": (
                    "type",
                    "name",
                    "short_name",
                    "slug",
                    "logo",
                    "is_active",
                )
            },
        ),
        (
            "Contacto",
            {
                "fields": (
                    "email",
                    "phone",
                    "website",
                )
            },
        ),
        (
            "Ubicación",
            {
                "fields": (
                    "address",
                    "city",
                    "state",
                    "country",
                )
            },
        ),
        (
            "Auditoría",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )