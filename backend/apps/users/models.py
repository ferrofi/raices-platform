import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.core.models import BaseModel
from .managers import UserManager


class User(BaseModel, AbstractUser):
    """
    Usuario principal de la plataforma RAÍCES.
    La autenticación se realiza mediante correo electrónico.
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    institution = models.ForeignKey(
        "institutions.Institution",
        on_delete=models.CASCADE,
        related_name="users",
        null=True,
        blank=True,
    )

    email = models.EmailField(
        unique=True,
    )

    phone = models.CharField(
        max_length=20,
        blank=True,
    )

    photo = models.ImageField(
        upload_to="users/",
        blank=True,
        null=True,
    )

    firebase_uid = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )

    # -------------------------------------------------------------------------
    # Configuración de autenticación
    # -------------------------------------------------------------------------

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
        "username",
    ]

    objects = UserManager()

    # -------------------------------------------------------------------------
    # Meta
    # -------------------------------------------------------------------------

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        ordering = ["email"]

    # -------------------------------------------------------------------------
    # Representación
    # -------------------------------------------------------------------------

    def __str__(self):
        return self.email


class Role(BaseModel):
    """
    Catálogo de roles funcionales de la plataforma.
    """

    code = models.CharField(
        max_length=50,
        unique=True,
    )

    name = models.CharField(
        max_length=100,
    )

    description = models.TextField(
        blank=True,
    )

    class Meta:
        verbose_name = "Rol"
        verbose_name_plural = "Roles"
        ordering = ["name"]

    def __str__(self):
        return self.name


class UserRole(BaseModel):
    """
    Relación muchos a muchos entre usuarios y roles.
    Un usuario puede tener múltiples roles dentro de la plataforma.
    """

    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="user_roles",
    )

    role = models.ForeignKey(
        "users.Role",
        on_delete=models.CASCADE,
        related_name="role_users",
    )

    class Meta:
        verbose_name = "Rol de Usuario"
        verbose_name_plural = "Roles de Usuarios"
        unique_together = (
            "user",
            "role",
        )
        ordering = ["user", "role"]

    def __str__(self):
        return f"{self.user.email} - {self.role.name}"