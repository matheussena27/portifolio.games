from django.db import models
from django.contrib.auth.models import User


class Noticia(models.Model):
    titulo = models.CharField(max_length=30, null=False)
    genero = models.CharField(max_length=40, null=False, default="##")
    desenvolvedor = models.CharField(max_length=60, null=False, default="##")
    plataformas = models.CharField(max_length=300, null=False,  default="##")
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Bloco(models.Model):
    texto = models.CharField(max_length=500, null=True, blank=True)
    imagem = models.ImageField(upload_to='images/', null=True, blank=True )
    video = models.CharField(max_length=100, null=True, blank=True)
    subtitulo = models.CharField(max_length=30, null=True, blank=True)
    noticia = models.ForeignKey(Noticia, on_delete=models.CASCADE)

    def img(self):
        if self.imagem:
            return self.imagem.url
        return ''