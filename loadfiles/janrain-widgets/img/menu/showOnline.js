$(window).load(function () {
    var set_number = Math.floor(Math.random() * 12);
    var used_numbers = new Array();


    function showOnline() {
        used_numbers.splice(0, used_numbers.length);
        for (var i = 0; i < set_number; i++) {
            var random = get_random_number();
            jQuery('div.avatarList ul ul li').eq(random).html('<img src="/Content/img/commonAssets/avatarThumbs/avatarThumbBrb.png" alt="Offline"/>');
        }
    }
    function get_random_number() {
        var number = randomFromTo(0, 12);
        if (jQuery.inArray(number, used_numbers) != -1) {
            return get_random_number();
        } else {
            used_numbers.push(number);
            return number;
        }

    }
    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    showOnline();
});