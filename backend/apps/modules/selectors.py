from .models import Module


def get_modules():
    """
    Devuelve todos los módulos activos.
    """

    return (
        Module.objects
        .select_related("course")
        .filter(is_active=True)
        .order_by(
            "course",
            "order",
        )
    )