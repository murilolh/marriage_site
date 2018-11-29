!function(e,t){function n(e){return!e||void 0!==e.allowPageScroll||void 0===e.swipe&&void 0===e.swipeStatus||(e.allowPageScroll=c),e||(e={}),e=jQuery.extend({},jQuery.fn.swipe.defaults,e),this.each(function(){var t=jQuery(this),n=t.data(w);n||(n=new a(this,e),t.data(w,n))})}function a(e,t){function n(e){if(!(P()||jQuery(e.target).closest(t.excludedElements,Z).length>0)){e=e.originalEvent;var n,r=_?e.touches[0]:e;return ee=y,_?te=e.touches.length:e.preventDefault(),W=0,V=null,X=null,Q=0,U=0,J=0,K=1,ne=O(),!_||te===t.fingers||t.fingers===f||L()?(ne[0].start.x=ne[0].end.x=r.pageX,ne[0].start.y=ne[0].end.y=r.pageY,ae=z(),2==te&&(ne[1].start.x=ne[1].end.x=e.touches[1].pageX,ne[1].start.y=ne[1].end.y=e.touches[1].pageY,U=J=D(ne[0].start,ne[1].start)),(t.swipeStatus||t.pinchStatus)&&(n=x(e,ee))):(v(e),n=!1),n===!1?(ee=b,x(e,ee),n):(E(!0),Z.bind(R,a),Z.bind(B,i),void 0)}}function a(e){if(e=e.originalEvent,ee!==M&&ee!==b){var n,a=_?e.touches[0]:e;if(ne[0].end.x=_?e.touches[0].pageX:a.pageX,ne[0].end.y=_?e.touches[0].pageY:a.pageY,ie=z(),V=N(ne[0].start,ne[0].end),_&&(te=e.touches.length),ee=g,2==te&&(0==U?(ne[1].start.x=e.touches[1].pageX,ne[1].start.y=e.touches[1].pageY,U=J=D(ne[0].start,ne[1].start)):(ne[1].end.x=e.touches[1].pageX,ne[1].end.y=e.touches[1].pageY,J=D(ne[0].end,ne[1].end),X=T(ne[0].end,ne[1].end)),K=j(U,J)),te!==t.fingers&&t.fingers!==f&&_)ee=b,x(e,ee);else if(A(e,V),W=I(ne[0].start,ne[0].end),Q=S(ne[0].start,ne[0].end),(t.swipeStatus||t.pinchStatus)&&(n=x(e,ee)),!t.triggerOnTouchEnd){var i=!C();k()===!0?(ee=M,n=x(e,ee)):i&&(ee=b,x(e,ee))}n===!1&&(ee=b,x(e,ee))}}function i(e){if(e=e.originalEvent,e.touches&&e.touches.length>0)return!0;if(e.preventDefault(),ie=z(),0!=U&&(J=D(ne[0].end,ne[1].end),K=j(U,J),X=T(ne[0].end,ne[1].end)),W=I(ne[0].start,ne[0].end),V=N(ne[0].start,ne[0].end),Q=S(),t.triggerOnTouchEnd||t.triggerOnTouchEnd===!1&&ee===g){ee=M;var n=F()||!L(),r=te===t.fingers||t.fingers===f||!_,s=0!==ne[0].end.x,o=r&&s&&n;if(o){var l=C(),d=k();d!==!0&&null!==d||!l?l&&d!==!1||(ee=b,x(e,ee)):x(e,ee)}else ee=b,x(e,ee)}else ee===g&&(ee=b,x(e,ee));Z.unbind(R,a,!1),Z.unbind(B,i,!1),E(!1)}function v(){te=0,ie=0,ae=0,U=0,J=0,K=1,E(!1)}function x(e,n){var a=void 0;if(t.swipeStatus&&(a=t.swipeStatus.call(Z,e,n,V||null,W||0,Q||0,te)),t.pinchStatus&&F()&&(a=t.pinchStatus.call(Z,e,n,X||null,J||0,Q||0,te,K)),n===b&&(!t.click||1!==te&&_||!isNaN(W)&&0!==W||(a=t.click.call(Z,e,e.target))),n==M){switch(t.swipe&&(a=t.swipe.call(Z,e,V,W,Q,te)),V){case r:t.swipeLeft&&(a=t.swipeLeft.call(Z,e,V,W,Q,te));break;case s:t.swipeRight&&(a=t.swipeRight.call(Z,e,V,W,Q,te));break;case o:t.swipeUp&&(a=t.swipeUp.call(Z,e,V,W,Q,te));break;case l:t.swipeDown&&(a=t.swipeDown.call(Z,e,V,W,Q,te))}switch(X){case d:t.pinchIn&&(a=t.pinchIn.call(Z,e,X||null,J||0,Q||0,te,K));break;case u:t.pinchOut&&(a=t.pinchOut.call(Z,e,X||null,J||0,Q||0,te,K))}}return(n===b||n===M)&&v(e),a}function k(){return null!==t.threshold?W>=t.threshold:null}function C(){var e;return e=t.maxTimeThreshold&&Q>=t.maxTimeThreshold?!1:!0}function A(e,n){if(t.allowPageScroll===c||L())e.preventDefault();else{var a=t.allowPageScroll===m;switch(n){case r:(t.swipeLeft&&a||!a&&t.allowPageScroll!=h)&&e.preventDefault();break;case s:(t.swipeRight&&a||!a&&t.allowPageScroll!=h)&&e.preventDefault();break;case o:(t.swipeUp&&a||!a&&t.allowPageScroll!=p)&&e.preventDefault();break;case l:(t.swipeDown&&a||!a&&t.allowPageScroll!=p)&&e.preventDefault()}}}function S(){return ie-ae}function D(e,t){var n=Math.abs(e.x-t.x),a=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+a*a))}function j(e,t){var n=t/e*1;return n.toFixed(2)}function T(){return 1>K?u:d}function I(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}function H(e,t){var n=e.x-t.x,a=t.y-e.y,i=Math.atan2(a,n),r=Math.round(180*i/Math.PI);return 0>r&&(r=360-Math.abs(r)),r}function N(e,t){var n=H(e,t);return 45>=n&&n>=0?r:360>=n&&n>=315?r:n>=135&&225>=n?s:n>45&&135>n?l:o}function z(){var e=new Date;return e.getTime()}function $(){Z.unbind(q,n),Z.unbind(G,v),Z.unbind(R,a),Z.unbind(B,i),E(!1)}function L(){return t.pinchStatus||t.pinchIn||t.pinchOut}function F(){return X&&L()}function P(){return Z.data(w+"_intouch")===!0?!0:!1}function E(e){e=e===!0?!0:!1,Z.data(w+"_intouch",e)}function O(){for(var e=[],t=0;5>=t;t++)e.push({start:{x:0,y:0},end:{x:0,y:0},delta:{x:0,y:0}});return e}var Y=_||!t.fallbackToMouseEvents,q=Y?"touchstart":"mousedown",R=Y?"touchmove":"mousemove",B=Y?"touchend":"mouseup",G="touchcancel",W=0,V=null,Q=0,U=0,J=0,K=1,X=0,Z=jQuery(e),ee="start",te=0,ne=null,ae=0,ie=0;try{Z.bind(q,n),Z.bind(G,v)}catch(re){jQuery.error("events not supported "+q+","+G+" on jQuery.swipe")}this.enable=function(){return Z.bind(q,n),Z.bind(G,v),Z},this.disable=function(){return $(),Z},this.destroy=function(){return $(),Z.data(w,null),Z}}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,a,i){return jQuery.easing[jQuery.easing.def](e,t,n,a,i)},easeInQuad:function(e,t,n,a,i){return a*(t/=i)*t+n},easeOutQuad:function(e,t,n,a,i){return-a*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,i){return a*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,a,i){return a*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,i){return a*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,a,i){return-a*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,i){return a*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,i){return a*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,i){return-a*Math.cos(t/i*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,i){return a*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,i){return-a/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,a,i){return 0==t?n:a*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,a,i){return t==i?n+a:a*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,a,i){return 0==t?n:t==i?n+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,a,i){return-a*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,a,i){return a*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,a,i){return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,i){var r=1.70158,s=0,o=a;if(0==t)return n;if(1==(t/=i))return n+a;if(s||(s=.3*i),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return-(o*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-r)*Math.PI/s))+n},easeOutElastic:function(e,t,n,a,i){var r=1.70158,s=0,o=a;if(0==t)return n;if(1==(t/=i))return n+a;if(s||(s=.3*i),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return o*Math.pow(2,-10*t)*Math.sin(2*(t*i-r)*Math.PI/s)+a+n},easeInOutElastic:function(e,t,n,a,i){var r=1.70158,s=0,o=a;if(0==t)return n;if(2==(t/=i/2))return n+a;if(s||(s=.3*i*1.5),o<Math.abs(a)){o=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/o);return 1>t?-.5*o*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-r)*Math.PI/s)+n:o*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*i-r)*Math.PI/s)*.5+a+n},easeInBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),a*(t/=i)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),a*((t=t/i-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,a,i,r){return void 0==r&&(r=1.70158),(t/=i/2)<1?a/2*t*t*(((r*=1.525)+1)*t-r)+n:a/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n},easeInBounce:function(e,t,n,a,i){return a-jQuery.easing.easeOutBounce(e,i-t,0,a,i)+n},easeOutBounce:function(e,t,n,a,i){return(t/=i)<1/2.75?7.5625*a*t*t+n:2/2.75>t?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,a,i){return i/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,a,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,a,i)+.5*a+n}}),e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]},e.expr[":"].uncached=function(t){if(""!=t.src){var n=document.createElement("img");n.src=t.src}return e(t).is('img[src!=""]')&&!n.complete},e.fn.waitForImages=function(t,n,a){if(e.isPlainObject(arguments[0])&&(n=t.each,a=t.waitForAll,t=t.finished),t=t||e.noop,n=n||e.noop,a=!!a,!e.isFunction(t)||!e.isFunction(n))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=e(this),r=[];if(a){var s=e.waitForImages.hasImageProperties||[],o=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);t.is("img:uncached")&&r.push({src:t.attr("src"),element:t[0]}),e.each(s,function(e,n){var a=t.css(n);if(!a)return!0;for(var i;i=o.exec(a);)r.push({src:i[2],element:t[0]})})})}else i.find("img:uncached").each(function(){r.push({src:this.src,element:this})});var l=r.length,d=0;0==l&&t.call(i[0]),e.each(r,function(a,r){var s=new Image;e(s).bind("load error",function(e){return d++,n.call(r.element,d,l,"load"==e.type),d==l?(t.call(i[0]),!1):void 0}),s.src=r.src})})};var t=["Webkit","Moz","O","Ms","Khtml",""],i=["borderRadius","boxShadow","userSelect","transformOrigin","transformStyle","transition","transitionDuration","transitionProperty","transitionTimingFunction","backgroundOrigin","backgroundSize","animation","filter","zoom","columns","perspective","perspectiveOrigin","appearance"];e.fn.cssSetQueue=function(t,n){v=this;var a=v.data("cssQueue")?v.data("cssQueue"):[],i=v.data("cssCall")?v.data("cssCall"):[],r=0,s={};for(e.each(n,function(e,t){s[e]=t});;){if(!i[r]){i[r]=s.complete;break}r++}s.complete=r,a.push([t,s]),v.data({cssQueue:a,cssRunning:!0,cssCall:i})},e.fn.cssRunQueue=function(){v=this;var e=v.data("cssQueue")?v.data("cssQueue"):[];e[0]?v.cssEngine(e[0][0],e[0][1]):v.data("cssRunning",!1),e.shift(),v.data("cssQueue",e)},e.cssMerge=function(t,n,a){return e.each(n,function(n,i){e.each(a,function(e,a){t[a+n]=i})}),t},e.fn.cssAnimationData=function(e,t){var n=this,a=n.data("cssAnimations");return a||(a={}),a[e]||(a[e]=[]),a[e].push(t),n.data("cssAnimations",a),a[e]},e.fn.cssAnimationRemove=function(){var t=this;if(void 0!=t.data("cssAnimations")){var n=t.data("cssAnimations"),a=t.data("identity");e.each(n,function(e,t){n[e]=t.splice(a+1,1)}),t.data("cssAnimations",n)}},e.css3D=function(n){e("body").data("cssPerspective",isFinite(n)?n:n?1e3:0).cssOriginal(e.cssMerge({},{TransformStyle:n?"preserve-3d":"flat"},t))},e.cssPropertySupporter=function(n){return e.each(i,function(a,i){n[i]&&e.each(t,function(e,t){var a=i.substr(0,1);n[t+a[t?"toUpperCase":"toLowerCase"]()+i.substr(1)]=n[i]})}),n},e.cssAnimateSupport=function(){var n=!1;return e.each(t,function(e,t){n=void 0!==document.body.style[t+"AnimationName"]?!0:n}),n},e.fn.cssEngine=function(n,a){function i(e){return String(e).replace(/([A-Z])/g,"-jQuery1").toLowerCase()}var r=this,r=this;"number"==typeof a.complete&&r.data("cssCallIndex",a.complete);var s={linear:"linear",swing:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"},o={},l=e("body").data("cssPerspective");n.transform&&e.each(t,function(e,t){var a=t+(t?"T":"t")+"ransform",s=r.cssOriginal(i(a)),d=n.transform;s&&"none"!=s||(o[a]="scale(1)"),n[a]=(l&&!/perspective/gi.test(d)?"perspective("+l+") ":"")+d}),n=e.cssPropertySupporter(n);var d=[];e.each(n,function(e,t){d.push(i(e))});var u=!1,c=[],m=[];if(void 0!=d){for(var h=0;h<d.length;h++){c.push(String(a.duration/1e3)+"s");var p=s[a.easing];m.push(p?p:a.easing)}c=r.cssAnimationData("dur",c.join(", ")).join(", "),m=r.cssAnimationData("eas",m.join(", ")).join(", ");var f=r.cssAnimationData("prop",d.join(", "));r.data("identity",f.length-1),f=f.join(", ");var y={TransitionDuration:c,TransitionProperty:f,TransitionTimingFunction:m},g={};g=e.cssMerge(g,y,t);var v=n;e.extend(g,n),"callbackHide"==g.display?u=!0:g.display&&(o.display=g.display),r.cssOriginal(o)}setTimeout(function(){r.cssOriginal(g);var t=r.data("runningCSS");t=t?e.extend(t,v):v,r.data("runningCSS",t),setTimeout(function(){r.data("cssCallIndex","a"),u&&r.cssOriginal("display","none"),r.cssAnimationRemove(),a.queue&&r.cssRunQueue(),"number"==typeof a.complete?(r.data("cssCall")[a.complete].call(r),r.data("cssCall")[a.complete]=0):a.complete.call(r)},a.duration)},0)},e.str2Speed=function(e){return isNaN(e)?"slow"==e?1e3:"fast"==e?200:600:e},e.fn.cssAnimate=function(t,n,a,i){var r=this,s={duration:0,easing:"swing",complete:function(){},queue:!0},o={};return o="object"==typeof n?n:{duration:n},o[a?"function"==typeof a?"complete":"easing":0]=a,o[i?"complete":0]=i,o.duration=e.str2Speed(o.duration),e.extend(s,o),e.cssAnimateSupport()?r.each(function(n,a){if(a=e(a),s.queue){var i=!a.data("cssRunning");a.cssSetQueue(t,s),i&&a.cssRunQueue()}else a.cssEngine(t,s)}):r.animate(t,s),r},e.cssPresetOptGen=function(e,t){var n={};return n[e?"function"==typeof e?"complete":"easing":0]=e,n[t?"complete":0]=t,n},e.fn.cssFadeTo=function(t,n,a,i){var r=this;opt=e.cssPresetOptGen(a,i);var s={opacity:n};return opt.duration=t,e.cssAnimateSupport()?r.each(function(t,a){a=e(a),a.data("displayOriginal")!=a.cssOriginal("display")&&"none"!=a.cssOriginal("display")?a.data("displayOriginal",a.cssOriginal("display")?a.cssOriginal("display"):"block"):a.data("displayOriginal","block"),s.display=n?a.data("displayOriginal"):"callbackHide",a.cssAnimate(s,opt)}):r.fadeTo(t,opt),r},e.fn.cssFadeOut=function(t,n,a){return e.cssAnimateSupport()?(this.cssOriginal("opacity")||this.cssOriginal("opacity",1),this.cssFadeTo(t,0,n,a)):this.fadeOut(t,n,a),this},e.fn.cssFadeIn=function(t,n,a){return e.cssAnimateSupport()?(this.cssOriginal("opacity")&&this.cssOriginal("opacity",0),this.cssFadeTo(t,1,n,a)):this.fadeIn(t,n,a),this},e.cssPx2Int=function(e){return 1*e.split("p")[0]},e.fn.cssStop=function(){var n=this,a=0;return n.data("cssAnimations",!1).each(function(i,r){r=e(r);var s={TransitionDuration:"0s"},o=r.data("runningCSS"),l={};o?e.each(o,function(t,n){n=isFinite(e.cssPx2Int(n))?e.cssPx2Int(n):n;var a=[0,1],i={color:["#000","#fff"],background:["#000","#fff"],"float":["none","left"],clear:["none","left"],border:["none","0px solid #fff"],position:["absolute","relative"],family:["Arial","Helvetica"],display:["none","block"],visibility:["hidden","visible"],transform:["translate(0,0)","scale(1)"]};e.each(i,function(e,n){new RegExp(e,"gi").test(t)&&(a=n)}),l[t]=a[0]!=n?a[0]:a[1]}):o={},s=e.cssMerge(l,s,t),r.cssOriginal(s),setTimeout(function(){var t=e(n[a]);t.cssOriginal(o).data({runningCSS:{},cssAnimations:{},cssQueue:[],cssRunning:!1}),"number"==typeof t.data("cssCallIndex")&&t.data("cssCall")[t.data("cssCallIndex")].call(t),t.data("cssCall",[]),a++},0)}),n},e.fn.cssDelay=function(e){return this.cssAnimate({},e)},void 0!=e.fn.cssOriginal&&(e.fn.css=e.fn.cssOriginal),e.fn.cssOriginal=e.fn.css;var r="left",s="right",o="up",l="down",d="in",u="out",c="none",m="auto",h="horizontal",p="vertical",f="all",y="start",g="move",M="end",b="cancel",_="ontouchstart"in window,w="TouchSwipe",x={fingers:1,threshold:75,maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"button, input, select, textarea, a, .noSwipe"};jQuery.fn.swipe=function(e){var t=jQuery(this),a=t.data(w);if(a&&"string"==typeof e){if(a[e])return a[e].apply(this,Array.prototype.slice.call(arguments,1));jQuery.error("Method "+e+" does not exist on jQuery.swipe")}else if(!(a||"object"!=typeof e&&e))return n.apply(this,arguments);return t},jQuery.fn.swipe.defaults=x,jQuery.fn.swipe.phases={PHASE_START:y,PHASE_MOVE:g,PHASE_END:M,PHASE_CANCEL:b},jQuery.fn.swipe.directions={LEFT:r,RIGHT:s,UP:o,DOWN:l,IN:d,OUT:u},jQuery.fn.swipe.pageScroll={NONE:c,HORIZONTAL:h,VERTICAL:p,AUTO:m},jQuery.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:f}}(jQuery);