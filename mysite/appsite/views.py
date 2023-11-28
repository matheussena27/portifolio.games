from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from .models import Noticia, Bloco


def index(request):
    blocos = Bloco.objects.all()
    noticias = Noticia.objects.all()
    video = {}
    texto = {}

    for news in noticias:
        for block in blocos:
            if block.noticia.id == news.id:
                if block.video != None:
                    video[news.id] = block.video
                    break

        for block in blocos:
            if block.noticia.id == news.id:
                if block.texto != None:
                    texto[news.id] = block.texto
                    break
    nova_news = {
        'noticias': noticias,
        'video': video,
        'texto': texto
    }

    return render(request, 'pags/index.html', nova_news)

def historia(request):
    return render(request, 'pags/historia.html')

def loginPage(request):
    if request.method == "POST":
        username = request.POST.get("usuario")
        senha = request.POST.get("senha")

        try:
            user = User.objects.get(username = username)
        except:
            messages.error(request, "Usuario não existe.")

        user = authenticate(request, username=username, password=senha)
        if user is not None:
            login(request, user)
            return redirect("index")
        else:
            messages.error(request, "Senha incorreta.")

    return render(request, 'pags/login.html')

def logoutUser(request):
    logout(request)
    return redirect("index")

@login_required(login_url="index")
def post(request):
    if request.method == "POST":
        count = 0 
        lista = len(request.POST) + len(request.FILES) - 1

        while count < lista:
            print(count)
            novo_bloco = Bloco()
            id_noticia = Noticia.objects.last()
            novo_bloco.noticia = id_noticia

            fotos = request.FILES
            blocos = request.POST

            foto = fotos.get('img'+str(count))
            if foto:
                novo_bloco.imagem = foto
            elif blocos.get('sub'+str(count)):
                novo_bloco.subtitulo = blocos.get('sub'+str(count))
            elif blocos.get('txt'+str(count)):
                novo_bloco.texto = blocos.get('txt'+str(count))
            elif blocos.get('yt'+str(count)):
                novo_bloco.video = blocos.get('yt'+str(count))
            novo_bloco.save()
            count+=1

        id_noticia = Noticia.objects.last()
        return redirect("noticia/"+ str(id_noticia.id))

                

    return render(request, 'pags/post.html')

@login_required(login_url="index")
def post_inicio(request):
    if request.method == "POST":
        nova_noticia = Noticia()
        usuario = User.objects.get(username = 'user')
        nova_noticia.titulo = request.POST.get('title')
        nova_noticia.genero = request.POST.get('genero')
        nova_noticia.plataformas = request.POST.get('plataformas')
        nova_noticia.desenvolvedor = request.POST.get('desenvolvedor')
        nova_noticia.usuario = usuario
        nova_noticia.save()
        return redirect("post")


    return render(request, 'pags/post_noticia.html')

def sobre(request):
    return render(request, 'pags/sobre.html')

def news(request, pk):
    noticias = Noticia.objects.filter(id=pk)
    blocos = Bloco.objects.filter(noticia_id=pk)
    
    context = {
        'noticias': noticias,
        'blocos': blocos,
    }

    return render(request, 'pags/noticia.html', context)

def deletar(request):
    noticias = Noticia.objects.all()

    context = {'noticias': noticias}

    return render(request, 'pags/deletar.html', context)

def delete(request, pk):
    noticias = Noticia.objects.filter(id=pk)
    noticias.delete()
    
    return redirect('deletar')