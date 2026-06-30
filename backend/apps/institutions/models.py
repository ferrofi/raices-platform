from django.db import models
from django.utils.text import slugify

from apps.core.models import BaseModel


class Institution(BaseModel):
    """
    Representa una Iglesia, Seminario,
    Instituto Bíblico o Universidad.
    """

    TYPES = (
        ("church", "Iglesia"),
        ("seminary", "Seminario"),
        ("institute", "Instituto Bíblico"),
        ("university", "Universidad"),
    )

    type = models.CharField(
        max_length=20,
        choices=TYPES,
        default="church",
    )

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
        blank=True,
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

    is_active = models.BooleanField(
        default=True,
    )

    class Meta:
        verbose_name = "Institución"
        verbose_name_plural = "Instituciones"
        ordering = ["name"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name