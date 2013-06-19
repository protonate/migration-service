(function() {
    if (typeof window.janrain.engage !== "object") window.janrain.engage = {};
    if (!janrain.settings.capture) janrain.settings.capture = {};
    if (!janrain.settings.packages) janrain.settings.packages = ['login'];
    if (!janrain.settings.share) janrain.settings.share = {};
    janrain.settings.linkClass = 'janrainEngage';

	if (!janrain.settings.appId) janrain.settings.appId = 'fnelodipgnmooeahidjl';
    if (!janrain.settings.appUrl) janrain.settings.appUrl = 'https://test-app.engage-dev.janrain.com';
    janrain.settings.permissions = ["customizable_auth_widget_hide_attribution","customizable_auth_widget_styling"];
    if (!janrain.settings.providers) janrain.settings.providers = ["aol","google","yahoo","openid"];
    if (!janrain.settings.noReturnExperience) janrain.settings.noReturnExperience = false;
    
	

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
        var rootPath = document.location.protocol === 'https' ? "https://engage-dev.janrain.com:4567/" : "http://engage-dev.janrain.com:4567/";
        var path = rootPath + 'manifest/' + packages.join(':');
        return path;
    }
    function getTranslationPath(language, widget) {
        var rootPath = document.location.protocol === 'https' ? "https://engage-dev.janrain.com:4567/" : "http://engage-dev.janrain.com:4567/";
        //var path = rootPath + 'js/lib/' + language + '/translate_' + widget + '.js';
        var path = rootPath + 'mock/translations/' + widget + '/' + language;
        return path;
    }
    function loadPackages(loaded, packages) {
        _loadDynamicScript("http://d16s8pqtk4uodx.cloudfront.net/mattel8/janrain-capture-dev.js");
    }

    loadPackages(0, janrain.settings.packages);
})();
