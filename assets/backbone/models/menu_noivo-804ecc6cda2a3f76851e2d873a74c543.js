var MenuNoivo=null;!function(){var local=null,localData=null;check_localstorage("data_menu_noivo")?local=new Backbone.LocalStorage("data_menu_noivo"):localData=new Backbone.LocalData("data_menu_noivo"),MenuNoivo=Backbone.Model.extend({urlRoot:"/services/menu_noivo",idAttribute:"id_menu_noivo",localStorage:local,localData:localData,defaults:{},initialize:function(){}})}(jQuery);