"""
Django settings for RAICES Platform.
"""

from pathlib import Path
import os
from dotenv import load_dotenv

# ------------------------------------------------------------------------------
# BASE
# ------------------------------------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

# Cargar variables de entorno desde la raíz del proyecto
load_dotenv(BASE_DIR.parent / ".env")

# ------------------------------------------------------------------------------
# SEGURIDAD
# ------------------------------------------------------------------------------

SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-raices-dev"
)

DEBUG = os.getenv("DEBUG", "True") == "True"

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
]

# ------------------------------------------------------------------------------
# APLICACIONES
# ------------------------------------------------------------------------------

INSTALLED_APPS = [

    # Django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Librerías
    "rest_framework",
    "drf_spectacular",
    "corsheaders",

    # Apps del proyecto
    "apps.users",
    "apps.progress",
    "apps.notifications",
    "apps.messaging",
]

# ------------------------------------------------------------------------------
# MIDDLEWARE
# ------------------------------------------------------------------------------

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# ------------------------------------------------------------------------------
# URLS
# ------------------------------------------------------------------------------

ROOT_URLCONF = "config.urls"

# ------------------------------------------------------------------------------
# TEMPLATES
# ------------------------------------------------------------------------------

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# ------------------------------------------------------------------------------
# WSGI
# ------------------------------------------------------------------------------

WSGI_APPLICATION = "config.wsgi.application"

# ------------------------------------------------------------------------------
# BASE DE DATOS
# ------------------------------------------------------------------------------

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("POSTGRES_DB"),
        "USER": os.getenv("POSTGRES_USER"),
        "PASSWORD": os.getenv("POSTGRES_PASSWORD"),
        "HOST": os.getenv("POSTGRES_HOST"),
        "PORT": os.getenv("POSTGRES_PORT"),
    }
}

# ------------------------------------------------------------------------------
# VALIDADORES
# ------------------------------------------------------------------------------

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# ------------------------------------------------------------------------------
# INTERNACIONALIZACIÓN
# ------------------------------------------------------------------------------

LANGUAGE_CODE = "es-mx"

TIME_ZONE = "America/Merida"

USE_I18N = True

USE_TZ = True

# ------------------------------------------------------------------------------
# ARCHIVOS ESTÁTICOS
# ------------------------------------------------------------------------------

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# ------------------------------------------------------------------------------
# CORS
# ------------------------------------------------------------------------------

CORS_ALLOW_ALL_ORIGINS = True

# ------------------------------------------------------------------------------
# DJANGO REST FRAMEWORK
# ------------------------------------------------------------------------------

REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.AllowAny",
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
    ),
}

# ------------------------------------------------------------------------------
# SWAGGER
# ------------------------------------------------------------------------------

SPECTACULAR_SETTINGS = {
    "TITLE": "RAÍCES API",
    "DESCRIPTION": "API Plataforma Integral para la Formación Bíblica",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
}

# ------------------------------------------------------------------------------
# DEFAULT PK
# ------------------------------------------------------------------------------

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"