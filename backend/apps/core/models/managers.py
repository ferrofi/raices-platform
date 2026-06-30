from django.db import models


class ActiveManager(models.Manager):
    """
    Devuelve únicamente registros activos.
    """

    def get_queryset(self):
        return super().get_queryset().filter(
            is_active=True,
            is_deleted=False
        )


class AllObjectsManager(models.Manager):
    """
    Devuelve todos los registros.
    """

    def get_queryset(self):
        return super().get_queryset()