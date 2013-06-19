(function ($) {

    $.fn.scrollBar = function () {

        return this.each(function () {

            var boundaryTop = 0;
            var boundaryBottom = $('.locationContainer').height() - $('.scrollBar').height();
            var locationContainerY = 0;
            var listHeight = $('.locationList li').length * $('.locationList li').height();
            var listBottomBoundary = -(listHeight);
            var scrollBarY = 0, mouseY = 0, positionDifference = 0, listPosition = 0;
            var ratio = ((listHeight) / ($('.locationContainer').height() - $('.scrollBar').height()));
            var startScrollY = 0;
            var scrollPosition = 0;

            $('.scrollBar').bind('mousedown', startScroll);
            $(document).bind('mouseup', stopScroll);
            $('.locationList li').bind('mouseover', listItemHover);
            $('.locationList li').bind('mouseout', listItemOut);
            $('.locationList li').bind('click', listItemClick);


            /*$('.locationContainer').bind('mousewheel', function (event, delta, deltaX, deltaY) {
            listPosition = scrollPosition + 10 * deltaY;

            $('.locationList').css('top', listPosition);
            $('.scrollBar').css('top', -listPosition / ratio);
            if ($('.scrollBar').css('top') <= boundaryTop) {
            $('.scrollBar').css('top', boundaryTop);
            $('.locationList').css('top', boundaryTop);
            }
            if ($('.scrollBar').css('top') >= boundaryBottom) {
            $('.scrollBar').css('top', boundaryBottom);
            $('.locationList').css('top', listBottomBoundary);
            }
            scrollPosition = listPosition;
            });*/


            function startScroll(event) {
                event.preventDefault();
                event.stopPropagation();
                scrollBarY = parseInt($('.scrollBar').css('top').replace('px', ''));
                //console.log('scrollBarY');
                mouseY = event.pageY - $('.locationContainer').offset().top;
                positionDifference = mouseY - scrollBarY;
                $(document).bind('mousemove', scrollMove);
                $('.locationList li').unbind('mouseover', listItemHover);
                $('.locationList li').unbind('mouseout', listItemOut);
            }

            function stopScroll(event) {
                $(document).unbind('mousemove', scrollMove);
                $('.locationList li').bind('mouseover', listItemHover);
                $('.locationList li').bind('mouseout', listItemOut);
            }

            function scrollMove(event) {
                event.preventDefault();
                event.stopPropagation();
                mouseY = event.pageY - $('.locationContainer').offset().top;
                scrollBarY = mouseY;

                $('.scrollBar').css('top', (mouseY - positionDifference));

                listPosition = -((mouseY - positionDifference) * ratio);

                $('.locationList').css('top', listPosition);

                if (parseInt($('.scrollBar').css('top').replace('px', '')) < boundaryTop) {
                    $('.scrollBar').css('top', boundaryTop);
                    $('.locationList').css('top', boundaryTop);
                }
                if (parseInt($('.scrollBar').css('top').replace('px', '')) > boundaryBottom) {
                    $('.scrollBar').css('top', boundaryBottom);
                    $('.locationList').css('top', listBottomBoundary);
                }
                scrollPosition = listPosition;
            }

            function listItemHover() {
                $(this).addClass('locationHover');
            }
            function listItemOut() {
                $(this).removeClass('locationHover');
            }
            function listItemClick() {
                $('.locationList li').css({ 'padding-left': '14px', 'background': 'none' });
                //$(this).css({ 'padding-left': '35px', 'background': 'url(/Content/img/menu/locationTick.png) no-repeat center left' });
                $(this).addClass('selectLanguage');
            }

        });

        return this;

    };
})($);