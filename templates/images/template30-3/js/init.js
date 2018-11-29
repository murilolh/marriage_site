$(document).ready(function(){
	$(window).on("resize",function(){
		var total_height = $(window).innerHeight();
		var header_height = $("#header").outerHeight(true);
		var footer_height = $("#footer").outerHeight(true);
		var content_height = total_height - header_height - footer_height;
		
		var mT = 0;
		var mB = 0;
		var pT = 0;
		var pB = 0;
		
		try{
			mT = parseInt($("#middle-cont").css("margin-top").replace("px", ""));
		} catch(ex){}
		
		try{
			mB = parseInt($("#middle-cont").css("margin-bottom").replace("px", ""));
		} catch(ex){}
		try{
			pT = parseInt($("#middle-cont").css("padding-top").replace("px", ""));
		} catch(ex){}
		try{
			pB = parseInt($("#middle-cont").css("padding-bottom").replace("px", ""));
		} catch(ex){}
		
		content_height -= (mT + mB + pT + pB) - 24; // - 24 é um ajuste manual

		$("#middle-cont").css("min-height",content_height+"px");
	}).trigger("resize");
	
	$(document).on("icasei_template_change",function(){
		$(window).trigger("resize");
	})
});