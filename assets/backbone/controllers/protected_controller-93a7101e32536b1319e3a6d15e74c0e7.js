var ProtectedController=null;!function(e){ProtectedController=Backbone.Router.extend({routes:{"protected":"load",":login/protected":"load",":lang/protected":"load",":login/:lang/protected":"load"},load:function(e){load_noivos(e,function(e){if(e){var t=this;backboneObjects.protected_view=new ProtectedView({noivos:t,onload:function(){var e=this;if(0==this.adopted){var o=this.$el;change_content(o,function(){App.current_view=e,e.render()},{template:"protected",noivos:t})}else App.current_view=e,this.render()}})}else Boxy.alert("Erro ao carregar noivos.",function(){},{title:"ERRO",closeText:"[Fechar]"})})}}),backboneObjects.protected_controller=new ProtectedController}(jQuery);