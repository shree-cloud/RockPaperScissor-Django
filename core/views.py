from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from .forms import SignupForm

@login_required
def index(request):
    return render(request, 'core/index.html')

@login_required
def score(request):
    return render(request, "core/score.html")

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)

        if form.is_valid():
            form.save()

            return redirect('/login/')
    else:
        form = SignupForm()

    return render(request, 'core/signup.html', {
        'form': form
    })