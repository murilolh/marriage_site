var CartItemView=null;!function(e){CartItemView=BaseBackboneView.extend({events:{"click .cart-remove":"remove_item","click .update-prod":"update_item","blur input[name='qtd']":"update_item"},update_item:function(e){var t=this,o=0;try{o=parseInt(this.$el.find("input[name='qtd']").val())}catch(n){o=0}if(isNaN(o)&&(alert(o),o=1,this.$el.find("input[name='qtd']").val(o)),0==o)return void t.remove_item(e);var a=this.model.get("product").quantidade>this.model.get("product").cotas?this.model.get("product").quantidade_restantes:this.model.get("product").cotas_restantes;return this.options.loja_dados&&0==this.options.loja_dados.get("comprado")&&(a=this.model.get("product").quantidade>this.model.get("product").cotas?this.model.get("product").quantidade:this.model.get("product").cotas),o>a?void Boxy.alert(a>1?I18n_translate("store.cart.wrong_quantities",{qtd:a}):I18n_translate("store.cart.wrong_quantity",{qtd:a}),function(){t.$el.find("input[name='qtd']").val(t.model.get("qtd"))},{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")}):(window.loading.jLoading("block",!0),void this.model.save({qtd:o},{wait:!0,success:function(e,t,o){window.loading.jLoading("block",!1)},error:function(e,t,o){window.loading.jLoading("block",!1),Boxy.alert(I18n.t("store.cart.error_save"),function(){},{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")})}}))},remove_item:function(e){var t=this;window.loading.jLoading("block",!0),this.model.destroy({wait:!0,success:function(e,o,n){window.loading.jLoading("block",!1),t.$el.remove()},error:function(e,t,o){window.loading.jLoading("block",!1),Boxy.alert(I18n.t("store.cart.error_remove"),function(){},{title:I18n.t("layout.boxy.error_title"),closeText:I18n.t("layout.boxy.close")})}})},change_item:function(e,t){var o=this.model.get("product").cotas>1?this.model.get("product").valor/this.model.get("product").cotas:this.model.get("product").valor;o*=this.model.get("qtd"),this.$el.find(".product-value").html(Globalize.format(o,"c"))},initialize:function(){this.constructor.__super__.initialize.call(this),this.adopted=!0,this.model.on("change",this.change_item,this);var t=e("tr[productid='"+this.model.get("product").id_loja_produtos+"']");!t.get(0),this.setElement(t)},render:function(){return this}})}(jQuery);