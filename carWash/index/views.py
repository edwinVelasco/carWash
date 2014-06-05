from django.shortcuts import render, redirect
from django.core import serializers
from django.http import HttpResponse
import hashlib
from hashlib import md5
from django.core.mail import EmailMessage

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contacto(request):
    return render(request, 'contacto.html')


def envio_contacto(request):
    titulo = "mensaje de contacto" 
    contenido = "mensaje por concepto de contacto \n de: %s con correo %s \n %s" %(request.GET['name'], request.GET['email'], request.GET['message'])
    correo = EmailMessage(titulo, contenido, to= ['edwinalbertovelasco8@gmail.com'])
    print correo
    try:
        correo.send()
        return HttpResponse("success")
    except Exception, e:
        print e
        return HttpResponse('failed')   