var PostView=null;!function($){PostView=BaseBackboneView.extend({events:{"click #comment_link":"toggleComments","click #close_comments":"toggleComments","click #write_comment":"writeComment"},writeComment:function(ev){var post_id=$(ev.currentTarget).attr("postid"),write_element=$("#write_window");this.$el.find(".def-post-footer").before(write_element);var comments=$("div[commentpostid='"+post_id+"']");$("#write_window").find(".def-result-message").hide(),$("#comentario").formhelper("setvalue","nome",""),$("#comentario").formhelper("setvalue","email",""),$("#comentario").formhelper("setvalue","comentario",""),$("#comentario").formhelper("setvalue","captcha",""),write_element.attr("postid")==this.model.get("id_template_blog_post")?write_element.toggle():write_element.show(),comments.is(":visible")&&write_element.is(":visible")&&comments.hide(),write_element.find("#nome").focus(),write_element.attr("postid",this.model.get("id_template_blog_post")),write_element.find("#id_template_blog_post").val(this.model.get("id_template_blog_post"))},toggleComments:function(ev){var post_id=$(ev.currentTarget).attr("postid"),el=$("div[commentpostid='"+post_id+"']"),write_element=$("#write_window");el.toggle(),el.is(":visible")&&write_element.is(":visible")&&write_element.hide()},initialize:function(){this.constructor.__super__.initialize.call(this),this.adopted=!0;var item=$("div[postid='"+this.model.get("id_template_blog_post")+"']");item.get(0),this.setElement(item)},render:function(){return this}})}(jQuery);