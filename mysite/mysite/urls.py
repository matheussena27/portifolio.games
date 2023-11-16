from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from appsite import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name="index"),
    path('login', views.loginPage, name="login"),
    path('logout', views.logoutUser, name="logout"),
    path('historia', views.historia, name='historia'),
    path('post', views.post, name="post"),
    path('post_inicio', views.post_inicio, name="post_inicio"),
    path('sobre', views.sobre, name="sobre"),
    path('noticia/<str:pk>', views.news, name="news"),
    path('teste', views.teste, name="teste")
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
