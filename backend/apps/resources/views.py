from rest_framework import status, viewsets
from rest_framework.response import Response

from .serializers import ResourceSerializer
from .selectors import get_resources
from .services import create_resource


class ResourceViewSet(viewsets.ModelViewSet):
    """
    API para la administración de Recursos.
    """

    serializer_class = ResourceSerializer

    def get_queryset(self):
        return get_resources()

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        resource = create_resource(
            **serializer.validated_data
        )

        output = self.get_serializer(resource)

        return Response(
            output.data,
            status=status.HTTP_201_CREATED,
        )