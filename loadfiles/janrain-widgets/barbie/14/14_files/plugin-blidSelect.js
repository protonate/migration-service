(function ($) {

    $.fn.blidSelect = function () {

        return this.each(function () {
            var curSel = $(this);
            var container = curSel.parent();
            var className = (curSel.attr('class').split(' '))[1];
            var gddTop = '<div class="selectME options ' + className + '" tabindex="0"><div class="selectBox">';
            //get the default selected option
            var whatSelected = $(curSel).children('option:selected').val();
            var gddFirst = '<div class="first"><span class="selectME gselected">' + whatSelected + '</span></div></div><ul class="selectME">';

            // create a new array of div options from the original's options
            var addItems = new Array();
            $(curSel).children('option').each(function () {
                var text = $(this).val();
                var before = '<li>';
                var after = '</li>';
                addItems.push(before + text + after);
            });

            //hide the default from the list of options
            var removeFirst = addItems.shift();
            var gddBottom = '</ul></div>'
            var GDD = gddTop + gddFirst + addItems.join('') + gddBottom;

            $(curSel).after(GDD);
            container.find('div.selectME ul').css('display', 'none');

            //this var selects the div select box directly after each of the origials
            var nGDD = $(curSel).next('div.selectME');

            container.find('div.selectME li:first').addClass("first");
            container.find('div.selectME li:last').addClass('last');

            //handle the on click functions - push results back to old text box

            container.find('div.selectME').click(function (e) {


                var targetElement = $(e.target.parentNode);
                var myTarT = $(e.target).text();
                if ($(e.target).attr('href') != undefined) {
                    var langTarget = $(e.target).attr('href');
                    window.location.href = langTarget;
                }
                container.find('li').each(function () {
                    if (this != targetElement) {
                        $(this).removeClass('currentDD');
                    }
                });
                $(e.target.parentNode).addClass('currentDD');

                var myTar = $(e.target);

                //if closed, then open
                if (container.find('div.selectME ul.selectME').css('display') == 'none') {

                    //this next line closes any other selectboxes that might be open

                    container.find('div.selectME ul.selectME').css('display', 'block');

                    //if user clicks off of the div select box, then shut the whole thing down

                    return false;
                } else {
                    if (myTarT == null) {
                        container.find('div.selectME ul.selectME').css('display', 'none');
                        return false;
                    } else {
                        //set the value of the old select box
                        $(curSel).val(myTarT);
                        //set the text of the new one
                        container.find('div.selectME span.gselected').text(myTarT);
                        container.find('div.selectME ul').css('display', 'none');
                        return false;
                    }
                }
                //handle the tab index functions
            }).focus(function (e) {

                container.find('div.selectME li:last').addClass('lastDD');

                function checkKey(e) {
                    //on keypress handle functions
                    function moveDown() {
                        var current = container.find('div.selectME .currentDD:first');
                        var next = container.find('div.selectME .currentDD').next();
                        if ($(current).is('.lastDD')) {
                            return false;
                        } else {
                            $(next).addClass('currentDD');
                            $(current).removeClass('currentDD');
                        }
                    }

                    function moveUp() {
                        var current = container.find('div.selectME .currentDD:first');
                        var prev = container.find('div.selectME .currentDD').prev();
                        if ($(current).is('.first')) {
                            return false;
                        } else {
                            $(prev).addClass('currentDD');
                            $(current).removeClass('currentDD');
                        }
                    }

                    var curText = container.find('div.selectME .currentDD:first').text();
                    var curVal = container.find('div.selectME .currentDD:first a').attr('rel');

                    switch (e.keyCode) {
                        case 40:
                            $(curSel).val(curVal);
                            container.find('div.selectME span.gselected').text(curText);
                            moveDown();
                            return false;
                            break;
                        case 38:
                            $(curSel).val(curVal);
                            container.find('div.selectME span.gselected').text(curText);
                            moveUp();
                            return false;
                            break;
                        case 13:
                            container.find('div.selectME li').css('display', 'none');
                    }
                }
                $(document).keydown(checkKey);
            }).blur(function () {
                $(document).unbind('keydown');
            });
        });

        return this;

    };
})(jQuery);

