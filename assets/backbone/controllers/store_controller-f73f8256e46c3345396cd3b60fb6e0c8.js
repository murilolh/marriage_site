var StoreController=null;id_loja_sel=getfu("id_loja"),id_loja_sel="undefined"==typeof id_loja_sel?1:id_loja_sel,function(e){StoreController=Backbone.Router.extend({routes:{":login/store.html":"load",":login/store/index/:id.html":"load",":login/:lang/store.html":"loadLang",":login/:lang/store/index/:id.html":"loadLang",store:"loadStore","store/index/:id":"loadStore",":login/store":"load",":login/store/index/:id":"load","store/cart":"loadCart",":login/store/cart":"loadCart","store/cart_info":"loadCartInfo",":login/store/cart_info":"loadCartInfo","store/payment":"loadPayment",":login/store/payment":"loadPayment","store/confirm":"loadConfirm",":login/store/confirm":"loadConfirm",":lang/store":"loadStoreLang",":lang/store/index/:id":"loadStoreLang",":login/:lang/store":"loadLang",":login/:lang/store/index/:id":"loadLang",":lang/store/cart":"loadCart",":login/:lang/store/cart":"loadCart",":lang/store/cart_info":"loadCartInfo",":login/:lang/store/cart_info":"loadCartInfo",":lang/store/payment":"loadPayment",":login/:lang/store/payment":"loadPayment",":lang/store/confirm":"loadConfirm",":login/:lang/store/confirm":"loadConfirm"},init_loja:function(e,t,o){id_loja_sel=getfu("id_loja")||1;var n=this;if(this.info&&(id_loja_sel=this.info.id_loja_sel),this.info)e&&n.info.id_loja!=e&&(n.info.id_loja=e),o&&o.call(n,e);else if(this.info={order:5,id_loja_categoria:-2,id_loja:e?e:9,id_loja_sel:"undefined"==typeof id_loja_sel?1:id_loja_sel},e)e&&n.info.id_loja!=e&&(n.info.id_loja=e),o&&o.call(n,e);else{var a=new Cart;a.fetch({data:{id_noivo:t.get("id_noivo"),id_loja:e},success:function(){e=a.get("id_loja"),e||(e=9),n.info.id_loja=e,o&&o.call(n,e)},error:function(){e=9,n.info.id_loja=e,o&&o.call(n,e)}})}},loadConfirm:function(e){var t=this;load_noivos(e,function(e){if(e){var o=this;t.init_loja(null,o,function(e){cart=new Cart,cart.fetch({data:{id_noivo:o.get("id_noivo"),use_last:!0},success:function(){var e=new TemplateLojaDado;e.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){backboneObjects.confirm_view=new ConfirmView({noivos:o,cart:cart,loja_dado:e,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"store",noivos:o})}else App.current_view=e,this.render()}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})})}})},loadPayment:function(e){var t=this;load_noivos(e,function(e){if(e){var o=this;t.init_loja(null,o,function(e){cart=new Cart,cart.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){if(cart.get("products").length<=0)return void Backbone.history.navigate("/"+o.get("login")+"/store",!0);var e=new TemplateLojaDado;e.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){var t=new CotaTiposPagamentosNoivo;t.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){backboneObjects.payment_view=new PaymentView({noivos:o,cart:cart,loja_dado:e,tipos_pagamentos:t,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"store",noivos:o})}else App.current_view=e,this.render()}})},error:function(e,t,o){backbone_proccess_error(t)}})},error:function(e,t,o){backbone_proccess_error(t)}})},error:function(e,t,o){backbone_proccess_error(t)}})})}})},loadCartInfo:function(e){var t=this;load_noivos(e,function(e){if(e){var o=this;t.init_loja(null,o,function(e){var n=new TemplateLojaDado;n.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){var e=new Cart;e.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){backboneObjects.cart_info_view=new CartInfoView({noivos:o,cart:e,loja_dados:n,id_loja:t.info.id_loja,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"store",noivos:o})}else App.current_view=e,this.render()}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})})}})},loadCart:function(e){var t=this;load_noivos(e,function(e){if(e){var o=this;t.init_loja(null,o,function(e){var n=new TemplateLojaDado;n.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){var e=new Cart;e.fetch({data:{id_noivo:o.get("id_noivo")},success:function(){backboneObjects.cart_view=new CartView({noivos:o,cart:e,loja_dados:n,id_loja:t.info.id_loja,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"store",noivos:o})}else App.current_view=e,this.render()}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})})}})},load:function(e,t){this.loadStore(t,e)},loadLang:function(e,t,o){this.loadStore(o,e)},loadStoreLang:function(e,t){this.loadStore(t)},loadStore:function(e,t){var o=this;try{e=e?parseInt(e):9}catch(n){e=9}load_noivos(t,function(t){if(t){var n=this;o.init_loja(e,n,function(e){var t=new MenuNoivo;t.fetch({cache:!1,data:{id_noivo:n.get("id_noivo"),id_recurso:e,id_loja:id_loja_sel},success:function(){var a=new TemplateLojaDado;a.fetch({cache:!1,data:{id_noivo:n.get("id_noivo")},success:function(){0==a.get("mostraordenacao")&&(o.info.id_loja_categoria=-1);var i=new TemplateProdutos;i.fetch({cache:!1,data:{id_noivo:n.get("id_noivo"),id:t.get("recurso").id_tipo_loja,id_loja_categoria:o.info.id_loja_categoria,order:o.info.order,id_loja:id_loja_sel},success:function(){var r=new LojaCategorias;r.fetch({data:{id_noivo:n.get("id_noivo"),id_loja:id_loja_sel},success:function(){cart=new Cart,cart.fetch({cache:!1,data:{id_noivo:n.get("id_noivo"),id_loja:e},success:function(){backboneObjects.store_view=new StoreView({noivos:n,pagina:t,produtos:i,loja_dados:a,categorias:r,info:o.info,cart:cart,onload:function(){var e=this;if(0==this.adopted){var t=this.$el;change_content(t,function(){App.current_view=e,e.render()},{template:"store",noivos:n})}else App.current_view=e,this.render()}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es. (cart)",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es (categorias).",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es. (produtos)",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar informa\xe7\xf5es. (loja_dados)",function(){},{title:"ERRO",closeText:"[Fechar]"})}})},error:function(){Boxy.alert("Erro ao carregar noivos.",function(){},{title:"ERRO",closeText:"[Fechar]"})}})})}else Boxy.alert("Erro ao carregar noivos.",function(){},{title:"ERRO",closeText:"[Fechar]"})})}}),backboneObjects.store_controller=new StoreController}(jQuery);