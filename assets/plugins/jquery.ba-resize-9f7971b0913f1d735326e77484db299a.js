!function(e,t,n){"$:nomunge";function a(){i=t[o](function(){s.each(function(){var t=e(this),n=t.width(),a=t.height(),i=e.data(this,l);(n!==i.w||a!==i.h)&&t.trigger(d,[i.w=n,i.h=a])}),a()},r[u])}var i,s=e([]),r=e.resize=e.extend(e.resize,{}),o="setTimeout",d="resize",l=d+"-special-event",u="delay",m="throttleWindow";r[u]=250,r[m]=!0,e.event.special[d]={setup:function(){if(!r[m]&&this[o])return!1;var t=e(this);s=s.add(t),e.data(this,l,{w:t.width(),h:t.height()}),1===s.length&&a()},teardown:function(){if(!r[m]&&this[o])return!1;var t=e(this);s=s.not(t),t.removeData(l),s.length||clearTimeout(i)},add:function(t){function a(t,a,s){var r=e(this),o=e.data(this,l);o.w=a!==n?a:r.width(),o.h=s!==n?s:r.height(),i.apply(this,arguments)}if(!r[m]&&this[o])return!1;var i;return e.isFunction(t)?(i=t,a):(i=t.handler,void(t.handler=a))}}}(jQuery,this);