(function() {
    if (typeof window.janrain.engage !== "object") window.janrain.engage = {};
    if (!janrain.settings.capture) janrain.settings.capture = {};
    if (!janrain.settings.common) janrain.settings.common = {};
    if (!janrain.settings.language) janrain.settings.language = 'en';
    //if (!janrain.settings.providers) janrain.settings.providers = ["aol","google","yahoo","openid"];
    if (!janrain.settings.packages) janrain.settings.packages = ['login'];
    if (!janrain.settings.publish) janrain.settings.publish = {};
    if (!janrain.settings.share) janrain.settings.share = {};
    if (!janrain.settings.simpleshare) janrain.settings.simpleshare = {};
    if (!janrain.settings.linkClass) janrain.settings.linkClass = 'janrainEngage';

	if (typeof janrain.settings.common.appUrl === 'undefined')janrain.settings.common.appUrl = 'https://login.foxnews.com';
    
	if (typeof janrain.settings.showAttribution === 'undefined')janrain.settings.showAttribution = true;
    if (typeof janrain.settings.type === 'undefined')janrain.settings.type = 'embed';
    if (typeof janrain.settings.format === 'undefined')janrain.settings.format = 'two column';
    if (typeof janrain.settings.width === 'undefined')janrain.settings.width = '392';
    if (typeof janrain.settings.providersPerPage === 'undefined')janrain.settings.providersPerPage = '6';
    if (typeof janrain.settings.actionText === 'undefined')janrain.settings.actionText = 'Sign in using your account with';
    if (typeof janrain.settings.fontColor === 'undefined')janrain.settings.fontColor = '#666666';
    if (typeof janrain.settings.fontFamily === 'undefined')janrain.settings.fontFamily = 'lucida grande, Helvetica, Verdana, sans-serif';
    if (typeof janrain.settings.backgroundColor === 'undefined')janrain.settings.backgroundColor = '#ffffff';
    if (typeof janrain.settings.buttonBorderColor === 'undefined')janrain.settings.buttonBorderColor = '#CCCCCC';
    if (typeof janrain.settings.buttonBorderRadius === 'undefined')janrain.settings.buttonBorderRadius = '5';
    if (typeof janrain.settings.buttonBackgroundStyle === 'undefined')janrain.settings.buttonBackgroundStyle = 'gradient';
    if (typeof janrain.settings.borderWidth === 'undefined')janrain.settings.borderWidth = '15';
    if (typeof janrain.settings.borderColor === 'undefined')janrain.settings.borderColor = '#C0C0C0';
    if (typeof janrain.settings.borderRadius === 'undefined')janrain.settings.borderRadius = '10';
    if (typeof janrain.settings.appId === 'undefined')janrain.settings.appId = 'fdlgcfgbhgljlneoknaj';
    if (typeof janrain.settings.appUrl === 'undefined')janrain.settings.appUrl = 'https://login.foxnews.com';
    janrain.settings.permissions = ["customizable_auth_widget_hide_attribution","customizable_auth_widget_styling"];
    if (typeof janrain.settings.providers === 'undefined')janrain.settings.providers = [
	'facebook',
	'twitter',
	'google',
	'yahoo',
	'aol',
	'linkedin'];
    if (typeof janrain.settings.noReturnExperience === 'undefined')janrain.settings.noReturnExperience = false;
    
	if (typeof janrain.settings.share.attributionDisplay === 'undefined')janrain.settings.share.attributionDisplay = true;
    if (typeof janrain.settings.share.elementColor === 'undefined')janrain.settings.share.elementColor = '#333333';
    if (typeof janrain.settings.share.elementHoverBackgroundColor === 'undefined')janrain.settings.share.elementHoverBackgroundColor = '#eeeeee';
    if (typeof janrain.settings.share.elementButtonBorderRadius === 'undefined')janrain.settings.share.elementButtonBorderRadius = '6';
    if (typeof janrain.settings.share.elementBorderColor === 'undefined')janrain.settings.share.elementBorderColor = '#cccccc';
    if (typeof janrain.settings.share.elementBackgroundColor === 'undefined')janrain.settings.share.elementBackgroundColor = '#f6f6f6';
    if (typeof janrain.settings.share.elementLinkColor === 'undefined')janrain.settings.share.elementLinkColor = '#009DDC';
    if (typeof janrain.settings.share.elementBorderRadius === 'undefined')janrain.settings.share.elementBorderRadius = '3';
    if (typeof janrain.settings.share.elementButtonBoxShadow === 'undefined')janrain.settings.share.elementButtonBoxShadow = '3';
    if (typeof janrain.settings.share.modalOpacity === 'undefined')janrain.settings.share.modalOpacity = '0.5';
    if (typeof janrain.settings.share.modalBorderRadius === 'undefined')janrain.settings.share.modalBorderRadius = '5';
    if (typeof janrain.settings.share.bodyColor === 'undefined')janrain.settings.share.bodyColor = '#333333';
    if (typeof janrain.settings.share.bodyTabBackgroundColor === 'undefined')janrain.settings.share.bodyTabBackgroundColor = '#f8f8f8';
    if (typeof janrain.settings.share.bodyTabColor === 'undefined')janrain.settings.share.bodyTabColor = '#000000';
    if (typeof janrain.settings.share.bodyContentBackgroundColor === 'undefined')janrain.settings.share.bodyContentBackgroundColor = '#ffffff';
    if (typeof janrain.settings.share.bodyBackgroundColorOverride === 'undefined')janrain.settings.share.bodyBackgroundColorOverride = false;
    if (typeof janrain.settings.share.bodyFontFamily === 'undefined')janrain.settings.share.bodyFontFamily = 'Helvetica';
    if (typeof janrain.settings.share.bodyBackgroundColor === 'undefined')janrain.settings.share.bodyBackgroundColor = '#009DDC';
    if (typeof janrain.settings.share.modalBackgroundColor === 'undefined')janrain.settings.share.modalBackgroundColor = '#000000';
    if (typeof janrain.settings.share.appUrl === 'undefined')janrain.settings.share.appUrl = 'https://login.foxnews.com';
    janrain.settings.share.permissions = ["customizable_share_widget_hide_attribution","customizable_share_widget_styling","customizable_share_widget_contact_mode"];
    if (typeof janrain.settings.share.providers === 'undefined')janrain.settings.share.providers = [
	'email',
	'facebook',
	'twitter',
	'linkedin',
	'yahoo'];
    if (typeof janrain.settings.share.providersEmail === 'undefined')janrain.settings.share.providersEmail = ["google","yahoo"];
    if (typeof janrain.settings.share.modes === 'undefined')janrain.settings.share.modes = ["broadcast"];
    
	

    /*
*  _scriptLoader
*
*  Loads script dynamically and allows for callbacks and a timeout.
*
*  @return {Object} Public methods for _loadDyanmicScript
*  @private
*/
function _scriptLoader(a,b){function h(a){e=!0;"undefined"!==typeof f&&clearTimeout(f);if("string"===typeof a)return"function"===typeof d&&d(a),!0;if("object"===typeof a||"undefined"===typeof a)return"object"===typeof a&&"error"===a.type?"function"===typeof d&&d(a):"function"===typeof g&&g(),!0}function i(){j++;if(e)return!0;j<k?f=setTimeout(i,50):h("Load Timeout Error")}var g=b,k=200,l=!1,d,j=0,f,c=document.createElement("script"),m=document.getElementsByTagName("script")[0],e=!1;c.src=a;c.setAttribute("type",
"text/javascript");c.onload=c.onerror=c.onreadystatechange=function(a){!e&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)&&h(a)};return{setTimeoutCallback:function(a){l=!0;d=a;return this},setCallback:function(a){g=a;return this},setTimeoutLimit:function(a){k=a;return this},load:function(){m.parentNode.insertBefore(c,m);l&&i()}}}function _loadDynamicScript(a,b){_scriptLoader(a,b).load()}
function getPackagePath(a){return("https:"===document.location.protocol?"https://d16s8pqtk4uodx.cloudfront.net/":"http://d16s8pqtk4uodx.cloudfront.net/")+"manifest-prod/"+a.join("-")+".js"}function getTranslationPath(a,b){return("https:"===document.location.protocol?"https://d29usylhdk1xyu.cloudfront.net/":"http://widget-cdn.rpxnow.com/")+"translations/"+b+"/"+a}
function loadPackages(a,b){a===b.length?_loadDynamicScript(getPackagePath(b)):"login"===b[a]&&"en"===janrain.settings.language||"capture"===b[a]||"simpleshare"===b[a]?loadPackages(a+1,b):_loadDynamicScript(getTranslationPath(janrain.settings.language,b[a]),function(){loadPackages(a+1,b)})};

janrain.settings.packages.sort();
loadPackages(0, janrain.settings.packages);
})();