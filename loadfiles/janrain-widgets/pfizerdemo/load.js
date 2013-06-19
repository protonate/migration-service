(function() {
    if (typeof window.janrain.engage !== "object") window.janrain.engage = {};
    if (!janrain.settings.capture) janrain.settings.capture = {};
    if (!janrain.settings.language) janrain.settings.language = 'en';
    if (!janrain.settings.providers) janrain.settings.providers = ["aol","google","yahoo","openid"];
    if (!janrain.settings.permissions) janrain.settings.permissions = ["customizable_auth_widget_styling", "customizable_auth_widget_hide_attribution"];
    if (!janrain.settings.packages) janrain.settings.packages = ['login'];
    if (!janrain.settings.share) janrain.settings.share = {};
    

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
    function loadPackages(loaded, packages) {
        _loadDynamicScript("http://d16s8pqtk4uodx.cloudfront.net/pfizerdemo/janrain-capture.js");
    }

    janrain.settings.packages.sort();
    loadPackages(0, janrain.settings.packages);
})();