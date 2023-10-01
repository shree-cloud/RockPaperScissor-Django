from django.shortcuts import render

def index(request):
    return render(request, 'core/index.html')

def score(request):
    return render(request, "core/score.html")