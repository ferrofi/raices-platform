from .models import Resource


def get_resources():
    """
    Devuelve todos los recursos activos.
    """

    return (
        Resource.objects
        .select_related("lesson")
        .filter(is_active=True)
        .order_by(
            "lesson",
            "order",
        )
    )