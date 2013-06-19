(function() {
    if (typeof window.janrain.engage !== "object") window.janrain.engage = {};
    if (!janrain.settings.capture) janrain.settings.capture = {};
    if (!janrain.settings.common) janrain.settings.common = {};
    if (!janrain.settings.language) janrain.settings.language = 'en';
    if (!janrain.settings.publish) janrain.settings.publish = {};
    if (!janrain.settings.share) janrain.settings.share = {};
    if (!janrain.settings.simpleshare) janrain.settings.simpleshare = {};
    

    /*
*  _scriptLoader
*
*  Loads script dynamically and allows for callbacks and a timeout.
*
*  @return {Object} Public methods for _loadDyanmicScript
*  @private
*/
function _scriptLoader(src, callback) {
    var _callback = callback,
        _timeout,
        _timeoutCallback,
        _pollCount = 0,
        _pollTimeout,
        _script = document.createElement('script'),
        _firstScript = document.getElementsByTagName('script')[0],
        _finished = false;

    _script.src = src;
    _script.setAttribute('type', 'text/javascript');

    _script.onload = _script.onerror = _script.onreadystatechange = function(event) {
        
        if (!_finished && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            _finish(event);
        }
    }

    function _load() {
        _firstScript.parentNode.insertBefore(_script, _firstScript);
        _pollLoad();
    }

    function _finish(event) {
        _finished = true;
        if (typeof _pollTimeout !== 'undefined') clearTimeout(_pollTimeout);
        // event is a string when loading a script fails for any reason.
        if (typeof event === 'string') {
            if (typeof _timeoutCallback === 'function') _timeoutCallback(event);
            return true;
        }
        if (typeof event === 'object' || typeof event === 'undefined') {
            if (typeof _callback === 'function') _callback();
            return true;
        }
    }

    function _pollLoad() {
        _pollCount++;
        if (_finished) return true;
        if (_pollCount < 200) {
            _pollTimeout = setTimeout(_pollLoad, 50);
        } else {
            _finish("Load Timeout Error");
        }
    }

    return {
        setTimeoutCallback: function(callback) {
            _timeoutCallback = callback;
            return this;
        },
        setCallback: function(callback) {
            _callback = callback;
            return this;
        },
        setTimeoutLimit: function(time) {
            _timeout = time;
            return this;
        },
        load: function() {
            _load();
        }
    }
}

function _loadDynamicScript(src, callback) {
    _scriptLoader(src, callback).load();
}
    function getPackagePath(packages) {
        var rootPath = document.location.protocol === 'https:' ? "https://d16s8pqtk4uodx.cloudfront.net/" : "http://d16s8pqtk4uodx.cloudfront.net/";
        var path = rootPath + 'manifest-dev/' + packages.join('-') + '.js';
        return path;
    }
    function getTranslationPath(language, widget) {
        var rootPath = document.location.protocol === 'https:' ? "https://d29usylhdk1xyu.cloudfront.net/" : "http://widget-cdn.rpxnow.com/";
        var path = rootPath + 'translations/' + widget + '/' + language;
        var rootPath = document.location.protocol === 'https:' ? "https://d29usylhdk1xyu.cloudfront.net/" : "http://widget-cdn.rpxnow.com/";
        return path;
    }
    function loadPackages(loaded, packages) {
        if (loaded === packages.length) {
            _loadDynamicScript(getPackagePath(packages));
        } else {
            if ((packages[loaded] === "login"&& janrain.settings.language === "en")
                || packages[loaded] === "capture"
                || packages[loaded] === "simpleshare") {
                loadPackages(loaded + 1, packages);
            } else {
                _loadDynamicScript(getTranslationPath(janrain.settings.language, packages[loaded]), function() {
                    loadPackages(loaded + 1, packages);
                });
            }
        }
    }

    janrain.settings.packages.sort();
    loadPackages(0, janrain.settings.packages);
})();
