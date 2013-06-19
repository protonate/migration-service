(function ($) {

    $.fn.horizontalFontSizing = function (options) {
        options = options;

        return this.each(function () {

            //console.log('**********  horizontal starts here ***************** ');
            var textContainer = $(this);
            //console.log( $(this) );
            var fontSizeContainer = options.fontSizeContainer;
            //var spanWidth = parseInt(textContainer.width());
            var spanWidth = parseInt(textContainer.outerWidth());
            //console.log('spanWidth: ' + spanWidth);
            var fontSize = parseInt(fontSizeContainer.css('font-size').replace('px', ''));
            //console.log('fontSize: ' + fontSize);
            var maxWidth = options.maxWidth;
            //console.log('maxWidth: ' + maxWidth);

            function shrinkText() {

                while (spanWidth > maxWidth && fontSize > 6) {
                    fontSize = fontSize - 1;
                    //console.log('new fontSize: ' + fontSize);
                    fontSizeContainer.css('font-size', fontSize);
                    spanWidth = parseInt(textContainer.width());
                    //console.log('new spanWidth:' + spanWidth);
                }
            }

            shrinkText();

        });

        return this;

    };

})(jQuery);