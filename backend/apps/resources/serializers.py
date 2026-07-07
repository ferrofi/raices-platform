from rest_framework import serializers

from .models import Resource


class ResourceSerializer(serializers.ModelSerializer):

    lesson_name = serializers.CharField(
        source="lesson.name",
        read_only=True,
    )

    class Meta:
        model = Resource

        fields = (
            "id",
            "lesson",
            "lesson_name",
            "code",
            "title",
            "description",
            "resource_type",
            "url",
            "file",
            "thumbnail",
            "duration_minutes",
            "order",
            "is_downloadable",
            "is_public",
            "is_active",
            "created_at",
            "updated_at",
        )

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )