var UltimasFotos=null,UltimaFoto=null;!function(){var local=null,localData=null;check_localstorage("data_ultimas_fotos")?local=new Backbone.LocalStorage("data_ultimas_fotos"):localData=new Backbone.LocalData("data_ultimas_fotos"),UltimaFoto=Backbone.Model.extend({urlRoot:"/services/ultimas_fotos",idAttribute:"id_template_album_fotos",localStorage:local,localData:localData,defaults:{},initialize:function(){}}),UltimasFotos=Backbone.Collection.extend({model:UltimaFoto,localStorage:local,localData:localData,url:"/services/ultimas_fotos"})}(jQuery);