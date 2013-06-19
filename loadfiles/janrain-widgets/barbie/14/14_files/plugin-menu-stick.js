(function ($) {

    $.fn.stickymenu = function (options, lockBottom) {
        var $obj = this;
        //var parentPaddingTop = parseInt(this.prev().css('height'));
        var parentPaddingTop = 0;
        var startOffset = $obj.parent().parent().offset().top;
        //console.log(startOffset);
        var options = $.extend({
            startOffset: startOffset,
            duration: 0,
            lockBottom: true
        }, options);

        $('#mdn-hd .hd-bg-wrap').css({
            position: 'fixed',
            top: '0'
        });

        $obj.css({
            position: 'fixed',
            top: '0'
        });
        if (options.lockBottom) {
            var bottomPosition = $obj.parent().parent().height() - $obj.height() + parentPaddingTop;
            if (bottomPosition < 0) {
                bottomPosition = 0;
            }
        };
        $(window).scroll(function (e) {
            $obj.stop();
            e.preventDefault();
            var pastStartOffset = $(document).scrollTop() > options.startOffset;
            var objFartherThanTopPos = $obj.offset().top > startOffset;
            var objBiggerThanWindow = $obj.outerHeight() < $(window).height();

            if ((pastStartOffset || objFartherThanTopPos) && objBiggerThanWindow) {
                var topPosition = $(document).scrollTop();
                //console.log(topPosition);
                var newPosition = topPosition + startOffset;

                if (newPosition > bottomPosition) {
                    newPosition = bottomPosition;
                };
                if (topPosition < 25) {
                    newPosition = 0;
                };

                $('#mdn-hd .hd-bg-wrap').css({
                    position: 'fixed',
                    top: '0'
                });

                $obj.css({
                    position: 'fixed',
                    top: '0'
                });
            };

        });

    };

})(jQuery);