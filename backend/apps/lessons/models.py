from django.db import models

from apps.core.models import BaseModel


class Lesson(BaseModel):
    """
    Lección perteneciente a un Módulo.
    """

    class LessonType(models.TextChoices):
        VIDEO = "VIDEO", "Video"
        READING = "READING", "Lectura"
        AUDIO = "AUDIO", "Audio"
        PDF = "PDF", "PDF"
        QUIZ = "QUIZ", "Evaluación"
        ASSIGNMENT = "ASSIGNMENT", "Actividad"

    module = models.ForeignKey(
        "modules.Module",
        on_delete=models.CASCADE,
        related_name="lessons",
    )

    code = models.CharField(
        max_length=30,
        unique=True,
    )

    name = models.CharField(
        max_length=200,
    )

    slug = models.SlugField(
        unique=True,
    )

    short_description = models.CharField(
        max_length=255,
        blank=True,
    )

    description = models.TextField(
        blank=True,
    )

    lesson_type = models.CharField(
        max_length=20,
        choices=LessonType.choices,
        default=LessonType.VIDEO,
    )

    order = models.PositiveIntegerField(
        default=1,
    )

    estimated_minutes = models.PositiveIntegerField(
        default=0,
    )

    is_preview = models.BooleanField(
        default=False,
    )

    is_required = models.BooleanField(
        default=True,
    )

    is_published = models.BooleanField(
        default=False,
    )

    class Meta:
        verbose_name = "Lección"
        verbose_name_plural = "Lecciones"
        ordering = [
            "module",
            "order",
            "name",
        ]

    def __str__(self):
        return self.name