from django.db import models

from apps.core.models import BaseModel


class Program(BaseModel):
    """
    Programa académico de una institución.
    Un programa agrupa uno o varios cursos.
    """

    class ProgramType(models.TextChoices):
        DIPLOMADO = "DIPLOMADO", "Diplomado"
        CURSO = "CURSO", "Curso"
        LICENCIATURA = "LICENCIATURA", "Licenciatura"
        SEMINARIO = "SEMINARIO", "Seminario"
        TALLER = "TALLER", "Taller"
        DEVOCIONAL = "DEVOCIONAL", "Devocional"
        PLAN_LECTURA = "PLAN_LECTURA", "Plan de Lectura"

    class ProgramLevel(models.TextChoices):
        BASICO = "BASICO", "Básico"
        INTERMEDIO = "INTERMEDIO", "Intermedio"
        AVANZADO = "AVANZADO", "Avanzado"
        ESPECIALIZADO = "ESPECIALIZADO", "Especializado"

    class DurationUnit(models.TextChoices):
        DIAS = "DIAS", "Días"
        SEMANAS = "SEMANAS", "Semanas"
        MESES = "MESES", "Meses"
        ANIOS = "ANIOS", "Años"

    institution = models.ForeignKey(
        "institutions.Institution",
        on_delete=models.CASCADE,
        related_name="programs",
    )

    name = models.CharField(
        max_length=200,
    )

    slug = models.SlugField(
        unique=True,
    )

    code = models.CharField(
        max_length=30,
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
        upload_to="programs/images/",
        blank=True,
        null=True,
    )

    icon = models.CharField(
        max_length=100,
        blank=True,
    )

    color = models.CharField(
        max_length=20,
        default="#1E3A8A",
    )

    program_type = models.CharField(
        max_length=30,
        choices=ProgramType.choices,
        default=ProgramType.CURSO,
    )

    level = models.CharField(
        max_length=30,
        choices=ProgramLevel.choices,
        default=ProgramLevel.BASICO,
    )

    duration_value = models.PositiveIntegerField(
        default=1,
    )

    duration_unit = models.CharField(
        max_length=20,
        choices=DurationUnit.choices,
        default=DurationUnit.SEMANAS,
    )

    academic_hours = models.PositiveIntegerField(
        default=0,
    )

    certificate_enabled = models.BooleanField(
        default=True,
    )

    is_published = models.BooleanField(
        default=False,
    )

    class Meta:
        verbose_name = "Programa Académico"
        verbose_name_plural = "Programas Académicos"
        ordering = ["name"]

    def __str__(self):
        return self.name