var MessageViewV2=null;!function($){MessageViewV2=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var self=this;this.adopted=!0;var item=$("li[messageid='"+this.options.message.get("id_template_msg_noivos")+"']");item.get(0)?(this.setElement(item),self.options.onload&&self.options.onload.call(self)):(this.adopted=!1,render_template("template_message_message_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/messages/"+this.options.noivos.get("template_html_version")+"/message",{noivos:this.options.noivos.attributes,message:this.options.message.attributes},function(ret){self.setElement(ret),self.options.onload&&self.options.onload.call(self)}))},render:function(){return this}})}(jQuery);