from django.db import models

from apps.core.models import BaseModel


class Resource(BaseModel):
    """
    Recurso perteneciente a una Lección.
    """

    class ResourceType(models.TextChoices):
        VIDEO = "VIDEO", "Video"
        PDF = "PDF", "PDF"
        AUDIO = "AUDIO", "Audio"
        IMAGE = "IMAGE", "Imagen"
        FILE = "FILE", "Archivo"
        LINK = "LINK", "Enlace"
        PRESENTATION = "PRESENTATION", "Presentación"

    lesson = models.ForeignKey(
        "lessons.Lesson",
        on_delete=models.CASCADE,
        related_name="resources",
    )

    code = models.CharField(
        max_length=30,
        unique=True,
    )

    title = models.CharField(
        max_length=200,
    )

    description = models.TextField(
        blank=True,
    )

    resource_type = models.CharField(
        max_length=20,
        choices=ResourceType.choices,
        default=ResourceType.VIDEO,
    )

    url = models.URLField(
        blank=True,
    )

    file = models.FileField(
        upload_to="resources/files/",
        blank=True,
        null=True,
    )

    thumbnail = models.ImageField(
        upload_to="resources/thumbnails/",
        blank=True,
        null=True,
    )

    duration_minutes = models.PositiveIntegerField(
        default=0,
    )

    order = models.PositiveIntegerField(
        default=1,
    )

    is_downloadable = models.BooleanField(
        default=False,
    )

    is_public = models.BooleanField(
        default=False,
    )

    class Meta:
        verbose_name = "Recurso"
        verbose_name_plural = "Recursos"
        ordering = [
            "lesson",
            "order",
        ]

    def __str__(self):
        return self.title