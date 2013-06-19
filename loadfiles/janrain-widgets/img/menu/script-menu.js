//Menu Show/Hide Controls
jQuery(function () {
    jQuery('ul.menu-nav li .menu-item').bind('click', function () {

        if (jQuery(this).hasClass('selected')) {
            jQuery(this).toggleClass('selected');
            jQuery(this).next('.sub').slideUp('fast');
        } else {
            jQuery(this).toggleClass('selected');
            jQuery(this).next().delay(500).slideDown('slow', function () {

                /* General */
                if ($('ul.menu-nav .sub .top .content h2').length > 0) {
                    $('ul.menu-nav .sub .top .content h2').horizontalFontSizing({ maxWidth: 650, fontSizeContainer: $('ul.menu-nav .sub .top .content h2') });
                }
                /* Barbie Blocks */
                if ($('ul.menu-nav li .highlight-blocks-container .bottom-content p').length > 0) {
                    $('ul.menu-nav li .highlight-blocks-container .bottom-content p').verticalFontSizing({ maxHeight: 54, fontSizeContainer: $('ul.menu-nav li .highlight-blocks-container .bottom-content p') });
                }
                /* My Account Buttons */
                if ($('.logged-in .my-account .my-stuff a .container .middle p').length > 0) {
                    $('.logged-in .my-account .my-stuff a .container .middle p').verticalFontSizing({ maxHeight: 32, fontSizeContainer: $('.logged-in .my-account .my-stuff a .container .middle p') });
                }
                /* Coin Row Blocks */
                if ($('ul.menu-nav li .coins-row .promo p').length > 0) {
                    $('ul.menu-nav li .coins-row .promo p').verticalFontSizing({ maxHeight: 112, fontSizeContainer: $('ul.menu-nav li .coins-row .promo p') });
                }
                if ($('ul.menu-nav li .coins-row .promo .continue a').length > 0) {
                    $('ul.menu-nav li .coins-row .promo .continue a').horizontalFontSizing({ maxWidth: 300, fontSizeContainer: $('ul.menu-nav li .coins-row .promo .continue a') });
                }
                /* Event Block Text */
                if ($('ul.menu-nav li .event-row .wrapper ul li.block .block-row .description').length > 0) {
                    $('ul.menu-nav li .event-row .wrapper ul li.block .block-row .description').verticalFontSizing({ maxHeight: 115, fontSizeContainer: $('ul.menu-nav li .event-row .wrapper ul li.block .block-row .description') });
                }
                
                /* Barbie Says text */
                if ($('ul.menu-nav li .barbie-says p').length > 0) {
                    $('ul.menu-nav li .barbie-says p').verticalFontSizing({ maxHeight: 85, fontSizeContainer: $('ul.menu-nav li .barbie-says p') });
                }
                /* Login options box text */
                if ($('ul.menu-nav li .barbie-says .login-options-box p').length > 0) {
                    $('ul.menu-nav li .barbie-says .login-options-box p').verticalFontSizing({ maxHeight: 32, fontSizeContainer: $('ul.menu-nav li .barbie-says .login-options-box p') });
                }
                /* Signup Buttons */
                if ($('ul.menu-nav li .barbie-says .login-options-box .signUpBtn span').length > 0) {
                    $('ul.menu-nav li .barbie-says .login-options-box .signUpBtn span').horizontalFontSizing({ maxWidth: 105, fontSizeContainer: $('ul.menu-nav li .barbie-says .login-options-box .signUpBtn') });
                }
                /* Inner Login Box */
                if ($('ul.menu-nav li .inner-login-box .signUpBtn span').length > 0) {
                    $('ul.menu-nav li .inner-login-box .signUpBtn span').horizontalFontSizing({ maxWidth: 160, fontSizeContainer: $('ul.menu-nav li .inner-login-box .signUpBtn') });
                }
                if ($('ul.menu-nav li .login-options-box .inner-login-box h6').length > 0) {
                    $('ul.menu-nav li .login-options-box .inner-login-box h6').verticalFontSizing({ maxHeight: 30, fontSizeContainer: $('ul.menu-nav li .login-options-box .inner-login-box h6') });
                }
                /* Episodes */
                if ($('ul.menu-nav li .episodes-row .wrapper ul li.block h5').length > 0) {
                    $('ul.menu-nav li .episodes-row .wrapper ul li.block h5').horizontalFontSizing({ maxWidth: 280, fontSizeContainer: $('ul.menu-nav li .episodes-row .wrapper ul li.block h5') });
                }
                /* Sub Close Text */
                if ($('ul.menu-nav .sub .close span').length > 0) {
                    $('ul.menu-nav .sub .close span').horizontalFontSizing({ maxWidth: 80, fontSizeContainer: $('ul.menu-nav .sub .close .close-button .close-text') });
                }


            });
        }

        if (jQuery(this).parent().siblings().children('.menu-item').hasClass('selected')) {
            jQuery(this).parent().siblings().children('.menu-item').removeClass('selected');
            jQuery(this).parent().siblings().children('.sub').slideUp('fast');
        }

    });

    jQuery('.close').bind('click', function () {
        if (jQuery('.sub').is(':visible') && jQuery('ul.menu-nav li .menu-item').hasClass('selected')) {
            jQuery('.sub').slideUp('fast');
            jQuery('ul.menu-nav li .menu-item').removeClass('selected');
        }
    });

    jQuery('#main').bind('click', function () {
        if ($('.sub').is(':visible') && $('ul.menu-nav li .menu-item').hasClass('selected')) {
            $('.sub').slideUp('slow');
            $('ul.menu-nav li .menu-item').removeClass('selected');
        }
    });
    jQuery('ul.menu-nav li .menu-item').bind('click', function (event) {
        event.stopPropagation();
    });
});

