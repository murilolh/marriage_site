/*!
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
!function($,window,undefined){"$:nomunge";function loopy(){timeout_id=window[str_setTimeout](function(){elems.each(function(){var elem=$(this),width=elem.width(),height=elem.height(),data=$.data(this,str_data);width===data.w&&height===data.h||elem.trigger(str_resize,[data.w=width,data.h=height])}),loopy()},jq_resize[str_delay])}var timeout_id,elems=$([]),jq_resize=$.resize=$.extend($.resize,{}),str_setTimeout="setTimeout",str_resize="resize",str_data=str_resize+"-special-event",str_delay="delay",str_throttle="throttleWindow";jq_resize[str_delay]=250,jq_resize[str_throttle]=!0,$.event.special[str_resize]={setup:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout])return!1;var elem=$(this);elems=elems.add(elem),$.data(this,str_data,{w:elem.width(),h:elem.height()}),1===elems.length&&loopy()},teardown:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout])return!1;var elem=$(this);elems=elems.not(elem),elem.removeData(str_data),elems.length||clearTimeout(timeout_id)},add:function(handleObj){function new_handler(e,w,h){var elem=$(this),data=$.data(this,str_data);data.w=w!==undefined?w:elem.width(),data.h=h!==undefined?h:elem.height(),old_handler.apply(this,arguments)}return!(!jq_resize[str_throttle]&&this[str_setTimeout])&&($.isFunction(handleObj)?(old_handler=handleObj,new_handler):(old_handler=handleObj.handler,void(handleObj.handler=new_handler)));var old_handler}}}(jQuery,this);