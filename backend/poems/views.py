from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Poem
from .serializers import PoemSerializer

class PoemList(APIView):
    def get(self, request):
        poems = Poem.objects.all()
        serializer = PoemSerializer(poems, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PoemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
