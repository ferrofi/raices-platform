from django.db import transaction

from .models import Program


@transaction.atomic
def create_program(**data) -> Program:
    """
    Crea un nuevo programa académico.
    """

    return Program.objects.create(**data)


@transaction.atomic
def update_program(program: Program, **data) -> Program:
    """
    Actualiza un programa académico.
    """

    for field, value in data.items():
        setattr(program, field, value)

    program.save()

    return program


@transaction.atomic
def delete_program(program: Program) -> None:
    """
    Eliminación lógica del programa.
    """

    program.is_active = False
    program.save(update_fields=["is_active"])