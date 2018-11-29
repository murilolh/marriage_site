var body = $('body');
var style = $('<style />').attr('id', 'slide-hack').appendTo(body);

var resizeSlide = function() {
	if(style) {
		var topOffset = $(window).width() > 768 ? 80 : 86;
		style.html('.slotholder { height: calc(100vw * 0.5623209169054445) !important; max-height: calc(100vh - ' + topOffset + 'px) !important} .tp-bgimg.defaultimg, .slotslide div { background-size: cover !important; height: calc(100vw * 0.5623209169054445) !important; background-position: top !important; max-height: calc(100vh - ' + topOffset + 'px) !important}');
	}
};

$(document).ready(function(){
  if(isCurrentPageStore()) {
    setTimeout(function() {
      $('#loading-screen').fadeOut(600);
    }, 1000);
  }

	/*funcao paralax*/
	var fn_parallax = function(){
		// $(window).off("scroll").on("scroll",function() {
		// 	if ($(window).width() > 1024) {
		// 		var obj = $('.bgParallax.img-01');
		// 		var yPos = $(window).scrollTop();
		// 		var bgpos = '50% ' + yPos + 'px';
		// 		obj.css('background-position', bgpos);
		// 	};
		// });
	}

	/*links li blog*/
	$('.tabs-cnt li').click(function(){
		$('.tabs-cnt li').removeClass('select');
	    $(this).addClass('select');
	});

	$(window).resize(resizeSlide);
	resizeSlide();

	$(document).on("icasei_template_change icasei_content_change",function(){
    fixLongTitles();
    setWeddingCountdown();

		if ($(window).width() > 1024) {
			fn_parallax();
		}

		$('.scroll-menu li').click(function(){
			$('.scroll-menu li').removeClass('active');
		    $(this).addClass('active');
		});

    $('.dropdown-menu > li > a').off('click').on('click', function(){
			toggleMenu();
		});

		/*funcao para tirar scroll do mapa*/
	    var $map;
	    var $cover;

	    $map = $('.map-container');
	    $cover = $('<div class="cover"></div>');
	    $cover.on('click', function () {
	      $(this).remove();
	    });
      $map.append($cover);

		/*funcao anchor*/
		$(".anchor").click(function(event){
		    event.preventDefault();
		    $('html,body').animate({scrollTop:$(this.hash).offset().top-80}, 800);
		});

		$(".anchor-back").click(function(event){
		    event.preventDefault();
		    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
		});
	}).trigger("icasei_content_change");
});
