function pretty_share_facebook(element){function callback(){}var parent_element=$(element).parent().parent().parent().parent().parent(),nome_casal=$("meta[name='nomecasal']").attr("content"),login=$("meta[name='noivos']").attr("content"),link=($("meta[name='dominio']").attr("content"),document.location.href);link.indexOf("www.")>-1&&(link=link.replace(window.location.host,"sites.icasei.com.br/"+login));var obj={method:"feed",redirect_uri:"http://sites.icasei.com.br/"+login+"/facebook/confirm",link:link,picture:"http://sites.icasei.com.br"+parent_element.find("#fullResImage").attr("src"),name:"Site de casamento de "+nome_casal,caption:"Compartilhamento de foto",description:"Compartilhou uma foto do site de casamento de "+nome_casal,show_error:"no"};return FB.ui(obj,callback),!1}function pretty_share_twitter(element){$(element).parent().parent().parent().parent().parent();var nome_casal=encodeURIComponent($("meta[name='nomecasal']").attr("content")),login=$("meta[name='noivos']").attr("content"),dominio=$("meta[name='dominio']").attr("content");var options={long_url:encodeURIComponent(window.location)},params=$.param(options),depoimento="";return $.ajax({url:"/social/shortener",type:"POST",data:params,dataType:"json",async:!1,success:function(ret){depoimento="Compartilhou uma foto no site de casamento de "+nome_casal+": "+ret.id,window.open("http://twitter.com/home?status="+depoimento,"_blank")}}),!1}!function($){function getHashtag(){return url=location.href,hashtag=-1!=url.indexOf("#pp_")&&decodeURI(url.substring(url.indexOf("#pp_")+4,url.length)),hashtag||(hashtag=-1!=url.indexOf("!!pp_")&&decodeURI(url.substring(url.indexOf("!!pp_")+5,url.length)),hashtag||(hashtag=-1!=url.indexOf("#!")&&decodeURI(url.substring(url.indexOf("#!")+2,url.length)),hashtag))}function setHashtag(){if("undefined"!=typeof theRel)if(theRel=theRel.replace("[","/").replace("]",""),location.hash&&""!=location.hash){var hash=location.hash||"";hash=hash.replace(/((#)?(!)*)?pp_.*/,""),location.hash=hash+"!!pp_"+theRel+"/"+rel_index+"/"}else location.hash="!!pp_"+theRel+"/"+rel_index+"/"}function getParam(name,url){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var results=new RegExp("[\\?&]"+name+"=([^&#]*)").exec(url);return null==results?"":results[1]}$.prettyPhoto={version:"3.1.2.1"},$.fn.prettyPhoto=function(pp_settings){function _getCurrentPictureLink(){var link=pp_images[set_position];if(0!=link.indexOf("http:")&&0!=link.indexOf("https:")){var myLoc=document.location;link=myLoc.protocol+"//"+myLoc.hostname+(0==link.indexOf("/")?link:"/"+link)}return link}function _changeVk(){if(settings.vk_id){_getCurrentPictureLink();var title=pp_titles[set_position].replace(/'/g,'"');title=title.replace(/"/g,'\\"');var description=pp_descriptions[set_position].replace(/'/g,'"');description=description.replace(/"/g,'\\"'),description="";var i="";$("#vk_likeButton").html("<scr"+i+'ipt type="text/javascript" src="http://vkontakte.ru/js/api/openapi.js?28" charset="windows-1251"></scr'+i+"ipt><scr"+i+'ipt type="text/javascript">VK.init({apiId: '+settings.vk_id+', onlyWidgets: true});VK.Widgets.Like("vk_likeButton", {width: 100, pageTitle: "'+title+'", pageDescription: "'+description+'"});</scr'+i+"ipt>")}}function _changeTwitter(){if(settings.twitter){_getCurrentPictureLink();var i="";$(".pp_social .twitter").html('<a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><scr'+i+'ipt type="text/javascript" src="http://platform.twitter.com/widgets.js"></scr'+i+"ipt>")}}function _changeFacebook(){if(settings.facebook){var link=_getCurrentPictureLink();$(".pp_social .facebook").html('<iframe src="http://www.facebook.com/plugins/like.php?locale=ru_RU&href='+link+'&amp;layout=button_count&amp;show_faces=false&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe>')}}function _showContent(){$(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(windowHeight/2-pp_dimensions.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:pp_dimensions.contentHeight,width:pp_dimensions.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:windowWidth/2-pp_dimensions.containerWidth/2,width:pp_dimensions.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(pp_dimensions.height).width(pp_dimensions.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==_getFileType(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),pp_dimensions.resized?$("a.pp_expand,a.pp_contract").show():$("a.pp_expand").hide(),!settings.autoplay_slideshow||pp_slideshow||pp_open||$.prettyPhoto.startSlideshow(),settings.deeplinking&&setHashtag(),_changeTwitter(),_changeFacebook(),_changeVk(),settings.changepicturecallback(),pp_open=!0}),_insert_gallery()}function _hideContent(callback){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){$(".pp_loaderIcon").show(),callback()})}function _checkPosition(setCount){setCount>1&&settings.show_buttonsBox?$(".pp_nav").show():$(".pp_nav").hide()}function _fitToViewport(width,height){if(resized=!1,_getDimensions(width,height),imageWidth=width,imageHeight=height,(pp_containerWidth>windowWidth||pp_containerHeight>windowHeight)&&doresize&&settings.allow_resize&&!percentBased){for(resized=!0,fitting=!1;!fitting;)pp_containerWidth>windowWidth?(imageWidth=windowWidth-(pp_containerWidth-imageWidth)-100,imageHeight=imageWidth/width*height):pp_containerHeight>windowHeight?(imageHeight=windowHeight-(pp_containerHeight-imageHeight)-50,imageWidth=imageHeight/height*width):fitting=!0,pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;_getDimensions(imageWidth,imageHeight),(pp_containerWidth>windowWidth||pp_containerHeight>windowHeight)&&_fitToViewport(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+2*settings.horizontal_padding,contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized}}function _getDimensions(width,height){width=parseFloat(width),height=parseFloat(height),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(width),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(width),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo($("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),pp_contentHeight=height+detailsHeight,pp_contentWidth=width,pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),pp_containerWidth=width}function _getFileType(itemSrc){return itemSrc.match(/youtube\.com\/watch/i)?"youtube":itemSrc.match(/vimeo\.com/i)?"vimeo":itemSrc.match(/\b.mov\b/i)?"quicktime":itemSrc.match(/\b.swf\b/i)?"flash":itemSrc.match(/\biframe=true\b/i)?"iframe":itemSrc.match(/\bajax=true\b/i)?"ajax":itemSrc.match(/\bcustom=true\b/i)?"custom":"#"==itemSrc.substr(0,1)?"inline":"image"}function _center_overlay(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=_get_scroll(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=windowHeight/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>windowHeight)return;$pp_pic_holder.css({top:projectedTop,left:windowWidth/2+scroll_pos.scrollLeft-contentwidth/2})}}function _get_scroll(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height($(document).height()).width(windowWidth)}function _insert_gallery(){isSet&&settings.overlay_gallery&&"image"==_getFileType(pp_images[set_position])&&settings.ie6_fallback?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((pp_dimensions.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,$.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function _build_overlay(){if(settings.markup=settings.markup.replace("{pp_social}",settings.social_tools&&(settings.twitter||settings.facebook)?settings.social_tools:""),$("body").append(settings.markup),settings.twitter||$(".pp_social .twitter").remove(),settings.facebook||$(".pp_social .facebook").remove(),settings.vk_id||$(".pp_social .vk").remove(),$pp_pic_holder=$(".pp_pic_holder"),$ppt=$(".ppt"),$pp_overlay=$("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var i=0;i<pp_tumbs.length;i++)classname="",img_src=pp_tumbs[i],toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=$(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return $.prettyPhoto.changeGalleryPage("next"),$.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return $.prettyPhoto.changeGalleryPage("previous"),$.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(i){$(this).find("a").click(function(){return $.prettyPhoto.changePage(i),$.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return $.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:$(document).height(),width:$(document).width()}).bind("click",function(){settings.modal||$.prettyPhoto.close()}),$("a.pp_close").bind("click",function(){return $.prettyPhoto.close(),!1}),$("a.pp_expand").bind("click",function(){return $(this).hasClass("pp_expand")?($(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):($(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),_hideContent(function(){$.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return $.prettyPhoto.changePage("previous"),$.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return $.prettyPhoto.changePage("next"),$.prettyPhoto.stopSlideshow(),!1}),_center_overlay()}pp_settings=jQuery.extend({animation_speed:"fast",slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,show_buttonsBox:!0,allow_resize:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"facebook",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t\t{pp_social} \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="javascript: void(0)">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="social"><div class="btn btn-facebook"><a href="javascript:void(0)" class="compartilhar-icone facebook" onclick="return pretty_share_facebook(this);"></a></div><div class="btn btn-twitter"><a href="javascript:void(0)" class="compartilhar-icone twitter" onclick="return pretty_share_twitter(this);"></a></div></div>',twitter:!0,facebook:!0,vk_id:!1},pp_settings);var pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,pp_slideshow,matchedObjects=this,percentBased=!1,windowHeight=$(window).height(),windowWidth=$(window).width();if(doresize=!0,scroll_pos=_get_scroll(),$(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){_center_overlay(),_resize_overlay()}),pp_settings.keyboard_shortcuts&&$(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(e){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(e.keyCode){case 37:$.prettyPhoto.changePage("previous"),e.preventDefault();break;case 39:$.prettyPhoto.changePage("next"),e.preventDefault();break;case 27:settings.modal||$.prettyPhoto.close(),e.preventDefault()}}),$.prettyPhoto.initialize=function(){return settings=pp_settings,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=$(this).attr("rel"),galleryRegExp=/\[(?:.*)\]/,isSet=!!galleryRegExp.exec(theRel),pp_images=isSet?jQuery.map(matchedObjects,function(n){if(-1!=$(n).attr("rel").indexOf(theRel))return $(n).attr("href")}):$.makeArray($(this).attr("href")),pp_tumbs=isSet?jQuery.map(matchedObjects,function(n){if(-1!=$(n).attr("rel").indexOf(theRel))return $(n).find("img").attr("src")}):$.makeArray($(this).find("img").attr("src")),pp_titles=isSet?jQuery.map(matchedObjects,function(n){if(-1!=$(n).attr("rel").indexOf(theRel))return $(n).find("img").attr("alt")?$(n).find("img").attr("alt"):""}):$.makeArray($(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(matchedObjects,function(n){if(-1!=$(n).attr("rel").indexOf(theRel))return $(n).attr("title")?$(n).attr("title"):""}):$.makeArray($(this).attr("title")),set_position=jQuery.inArray($(this).attr("href"),pp_images),rel_index=isSet?set_position:$("a[rel^='"+theRel+"']").index($(this)),_build_overlay(this),settings.allow_resize&&$(window).bind("scroll.prettyphoto",function(){_center_overlay()}),$.prettyPhoto.open(),!1},$.prettyPhoto.open=function(event){return"undefined"==typeof settings&&(settings=pp_settings,pp_images=$.makeArray(arguments[0]),pp_titles=arguments[1]?$.makeArray(arguments[1]):$.makeArray(""),pp_descriptions=arguments[2]?$.makeArray(arguments[2]):$.makeArray(""),isSet=pp_images.length>1,set_position=0,_build_overlay(event.target)),settings.hideflash&&$("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),_checkPosition($(pp_images).size()),$(".pp_loaderIcon").show(),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+$(pp_images).size()),""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(getParam("width",pp_images[set_position]))?getParam("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(getParam("height",pp_images[set_position]))?getParam("height",pp_images[set_position]):settings.default_height.toString(),percentBased=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat($(window).height()*parseFloat(movie_height)/100-150),percentBased=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat($(window).width()*parseFloat(movie_width)/100-150),percentBased=!0),$pp_pic_holder.fadeIn(function(){switch(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;"),imgPreloader="",skipInjection=!1,_getFileType(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<$(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height),_showContent()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),$.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":pp_dimensions=_fitToViewport(movie_width,movie_height),movie="http://www.youtube.com/embed/"+getParam("v",pp_images[set_position]),getParam("rel",pp_images[set_position])?movie+="?rel="+getParam("rel",pp_images[set_position]):movie+="?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions.width).replace(/{height}/g,pp_dimensions.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":pp_dimensions=_fitToViewport(movie_width,movie_height),movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/,match=movie_id.match(regExp);movie="http://player.vimeo.com/video/"+match[2]+"?title=0&amp;byline=0&amp;portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=pp_dimensions.width+"/embed/?moog_width="+pp_dimensions.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions.height).replace(/{path}/g,movie);break;case"quicktime":(pp_dimensions=_fitToViewport(movie_width,movie_height)).height+=15,pp_dimensions.contentHeight+=15,pp_dimensions.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions.width).replace(/{height}/g,pp_dimensions.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":pp_dimensions=_fitToViewport(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions.width).replace(/{height}/g,pp_dimensions.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":pp_dimensions=_fitToViewport(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions.width).replace(/{height}/g,pp_dimensions.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,pp_dimensions=_fitToViewport(movie_width,movie_height),doresize=!0,skipInjection=!0,$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,_showContent()});break;case"custom":pp_dimensions=_fitToViewport(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=$(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show(),doresize=!1,pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height()),doresize=!0,$(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,_showContent())}),!1},$.prettyPhoto.changePage=function(direction){currentGalleryPage=0,"previous"==direction?(set_position--,set_position<0&&(set_position=$(pp_images).size()-1)):"next"==direction?(set_position++,set_position>$(pp_images).size()-1&&(set_position=0)):set_position=direction,rel_index=set_position,doresize||(doresize=!0),$(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),_hideContent(function(){$.prettyPhoto.open()})},$.prettyPhoto.changeGalleryPage=function(direction){"next"==direction?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==direction?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=direction,slide_speed="next"==direction||"previous"==direction?settings.animation_speed:0,slide_to=currentGalleryPage*(itemsPerPage*itemWidth),$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},$.prettyPhoto.startSlideshow=function(){void 0===pp_slideshow?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return $.prettyPhoto.stopSlideshow(),!1}),pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow)):$.prettyPhoto.changePage("next")},$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return $.prettyPhoto.startSlideshow(),!1}),clearInterval(pp_slideshow),pp_slideshow=undefined},$.prettyPhoto.close=function(){if(!$pp_overlay.is(":animated")){if($.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),$("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){$(this).remove()}),location.hash.indexOf("!!")>0){var hash=location.hash.substring(0,location.hash.indexOf("!!"));""!=hash&&"#"!=hash||(hash="!!7"),location.hash=hash}else location.hash="!!7";$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&$("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),$(this).remove(),$(window).unbind("scroll.prettyphoto"),settings.callback(),doresize=!0,pp_open=!1,delete settings})}},!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=!0,hashIndex=getHashtag().replace("[","/").replace("]",""),hashRel=hashIndex;var regex=new RegExp("([^/])+","ig");if(hashRel=regex.exec(hashIndex),hashRel){hashRel=hashRel[0]+"[";var hashName=regex.exec(hashIndex);hashName&&(hashRel+=hashName[0]+"]")}hashIndex=regex.exec(hashIndex),hashIndex&&(hashIndex=hashIndex[0]),setTimeout(function(){$("a[rel^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},100)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",$.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;