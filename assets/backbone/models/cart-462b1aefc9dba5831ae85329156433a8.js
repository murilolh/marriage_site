var Cart=null,CartProduct=null,CartItems=null;!function(e){var t=null,o=null;check_localstorage("data_cart")?t=new Backbone.LocalStorage("data_cart"):o=new Backbone.LocalData("data_cart"),Cart=Backbone.Model.extend({urlRoot:"/services/cart",localStorage:t,localData:o,defaults:{},initialize:function(){}}),t=null,check_localstorage("cart_product")&&(t=new Backbone.LocalStorage("cart_product")),CartProduct=Backbone.Model.extend({urlRoot:"/services/cart",idAttribute:"id_loja_produtos",localStorage:t,localData:o,defaults:{},initialize:function(){}}),CartProducts=Backbone.Collection.extend({urlRoot:"/services/cart",localStorage:t,model:CartProduct})}(jQuery);