$(document).ready(function(){if(init_I18n(),"true"==get_meta("music")){var e=(get_meta("ID"),get_meta("player_sel")),t=$('<div id="music" class="'+e+'"><div id="player1" class="music-player"></div><div id="music_icon" class="side"><div class="on-off"></div><div class="note"></div><div class="eq"></div></div></div><div id="preloader" style="display:none" class="music-icon-stoped"></div><div id="preloader1" style="display:none" class="music-icon"></div>');t.css("visibility","hidden"),$("body").prepend(t);var a=t.width();t.find(".note").click(function(){1==t.attr("music_hidden")?($(this).removeClass("nopen").addClass("nclose"),t.attr("music_hidden","0"),t.animate({left:"0px"},500)):($(this).removeClass("nclose").addClass("nopen"),t.attr("music_hidden","1"),t.animate({left:-a+"px"},500))}),t.find(".eq,.on-off").click(function(){$(".play-area div").trigger("click")}),t.css("left",-a+"px"),t.attr("music_hidden","1"),t.css("visibility","");var n=get_meta("autoplay"),r=get_meta("volume"),i=!1,o=null;"?prw=1"==window.location.search&&(n="false"),n&&"true"==n.toLowerCase()?(n=!0,i=!1):n&&"false"==n.toLowerCase()?(n=!1,i=!1):(n=!0,i=!0),r&&(r=parseInt(r));var c=$("#music .music-player");if(c.get(0)){var l="";"true"!=get_meta("CD")&&(l="/");var s=$("#music_icon");template="player_custom",(navigator.userAgent.match(/iphone/i)||navigator.userAgent.match(/android/i))&&(template="mobile"),c.audioPlayer({template:template,cssTemplate:"new",autoPlay:n,askToPlay:i,volume:r,pauseaE:function(){o&&o.pause()},element:"#music_playlist a",basePath:l+"assets/flash/audioplayer",loadingStr:I18n.t("audioplayer.loading_str"),askTitleStr:I18n.t("audioplayer.ask_title_str"),askStr:I18n.t("audioplayer.ask_str"),askBtns:[I18n.t("audioplayer.ask_yes"),I18n.t("audioplayer.ask_no")],onNotSupport:function(){},onStop:function(){s.removeClass("music-icon").addClass("music-icon-stoped")},onPause:function(){s.removeClass("music-icon").addClass("music-icon-stoped")},onPlay:function(){s.removeClass("music-icon-stoped").addClass("music-icon")}}),0===e.indexOf("player6")&&(t.css("height","154px"),$("#lang").css("bottom","165px"),$(".div-aux-1").append('<div id="move_barr" class="tuner-bar"></div>'),$(".control").delegate(".prev,.next","click",function(){null===o&&(o=document.createElement("audio"),o.src="/assets/audioplayer/player6/Loop.mp3",o.volume=.4),o.play(),$("#move_barr").animate({left:"+=30"},1e3,function(){$("#move_barr").animate({left:"-=10"},500,function(){$("#move_barr").animate({left:"+=50"},100,function(){$("#move_barr").animate({left:"-=65"},1e3,function(){o&&o.pause()})})})})}))}}});