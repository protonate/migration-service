(function(){function g(b,a){function c(a){m=!0;"undefined"!==typeof n&&clearTimeout(n);if("string"===typeof a)return"function"===typeof h&&h(a),!0;if("object"===typeof a||"undefined"===typeof a)return"object"===typeof a&&"error"===a.type?"function"===typeof h&&h(a):"function"===typeof e&&e(),!0}function d(){k++;if(m)return!0;k<g?n=setTimeout(d,50):c("Load Timeout Error")}var e=a,g=200,j=!1,h,k=0,n,f=document.createElement("script"),l=document.getElementsByTagName("script")[0],m=!1;f.src=b;f.setAttribute("type",
"text/javascript");f.onload=f.onerror=f.onreadystatechange=function(a){!m&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)&&c(a)};return{setTimeoutCallback:function(a){j=!0;h=a;return this},setCallback:function(a){e=a;return this},setTimeoutLimit:function(a){g=a;return this},load:function(){l.parentNode.insertBefore(f,l);j&&d()}}}function d(b,a){if(0===a.length)return!1;if(b===a.length){var c=("https:"===document.location.protocol?"https://d16s8pqtk4uodx.cloudfront.net/":
"http://d16s8pqtk4uodx.cloudfront.net/")+"manifest-development/"+a.join("-")+".js?version="+encodeURIComponent("2013.8_ws_widgets_rc3");g(c,void 0).load()}else c=a[b],j(janrain.loadedPackages).hasOwnProperty(c)?(c=a.slice(b+1||a.length),a.length=0>b?a.length+b:b,a.push.apply(a,c),d(b,a)):(janrain.loadedPackages.push(a[b]),"login"===a[b]&&"en"===janrain.settings.language||"capture"===a[b]||"simpleshare"===a[b]?d(b+1,a):g(("https:"===document.location.protocol?"https://d29usylhdk1xyu.cloudfront.net/":
"http://widget-cdn.rpxnow.com/")+"translations/"+a[b]+"/"+janrain.settings.language,function(){d(b+1,a)}).load())}function j(b){for(var a={},c=0,d=b.length;c<d;c++)a[b[c]]=b[c];return a}"object"!==typeof window.janrain.engage&&(window.janrain.engage={});janrain.settings.capture||(janrain.settings.capture={});janrain.settings.common||(janrain.settings.common={});janrain.settings.language||(janrain.settings.language="en");janrain.settings.packages?janrain.settings.tokenUrl&&janrain.settings.packages.push("login"):
janrain.settings.packages=["login"];janrain.settings.publish||(janrain.settings.publish={});janrain.settings.share||(janrain.settings.share={});janrain.settings.simpleshare||(janrain.settings.simpleshare={});janrain.loadedPackages||(janrain.loadedPackages=[]);var p=janrain.settings,k=j(janrain.settings.packages),l=[],e;for(e in k)k.hasOwnProperty(e)&&l.push(e);p.packages=l;janrain.settings.packages.sort();d(0,janrain.settings.packages)})();