var Captcha=null;!function(){var local=null,localData=null;check_localstorage("data_captcha")?local=new Backbone.LocalStorage("data_captcha"):localData=new Backbone.LocalData("data_captcha"),Captcha=Backbone.Model.extend({urlRoot:"/services/captcha",localStorage:local,localData:localData,defaults:{},initialize:function(){}})}(jQuery);