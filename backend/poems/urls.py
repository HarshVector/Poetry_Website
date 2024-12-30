from django.urls import path
from .views import PoemList

urlpatterns = [
    path('', PoemList.as_view()),
]

