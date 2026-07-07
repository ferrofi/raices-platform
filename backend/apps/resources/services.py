from django.db import transaction

from .models import Resource


@transaction.atomic
def create_resource(**data) -> Resource:
    return Resource.objects.create(**data)


@transaction.atomic
def update_resource(resource: Resource, **data) -> Resource:

    for field, value in data.items():
        setattr(resource, field, value)

    resource.save()

    return resource


@transaction.atomic
def delete_resource(resource: Resource):

    resource.is_active = False
    resource.save(update_fields=["is_active"])