var TemplateRsvp=null;!function(){var local=null,localData=null;check_localstorage("data_template_rsvp")?local=new Backbone.LocalStorage("data_template_rsvp"):localData=new Backbone.LocalData("data_template_rsvp"),TemplateRsvp=Backbone.Model.extend({urlRoot:"/services/template_rsvp",idAttribute:"id_template_rsvp",localStorage:local,localData:localData,defaults:{},initialize:function(){}})}(jQuery);