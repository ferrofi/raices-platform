from rest_framework import status, viewsets
from rest_framework.response import Response

from .serializers import ModuleSerializer
from .selectors import get_modules
from .services import create_module


class ModuleViewSet(viewsets.ModelViewSet):
    """
    API para la administración de Módulos.
    """

    serializer_class = ModuleSerializer

    def get_queryset(self):
        return get_modules()

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        module = create_module(
            **serializer.validated_data
        )

        output = self.get_serializer(module)

        return Response(
            output.data,
            status=status.HTTP_201_CREATED,
        )