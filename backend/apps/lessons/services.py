from django.db import transaction

from .models import Lesson


@transaction.atomic
def create_lesson(**data) -> Lesson:
    return Lesson.objects.create(**data)


@transaction.atomic
def update_lesson(lesson: Lesson, **data) -> Lesson:

    for field, value in data.items():
        setattr(lesson, field, value)

    lesson.save()

    return lesson


@transaction.atomic
def delete_lesson(lesson: Lesson):

    lesson.is_active = False
    lesson.save(update_fields=["is_active"])