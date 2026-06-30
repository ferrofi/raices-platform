import uuid

from django.db import models


class BaseModel(models.Model):
    """
    Modelo base para toda la plataforma RAÍCES.
    Todos los modelos heredarán de esta clase.
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Fecha de creación",
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Fecha de actualización",
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name="Activo",
    )

    is_deleted = models.BooleanField(
        default=False,
        verbose_name="Eliminado",
    )

    class Meta:
        abstract = True
        ordering = ["-created_at"]