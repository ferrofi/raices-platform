from django.db import models

from apps.core.models import BaseModel


class Institution(BaseModel):
    """
    Iglesia, Seminario, Instituto Bíblico o Universidad.
    """

    name = models.CharField(
        max_length=255,
        unique=True,
    )

    short_name = models.CharField(
        max_length=80,
        blank=True,
    )

    slug = models.SlugField(
        unique=True,
    )

    email = models.EmailField(
        blank=True,
    )

    phone = models.CharField(
        max_length=30,
        blank=True,
    )

    website = models.URLField(
        blank=True,
    )

    address = models.TextField(
        blank=True,
    )

    city = models.CharField(
        max_length=120,
        blank=True,
    )

    state = models.CharField(
        max_length=120,
        blank=True,
    )

    country = models.CharField(
        max_length=120,
        default="México",
    )

    logo = models.ImageField(
        upload_to="institutions/",
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "Institución"
        verbose_name_plural = "Instituciones"
        ordering = ["name"]

    def __str__(self):
        return self.name