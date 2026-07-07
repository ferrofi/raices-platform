from django.db import transaction

from .models import Course


@transaction.atomic
def create_course(**data) -> Course:
    return Course.objects.create(**data)


@transaction.atomic
def update_course(course: Course, **data) -> Course:

    for field, value in data.items():
        setattr(course, field, value)

    course.save()

    return course


@transaction.atomic
def delete_course(course: Course):

    course.is_active = False
    course.save(update_fields=["is_active"])