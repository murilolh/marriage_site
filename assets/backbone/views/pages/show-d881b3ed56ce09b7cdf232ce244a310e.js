var PagesView=null;!function(e){PagesView=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-page-"+this.options.pagina.get("id_menu_noivo"));o.get(0)?(this.setElement(o),t.options.onload&&t.options.onload.call(t)):(this.adopted=!1,render_template("template_pages_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/pages/"+this.options.noivos.get("template_html_version")+"/show",{noivos:this.options.noivos.attributes,pagina:this.options.pagina.attributes},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)}))},render:function(){return this}})}(jQuery);