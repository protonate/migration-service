(function(){function f(c,b){function h(a){i=!0;"undefined"!==typeof j&&clearTimeout(j);if("string"===typeof a)return"function"===typeof g&&g(a),!0;if("object"===typeof a||"undefined"===typeof a)return"object"===typeof a&&"error"===a.type?"function"===typeof g&&g(a):"function"===typeof k&&k(),!0}function e(){l++;if(i)return!0;l<f?j=setTimeout(e,50):h("Load Timeout Error")}var k=b,f=200,m=!1,g,l=0,j,d=document.createElement("script"),n=document.getElementsByTagName("script")[0],i=!1;d.src=c;d.setAttribute("type",
"text/javascript");d.onload=d.onerror=d.onreadystatechange=function(a){!i&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)&&h(a)};return{setTimeoutCallback:function(a){m=!0;g=a;return this},setCallback:function(a){k=a;return this},setTimeoutLimit:function(a){f=a;return this},load:function(){n.parentNode.insertBefore(d,n);m&&e()}}}function e(c,b){if(c===b.length){var h=("https:"===document.location.protocol?"https://d16s8pqtk4uodx.cloudfront.net/":"http://d16s8pqtk4uodx.cloudfront.net/")+
"manifest-development/"+b.join("-")+".js";f(h,void 0).load()}else"login"===b[c]&&"en"===janrain.settings.language||"capture"===b[c]||"simpleshare"===b[c]?e(c+1,b):f(("https:"===document.location.protocol?"https://d29usylhdk1xyu.cloudfront.net/":"http://widget-cdn.rpxnow.com/")+"translations/"+b[c]+"/"+janrain.settings.language,function(){e(c+1,b)}).load()}"object"!==typeof window.janrain.engage&&(window.janrain.engage={});janrain.settings.capture||(janrain.settings.capture={});janrain.settings.common||
(janrain.settings.common={});janrain.settings.language||(janrain.settings.language="en");janrain.settings.packages||(janrain.settings.packages=["login"]);janrain.settings.publish||(janrain.settings.publish={});janrain.settings.share||(janrain.settings.share={});janrain.settings.simpleshare||(janrain.settings.simpleshare={});janrain.settings.linkClass||(janrain.settings.linkClass="janrainEngage");"undefined"===typeof janrain.settings.common.appUrl&&(janrain.settings.common.appUrl="https://times-dev.rpxnow.com");
"undefined"===typeof janrain.settings.showAttribution&&(janrain.settings.showAttribution=!0);"undefined"===typeof janrain.settings.type&&(janrain.settings.type="embed");"undefined"===typeof janrain.settings.format&&(janrain.settings.format="two column");"undefined"===typeof janrain.settings.width&&(janrain.settings.width="380");"undefined"===typeof janrain.settings.providersPerPage&&(janrain.settings.providersPerPage="6");"undefined"===typeof janrain.settings.actionText&&(janrain.settings.actionText=
"");"undefined"===typeof janrain.settings.fontColor&&(janrain.settings.fontColor="#333333");"undefined"===typeof janrain.settings.fontFamily&&(janrain.settings.fontFamily="arial");"undefined"===typeof janrain.settings.backgroundColor&&(janrain.settings.backgroundColor="#FFFFFF");"undefined"===typeof janrain.settings.buttonBorderColor&&(janrain.settings.buttonBorderColor="#CCCCCC");"undefined"===typeof janrain.settings.buttonBorderRadius&&(janrain.settings.buttonBorderRadius="10");"undefined"===typeof janrain.settings.buttonBackgroundStyle&&
(janrain.settings.buttonBackgroundStyle="gradient");"undefined"===typeof janrain.settings.borderWidth&&(janrain.settings.borderWidth="15");"undefined"===typeof janrain.settings.borderColor&&(janrain.settings.borderColor="#CCCCCC");"undefined"===typeof janrain.settings.borderRadius&&(janrain.settings.borderRadius="10");"undefined"===typeof janrain.settings.appId&&(janrain.settings.appId="iamdedpmooaankmfkbae");"undefined"===typeof janrain.settings.appUrl&&(janrain.settings.appUrl="https://times-dev.rpxnow.com");
janrain.settings.permissions=["customizable_auth_widget_hide_attribution","customizable_auth_widget_styling"];"undefined"===typeof janrain.settings.providers&&(janrain.settings.providers=["aol","google","yahoo","openid"]);"undefined"===typeof janrain.settings.noReturnExperience&&(janrain.settings.noReturnExperience=!1);"undefined"===typeof janrain.settings.share.attributionDisplay&&(janrain.settings.share.attributionDisplay=!0);"undefined"===typeof janrain.settings.share.elementColor&&(janrain.settings.share.elementColor=
"#333333");"undefined"===typeof janrain.settings.share.elementHoverBackgroundColor&&(janrain.settings.share.elementHoverBackgroundColor="#eeeeee");"undefined"===typeof janrain.settings.share.elementButtonBorderRadius&&(janrain.settings.share.elementButtonBorderRadius="6");"undefined"===typeof janrain.settings.share.elementBorderColor&&(janrain.settings.share.elementBorderColor="#cccccc");"undefined"===typeof janrain.settings.share.elementBackgroundColor&&(janrain.settings.share.elementBackgroundColor=
"#f6f6f6");"undefined"===typeof janrain.settings.share.elementLinkColor&&(janrain.settings.share.elementLinkColor="#009DDC");"undefined"===typeof janrain.settings.share.elementBorderRadius&&(janrain.settings.share.elementBorderRadius="3");"undefined"===typeof janrain.settings.share.elementButtonBoxShadow&&(janrain.settings.share.elementButtonBoxShadow="3");"undefined"===typeof janrain.settings.share.modalOpacity&&(janrain.settings.share.modalOpacity="0.5");"undefined"===typeof janrain.settings.share.modalBorderRadius&&
(janrain.settings.share.modalBorderRadius="5");"undefined"===typeof janrain.settings.share.bodyColor&&(janrain.settings.share.bodyColor="#333333");"undefined"===typeof janrain.settings.share.bodyTabBackgroundColor&&(janrain.settings.share.bodyTabBackgroundColor="#f8f8f8");"undefined"===typeof janrain.settings.share.bodyTabColor&&(janrain.settings.share.bodyTabColor="#000000");"undefined"===typeof janrain.settings.share.bodyContentBackgroundColor&&(janrain.settings.share.bodyContentBackgroundColor=
"#ffffff");"undefined"===typeof janrain.settings.share.bodyBackgroundColorOverride&&(janrain.settings.share.bodyBackgroundColorOverride=!1);"undefined"===typeof janrain.settings.share.bodyFontFamily&&(janrain.settings.share.bodyFontFamily="Helvetica");"undefined"===typeof janrain.settings.share.bodyBackgroundColor&&(janrain.settings.share.bodyBackgroundColor="#009DDC");"undefined"===typeof janrain.settings.share.modalBackgroundColor&&(janrain.settings.share.modalBackgroundColor="#000000");"undefined"===
typeof janrain.settings.share.appUrl&&(janrain.settings.share.appUrl="https://times-dev.rpxnow.com");janrain.settings.share.permissions=["customizable_share_widget_hide_attribution","customizable_share_widget_styling","customizable_share_widget_contact_mode"];"undefined"===typeof janrain.settings.share.providers&&(janrain.settings.share.providers=[]);"undefined"===typeof janrain.settings.share.providersEmail&&(janrain.settings.share.providersEmail=[]);"undefined"===typeof janrain.settings.share.modes&&
(janrain.settings.share.modes=["broadcast"]);janrain.settings.packages.sort();e(0,janrain.settings.packages)})();
