from rest_framework import serializers

from .models import Institution


class InstitutionSerializer(serializers.ModelSerializer):
    """
    Serializer de Instituciones.
    """

    class Meta:
        model = Institution

        fields = (
            "id",
            "type",
            "name",
            "short_name",
            "slug",
            "email",
            "phone",
            "website",
            "address",
            "city",
            "state",
            "country",
            "logo",
            "is_active",
            "created_at",
            "updated_at",
        )

        read_only_fields = (
            "id",
            "slug",
            "created_at",
            "updated_at",
        )