var AboutView=null;!function(e){AboutView=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-about");o.get(0)?(this.setElement(o),this.options.onload&&this.options.onload.call(t)):(this.adopted=!1,render_template("template_about_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/about/"+this.options.noivos.get("template_html_version")+"/index",{noivos:this.options.noivos.attributes,about:this.options.about.attributes,pagina:this.options.pagina.attributes},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)}))},render:function(){return this}})}(jQuery);