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
    if (!janrain.settings.translate) janrain.settings.translate = {};
    if (!janrain.settings.linkClass) janrain.settings.linkClass = 'janrainEngage';

	if (typeof janrain.settings.common.appUrl === 'undefined')janrain.settings.common.appUrl = 'https://channel4-test.rpxnow.com';
    
	if (typeof janrain.settings.showAttribution === 'undefined')janrain.settings.showAttribution = true;
    if (typeof janrain.settings.type === 'undefined')janrain.settings.type = 'embed';
    if (typeof janrain.settings.format === 'undefined')janrain.settings.format = 'one column';
    if (typeof janrain.settings.width === 'undefined')janrain.settings.width = '380';
    if (typeof janrain.settings.providersPerPage === 'undefined')janrain.settings.providersPerPage = '6';
    if (typeof janrain.settings.actionText === 'undefined')janrain.settings.actionText = '';
    if (typeof janrain.settings.fontColor === 'undefined')janrain.settings.fontColor = '#333333';
    if (typeof janrain.settings.fontFamily === 'undefined')janrain.settings.fontFamily = 'arial';
    if (typeof janrain.settings.backgroundColor === 'undefined')janrain.settings.backgroundColor = '#FFFFFF';
    if (typeof janrain.settings.buttonBorderColor === 'undefined')janrain.settings.buttonBorderColor = '#CCCCCC';
    if (typeof janrain.settings.buttonBorderRadius === 'undefined')janrain.settings.buttonBorderRadius = '10';
    if (typeof janrain.settings.buttonBackgroundStyle === 'undefined')janrain.settings.buttonBackgroundStyle = 'gradient';
    if (typeof janrain.settings.borderWidth === 'undefined')janrain.settings.borderWidth = '15';
    if (typeof janrain.settings.borderColor === 'undefined')janrain.settings.borderColor = '#CCCCCC';
    if (typeof janrain.settings.borderRadius === 'undefined')janrain.settings.borderRadius = '10';
    if (typeof janrain.settings.appId === 'undefined')janrain.settings.appId = 'mmiploemobkpcmcnahod';
    if (typeof janrain.settings.appUrl === 'undefined')janrain.settings.appUrl = 'https://channel4-test.rpxnow.com';
    janrain.settings.permissions = ["customizable_auth_widget_hide_attribution","customizable_auth_widget_styling"];
    if (typeof janrain.settings.providers === 'undefined')janrain.settings.providers = [
	'aol',
	'facebook',
	'google',
	'yahoo',
	'openid'];
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
    if (typeof janrain.settings.share.appUrl === 'undefined')janrain.settings.share.appUrl = 'https://channel4-test.rpxnow.com';
    janrain.settings.share.permissions = ["customizable_share_widget_hide_attribution","customizable_share_widget_styling","customizable_share_widget_contact_mode"];
    if (typeof janrain.settings.share.providers === 'undefined')janrain.settings.share.providers = ["twitter"];
    if (typeof janrain.settings.share.providersEmail === 'undefined')janrain.settings.share.providersEmail = [];
    if (typeof janrain.settings.share.modes === 'undefined')janrain.settings.share.modes = ["broadcast"];
    

    function _loadDynamicScript(src, callback) {
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.src = src;
    script.setAttribute('type', 'text/javascript');
    if (typeof callback === 'function') {
        if (script.addEventListener) {
            script.addEventListener("load", callback, false);
        } else if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == 'complete' || script.readyState == 'loaded') {
                    callback();
                }
            }
        }
    }
    firstScript.parentNode.insertBefore(script, firstScript);
}

    function getPackagePath(packages) {
        var rootPath = document.location.protocol === 'https:' ? "https://engage-dev.janrain.com/" : "http://engage-dev.janrain.com/";
        var path = rootPath + 'manifest/' + packages.join(':');
        return path;
    }
    function getTranslationPath(language, widget) {
        var rootPath = document.location.protocol === 'https:' ? "https://engage-dev.janrain.com/" : "http://engage-dev.janrain.com/";
        var path = rootPath + 'translations/' + widget + '/' + language;
        var rootPath = document.location.protocol === 'https:' ? "https://engage-dev.janrain.com/" : "http://engage-dev.janrain.com/";
        return path;
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget'

    var url = document.location.protocol === 'https:' ? 'https://' : 'http://';
    url += 'd16s8pqtk4uodx.cloudfront.net';
    url += '/elililly-sample/janrain-capture.js';
    e.src = url;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})();
