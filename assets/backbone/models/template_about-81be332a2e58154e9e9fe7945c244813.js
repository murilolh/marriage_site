var TemplateAbout=null;!function(e){var t=null,o=null;check_localstorage("data_template_about")?t=new Backbone.LocalStorage("data_template_about"):o=new Backbone.LocalData("data_template_about"),TemplateAbout=Backbone.Model.extend({urlRoot:"/services/template_about",idAttribute:"id_template_sobre",localStorage:t,localData:o,defaults:{},initialize:function(){}})}(jQuery);