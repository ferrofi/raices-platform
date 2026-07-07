from .models import Course


def get_courses():
    """
    Devuelve todos los cursos activos.
    """

    return (
        Course.objects
        .select_related("program")
        .filter(is_active=True)
        .order_by(
            "program",
            "order",
        )
    )