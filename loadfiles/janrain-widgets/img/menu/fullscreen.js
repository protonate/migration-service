/*document.cancelFullScreen = document.webkitCancelFullScreen || document.mozCancelFullScreen;

var elem = document.querySelector(document.webkitCancelFullScreen ? '#fs' : '#fs-container');

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 13: // ENTER. ESC should also take you out of fullscreen by default.
            e.preventDefault();
            document.cancelFullScreen(); // explicitly go out of fs.
            break;
      //  case 70: // f
      //      enterFullscreen();
      //      break;
    }
}, false);

function toggleFS(el) {
    if (el.webkitEnterFullScreen) {
        el.webkitEnterFullScreen();
    } else {
        el.mozRequestFullScreen();
    }

    el.ondblclick = exitFullscreen;
}

function onFullScreenEnter() {
    console.log('Entered fullscreen!');
    elem.onwebkitfullscreenchange = onFullScreenExit;
    elem.onmozfullscreenchange = onFullScreenExit;
};

// Called whenever the browser exits fullscreen.
function onFullScreenExit() {
    console.log('Exited fullscreen!');
};

// Note: FF nightly needs about:config full-screen-api.enabled set to true.
function enterFullscreen() {
    console.log('enterFullscreen()');
    elem.onwebkitfullscreenchange = onFullScreenEnter;
    elem.onmozfullscreenchange = onFullScreenEnter;
    if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
        elem.mozRequestFullScreen();
    }
}

function exitFullscreen() {
    console.log('exitFullscreen()');
    document.cancelFullScreen();
    document.getElementById('fullscreen').onclick = enterFullscreen;
}
*/