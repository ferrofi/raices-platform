from rest_framework import serializers

from .models import Program


class ProgramSerializer(serializers.ModelSerializer):
    """
    Serializer principal de Programas Académicos.
    """

    institution_name = serializers.CharField(
        source="institution.name",
        read_only=True,
    )

    class Meta:
        model = Program

        fields = (
            "id",
            "institution",
            "institution_name",
            "code",
            "name",
            "slug",
            "short_description",
            "description",
            "image",
            "icon",
            "color",
            "program_type",
            "level",
            "duration_value",
            "duration_unit",
            "academic_hours",
            "certificate_enabled",
            "is_published",
            "is_active",
            "created_at",
            "updated_at",
        )

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )