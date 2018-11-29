function I18n_translate(){return I18n.t.apply(I18n,arguments)}function components_path(path){return"true"!=get_meta("CD")?"'/"+path+"'":"'"+path+".html'"}function get_image_path(login,image,area){return area?"/userfiles/"+login.charAt(0)+"/"+login+"/imagens/"+area+"/"+image:"/userfiles/"+login.charAt(0)+"/"+login+"/imagens/"+image}function image_thumb(image,options){var scale=1;0==options.scale&&(scale=options.scale);var crop=1;0==options.crop&&(crop=options.crop);var use=0;0!=options.use&&(use=options.use);var width=0;options.width&&(width=options.width);var height=0;options.height&&(height=options.height);var min_width=0;options.min_width&&(min_width=options.min_width);var min_height=0;options.min_height&&(min_height=options.min_height);var where="";return options.where&&(where=options.where),"/images/thumb?scale="+scale+"&crop="+crop+"&use="+use+"&where="+where+"&width="+width+"&height="+height+"&min_width="+min_width+"&min_height="+min_height+"&img=/produtos/"+image}function user_image_thumb(image,options){var login=options.login,scale=1;"scale"in options&&(scale=options.scale);var crop=1;"crop"in options&&(crop=options.crop);var width=0;"width"in options&&(width=options.width);var height=0;"height"in options&&(height=options.height);var min_width=0;"min_width"in options&&(min_width=options.min_width);var min_height=0;"min_height"in options&&(min_height=options.min_height);var effect=0;"effect"in options&&(effect=options.effect);var where="";"where"in options&&(where=options.where);var left=0;options.left&&(left=options.left);var top=0;options.top&&(top=options.top);var use=0;return options.use&&(use=options.use),"/images/thumb/"+scale+"/"+crop+"/"+where+"/"+width+"/"+height+"/"+min_width+"/"+min_height+"/"+effect+"/"+left+"/"+top+"/"+use+"/"+login.charAt(0)+"/"+login+"/"+image}function photos_image_thumb(image,options){return user_image_thumb("imagens/album/"+image,options)}function store_image_thumb(image,options){var scale=1;0==options.scale&&(scale=options.scale);var crop=1;0==options.crop&&(crop=options.crop);var where="";options.where&&(where=options.where);var width=0;options.width&&(width=options.width);var height=0;options.height&&(height=options.height);var min_width=0;options.min_width&&(min_width=options.min_width);var min_height=0;options.min_height&&(min_height=options.min_height);var effect=0;options.effect&&(effect=options.effect);var left=0;options.left&&(left=options.left);var top=0;options.top&&(top=options.top);var use=0;return options.use&&(use=options.use),"/images/thumb/"+scale+"/"+crop+"/"+where+"/"+width+"/"+height+"/"+min_width+"/"+min_height+"/"+effect+"/"+left+"/"+top+"/"+use+"/"+image}function getParameterByName(name,url){name=name.replace(/[\[\]]/g,"\\$&");var results=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)").exec(url);return results?results[2]?decodeURIComponent(results[2].replace(/\+/g," ")):"":null}function getMetaContent(name,attribute){if("undefined"!=typeof document)return document.querySelector("meta[name='"+name+"']").getAttribute(attribute)}function setCookie(cname,cvalue,exdays){if("undefined"!=typeof document){var d=new Date;d.setTime(d.getTime()+24*exdays*60*60*1e3);var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}}function getCookie(cname){if("undefined"!=typeof document){for(var name=cname+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(name))return c.substring(name.length,c.length)}return""}}function get_format_date(){return"pt_br"==I18n.locale?"DD[/]MM[/]YYYY":"MM[/]DD[/]YYYY"}function get_hours(date){return moment(date).hour()}function get_minutes(date){return moment(date).minutes()}function date_format(date,format,locale){return"UTC"==locale?moment.utc(date).format(format):moment(date).format(format)}function sortByKey(array,key,key2){return array.sort(function(a,b){var x=a[key][key2],y=b[key][key2];return x<y?-1:x>y?1:0})}function normalize_url_video(url_video){return/^([a-zA-Z0-9_\-+]{11})$/.test(url_video)?"http://www.youtube.com/embed/"+url_video:/www.youtube.com\/embed/.test(url_video)||/http(s)?:\/\/vimeo.com/.test(url_video)?/http(s)?:\/\/vimeo.com/.test(url_video)?url_video.replace(/http(s)?:\/\/vimeo\.com\/(.*)/g,"https://player.vimeo.com/video/$2"):url_video:url_video.replace(/http(s)?\:\/\/(www\.youtube\.com|youtu\.be\/)(\/watch\?v\=)?([a-zA-Z0-9_\-+]{11})($|\&(.*))/g,"http://www.youtube.com/embed/$4")}function currency_format(value,format){return Globalize.format(value,format)}try{EJS.Helpers.prototype.I18n_translate=I18n_translate}catch(e){}try{EJS.Helpers.prototype.components_path=components_path}catch(e){}try{EJS.Helpers.prototype.get_image_path=get_image_path}catch(e){}try{EJS.Helpers.prototype.image_thumb=image_thumb}catch(e){}try{EJS.Helpers.prototype.user_image_thumb=user_image_thumb}catch(e){}try{EJS.Helpers.prototype.photos_image_thumb=photos_image_thumb}catch(e){}try{EJS.Helpers.prototype.store_image_thumb=store_image_thumb}catch(e){}try{EJS.Helpers.prototype.date_format=date_format,EJS.Helpers.prototype.get_hours=get_hours,EJS.Helpers.prototype.get_minutes=get_minutes,EJS.Helpers.prototype.getParameterByName=getParameterByName,EJS.Helpers.prototype.getMetaContent=getMetaContent,EJS.Helpers.prototype.setCookie=setCookie,EJS.Helpers.prototype.getCookie=getCookie,EJS.Helpers.prototype.normalize_url_video=normalize_url_video,EJS.Helpers.prototype.sortByKey=sortByKey}catch(e){}var number_format=currency_format;try{EJS.Helpers.prototype.currency_format=currency_format,EJS.Helpers.prototype.number_format=number_format}catch(e){}