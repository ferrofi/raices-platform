from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import InstitutionViewSet

router = DefaultRouter()

router.register(
    "",
    InstitutionViewSet,
    basename="institutions",
)

urlpatterns = [
    path("", include(router.urls)),
]