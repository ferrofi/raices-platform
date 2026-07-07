from django.db.models import QuerySet

from .models import Program


def get_programs() -> QuerySet[Program]:
    """
    Obtiene todos los programas activos.
    """
    return (
        Program.objects
        .select_related("institution")
        .filter(is_active=True)
        .order_by("name")
    )


def get_program_by_id(program_id):
    """
    Obtiene un programa por su UUID.
    """
    return (
        Program.objects
        .select_related("institution")
        .get(id=program_id)
    )