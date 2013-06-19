// syntax of the fragment is:
//   - comma separated list of flags
//   - semicolon
//   - function name
//   - semicolon
//   - json argument
(function(WIN) {
    // We don't used window.location.hash because it has different
    // behavior on IE and Firefox.  See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=378962
    var pathname = WIN.location.href,
        hashIndex = pathname.indexOf('#'),
        sepIndex,
        flags,
        hash,
        data,
        methodName,
        f,
        SSO;

    if (hashIndex > 0) {
        hash = decodeURIComponent(pathname.substring(hashIndex + 1));
    } else {
        throw new Error('SSO:receiver: Missing fragment.');
    }

    sepIndex = hash.indexOf(';');
    if (sepIndex < 0) {
        throw new Error('SSO:receiver: Missing flags separator.');
    }
    flags = hash.substring(0, sepIndex);
    if (flags !== 'sso') {
        throw new Error('SSO:receiver: Missing SSO flag.');
    }
    hash = hash.substring(sepIndex + 1);

    sepIndex = hash.indexOf(';');
    if (sepIndex < 0) {
        throw new Error('SSO:receiver: Missing func separator.');
    }
    methodName = hash.substring(0, sepIndex);
    data = decodeURIComponent(hash.substring(sepIndex + 1));

    SSO = {
        refresh: function() {
            var allCookies = document.cookie.split(';');
            for (var i = 0; i < allCookies.length; i++) {
                if (allCookies[i].search(/janrain_sso_checked/) > -1) {
                    WIN.document.cookie = allCookies[i] + '=;expires=' + (new Date()).toGMTString() + ';path=/;';
                }
            }
        },

        logout: function(uri) {
            SSO.refresh();
            WIN.document.location.href = uri;
        }
    };

    switch (methodName) {
        case "refresh":
            SSO.refresh(data);
            break;
        case "logout":
            SSO.logout(data);
            break;
        default:
            throw new Error('SSO:receiver: No SSO method called ' + methodName);
    }

})(this);

