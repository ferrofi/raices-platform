from rest_framework import status, viewsets
from rest_framework.response import Response

from .models import Program
from .selectors import get_programs
from .serializers import ProgramSerializer
from .services import create_program


class ProgramViewSet(viewsets.ModelViewSet):
    """
    API para la administración de Programas Académicos.
    """

    serializer_class = ProgramSerializer

    def get_queryset(self):
        return get_programs()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        program = create_program(**serializer.validated_data)

        output = self.get_serializer(program)

        return Response(
            output.data,
            status=status.HTTP_201_CREATED,
        )