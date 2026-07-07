from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView,
)

urlpatterns = [

    # ==========================================================================
    # ADMIN
    # ==========================================================================

    path(
        "admin/",
        admin.site.urls,
    ),

    # ==========================================================================
    # API SCHEMA
    # ==========================================================================

    path(
        "api/schema/",
        SpectacularAPIView.as_view(),
        name="schema",
    ),

    # ==========================================================================
    # SWAGGER
    # ==========================================================================

    path(
        "api/docs/",
        SpectacularSwaggerView.as_view(
            url_name="schema"
        ),
        name="swagger-ui",
    ),

    # ==========================================================================
    # REDOC
    # ==========================================================================

    path(
        "api/redoc/",
        SpectacularRedocView.as_view(
            url_name="schema"
        ),
        name="redoc",
    ),

    # ==========================================================================
    # USERS
    # ==========================================================================

    path(
        "api/users/",
        include("apps.users.urls"),
    ),

    # ==========================================================================
    # INSTITUTIONS
    # ==========================================================================

    path(
        "api/",
        include("apps.institutions.urls"),
    ),

    # ==========================================================================
    # PROGRAMS
    # ==========================================================================

    path(
        "api/programs/",
        include("apps.programs.urls"),
    ),

    # ==========================================================================
    # COURSES
    # ==========================================================================

    path(
        "api/courses/",
        include("apps.courses.urls"),
    ),

    # ==========================================================================
    # MODULES
    # ==========================================================================

    path(
        "api/modules/",
        include("apps.modules.urls"),
    ),

    # ==========================================================================
    # LESSONS
    # ==========================================================================

    path(
        "api/lessons/",
        include("apps.lessons.urls"),
    ),

    # ==========================================================================
    # RESOURCES
    # ==========================================================================

    path(
        "api/resources/",
        include("apps.resources.urls"),
    ),

]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )