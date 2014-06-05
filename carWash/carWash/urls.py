from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'carWash.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    #url(r'^admin/', include(admin.site.urls)),
     url(r'^$', 'index.views.index'),
     url(r'^contacto$', 'index.views.contacto'),
     url(r'^envio_contacto$', 'index.views.envio_contacto'),
     
)
