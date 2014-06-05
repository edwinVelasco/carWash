from django.db import models

# Create your models here.

class TipoServicio(models.Model):
    nombre = models.CharField(max_length = 30, primary_key = True)
    descripcion = models.TextField()
    tipo_vehiculo = models.CharField(max_length=10)
    valor = models.FloatField()

class Peticion(models.Model):
    nombre = models.CharField(max_length=45)
    telefono = models.CharField(max_length=40)
    placa = models.CharField(max_length=10)
    marca = models.CharField(max_length=45)
    linea = models.CharField(max_length=45)
    ralladuras = models.BooleanField(default=False)
    detalle_ralladuras = models.TextField()
    golpes = models.BooleanField(default=False)
    detalle_golpes = models.TextField()
    fecha = models.DateField()
    hora = models.TimeField()
    direccion = models.CharField(max_length=50)
    verificado = models.BooleanField(default=False)
    tipo_servicio = models.ForeignKey(TipoServicio)    