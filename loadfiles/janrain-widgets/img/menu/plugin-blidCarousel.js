(function ($) {

    $.fn.blidCarousel = function (options) {
        options = $.extend({
            initialView: '1',
            widthBool: 'false'
        }, options);

        //repeat function is a utility to repeat a sting n times
        function repeat(str, num) {
            return new Array(num + 1).join(str);
        }

        return this.each(function () {
            $('> div > ul > li.cloned', this).remove();
            $('.arrow', this).remove();
            $('> div > ul > li.empty', this).remove();
            // wrapper is the div descendent of the div called in the set-up code
            var wrapper = $('> div', this).css('overflow', 'hidden'),
            // slider is the ul used to keep this crap in order
				slider = wrapper.find('> ul'),
            // items are each of the pieces contained in their own li
				items = slider.find('> li'),
            // single is the first item in the list
				single = items.filter(':first');
            // This gives us the outer width plus padding, margin, & border		
            if(options.widthBool == 'true'){		
				var singleWidth = single.outerWidth(true);
                }else{
                				var singleWidth = single.outerWidth();
    }
            // Takes the inner width (doesn't include padding or border), divides it by the outer width and rounds it up
				var visible = Math.ceil(wrapper.innerWidth() / singleWidth),
            // gives us our start point 
				currentView = 1,
            // take the length of the total list, divide it by the visible area and round up to give us our total spacing
				views = Math.ceil(items.length / visible);
            // Pad the list so that the visible number will always be seen, otherwise create empty items
            if ((items.length % visible) != 0) {
                slider.append(repeat('<li class="empty" />', visible - (items.length % visible)));
                items = slider.find('> li');
            }

            // Top & Bottom of the list with visible number of items, top has the lastsection and bottom the first
            items.filter(':first').before(items.slice(-visible).clone().addClass('cloned'));
            items.filter(':last').after(items.slice(0, visible).clone().addClass('cloned'));

            // reselect
            items = slider.find('> li');
            views = Math.ceil(items.length / visible);

            // Sets the left position to the first actual item
            wrapper.scrollLeft(singleWidth * visible);
            //		console.log( singleWidth * 3);
            //		wrapper.scrollLeft(900);

            // Pagging between views back and forth
            function gotoView(view) {
                //establish the direction we are going to slide
                var dir = view < currentView ? -1 : 1,
                //the number of views/pages we are going to slide
					n = Math.abs(currentView - view),
                //the relative scroll left value
					left = singleWidth * dir * visible * n;


                //using animate though easing could be added. Not sure it really needs it
                wrapper.filter(':not(:animated)').animate({
                    scrollLeft: '+=' + left
                }, 500, function () {
                    if (view == 0) {
                        wrapper.scrollLeft(singleWidth * visible * views);
                        view = views;
                    } else if (view > views) {
                        wrapper.scrollLeft(singleWidth * visible);
                        // reset back to start position
                        view = 1;

                    }
                    currentView = view;



                });
                return false;
            }
            function gotoInitialView(view) {
                var dir = view < currentView ? -1 : 1,
					n = Math.abs(currentView - view),
					left = singleWidth * dir * visible * n;

                wrapper.filter(':not(:animated)').animate({
                    scrollLeft: '+=' + left

                }, 0, function () {
                    if (view == 0) {
                        wrapper.scrollLeft(singleWidth * visible * views);
                        view = views;

                    } else if (view > views) {
                        wrapper.scrollLeft(singleWidth * visible);
                        // reset back to start position
                        view = 1;

                    }
                    currentView = view;
                });
                return false;
            }
            if (options.initialView > 1) {
                gotoInitialView(options.initialView);
            };
            //Add forward and back arrows
            wrapper.after('<a class="arrow back"></a><a class="arrow forward"></a>');
            //bind touch events, get coordinates and move forward or back based on difference between start and end state
            var startCoords = {}, endCoords = {};
            wrapper.bind('touchstart', function (e) {
                e.preventDefault();
                startCoords = e.originalEvent.touches[0].clientX; // Get the information for finger 1
            });
            wrapper.bind('touchmove', function (e) {
                e.preventDefault();
                currentCoords = e.originalEvent.touches[0].clientX;
                endCoords = currentCoords - startCoords;
                //Got weird results with negative numbers so anything negative gets converted to 0
                if (endCoords < 0) {
                    endCoords = 0;
                }
            });
            wrapper.bind('touchend', function (e) {
                e.preventDefault();
                $('#log').text("Start Touch: " + startCoords + " End Touch: " + endCoords);
                if (startCoords < endCoords) {
                    return gotoView(currentView - 1);
                } else if (startCoords > endCoords) {
                    return gotoView(currentView + 1);
                }
            });
            // Bind the forward and back buttons
            $('a.back', this).bind('click', function () {
                $('.purchasePopUp, .downloadPopUpOuter').hide();
                return gotoView(currentView - 1);
                console.log(currentView);
            });
            $('a.forward', this).bind('click', function () {
                $('.purchasePopUp, .downloadPopUpOuter').hide();
                return gotoView(currentView + 1);
            });

            // Method to move to a specific view		
            $(this).bind('goto', function (event, view) {
                gotoView(view);
            });

        });
        return this;

    };
})(jQuery);