from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'convertion/index.html', )

def bold(request):
    return render(request, 'convertion/boldtext.html', )

def italic(request):
    return render(request, 'convertion/italictext.html', )

def underline(request):
    return render(request, 'convertion/underlinetext.html', )

def strike(request):
    return render(request, 'convertion/strikethrough.html', )

def wide(request):
    return render(request, 'convertion/widetext.html', )

def small(request):
    return render(request, 'convertion/smalltext.html', )
