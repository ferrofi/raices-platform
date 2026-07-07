from rest_framework import serializers

from .models import Lesson


class LessonSerializer(serializers.ModelSerializer):

    module_name = serializers.CharField(
        source="module.name",
        read_only=True,
    )

    class Meta:
        model = Lesson

        fields = (
            "id",
            "module",
            "module_name",
            "code",
            "name",
            "slug",
            "short_description",
            "description",
            "lesson_type",
            "order",
            "estimated_minutes",
            "is_preview",
            "is_required",
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