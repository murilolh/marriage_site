var GiftController=null;!function(e){GiftController=Backbone.Router.extend({routes:{gifts:"load",":login/gifts":"load",":lang/gifts":"load",":login/:lang/gifts":"load",":login/gifts.html":"load",":login/:lang/gifts.html":"load"},load:function(e){load_noivos(e,function(e){if(e){var t=this,o=new TemplatePresente,n=new MenuNoivo,a=!1,i=!1,r=function(){a&&i&&(backboneObjects.gift_view=new GiftView({noivos:t,gift:o,pagina:n,onload:function(){var e=this;if(0==this.adopted){var o=this.$el;change_content(o,function(){App.current_view=e,e.render()},{template:"front",noivos:t})}else App.current_view=e,this.render()}}))};o.fetch({cache:!1,data:{id_noivo:t.get("id_noivo")},success:function(){a=!0,r.call(this)},error:function(e,t,o){backbone_proccess_error(t)}}),n.fetch({cache:!1,data:{id_noivo:t.get("id_noivo"),id_recurso:8},success:function(){i=!0,r.call(this)},error:function(e,t,o){backbone_proccess_error(t)}})}else Boxy.alert("Erro ao carregar noivos.",function(){},{title:"ERRO",closeText:"[Fechar]"})})}}),backboneObjects.gift_controller=new GiftController}(jQuery);