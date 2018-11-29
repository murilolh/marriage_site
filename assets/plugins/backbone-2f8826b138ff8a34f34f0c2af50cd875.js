(function(){var e,t=this,a=t.Backbone,n=[],i=n.push,r=n.slice,s=n.splice;e="undefined"!=typeof exports?exports:t.Backbone={},e.VERSION="0.9.10";var o=t._;o||"undefined"==typeof require||(o=require("underscore")),e.$=t.jQuery||t.Zepto||t.ender,e.noConflict=function(){return t.Backbone=a,this},e.emulateHTTP=!1,e.emulateJSON=!1;var d=/\s+/,l=function(e,t,a,n){if(!a)return!0;if("object"==typeof a)for(var i in a)e[t].apply(e,[i,a[i]].concat(n));else{if(!d.test(a))return!0;for(var r=a.split(d),s=0,o=r.length;o>s;s++)e[t].apply(e,[r[s]].concat(n))}},m=function(e,t){var a,n=-1,i=e.length,r=t[0],s=t[1],o=t[2];switch(t.length){case 0:for(;++n<i;)(a=e[n]).callback.call(a.ctx);return;case 1:for(;++n<i;)(a=e[n]).callback.call(a.ctx,r);return;case 2:for(;++n<i;)(a=e[n]).callback.call(a.ctx,r,s);return;case 3:for(;++n<i;)(a=e[n]).callback.call(a.ctx,r,s,o);return;default:for(;++n<i;)(a=e[n]).callback.apply(a.ctx,t)}},u=e.Events={on:function(e,t,a){if(!l(this,"on",e,[t,a])||!t)return this;this._events||(this._events={});var n=this._events[e]||(this._events[e]=[]);return n.push({callback:t,context:a,ctx:a||this}),this},once:function(e,t,a){if(!l(this,"once",e,[t,a])||!t)return this;var n=this,i=o.once(function(){n.off(e,i),t.apply(this,arguments)});return i._callback=t,this.on(e,i,a)},off:function(e,t,a){var n,i,r,s,d,m,u,c;if(!this._events||!l(this,"off",e,[t,a]))return this;if(!e&&!t&&!a)return this._events={},this;for(s=e?[e]:o.keys(this._events),d=0,m=s.length;m>d;d++)if(e=s[d],r=this._events[e]){if(this._events[e]=n=[],t||a)for(u=0,c=r.length;c>u;u++)i=r[u],(t&&t!==i.callback&&t!==i.callback._callback||a&&a!==i.context)&&n.push(i);n.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=r.call(arguments,1);if(!l(this,"trigger",e,t))return this;var a=this._events[e],n=this._events.all;return a&&m(a,t),n&&m(n,arguments),this},stopListening:function(e,t,a){var n=this._listeners;if(!n)return this;if(e)e.off(t,"object"==typeof t?this:a,this),t||a||delete n[e._listenerId];else{"object"==typeof t&&(a=this);for(var i in n)n[i].off(t,a,this);this._listeners={}}return this}},c={listenTo:"on",listenToOnce:"once"};o.each(c,function(e,t){u[t]=function(t,a,n){var i=this._listeners||(this._listeners={}),r=t._listenerId||(t._listenerId=o.uniqueId("l"));return i[r]=t,t[e](a,"object"==typeof a?this:n,this),this}}),u.bind=u.on,u.unbind=u.off,o.extend(e,u);var h=e.Model=function(e,t){var a,n=e||{};this.cid=o.uniqueId("c"),this.attributes={},t&&t.collection&&(this.collection=t.collection),t&&t.parse&&(n=this.parse(n,t)||{}),(a=o.result(this,"defaults"))&&(n=o.defaults({},n,a)),this.set(n,t),this.changed={},this.initialize.apply(this,arguments)};o.extend(h.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return o.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return o.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,a){var n,i,r,s,d,l,m,u;if(null==e)return this;if("object"==typeof e?(i=e,a=t):(i={})[e]=t,a||(a={}),!this._validate(i,a))return!1;r=a.unset,d=a.silent,s=[],l=this._changing,this._changing=!0,l||(this._previousAttributes=o.clone(this.attributes),this.changed={}),u=this.attributes,m=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(n in i)t=i[n],o.isEqual(u[n],t)||s.push(n),o.isEqual(m[n],t)?delete this.changed[n]:this.changed[n]=t,r?delete u[n]:u[n]=t;if(!d){s.length&&(this._pending=!0);for(var c=0,h=s.length;h>c;c++)this.trigger("change:"+s[c],this,u[s[c]],a)}if(l)return this;if(!d)for(;this._pending;)this._pending=!1,this.trigger("change",this,a);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,o.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var a in this.attributes)t[a]=void 0;return this.set(t,o.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!o.isEmpty(this.changed):o.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?o.clone(this.changed):!1;var t,a=!1,n=this._changing?this._previousAttributes:this.attributes;for(var i in e)o.isEqual(n[i],t=e[i])||((a||(a={}))[i]=t);return a},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return o.clone(this._previousAttributes)},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success;return e.success=function(e,a,n){return e.set(e.parse(a,n),n)?void(t&&t(e,a,n)):!1},this.sync("read",this,e)},save:function(e,t,a){var n,i,r,s,d=this.attributes;return null==e||"object"==typeof e?(n=e,a=t):(n={})[e]=t,!n||a&&a.wait||this.set(n,a)?(a=o.extend({validate:!0},a),this._validate(n,a)?(n&&a.wait&&(this.attributes=o.extend({},d,n)),void 0===a.parse&&(a.parse=!0),i=a.success,a.success=function(e,t,a){e.attributes=d;var r=e.parse(t,a);return a.wait&&(r=o.extend(n||{},r)),o.isObject(r)&&!e.set(r,a)?!1:void(i&&i(e,t,a))},r=this.isNew()?"create":a.patch?"patch":"update","patch"===r&&(a.attrs=n),s=this.sync(r,this,a),n&&a.wait&&(this.attributes=d),s):!1):!1},destroy:function(e){e=e?o.clone(e):{};var t=this,a=e.success,n=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(e,t,i){(i.wait||e.isNew())&&n(),a&&a(e,t,i)},this.isNew())return e.success(this,null,e),!1;var i=this.sync("delete",this,e);return e.wait||n(),i},url:function(){var e=o.result(this,"urlRoot")||o.result(this.collection,"url")||I();return this.isNew()?e:e+("/"===e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(e){return!this.validate||!this.validate(this.attributes,e)},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=o.extend({},this.attributes,e);var a=this.validationError=this.validate(e,t)||null;return a?(this.trigger("invalid",this,a,t||{}),!1):!0}});var p=e.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,o.extend({silent:!0},t))};o.extend(p.prototype,u,{model:h,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return e.sync.apply(this,arguments)},add:function(e,t){e=o.isArray(e)?e.slice():[e],t||(t={});var a,n,r,d,l,m,u,c,h,p;for(u=[],c=t.at,h=this.comparator&&null==c&&t.sort!==!1,p=o.isString(this.comparator)?this.comparator:null,a=0,n=e.length;n>a;a++)(r=this._prepareModel(d=e[a],t))?(l=this.get(r))?t.merge&&(l.set(d===r?r.attributes:d,t),h&&!m&&l.hasChanged(p)&&(m=!0)):(u.push(r),r.on("all",this._onModelEvent,this),this._byId[r.cid]=r,null!=r.id&&(this._byId[r.id]=r)):this.trigger("invalid",this,d,t);if(u.length&&(h&&(m=!0),this.length+=u.length,null!=c?s.apply(this.models,[c,0].concat(u)):i.apply(this.models,u)),m&&this.sort({silent:!0}),t.silent)return this;for(a=0,n=u.length;n>a;a++)(r=u[a]).trigger("add",r,this,t);return m&&this.trigger("sort",this,t),this},remove:function(e,t){e=o.isArray(e)?e.slice():[e],t||(t={});var a,n,i,r;for(a=0,n=e.length;n>a;a++)r=this.get(e[a]),r&&(delete this._byId[r.id],delete this._byId[r.cid],i=this.indexOf(r),this.models.splice(i,1),this.length--,t.silent||(t.index=i,r.trigger("remove",r,this,t)),this._removeReference(r));return this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){return null==e?void 0:(this._idAttr||(this._idAttr=this.model.prototype.idAttribute),this._byId[e.id||e.cid||e[this._idAttr]||e])},at:function(e){return this.models[e]},where:function(e,t){return o.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var a in e)if(e[a]!==t.get(a))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),o.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(o.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return o.invoke(this.models,"get",e)},update:function(e,t){t=o.extend({add:!0,merge:!0,remove:!0},t),t.parse&&(e=this.parse(e,t));var a,n,i,r,s=[],d=[],l={};if(o.isArray(e)||(e=e?[e]:[]),t.add&&!t.remove)return this.add(e,t);for(n=0,i=e.length;i>n;n++)a=e[n],r=this.get(a),t.remove&&r&&(l[r.cid]=!0),(t.add&&!r||t.merge&&r)&&s.push(a);if(t.remove)for(n=0,i=this.models.length;i>n;n++)a=this.models[n],l[a.cid]||d.push(a);return d.length&&this.remove(d,t),s.length&&this.add(s,t),this},reset:function(e,t){t||(t={}),t.parse&&(e=this.parse(e,t));for(var a=0,n=this.models.length;n>a;a++)this._removeReference(this.models[a]);return t.previousModels=this.models,this._reset(),e&&this.add(e,o.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success;return e.success=function(e,a,n){var i=n.update?"update":"reset";e[i](a,n),t&&t(e,a,n)},this.sync("read",this,e)},create:function(e,t){if(t=t?o.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var a=this,n=t.success;return t.success=function(e,t,i){i.wait&&a.add(e,i),n&&n(e,t,i)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof h)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var a=new this.model(e,t);return a._validate(e,t)?a:!1},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,a,n){("add"!==e&&"remove"!==e||a===this)&&("destroy"===e&&this.remove(t,n),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))},sortedIndex:function(e,t,a){t||(t=this.comparator);var n=o.isFunction(t)?t:function(e){return e.get(t)};return o.sortedIndex(this.models,e,n,a)}});var f=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];o.each(f,function(e){p.prototype[e]=function(){var t=r.call(arguments);return t.unshift(this.models),o[e].apply(o,t)}});var y=["groupBy","countBy","sortBy"];o.each(y,function(e){p.prototype[e]=function(t,a){var n=o.isFunction(t)?t:function(e){return e.get(t)};return o[e](this.models,n,a)}});var g=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},M=/\((.*?)\)/g,b=/(\(\?)?:\w+/g,v=/\*\w+/g,_=/[\-{}\[\]+?.,\\\^$|#\s]/g;o.extend(g.prototype,u,{initialize:function(){},route:function(t,a,n){return o.isRegExp(t)||(t=this._routeToRegExp(t)),n||(n=this[a]),e.history.route(t,o.bind(function(i){var r=this._extractParameters(t,i);n&&n.apply(this,r),this.trigger.apply(this,["route:"+a].concat(r)),this.trigger("route",a,r),e.history.trigger("route",this,a,r)},this)),this},navigate:function(t,a){return e.history.navigate(t,a),this},_bindRoutes:function(){if(this.routes)for(var e,t=o.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(_,"\\$&").replace(M,"(?:$1)?").replace(b,function(e,t){return t?e:"([^/]+)"}).replace(v,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var w=e.History=function(){this.handlers=[],o.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},k=/^[#\/]|\s+$/g,A=/^\/+|\/+$/g,x=/msie [\w.]+/,j=/\/$/;w.started=!1,o.extend(w.prototype,u,{interval:50,getHash:function(e){var t="",a=(e||this).location.href.match(/#(.*)$/);return a&&(t=a[1],t.indexOf("!!")>=0&&(t=t.substring(0,t.indexOf("!!")))),t},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var a=this.root.replace(j,"");e.indexOf(a)||(e=e.substr(a.length))}else if(e=this.getHash(),""==e){e=this.location.pathname;var a=this.root.replace(j,"");e.indexOf(a)||(e=e.substr(a.length))}return e.replace(k,"")},start:function(t){if(w.started)throw new Error("Backbone.history has already been started");w.started=!0,this.options=o.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var a=this.getFragment(),n=document.documentMode,i=x.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);this.root=("/"+this.root+"/").replace(A,"/"),i&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=a;var r=this.location,s=r.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s){if(this.fragment=this.getFragment(null,!0),!this.location.hash||""==this.location.hash||this.location.hash.indexOf("#!!")>=0){var d="";this.location.hash.indexOf("#!!")>=0&&(d="!!"+this.location.hash.substr(this.location.hash.indexOf("#!!")+3)),this.location.hash="#"+this.fragment+d}}else if(this._wantsPushState&&this._hasPushState&&s&&r.hash)this.fragment=this.getHash().replace(k,""),this.history.replaceState({},document.title,this.root+this.fragment+r.search);else if(this._wantsHashChange&&!this._wantsPushState&&(this.fragment=this.getFragment(null,!0),!this.location.hash||""==this.location.hash||this.location.hash.indexOf("#!!")>=0)){var d="";this.location.hash.indexOf("#!!")>=0&&(d="!!"+this.location.hash.substr(this.location.hash.indexOf("#!!")+3)),this.location.hash="#"+this.fragment+d}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),w.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(e){var t=this.fragment=this.getFragment(e),a=o.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0});return a},navigate:function(e,t){if(!w.started)return!1;if(t&&t!==!0||(t={trigger:t}),e=this.getFragment(e||""),this.fragment!==e){this.fragment=e;var a=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,a);else{if(!this._wantsHashChange)return this.location.assign(a);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)}},_updateHash:function(e,t,a){e.hash="#"+t}}),e.history=new w;var C=e.View=function(e){this.cid=o.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},D=/^(\S+)\s*(.*)$/,S=["model","collection","el","id","attributes","className","tagName","events"];o.extend(C.prototype,u,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,a){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],a!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=o.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var a=e[t];if(o.isFunction(a)||(a=this[e[t]]),!a)throw new Error('Method "'+e[t]+'" does not exist');var n=t.match(D),i=n[1],r=n[2];a=o.bind(a,this),i+=".delegateEvents"+this.cid,""===r?this.$el.on(i,a):this.$el.on(i,r,a)}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=o.extend({},o.result(this,"options"),e)),o.extend(this,o.pick(e,S)),this.options=e},_ensureElement:function(){if(this.el)this.setElement(o.result(this,"el"),!1);else{var t=o.extend({},o.result(this,"attributes"));this.id&&(t.id=o.result(this,"id")),this.className&&(t["class"]=o.result(this,"className"));var a=e.$("<"+o.result(this,"tagName")+">").attr(t);this.setElement(a,!1)}}});var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.sync=function(t,a,n){var i=T[t];o.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var r={type:i,dataType:"json"};if(n.url||(r.url=o.result(a,"url")||I()),null!=n.data||!a||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(n.attrs||a.toJSON(n))),n.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),n.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){r.type="POST",n.emulateJSON&&(r.data._method=i);var s=n.beforeSend;n.beforeSend=function(e){return e.setRequestHeader("X-HTTP-Method-Override",i),s?s.apply(this,arguments):void 0}}"GET"===r.type||n.emulateJSON||(r.processData=!1);var d=n.success;n.success=function(e){d&&d(a,e,n),a.trigger("sync",a,e,n)};var l=n.error;n.error=function(e){l&&l(a,e,n),a.trigger("error",a,e,n)};var m=n.xhr=e.ajax(o.extend(r,n));return a.trigger("request",a,m,n),m},e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var H=function(e,t){var a,n=this;a=e&&o.has(e,"constructor")?e.constructor:function(){return n.apply(this,arguments)},o.extend(a,n,t);var i=function(){this.constructor=a};return i.prototype=n.prototype,a.prototype=new i,e&&o.extend(a.prototype,e),a.__super__=n.prototype,a};h.extend=p.extend=g.extend=C.extend=w.extend=H;var I=function(){throw new Error('A "url" property or function must be specified')}}).call(this);