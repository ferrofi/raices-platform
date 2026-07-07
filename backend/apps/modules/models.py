from django.db import models

from apps.core.models import BaseModel


class Module(BaseModel):
    """
    Módulo perteneciente a un Curso.
    """

    course = models.ForeignKey(
        "courses.Course",
        on_delete=models.CASCADE,
        related_name="modules",
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

    image = models.ImageField(
        upload_to="modules/images/",
        blank=True,
        null=True,
    )

    order = models.PositiveIntegerField(
        default=1,
    )

    estimated_hours = models.PositiveIntegerField(
        default=0,
    )

    is_published = models.BooleanField(
        default=False,
    )

    class Meta:
        verbose_name = "Módulo"
        verbose_name_plural = "Módulos"
        ordering = [
            "course",
            "order",
            "name",
        ]

    def __str__(self):
        return self.name