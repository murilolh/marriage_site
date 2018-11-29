$(document).ready(function(){
	$(window).on("resize",function(){
		var total_height = $(window).innerHeight();
		var header_height = $("#header").outerHeight(true);
		var footer_height = $("#footer").outerHeight(true);
		var content_height = total_height - header_height - footer_height;
		$("#middle-cont").css("min-height",content_height+"px");
		
		var final_height = $("#middle-cont").outerHeight(true);
		if(final_height > content_height){
			content_height -= (final_height - content_height);
			$("#middle-cont").css("min-height",content_height+"px");		
		}

		if($("#menu").get(0)){
			var menu_height = $("#menu").outerHeight() - 150;
			if(content_height < menu_height){
				$("#middle-cont").css("min-height",menu_height+"px");
			}
		}
		
	}).trigger("resize");

	$(document).on("icasei_template_change",function(){
		$(window).trigger("resize");
	})
});