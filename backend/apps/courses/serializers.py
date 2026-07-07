from rest_framework import serializers

from .models import Course


class CourseSerializer(serializers.ModelSerializer):

    program_name = serializers.CharField(
        source="program.name",
        read_only=True,
    )

    class Meta:
        model = Course

        fields = (
            "id",
            "program",
            "program_name",
            "code",
            "name",
            "slug",
            "short_description",
            "description",
            "image",
            "order",
            "estimated_hours",
            "level",
            "is_free",
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