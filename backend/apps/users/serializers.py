from django.contrib.auth import authenticate

from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User


# ==============================================================================
# USER
# ==============================================================================

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer para administración de usuarios.
    """

    class Meta:
        model = User

        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "phone",
            "photo",
            "institution",
            "firebase_uid",
            "is_active",
            "is_staff",
            "date_joined",
        )

        read_only_fields = (
            "id",
            "date_joined",
        )

        extra_kwargs = {
            "password": {
                "write_only": True,
            }
        }


# ==============================================================================
# LOGIN
# ==============================================================================

class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True,
    )

    def validate(self, attrs):

        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(
            username=email,
            password=password,
        )

        if not user:
            raise serializers.ValidationError(
                "Correo o contraseña incorrectos."
            )

        refresh = RefreshToken.for_user(user)

        return {

            "user": UserSerializer(user).data,

            "access": str(refresh.access_token),

            "refresh": str(refresh),

        }


# ==============================================================================
# CURRENT USER
# ==============================================================================

class CurrentUserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "phone",
            "photo",
            "institution",
            "is_staff",
            "is_superuser",
        )