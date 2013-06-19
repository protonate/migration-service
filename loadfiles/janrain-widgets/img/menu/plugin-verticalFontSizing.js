(function ($) {

    $.fn.verticalFontSizing = function (options) {
        options = options;

        return this.each(function () {

            var textContainer = $(this);
            var fontSizeContainer = options.fontSizeContainer;
            var spanHeight = parseInt(textContainer.height());
            var spanHeight = parseInt(textContainer.outerHeight());
            var fontSize = parseInt(fontSizeContainer.css('font-size').replace('px', ''));
            var maxHeight = options.maxHeight;

            function shrinkText() {
                while (spanHeight > maxHeight && fontSize > 3) {
                    fontSize = fontSize - 1;
                    fontSizeContainer.css('font-size', fontSize);
                    spanHeight = parseInt(textContainer.height());
                }
            }

            shrinkText();

        });

        return this;

    };

})(jQuery);

