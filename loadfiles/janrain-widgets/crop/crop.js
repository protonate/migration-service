function crop(element, callback, initialHeight, initialWidth, presizeCallback){

    if (!element) return false;

    var
    _startX,
    _startY,
    _endX,
    _endY,
    _moveStartX,
    _moveStartY,
    _cropPosX,
    _cropPosY,
    _startCropPosX,
    _startCropPosY,
    _startCropWidth,
    _startCropHeight,
    _cropWidth,
    _cropHeight,
    _keepAspectRatio = true,
    _tracker,
    _cropImage,
    _elWidth = element.offsetWidth,
    _elHeight = element.offsetHeight,
    _originalWidth = _elWidth,
    _originalHeight = _elHeight,
    _cropSquareContainer,
    _cropMoveHandle,
    _maskSize = 10,
    _cropResizeHandleTop,
    _cropResizeHandleRight,
    _cropResizeHandleBottom,
    _cropResizeHandleLeft,
    _xscale = 1,
    _yscale = 1,
    _cropSquare;

    function _addListener(element, type, listener) {
        if (typeof window.attachEvent === 'object') {
            element.attachEvent('on' + type, listener);
        } else {
            element.addEventListener(type, listener, false);
        }   
    }
    function _removeListener(element, type, listener){
        if (typeof window.detachEvent === 'object') {
            element.detachEvent('on' + type, listener);
        } else {
            element.removeEventListener(type, listener, false);
        }   
    }
    function presize(w, h) {

        var 
        originalWidth = _elWidth,
        originalHeight = _elHeight;
        nw = _elWidth,
        nh = _elHeight;

        if ((nw > w) && w > 0) {
            nw = w;
            nh = (w / _elWidth) * _elHeight;
        }

        if ((nh > h) && h > 0) {
            nh = h;
            nw = (h / _elHeight) * _elWidth;
        }

        element.style.width = nw + 'px';
        element.style.height = nh + 'px';
        _elWidth = element.offsetWidth;
        _elHeight = element.offsetHeight;
        xscale = _elWidth / originalWidth;
        yscale = _elHeight / originalHeight;
        if (typeof presizeCallback === 'function') presizeCallback();

    }

    function _init(){
        presize(initialWidth, initialHeight);
        if (!_cropSquareContainer) _cropSquareContainer = _createContainer();
        if (!_tracker) _tracker = _createTracker(); 
        element.parentNode.insertBefore(_cropSquareContainer, element);
        _cropSquareContainer.appendChild(_tracker);
        _cropSquareContainer.appendChild(element);
        _addListener(_tracker, 'mousedown', _mousedownHandler); 
    }

    function _createContainer(){
        if (_cropSquareContainer) return false;
        var cropSquareContainer = document.createElement('div');   
        cropSquareContainer.className = 'janrainCrop_container';
        cropSquareContainer.style.position = 'relative';
        cropSquareContainer.style.backgroundColor = 'black';
        cropSquareContainer.style.cursor = 'crosshair';
        cropSquareContainer.style.width = _elWidth + 'px';
        cropSquareContainer.style.height = _elHeight + 'px';
        return cropSquareContainer;
    }

    function _createResizeHandles(side){
        var cropResizeHandle = document.createElement('div'),
        cursors = {
            top: 'n-resize',
            right: 'e-resize',
            bottom: 's-resize',
            left: 'w-resize'
        }; 
        cropResizeHandle.className = 'janrainCrop_resizehandle_' + side;
        cropResizeHandle.setAttribute('data-side', side);
        cropResizeHandle.style.cursor = cursors[side];
        cropResizeHandle.style.position = 'absolute';
        cropResizeHandle.style.backgroundColor = 'black';
        cropResizeHandle.style.filter = 'alpha(opacity=0)';
        cropResizeHandle.style.opacity = '0';
        cropResizeHandle.style.zIndex = '320';
        return cropResizeHandle;
    }

    function _resizeResizeHandles(){
        if (!_cropWidth || !_cropHeight) return;
        var 
        sides = ['top', 'right', 'bottom', 'left'], 
        sidesLen = sides.length, 
        sidesObj = {'top': _cropResizeHandleTop, right: _cropResizeHandleRight, bottom: _cropResizeHandleBottom, left: _cropResizeHandleLeft};

        if (sidesObj['top'] && sidesObj['right'] && sidesObj['bottom'] && sidesObj['left']){
            for (var i=0; i<sidesLen; i++){
                if (sides[i] === 'top' || sides[i] === 'bottom'){
                    sidesObj[sides[i]].style.height = _maskSize + 'px';
                    sidesObj[sides[i]].style.width = _cropWidth + 'px';
                } else {
                    sidesObj[sides[i]].style.width = _maskSize + 'px';
                    sidesObj[sides[i]].style.height = Math.max(_cropHeight - (_maskSize * 2), 0) + 'px';
                }
            }
            _cropResizeHandleRight.style.top = _maskSize + 'px';
            _cropResizeHandleRight.style.left = (_cropWidth - _maskSize) + 'px';
            _cropResizeHandleBottom.style.top = (_cropHeight - _maskSize) + 'px';
            _cropResizeHandleBottom.style.left = 0;
            _cropResizeHandleLeft.style.top = _maskSize + 'px';
            _cropResizeHandleLeft.style.left = 0;
            //console.log(_cropMoveHandle)
            //_cropMoveHandle.style.width = Math.max(_cropWidth - (_maskSize * 2), 0) + 'px';
            //_cropMoveHandle.style.height = Math.max(_cropHeight - (_maskSize * 2), 0) + 'px';
        }
    }

    function _createMoveHandle(){
        var cropMoveHandle = document.createElement('div');   
        cropMoveHandle.className = 'janrainCrop_movehandle';
        cropMoveHandle.style.position = 'absolute';
        cropMoveHandle.style.backgroundColor = 'black';
        cropMoveHandle.style.cursor = 'move';
        cropMoveHandle.style.width = Math.max(_cropWidth - (_maskSize * 2), 0) + 'px';
        cropMoveHandle.style.height = Math.max(_cropHeight - (_maskSize * 2), 0) + 'px';
        cropMoveHandle.style.filter = 'alpha(opacity=0)';
        cropMoveHandle.style.opacity = '0';
        cropMoveHandle.style.zIndex = '320';
        return cropMoveHandle;
    }

    function _stopPropagation(event){
        if (!event) return false;

        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

    function _preventDefault(event){
        if (!event) return false;

        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    function _normalizeMouseEvent(event){
        // From jQuery - Calculate pageX/Y if missing and clientX/Y available
        if ( event.pageX == null && event.clientX != null ) {
            var eventDoc = document || event.target.ownerDocument, 
            doc = eventDoc.documentElement, 
            body = eventDoc.body;

            event.pageX = event.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
            event.pageY = event.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
    }

    function _getCoordinates(){
        var coords = {};
        coords.unscaled = {};
        if (_cropSquare){
            coords.left = parseInt(parseInt(_cropSquare.style.left, 10) * xscale, 10);
            coords.right = coords.left + parseInt(_cropSquare.style.width, 10);
            coords.top = parseInt(parseInt(_cropSquare.style.top, 10) * yscale, 10);
            coords.bottom = coords.top + parseInt(_cropSquare.style.height, 10);
            coords.width = parseInt(parseInt(_cropSquare.style.width, 10) * xscale, 10);
            coords.height = parseInt(parseInt(_cropSquare.style.height, 10) * yscale, 10);
            coords.unscaled.left = parseInt(_cropSquare.style.left, 10);
            coords.unscaled.right = coords.left + parseInt(_cropSquare.style.width, 10);
            coords.unscaled.top = parseInt(_cropSquare.style.top, 10);
            coords.unscaled.bottom = coords.top + parseInt(_cropSquare.style.height, 10);
            coords.unscaled.width = parseInt(_cropSquare.style.width, 10);
            coords.unscaled.height = parseInt(_cropSquare.style.height, 10);
            coords.sizedWidth = _elWidth;
            coords.sizedHeight = _elHeight,
            coords.originalWidth = _originalWidth,
            coords.originalHeight = _originalHeight;
        }
        return coords;
    }

    function _getPosition(element) {
        var left = 0;
        var top  = 0;

        while (element.offsetParent){
            left += element.offsetLeft;
            top += element.offsetTop;
            element = element.offsetParent;
        }

        left += element.offsetLeft;
        top  += element.offsetTop;

        return {x:left, y:top};
    }

    function _prepareDrag(event){
        _stopPropagation(event);
        _preventDefault(event);
        _normalizeMouseEvent(event); 
        var cropSquareContainerPosition = _getPosition(_cropSquareContainer);
        _startX = event.pageX - cropSquareContainerPosition.x;
        _startY = event.pageY - cropSquareContainerPosition.y;
        return event;
    }

    function _mousedownMoveHandler(event){
        event = _prepareDrag(event);
        _moveStartX = _cropPosX;
        _moveStartY = _cropPosY
        _addListener(_cropMoveHandle, 'mousemove', _mousemoveHandler);
        _addListener(_cropMoveHandle, 'mouseup', _mouseupMoveHandler);
        _addListener(_cropMoveHandle, 'mouseout', _mouseupMoveHandler);
    }

    function _mousedownResizeHandler(event){
        var target = event.srcElement || event.target;
        event = _prepareDrag(event);
        _moveStartX = event.pageX;
        _moveStartY = event.pageY;
        _startCropWidth = _cropWidth;
        _startCropHeight = _cropHeight;
        _startCropPosX = _cropPosX;
        _startCropPosY = _cropPosY;
        _addListener(target, 'mousemove', _mousemoveHandler);
        _addListener(target, 'mouseup', _mouseupResizeHandler);
        _addListener(target, 'mouseout', _mouseupResizeHandler);
    }

    function _mousedownHandler(event){
        event = _prepareDrag(event);
        if (_cropImage) _destroyCropImage();
        if (_cropSquare) _destroyCropSquare();

        element.style.filter = 'alpha(opacity=60)';
        element.style.opacity = '.6';
        _cropSquare = _createCropSquare();
        _cropSquare.style.left = _startX + 'px';
        _cropSquare.style.top = _startY + 'px';
        _addListener(_tracker, 'mousemove', _mousemoveHandler);
        _addListener(_tracker, 'mouseup', _mouseupHandler); 
        _addListener(_tracker, 'mouseout',_mouseupHandler); 
        _cropImage = _createCropImage();
        _cropSquare.appendChild(_cropImage);
        _cropImage.style.left = (_startX * -1) + 'px'; 
        _cropImage.style.top = (_startY * -1) + 'px'; 
        _cropSquareContainer.insertBefore(_cropSquare,_tracker);
        _cropSquare.style.display = 'block';
    }

    function _mouseupHandler(event){
        _removeHandlers();
        if (_cropSquare && _cropWidth && _cropHeight){
            _cropSquareHandles();
            if (typeof callback === 'function') {
                callback(_getCoordinates());
            }
        }
    }

    function _mouseupResizeHandler(event){
        var target = event.srcElement || event.target;
        _removeListener(target, 'mousemove', _mousemoveHandler);
        _removeListener(target, 'mouseout', _mouseupResizeHandler);
        _removeListener(target, 'mouseup', _mouseupResizeHandler);
        _prepareMoveHandle();
        if (typeof callback === 'function' && _cropSquare) callback(_getCoordinates());
    }

    function _mouseupMoveHandler(event){
        _removeListener(_cropMoveHandle, 'mousemove', _mousemoveHandler);
        if (typeof callback === 'function' && _cropSquare) callback(_getCoordinates());
    }

    function _mousemoveHandler(event){
        var _width, _height, _left, _top, target = event.srcElement || event.target, side = target.getAttribute('data-side'), _axisY = false;
        _normalizeMouseEvent(event); 

        if (side && side.length){
            switch (side) {
                case 'top':
                    _axisY = true;
                    _width = _startCropWidth;
                    _height = _startCropHeight - (event.pageY - _moveStartY);
                    _left = _startCropPosX;
                    _top = _startCropPosY + (event.pageY - _moveStartY);
                    break;
                case 'right':
                    _width = _startCropWidth + (event.pageX - _moveStartX);
                    _height = _startCropHeight;
                    _left = parseInt(_cropSquare.style.left, 10);
                    _top = parseInt(_cropSquare.style.top, 10);
                    break;
                case 'bottom':
                    _axisY = true;
                    _width = _startCropWidth;
                    _height = _startCropHeight + (event.pageY - _moveStartY);
                    _left = parseInt(_cropSquare.style.left, 10);
                    _top = parseInt(_cropSquare.style.top, 10);
                    break;
                case 'left':
                    _width = _startCropWidth - (event.pageX - _moveStartX);
                    _height = _startCropHeight;
                    _left = _startCropPosX + (event.pageX - _moveStartX);
                    _top = _startCropPosY;
                    break;
            }
        } else if (_cropMoveHandle && target.className === _cropMoveHandle.className){
            _width = parseInt(_cropSquare.style.width, 10);
            _height = parseInt(_cropSquare.style.height, 10);
            _left = _moveStartX + ((event.pageX - _getPosition(_cropSquareContainer).x) - _startX);
            _top = _moveStartY + ((event.pageY - _getPosition(_cropSquareContainer).y) - _startY);
        } else {
            _width = (event.pageX - _getPosition(_cropSquareContainer).x)  - _startX;
            _height = (event.pageY - _getPosition(_cropSquareContainer).y) - _startY;
            _left = _startX;
            _top = _startY;
        }
        if (_width < 0){
            _width = Math.abs(_width);
            _left = (_startX - _width);
        }

        if (_height < 0){
            _height = Math.abs(_height);
            _top = (_startY - _height);
        }

        // Sometimes mousemove doesn't really move at all,
        // so we get NaN or zeroes and do not want to _moveCropSquare
        if (_height > 0 && _width > 0){
            _moveCropSquare(_width, _height, _left, _top, _axisY);
        }
    }

    function _prepareMoveHandle(){
        _cropMoveHandle = _createMoveHandle();
        _cropSquare.insertBefore(_cropMoveHandle,_cropImage);
        _cropMoveHandle.style.left = _maskSize + 'px';
        _cropMoveHandle.style.top = _maskSize + 'px';
        _addListener(_cropMoveHandle, 'mousedown', _mousedownMoveHandler);
    }

    function _cropSquareHandles(){
 
        _prepareMoveHandle();

        // top
        _cropResizeHandleTop = _createResizeHandles('top');
        _cropSquare.insertBefore(_cropResizeHandleTop,_cropMoveHandle);
        _addListener(_cropResizeHandleTop, 'mousedown', _mousedownResizeHandler); 

        // right
        _cropResizeHandleRight = _createResizeHandles('right');
        _cropSquare.insertBefore(_cropResizeHandleRight,_cropMoveHandle);
        _addListener(_cropResizeHandleRight, 'mousedown', _mousedownResizeHandler); 

        // bottom
        _cropResizeHandleBottom = _createResizeHandles('bottom');
        _cropSquare.insertBefore(_cropResizeHandleBottom,_cropMoveHandle);
        _addListener(_cropResizeHandleBottom, 'mousedown', _mousedownResizeHandler); 

        // left
        _cropResizeHandleLeft = _createResizeHandles('left');
        _cropSquare.insertBefore(_cropResizeHandleLeft,_cropMoveHandle);
        _addListener(_cropResizeHandleLeft, 'mousedown', _mousedownResizeHandler); 

        _resizeResizeHandles();

    }

    function _moveCropSquare(width,height,left,top, axisY){
        if (_keepAspectRatio){
            if (axisY){
                width = height;
            } else {
                height = width;
            }
        }
        height = _keepAspectRatio ? width : height;
        if (left < 1 || top < 1 || (left + width) > (_elWidth) || (height + top) > _elHeight){
            return false;
        }
        left = (left - _startX) < 0 ? (left + 2) : (left - 2);
        top = (top - _startY) < 0 ? (top + 2) : (top - 2);
        _cropPosX = left;
        _cropPosY = top;
        _cropHeight = height;
        _cropWidth = width; 
        if (_cropWidth && _cropHeight){
            _cropSquare.style.width = _cropWidth + 'px';
            _cropSquare.style.height = _cropHeight + 'px';
        }
        _cropSquare.style.left = _cropPosX + 'px';
        _cropSquare.style.top = _cropPosY + 'px';
        _cropImage.style.left = (left * -1) + 'px'; 
        _cropImage.style.top = (top * -1) + 'px'; 
        _resizeResizeHandles();
    }

    function _removeHandlers(){
        _removeListener(_tracker, 'mousemove', _mousemoveHandler);
        _removeListener(_tracker, 'mouseup', _mouseupHandler); 
        _removeListener(_tracker, 'mouseout', _mouseupHandler);
    }

    function _createTracker(){
        if (_tracker) return false;
        var tracker = document.createElement('div');
        tracker.className = 'janrainTracker';
        tracker.style.position = 'absolute';
        tracker.style.display = 'block';
        tracker.style.zIndex = '295';
        tracker.style.backgroundColor = 'black';
        tracker.style.filter = 'alpha(opacity=0)';
        tracker.style.opacity = '0';
        tracker.style.width = _elWidth + 'px';
        tracker.style.height = _elHeight + 'px';
        return tracker;
    }

    function _createCropSquare(){
        if (_cropSquare) return false;
        var cropSquare = document.createElement('div');
        cropSquare.className = 'janrainCropSquare';
        cropSquare.style.position = 'absolute';
        cropSquare.style.display = 'none';
        cropSquare.style.backgroundColor = 'black';
        cropSquare.style.overflow = 'hidden';
        cropSquare.style.zIndex = '300';
        return cropSquare;
    }

    function _createCropImage(){
        var cropImage = document.createElement('img'); 
        cropImage.src = element.src;
        cropImage.style.position = 'absolute';
        cropImage.style.zIndex = '310';
        cropImage.style.height = _elHeight + 'px';
        cropImage.style.width = _elWidth + 'px';
        return cropImage;
    }

    function _destroyCropMoveHandle(){
        if (_cropMoveHandle) _cropSquare.removeChild(_cropMoveHandle);
        _cropMoveHandle = null;
    }

    function _destroyCropSquare(){
        element.style.filter = 'alpha(opacity=100)';
        element.style.opacity = '1';
        _destroyCropMoveHandle();
        if (!_cropSquare) return false;
        _cropSquareContainer.removeChild(_cropSquare);
        // release memory for IE
        _cropSquare = null;
    }

    function _destroyCropImage(){
        if (!_cropImage) return false;
        _cropSquare.removeChild(_cropImage);
        // release memory for IE
        _cropImage = null;
    }

    _init();

}
