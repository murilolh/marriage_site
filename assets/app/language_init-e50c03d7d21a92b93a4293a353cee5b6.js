$(document).ready(function(){var e=null;$("#lang .lang-slct").on("click",function(){e?(clearTimeout(e),e=null):($("#lang .lang-list").css({opacity:0}).toggle(),$("#lang .lang-list").is(":visible")&&$("#lang .lang-list").animate({opacity:1},500))}),$("#lang .lang-slct").on("mouseleave",function(){e||(e=setTimeout(function(){$("#lang .lang-list").animate({opacity:0},500,function(){$("#lang .lang-list").hide(),e=null})},300))}),$("#lang .lang-list").on("mouseenter",function(){e?(clearTimeout(e),e=null):($("#lang .lang-list").css({opacity:0}).show(),$("#lang .lang-list").animate({opacity:1},500))}),$("#lang .lang-list").on("mouseleave",function(){e||(e=setTimeout(function(){$("#lang .lang-list").animate({opacity:0},500,function(){$("#lang .lang-list").hide(),e=null})},300))})});