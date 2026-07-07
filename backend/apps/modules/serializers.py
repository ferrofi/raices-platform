from rest_framework import serializers

from .models import Module


class ModuleSerializer(serializers.ModelSerializer):

    course_name = serializers.CharField(
        source="course.name",
        read_only=True,
    )

    class Meta:
        model = Module

        fields = (
            "id",
            "course",
            "course_name",
            "code",
            "name",
            "slug",
            "short_description",
            "description",
            "image",
            "order",
            "estimated_hours",
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