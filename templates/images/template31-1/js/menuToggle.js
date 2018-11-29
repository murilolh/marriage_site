$(document).ready(function(){

	if ($(window).width() > 640) {
		
		$("#main_template").delegate(".open-menu-rsp", "click", function(){	 
			$('#cont ul').slideToggle();
		});
		
		$("#main_template").delegate("#menu a", "click", function(){	 
			$('#cont ul').slideToggle();
		});
		
	}
	
	//fundo
	bg_cor = $("#menu").css("background-color");
	bg_cor = bg_cor.replace('rgb(','').replace(')','');
	
	bc = bg_cor.split(',')
	
	Y = 0.2126*(bc[0]*1) + 0.7152*(bc[1]*1) + 0.0722*(bc[2]*1);
	
	if (Y > 128) {
		$(".iconMenufnt").css("color","black");
		$("#menu label.open-menu-rsp").css("border-color","black");
	}
		
		
	//menu Titulos
	bg_cor = $("#menu .def-title").css("color");
	bg_cor = bg_cor.replace('rgb(','').replace(')','');
	
	bc = bg_cor.split(',')
	
	Y = 0.2126*(bc[0]*1) + 0.7152*(bc[1]*1) + 0.0722*(bc[2]*1);
	
	if (Y > 128) {
		$("#menu .def-title").css("color","black");
	}
	
	//menu Links
	bg_cor = $("#menu a").css("color");
	bg_cor = bg_cor.replace('rgb(','').replace(')','');
	
	bc = bg_cor.split(',')
	
	Y = 0.2126*(bc[0]*1) + 0.7152*(bc[1]*1) + 0.0722*(bc[2]*1);
	
	if (Y > 128) {
		$("#menu a").css("color","black");
	}



});


/*
Hlp = {
	
	HextoRgb: function(hex) {
	
		function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
		function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
		function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
		function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
		
		R = hexToR(hex);
		G = hexToG(hex);
		B = hexToB(hex);
		
		var rgb = {'rgb' : R+','+G+','+B , R:R , G:G , B:B }

		return rgb

	}


}
*/