from rest_framework import status, viewsets
from rest_framework.response import Response

from .serializers import LessonSerializer
from .selectors import get_lessons
from .services import create_lesson


class LessonViewSet(viewsets.ModelViewSet):
    """
    API para la administración de Lecciones.
    """

    serializer_class = LessonSerializer

    def get_queryset(self):
        return get_lessons()

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        lesson = create_lesson(
            **serializer.validated_data
        )

        output = self.get_serializer(lesson)

        return Response(
            output.data,
            status=status.HTTP_201_CREATED,
        )