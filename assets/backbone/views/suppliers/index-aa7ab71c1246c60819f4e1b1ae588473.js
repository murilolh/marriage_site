var SuppliersView=null;!function($){SuppliersView=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var self=this;this.adopted=!0;var item=$(".template-suppliers");item.get(0)?(this.setElement(item),self.options.onload&&self.options.onload.call(self)):(this.adopted=!1,render_template("template_suppliers_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/suppliers/"+this.options.noivos.get("template_html_version")+"/index",{noivos:this.options.noivos.attributes,fornecedores:this.options.fornecedores.toJSON(),pagina:this.options.pagina.attributes},function(ret){self.setElement(ret),self.options.onload&&self.options.onload.call(self)}))},render:function(){return this}})}(jQuery);