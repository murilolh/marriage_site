var PostView=null;!function(e){PostView=BaseBackboneView.extend({events:{"click #comment_link":"toggleComments","click #close_comments":"toggleComments","click #write_comment":"writeComment"},writeComment:function(t){var o=e(t.currentTarget).attr("postid"),n=e("#write_window");this.$el.find(".def-post-footer").before(n);var a=e("div[commentpostid='"+o+"']");e("#write_window").find(".def-result-message").hide(),e("#comentario").formhelper("setvalue","nome",""),e("#comentario").formhelper("setvalue","email",""),e("#comentario").formhelper("setvalue","comentario",""),e("#comentario").formhelper("setvalue","captcha",""),n.attr("postid")==this.model.get("id_template_blog_post")?n.toggle():n.show(),a.is(":visible")&&n.is(":visible")&&a.hide(),n.find("#nome").focus(),n.attr("postid",this.model.get("id_template_blog_post")),n.find("#id_template_blog_post").val(this.model.get("id_template_blog_post"))},toggleComments:function(t){var o=e(t.currentTarget).attr("postid"),n=e("div[commentpostid='"+o+"']"),a=e("#write_window");n.toggle(),n.is(":visible")&&a.is(":visible")&&a.hide()},initialize:function(){this.constructor.__super__.initialize.call(this),this.adopted=!0;var t=e("div[postid='"+this.model.get("id_template_blog_post")+"']");!t.get(0),this.setElement(t)},render:function(){return this}})}(jQuery);