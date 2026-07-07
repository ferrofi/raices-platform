from .models import Lesson


def get_lessons():
    """
    Devuelve todas las lecciones activas.
    """

    return (
        Lesson.objects
        .select_related("module")
        .filter(is_active=True)
        .order_by(
            "module",
            "order",
        )
    )