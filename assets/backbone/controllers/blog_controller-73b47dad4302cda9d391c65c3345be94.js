var BlogController=null;!function(e){BlogController=Backbone.Router.extend({routes:{":login/blog.html":"load",":login/:lang/blog.html":"loadLang",blog:"loadBlog","blog/:page":"loadBlog",":login/blog":"load",":login/blog/:page":"load",":lang/blog":"loadBlogLang",":lang/blog/:page":"loadBlogLang",":login/:lang/blog":"loadLang",":login/:lang/blog/:page":"loadLang"},load:function(e,t){this.loadBlog(t,e)},loadLang:function(e,t,o){this.loadBlog(o,e)},loadBlogLang:function(e,t){this.loadBlog(t)},loadBlog:function(e,t){e||(e="1"),load_noivos(t,function(t){if(t){var o=this,n=new TemplateBlogPost,a=new MenuNoivo,i=new Captcha,r=!1,s=!1,l=!1,c=function(){r&&s&&l&&("v2"==o.get("template_html_version")?backboneObjects.blog_view=new BlogViewV2({noivos:o,entries:n,pagina:a,captcha:i,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"front",noivos:o})}else App.current_view=e,this.render()}}):backboneObjects.blog_view=new BlogView({noivos:o,entries:n,pagina:a,captcha:i,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"front",noivos:o})}else App.current_view=e,this.render()}}))};n.fetch({cache:!1,data:{id_noivo:o.get("id_noivo"),page:e},success:function(){r=!0,c.call(this)},error:function(e,t,o){backbone_proccess_error(t)}}),a.fetch({cache:!1,data:{id_noivo:o.get("id_noivo"),id_recurso:22},success:function(){s=!0,c.call(this)},error:function(e,t,o){backbone_proccess_error(t)}}),i.fetch({cache:!1,data:{object:"comment"},success:function(){l=!0,c.call(this)},error:function(e,t,o){backbone_proccess_error(t)}})}else Boxy.alert("Erro ao carregar noivos.",function(){},{title:"ERRO",closeText:"[Fechar]"})})}}),backboneObjects.blog_controller=new BlogController}(jQuery);