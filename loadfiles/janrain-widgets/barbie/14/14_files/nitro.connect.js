
var nameFromCookie = jQuery.cookie('NitroUsername');
if (nameFromCookie != '') {
    var key = jQuery.cookie('NitroSessionKey');
    global.userName = jQuery.cookie('NitroUsername');
    global.sessionKey = key + '==';

} else {
    global.userName = null;
    global.sessionKey = null;

}
global.language = document.URL.split('/')[3];
global.languageUC = document.URL.split('/')[3];
    global.language = global.language.toLowerCase();
    global.coins = jQuery.cookie('globalCoins');
    if (global.userName != null) {
        connectionParams = {
            //server: 'http://perftest.bunchball.net/nitro/json',
            server: 'http://sandbox.bunchball.net/nitro/json',
            sessionKey:global.sessionKey
        };
        jQuery('.logged-out').css('display', 'none');
        jQuery('.logged-in').css('display', 'block');
        var notification = jQuery('.notification-sub');
        if (notification.hasClass('sub-messages')) { } else { jQuery('.notification-sub').addClass('sub-messages'); }       
        nitro = new Nitro(connectionParams);
      

            var hasInstance = jQuery.cookie('hasInstance');
            if (hasInstance != null) { } else {
                nitro.callAPI('method=user.getAvatars&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'validateAvatars');
            }
            nitro.callAPI('method=user.getLevel', 'setGlobalLevel');

            global.myLevel = jQuery.cookie('myLevel');
            global.myLevelNumber = jQuery.cookie('myLevelNumber');
        function setGlobalLevel(data) {
            if (data == null) {
                //console.log('No Data!');
                return;
            }
            if (data.Nitro.res == 'err') {
                //console.log('Error:' + data.Nitro.Error.Message + ' man');
                return;
            }
            var details = data.Nitro.users.User.SiteLevel;
            jQuery.cookie('myLevel', '' + details.name + '', { expires: -1, path: '/' });
            jQuery.cookie('myLevelNumber', '' + details.description + '', { expires: -1, path: '/' });
            jQuery.cookie('myLevel', '' + details.name + '', { expires: 30, path: '/' });
            jQuery.cookie('myLevelNumber', '' + details.description + '', { expires: 30, path: '/' });
            jQuery('.level').html(details.name);

        }

        //CUSTOM GROWL NOTIFICATION FEED
        function notifications() {
            nitro.callAPI('method=user.getPendingNotifications&returnCount=5&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'processNotifications');
        }
        function processNotifications(data) {
            if (data == null) {
                //console.log('No Data!');
                return;
            }
            if (data.Nitro.res == 'err') {
                //console.log('Error:' + data.Nitro.Error.Message + ' man');
                return;
            }
            var noticeStyle = '';
            var noticeMessage = '';
            var noticeObjects = '';
            jQuery(data).each(function (i, v) {
                noticeStyle = data.Nitro.notificationStyles.NotificationStyle;
                noticeMessage = data.Nitro.notifications.Notification;
                noticeObjects = data.Nitro.notifications.Notification;
            });
            var noticeStyleOutput = '';
            var noticeObjectsOutput = '';
            var replaceArray = ['nitro_points', 'nitro_challenge', 'nitro_catalogItemThumbUrl', 'nitro_level', 'nitro_catalogItemName'];
            var replaceWith = [];

            jQuery(noticeStyle).each(function (item, value) {
                noticeStyleOutput += value.html;
            });
            jQuery(noticeMessage).each(function (item, things) {
                jQuery(things.notificationSettings).each(function (i, notice) {
                    jQuery(notice.NotificationSetting).each(function (z, object) {
                        if (object.name == 'Message') {
                            noticeObjectsOutput += object.value;
                        }
                    });
                });
            });
            jQuery(noticeObjects).each(function (item, objects) {
                replaceWith = [objects.points, objects.challenge, objects.catalogItemThumbUrl, objects.level, objects.catalogItemName];
            });
            for (var index = 0; index < noticeStyleOutput.length; index++) {

                noticeStyleOutput = noticeStyleOutput.replace(new RegExp(/\{(.+)\{(.+)\}\}/), noticeObjectsOutput);
                noticeStyleOutput = noticeStyleOutput.replace(new RegExp(/\{\{[^}]+\}\}/), noticeObjectsOutput);
            }
            for (var i = 0; i < replaceArray.length; i++) {
                noticeStyleOutput = noticeStyleOutput.replace(new RegExp('{' + replaceArray[i] + '}', 'g'), replaceWith[i]);
            }
            jQuery.noticeAdd({
                text: '' + noticeStyleOutput + '',
                stay: false,
                stayTime: 3000
            });
            var localization = document.URL.split('/')[3];
            var thisHref = '';
            var thisBarbie = '';
            var thisKen = '';
            var thisStats = '';
            var thisRyan = '';
            var thisRaquelle = '';
            var thisSkipper = '';
            var thisStacie = '';
            var thisChelsea = '';
            var thisNikki = '';
            var thisTeresa = '';
            var thisBlissa = '';
            var thisTawny = '';
            var thisTaffy = '';
            var thisDownloads = '';
            if (document.URL.indexOf('locations')) {
                jQuery('.notification a[href*="b-friends/my-wall"]').each(function () {
                    thisHref = jQuery(this).attr('href');
                });
            }
            if (document.URL.indexOf('episodes')) {
                jQuery('.notification a[href*="downloads"]').each(function () {
                    thisDownloads = jQuery(this).attr('href');
                });

            }
            if (document.URL.indexOf('my-wall')) {
                jQuery('.notification a[href*="b-friends/my-wall"]').each(function () {
                    thisHref = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="b-friends/my-stats"]').each(function () {
                    thisStats = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/skipper"]').each(function () {
                    thisSkipper = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/stacie"]').each(function () {
                    thisStacie = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/chelsea"]').each(function () {
                    thisChelsea = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/nikki"]').each(function () {
                    thisNikki = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/teresa"]').each(function () {
                    thisTeresa = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/ryan"]').each(function () {
                    thisRyan = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/raquelle"]').each(function () {
                    thisRaquelle = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/tawny"]').each(function () {
                    thisTawny = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/taffy"]').each(function () {
                    thisTaffy = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/ken"]').each(function () {
                    thisKen = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/blissa"]').each(function () {
                    thisBlissa = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/barbie"]').each(function () {
                    thisBarbie = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/ken"]').attr('href', '../../' + localization + '/' + thisKen + '');
                jQuery('.notification a[href*="cast/ryan"]').attr('href', '../../' + localization + '/' + thisRyan + '');
                jQuery('.notification a[href*="cast/raquelle"]').attr('href', '../../' + localization + '/' + thisRaquelle + '');
                jQuery('.notification a[href*="cast/nikki"]').attr('href', '../../' + localization + '/' + thisNikki + '');
                jQuery('.notification a[href*="cast/teresa"]').attr('href', '../../' + localization + '/' + thisTeresa + '');
                jQuery('.notification a[href*="cast/chelsea"]').attr('href', '../../' + localization + '/' + thisChelsea + '');
                jQuery('.notification a[href*="cast/stacie"]').attr('href', '../../' + localization + '/' + thisStacie + '');
                jQuery('.notification a[href*="cast/skipper"]').attr('href', '../../' + localization + '/' + thisSkipper + '');
                jQuery('.notification a[href*="cast/tawny"]').attr('href', '../../' + localization + '/' + thisTawny + '');
                jQuery('.notification a[href*="cast/taffy"]').attr('href', '../../' + localization + '/' + thisTaffy + '');
                jQuery('.notification a[href*="cast/blissa"]').attr('href', '../../' + localization + '/' + thisBlissa + '');
                jQuery('.notification a[href*="cast/barbie"]').attr('href', '../../' + localization + '/' + thisBarbie + '');
                jQuery('.notification a[href*="b-friends/my-stats"]').attr('href', '../../' + localization + '/' + thisStats + '');

            }
            if (document.URL.indexOf('cast')) {
                jQuery('.notification a[href*="b-friends/my-wall"]').each(function () {
                    thisHref = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="b-friends/my-stats"]').each(function () {
                    thisStats = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/skipper"]').each(function () {
                    thisSkipper = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/stacie"]').each(function () {
                    thisStacie = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/chelsea"]').each(function () {
                    thisChelsea = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/nikki"]').each(function () {
                    thisNikki = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/teresa"]').each(function () {
                    thisTeresa = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/ryan"]').each(function () {
                    thisRyan = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/raquelle"]').each(function () {
                    thisRaquelle = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/tawny"]').each(function () {
                    thisTawny = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/taffy"]').each(function () {
                    thisTaffy = jQuery(this).attr('href');
                });

                jQuery('.notification a[href*="cast/ken"]').each(function () {
                    thisKen = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/blissa"]').each(function () {
                    thisBlissa = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/barbie"]').each(function () {
                    thisBarbie = jQuery(this).attr('href');
                });
                jQuery('.notification a[href*="cast/ken"]').attr('href', '../' + localization + '/' + thisKen + '');
                jQuery('.notification a[href*="cast/ryan"]').attr('href', '../' + localization + '/' + thisRyan + '');
                jQuery('.notification a[href*="cast/raquelle"]').attr('href', '../' + localization + '/' + thisRaquelle + '');
                jQuery('.notification a[href*="cast/nikki"]').attr('href', '../' + localization + '/' + thisNikki + '');
                jQuery('.notification a[href*="cast/teresa"]').attr('href', '../' + localization + '/' + thisTeresa + '');
                jQuery('.notification a[href*="cast/chelsea"]').attr('href', '../' + localization + '/' + thisChelsea + '');
                jQuery('.notification a[href*="cast/stacie"]').attr('href', '../' + localization + '/' + thisStacie + '');
                jQuery('.notification a[href*="cast/skipper"]').attr('href', '../' + localization + '/' + thisSkipper + '');
                jQuery('.notification a[href*="cast/tawny"]').attr('href', '../' + localization + '/' + thisTawny + '');
                jQuery('.notification a[href*="cast/taffy"]').attr('href', '../' + localization + '/' + thisTaffy + '');
                jQuery('.notification a[href*="cast/blissa"]').attr('href', '../' + localization + '/' + thisBlissa + '');
                jQuery('.notification a[href*="cast/barbie"]').attr('href', '../' + localization + '/' + thisBarbie + '');
                jQuery('.notification a[href*="b-friends/my-stats"]').attr('href', '../../' + localization + '/' + thisStats + '');

            }

            jQuery('.notification a[href*="downloads"]').attr('href', '../../' + localization + '/' + thisDownloads + '');

            jQuery('.notification a[href*="b-friends/my-wall"]').attr('href', '../../' + localization + '/' + thisHref + '');
            
        }

        nitro.refreshNML();
    } else {
        connectionParams = {};
        global.userName = null;
        jQuery('.notification-sub').removeClass('sub-messages');
        jQuery('.logged-out').css('display', 'block');
        jQuery('.logged-in').css('display', 'none');
    }
    if (global.userName == '') {
        connectionParams = {};
        global.userName = null;
        jQuery('.notification-sub').removeClass('sub-messages');
        jQuery('.logged-out').css('display', 'block');
        jQuery('.logged-in').css('display', 'none');
    }