(function ($) {

    $.fn.blidSlider = function (options) {
        options = $.extend({
            level: '-1'
        }, options);

        return this.each(function () {
            
            var totalMoves = 0;
            var animateLeft = false;
            var animateRight = true;

            $('a.back', this).css('opacity', .4);

            var level = options.level;
            var position = 0;
            var wrapper = $('> div', this).css('overflow', 'hidden');

            wrapper.after('<a class="arrow back"></a><a class="arrow forward"></a>');

            var slider = wrapper.find('> ul');
            var initalPosition = wrapper.offset().left;

            slider.css('left', 0);

            var sliderOffset = slider.offset().left;
            var visible = Math.ceil(wrapper.innerWidth());

            if (level > 0) {
                position = (level - 1);
                animateLeft = true;
                animateRight = false;
                $('a.back', this).css('opacity', 1);
                $('a.forward', this).css('opacity', .4);
                var levelPosition = -(visible * (level - 1));
                $(slider).filter(':not(:animated)').animate({
                    left: '+=' + levelPosition
                }, 0, function () {

                });
            }

            var items = slider.find('> li');
            var numItems = items.length;

            var single = items.filter(':first');
            var singleWidth = Math.ceil(single.outerWidth());

            var sliderLength = Math.ceil(numItems * singleWidth);
            var visibleWidth = Math.ceil(wrapper.innerWidth() + 40);
            var slideDistance = visibleWidth - 40;

            if (sliderLength <= visibleWidth) {
                $('a.back', this).css('opacity', .4);
                $('a.forward', this).css('opacity', .4);
            } else {
                $('a.back', this).bind('click', function () {
                    return moveSlider('left');
                });
                $('a.forward', this).bind('click', function () {
                    return moveSlider('right');
                });
                totalMoves = Math.floor(sliderLength / visibleWidth);
            }

            if (level > 0) {
                totalMoves = position;
            }




            function moveSlider(direction) {

                if (direction == 'left') {
                    if (animateLeft == true) {
                        $(slider).filter(':not(:animated)').animate({
                            left: '+=' + slideDistance
                        }, 500, function () {
                            position--;
                            animateRight = true;
                            wrapper.parent().find('.forward').css('opacity', 1);
                            if (position > 0) {
                                //$('a.back', this).css('opacity', 1);
                                wrapper.parent().find('.back').css('opacity', 1);
                            } else {
                                animateLeft = false;
                                //$('a.back', this).css('opacity', .4);
                                wrapper.parent().find('.back').css('opacity', .4);
                            }
                        });
                    }
                }
                if (direction == 'right') {
                    if (animateRight == true) {
                        $(slider).filter(':not(:animated)').animate({
                            left: '-=' + slideDistance
                        }, 500, function () {
                            position++;
                            animateLeft = true;
                            wrapper.parent().find('.back').css('opacity', 1);
                            if (position < totalMoves) {
                                //$('a.forward', this).css('opacity', 1);
                                wrapper.parent().find('.forward').css('opacity', 1);
                            } else {
                                animateRight = false;
                                //$('a.forward', this).css('opacity', .4);
                                wrapper.parent().find('.forward').css('opacity', .4);
                            }
                        });
                    }
                }
            }

            /*function bindLeft(){
            $('a.back', this).bind('click', function(){
            return moveSlider('left');
            });
            }
			
            function bindRight(){
            $('a.back', this).bind('click', function(){
            return moveSlider('left');
            });
            }
			
            function unbindLeft(){
            $('a.back', this).unbind('click', function(){
            return moveSlider('left');
            });
            }
			
            function unbindRight(){
            $('a.back', this).unbind('click', function(){
            return moveSlider('left');
            });
            }*/

        });
        return this;

    };
})(jQuery);