from django.db import transaction

from .models import Module


@transaction.atomic
def create_module(**data) -> Module:
    return Module.objects.create(**data)


@transaction.atomic
def update_module(module: Module, **data) -> Module:

    for field, value in data.items():
        setattr(module, field, value)

    module.save()

    return module


@transaction.atomic
def delete_module(module: Module):

    module.is_active = False
    module.save(update_fields=["is_active"])