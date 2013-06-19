(function ($) {

    $.fn.profileSelect = function (options) {

        options = options;

        return this.each(function () {

            var userName = global.userName;
            var profileBackground;
            var profileObject;
            var profileUrl;
            var langUrl = document.URL.split('/')[3];
            var thumbnailObject = '/Content/img/menu/avatarThumbs/avatarThumb_technology.png';

            /* #################### RETRIEVE PROFILE #################### */

            function retrieveAvatar() {

                $.ajax({
                    url: "/Handlers/retrieveProfile.ashx",
                    data: "user=" + userName + "&locale=" + langUrl,
                    dataType: 'json',
                    error: function () {

                    },
                    success: function (data) {
                        if (data) {
                            //console.log(data);
                            var avatarBackground = data.profileBackground;
                            $('.largeBackground').attr('src', avatarBackground);
                            var avatarObject = data.profileObject;
                            $('.largeObject').attr('src', avatarObject);
                        }
                    }
                });
            }

            retrieveAvatar();

            /* #################### MOUSE EVENTS #################### */

            $('.profilePattern').bind('mouseover', patternHover).bind('mouseout', patternOut).bind('click', patternClick);
            $('.profileObject').bind('mouseover', patternHover).bind('mouseout', patternOut).bind('click', objectClick);
            $('.startOver').bind('click', startOver);
            $('.createProfile').bind('click', createProfile);

            function patternHover(event) {
                $(this).css('border', '4px #fff200 solid');
            }

            function patternOut(event) {
                $(this).css('border', '4px #ffffff solid');
            }

            function patternClick(event) {
                $('.bkgdOverlay').css('display', 'none');
                $(this).parent().find('.bkgdOverlay').css('display', 'block');
                profileBackground = '/Content/img/bfriends/backgrounds/' + $(this).data('image');
                $('.largeBackground').attr('src', profileBackground);
            }

            function objectClick(event) {
                $('.objectOverlay').css('display', 'none');
                $(this).parent().find('.objectOverlay').css('display', 'block');
                profileObject = '/Content/img/bfriends/objects/' + $(this).data('image');
                $('.largeObject').attr('src', profileObject);
                thumbnailObject = '/Content/img/menu/avatarThumbs/' + $(this).attr('data-thumb');
            }

            function startOver(event) {
                $('.bkgdOverlay').css('display', 'none');
                $('.objectOverlay').css('display', 'none');
                $('.largeBackground').attr('src', '/Content/img/bfriends/bkgdPattern6Large.png');
                $('.largeObject').attr('src', '/Content/img/bfriends/object1Large.png');
            }

            /* #################### CREATE PROFILE #################### */

            function createProfile(event) {
                $.ajax({
                    url: "/Handlers/CreateProfile.ashx",
                    data: "user=" + userName + "&background=" + profileBackground + "&foreground=" + profileObject + "&menuThumbnail=" + thumbnailObject + "&locale=" + langUrl,
                    dataType: 'json',
                    error: function () {

                    },
                    success: function (data) {
                        window.location.href = "/" + langUrl + "/b-friends/my-wall";
                    }
                });
            }

        });

        return this;

    };
})(jQuery);

