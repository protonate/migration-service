(function() {
if (typeof window.console === 'undefined') {
    window.console = {log: function(){}};
}

// Capture Widget Settings
if (typeof window.janrain !== 'object') {
    window.janrain = {};
}

if (typeof window.janrainInstantCaptureNeedsSetup === 'undefined') {
    window.janrainInstantCaptureNeedsSetup = true;
}

// Private vars
var _targetElement,
    _targetElementType,
    _replacementElement,
    _usableTags = ["a", "div", "span"],
    _clickInterceptorOverlay = document.createElement('div'),
    _helpOverlay = document.createElement('div'),
    _existingClickInterceptorOverlay,
    _existingHelpOverlay,
    _downKeys = {},
    _keys = {SHIFT: 16, SLASH: 191},
    _docDimensions = _getDocumentDimensions(),
    _jsonpScript,
    _now = new Date().getTime(),
    _isWaitingForUserInput = document.getElementById('janrainInstantCaptureClickInterceptorOverlay'),
    _isWaitingForUserInput = _isWaitingForUserInput ? _isWaitingForUserInput.style.display === 'block' : false,
    _elementsToDelete = ["signIn",
                         "editProfile",
                         "returnSocial",
                         "returnTraditional",
                         "socialRegistration",
                         "traditionalRegistration",
                         "forgotPassword",
                         "forgotPasswordSuccess",
                         "mergeAccounts",
                         "traditionalAuthenticateMerge",
                         "changePassword",
                         "changePasswordSuccess",
                         "addLinkedAccount",
                         "publicProfile"];

console.log("Welcome to Instant Capture!");
window.focus();

if (window.janrainInstantCaptureNeedsSetup && !_isWaitingForUserInput) {
    // Make sure the divs we will be injecting are unique.
    for (var t=0, deleteLen = _elementsToDelete.length; t < deleteLen; ++t) {
        var existingElement = document.getElementById(_elementsToDelete[t]);
        if(existingElement) {
            existingElement.parentNode.removeChild(existingElement);
        }
    }

    // Make JSONP request to get the HTML and styles (and inject our divs).
    _jsonpScript = document.createElement('script');
    _jsonpScript.type = 'text/javascript';
    if (window.janrainInstantCaptureIsDebugMode) {
        _jsonpScript.src = '//apps.janrain.com:4444/resources.js?t=' + _now;
    } else {
        _jsonpScript.src = '//d16s8pqtk4uodx.cloudfront.net/instant_capture/resources.js?t=' + _now;
    }
    document.body.appendChild(_jsonpScript);
} else {
    // This means we want to place another link on the page somewhere.
    console.log("set up overlay divs");
    setUpOverlayDivs();
}

// This will get called by the jsonp request.
window.janrainInstantCaptureCallback = function(resources) {
    // Apply overlay element to intercept click.
    _clickInterceptorOverlay.id = 'janrainInstantCaptureClickInterceptorOverlay';
    _clickInterceptorOverlay.className = 'clickInterceptorOverlay';
    _clickInterceptorOverlay.style.width = _docDimensions.width+'px';
    _clickInterceptorOverlay.style.height = _docDimensions.height+'px';
    _clickInterceptorOverlay.style.display = 'block';

    _helpOverlay.id = 'janrainInstantCaptureHelpOverlay';
    _helpOverlay.className = 'instantCaptureHelpOverlay';
    _helpOverlay.innerHTML = 'Welcome to Instant Capture!<br>';
    _helpOverlay.innerHTML += 'Click on where you want the sign on button to be.<br>';
    _helpOverlay.innerHTML += 'You can also hold shift and click to precisely place the sign on button.';

    // I think ie also uses the order of the dom to place elements on each other.
    document.body.insertBefore(_clickInterceptorOverlay, document.body.firstChild);
    document.body.insertBefore(_helpOverlay, document.body.firstChild);

    _addListener(document, 'keydown', function(event){
        _downKeys[getKeyCode(event)] = true;
        if (_downKeys[_keys.SHIFT] && _downKeys[_keys.SLASH]) {
            setUpOverlayDivs(true);
        }
    });

    _addListener(document, 'keyup', function(event){
        _downKeys[getKeyCode(event)] = false;
    });

    _addListener(_clickInterceptorOverlay, 'click', getElementAndSetUpCapture);
    _addListener(_helpOverlay, 'click', getElementAndSetUpCapture);

    // Delete janrain so that the page is completely fresh from janrain stuff.
    // Then we can reinitialize it. (This makes it work on sites with capture already).
    delete window.janrain;
    window.janrain = {};
    window.janrain.settings = {};
    window.janrain.settings.capture = {};

    janrain.settings.appUrl = 'https://instant-capture.rpxnow.com/';
    janrain.settings.capture.redirectUri = 'http://localhost';
    janrain.settings.capture.clientId = 'kaujtbxhgq4vkt8mfuqmcjwhgn553ztx'; //'frtgtynyhdafah63kjhumzf5j3rh8ve2';
    janrain.settings.capture.appId = '95yx2wuz7npmnwcx3272ta92f9';
    janrain.settings.capture.dataDefaults = {bp_channel: 'http://example.com/bp/thisisachannel'};
    janrain.settings.capture.recaptchaPublicKey = '6LeVKb4SAAAAAGv-hg5i6gtiOV4XrLuCDsJOnYoP';
    janrain.settings.capture.responseType = 'token';
    janrain.settings.capture.captureServer = 'https://instant-capture.eval.janraincapture.com';
    janrain.settings.capture.registerFlow = 'socialRegistration';
    janrain.settings.capture.transactionTimeout = 10000;
    janrain.settings.capture.flowVersion = 'HEAD';
    janrain.settings.capture.flowName = 'instantCapture';

    janrain.settings.capture.setProfileData = 'true';
    janrain.settings.capture.keepProfileCookieAfterLogout = true;
    janrain.settings.capture.setProfileCookie = true;
    janrain.settings.type = 'embed';
    janrain.settings.fontFamily = 'Helvetica, Lucida Grande, Verdana, sans-serif';
    janrain.settings.tokenUrl = 'http://localhost/rpx-token-url.php';
    janrain.settings.tokenAction = 'event';
    janrain.settings.format = 'two column';
    janrain.settings.providers = ['google','facebook','twitter','openid'];
    janrain.settings.providersPerPage = 4;
    janrain.settings.actionText = ' ';
    janrain.settings.width = 300;
    janrain.settings.borderColor = '#ffffff';
    janrain.settings.buttonBorderRadius = 5;
    janrain.settings.backgroundColor = '#ffffff';
    janrain.settings.language = 'en';

    janrain.settings.capture.modalBorderOpacity = 1;
    janrain.settings.capture.modalBorderWidth = 5;
    janrain.settings.capture.modalBorderRadius = 5;
    janrain.settings.capture.modalCloseHtml = '<span class="janrain-icon-16 janrain-icon-ex2"></span>';
    janrain.settings.capture.modalBorderColor = '#7AB433';
    janrain.settings.capture.noModalBorderInlineCss = true;

    janrain.settings.packages = ['login', 'capture'];

    janrain.ready = true;

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';
    e.src = '//d16s8pqtk4uodx.cloudfront.net/instant-capture/load.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);

    if (!document.getElementById("janrainCaptureScreenStyles")) {
        var newHTMLElement = document.createElement('style');
        newHTMLElement.id = "janrainCaptureScreenStyles";
        newHTMLElement.innerHTML = resources.css;
        document.body.insertBefore(newHTMLElement, document.body.firstChild);
    }

    if (!document.getElementById("janrainCaptureScreenSet")) {
        var newHTMLElement = document.createElement('div');
        newHTMLElement.id = "janrainCaptureScreenSet";
        newHTMLElement.innerHTML = resources.html;
        document.body.appendChild(newHTMLElement);
    }

    if (!document.getElementById("janrain-status-j")) {
        var newHTMLElement = document.createElement('p');
        newHTMLElement.innerHTML = "j";
        newHTMLElement.id = "janrain-status-j";
        document.body.insertBefore(newHTMLElement, document.body.firstChild);
    }
}

function setUpOverlayDivs(showThem) {
    _existingClickInterceptorOverlay = document.getElementById('janrainInstantCaptureClickInterceptorOverlay');
    _existingHelpOverlay = document.getElementById('janrainInstantCaptureHelpOverlay');

    _existingClickInterceptorOverlay.style.display = 'block';

    if (showThem) {
        _existingClickInterceptorOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        _existingHelpOverlay.style.display = 'block';
    } else {
        _existingClickInterceptorOverlay.style.backgroundColor = 'transparent';
        _existingHelpOverlay.style.display = 'none';
    }

    window.janrainInstantCaptureNeedsSetup = true;
}

function getKeyCode(event) {
    if (window.event) {
        return window.event.keyCode;
    } else if (event) {
        return event.which;
    }
    return -1;
}

function getElementAndSetUpCapture(event) {
    var mouseX, mouseY;
    _clickInterceptorOverlay.style.display = 'none';
    _helpOverlay.style.display = 'none';

    if (event.pageX !== undefined) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    } else {
        mouseX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        mouseY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }

    if (_downKeys[_keys.SHIFT]) {
        makeNewTargetElement(mouseX, mouseY);
    } else {
        setTargetElementFromPoint(event.clientX, event.clientY);
    }
    setUpInstantCapture();
}

function _addListener(element, type, listener) {
    if (element == null) {
        return false;
    }
    if (typeof window.attachEvent === 'object') {
        element.attachEvent('on' + type, listener);
    } else {
        element.addEventListener(type, listener, false);
    }
}

function _getDocumentDimensions(){
    // All this code derived from jquery. I didn't include the IE 6 support however.
    var docEle, docEleScrollDim, docEleOffsetDim, docBodyScrollDim, docBodyOffsetDim, docWidth, docHeight;
    docEle = document.documentElement ? document.documentElement : {clientWidth:0, clientHeight:0, scrollWidth:0, scrollHeight:0, offsetWidth:0, offsetHeight:0};
    docEleScrollDim = {width: docEle.scrollWidth ? docEle.scrollWidth : 0, height: docEle.scrollHeight ? docEle.scrollHeight : 0};
    docEleOffsetDim = {width: docEle.offsetWidth ? docEle.offsetWidth : 0, height: docEle.offsetHeight ? docEle.offsetHeight : 0};
    docBodyScrollDim = {width: document.body.scrollWidth ? document.body.scrollWidth : 0, height: document.body.scrollHeight ? document.body.scrollHeight : 0};
    docBodyOffsetDim = {width: document.body.offsetWidth ? document.body.offsetWidth : 0, height: document.body.offsetHeight ? document.body.offsetHeight : 0};

    docWidth = Math.max(docBodyScrollDim.width, docEleScrollDim.width, docBodyOffsetDim.width, docEleOffsetDim.width);
    docHeight = Math.max(docBodyScrollDim.height, docEleScrollDim.height, docBodyOffsetDim.height, docEleOffsetDim.height);

    return {
        "height": docHeight,
        "width": docWidth
    }
}

function captureStart(event) {
    _preventDefault(event);
    _preventPropagation(event);
    janrain.capture.ui.start();
}

function findClosestUsableTag(element) {
    if (!element) {
        return false;
    }

    if (inArray(_usableTags, element.nodeName.toLowerCase())) {
        return element;
    } else {
        return findClosestUsableTag(element.parentNode);
    }
}

function inArray(array, item) {
    for (var i = 0, n = array.length; i < n; i++) {
        if (array[i] === item) {
            return true;
        }
    }

    return false;
}

function _preventDefault(event){
    if (!event) return false;

    if (event.preventDefault){
        event.preventDefault();
    } else {
        try {
            event.returnValue = false;
        } catch(err) {}
    }
}

function _preventPropagation(event){
    if(!event) return false;

    if(event.stopPropagation){
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

function setTargetElementFromPoint(mouseX, mouseY){
    _targetElement = document.elementFromPoint(mouseX, mouseY);
    _targetElement = findClosestUsableTag(_targetElement);
    if (!_targetElement) {
        console.log("Failed to set up Instant Capture: couldn't find element");
        return false;
    }
    console.log("clicked element: "+_targetElement);
    _targetElementType = _targetElement.nodeName;
    console.log("element type: " + _targetElementType);
    console.log(_targetElement);
}

function makeNewTargetElement(pageX, pageY) {
    _targetElementType = 'A';
    _targetElement = document.createElement('a');
    _targetElement.style.position = 'absolute';
    _targetElement.style.left = pageX + 'px';
    _targetElement.style.top = pageY + 'px';
    _targetElement.style.zIndex = 999999;
    _targetElement.innerHTML = 'Sign In';
    document.body.appendChild(_targetElement);
}

function setUpInstantCapture() {
    if (window.janrainInstantCaptureNeedsSetup) {
        console.log("needs setup");

        // Copy and replace element to remove bound events
        _replacementElement = _targetElement.cloneNode(true);
        // Appends at end if no next sibling
        _targetElement.parentNode.insertBefore(_replacementElement, _targetElement.nextSibling);
        _targetElement.parentNode.removeChild(_targetElement);

        if (window.janrainInstantCaptureLoggedIn) {
            _replacementElement.innerHTML = "Profile";
        } else {
            _replacementElement.innerHTML = "Sign In";
        }

        _replacementElement.className += " janrainInstantCaptureTargetElement";

        _replacementElement.removeAttribute("onclick");
        _replacementElement.removeAttribute("target");

        if (_targetElementType === "A") {
            _replacementElement.href = "#";
        }

        if (inArray(_usableTags, _targetElementType.toLowerCase())) {
            if (window.janrainInstantCaptureLoggedIn) {
                _replacementElement.onclick = function(event) {
                    _preventDefault(event);
                    _preventPropagation(event);
                    janrain.capture.ui.renderScreen("editProfile");
                };
            } else {
                _replacementElement.onclick = captureStart;
            }
        } else {
            alert("Cannot set up Instant Capture with this element");
            return false;
        }
    }

    document.getElementById("janrain-status-j").style.color = "#4396e0";
    window.janrainInstantCaptureNeedsSetup = false;
}

window.janrainWidgetOnload = function() {
    console.log('widget loaded');
}

window.janrainCaptureWidgetOnLoad = function() {
    console.log('capture widget loaded');
    janrain.capture.ui.start();

    function handleCaptureLogin(result) {
        window.janrainInstantCaptureLoggedIn = true;
        janrain.capture.ui.modal.close();
        console.log(result);
        alert("Welcome, " + result.userData.displayName + "!");

        var targetElements = document.getElementsByClassName('janrainInstantCaptureTargetElement');
        for(var t = 0, numElements = targetElements.length; t < numElements; ++t) {
            targetElements[t].innerHTML = "Profile";
            targetElements[t].onclick = function(event) {
                _preventDefault(event);
                _preventPropagation(event);
                janrain.capture.ui.renderScreen("editProfile");
            };
        }
    }

    var userEmail = janrain.capture.ui.getProfileCookieData('email');

    janrain.events.onCaptureProfileCookieSet.addHandler(function(result){
        var displayName = result.displayName,
            userEmail = result.email,
            displayNameSpan = document.getElementById('displayNameData');

        if (displayName && displayNameSpan) {
            displayNameSpan.innerHTML = displayName;
        }
    });

    var displayName = janrain.capture.ui.getProfileCookieData('displayName'),
        displayNameSpan = document.getElementById('displayNameData');

    if (displayName && displayNameSpan) {
        displayNameSpan.innerHTML = displayName;
    }

    janrain.events.onCaptureRenderComplete.addHandler(function(result){
        if (result.screen === 'returnTraditional') {
            var emailField = document.getElementById("capture_returnTraditional_traditionalSignIn_emailAddress");
            if (userEmail && emailField) {
                emailField.value = userEmail;
            }
        }
    });

    janrain.events.onCaptureLoginSuccess.addHandler(handleCaptureLogin);
    janrain.events.onCaptureRegistrationSuccess.addHandler(handleCaptureLogin);
}

})();
