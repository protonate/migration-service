jQuery(document).ready(function () {
    var langUrl = document.URL.split('/')[3];

    jQuery('ul').delegate('li.itemSlider', 'click', function () {
        var action = jQuery(this).attr('data-action');
        nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '', 'notifications');
    });
    jQuery('span').delegate('.write-action', 'click', function () {
        var action = jQuery(this).attr('data-actions');
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'notifications');
    });
    jQuery('div.horzBtn').delegate('.love-peter', 'click', function () {
        var item = jQuery(this).attr('data-loveme');
        var type = jQuery(this).attr('data-doctorloves');
        writeLoves(type, item);
    });
    jQuery('.episode-open').bind('click', function () {
        episodeByDate();
    });

    jQuery('logout-button').delegate('click', function () {
        if (Modernizr.localstorage) {
            localStorage.removeItem('Level');
            localStorage.removeItem('LevelNumber');
        } else {
            removeAttribute('Level');
            removeAttribute('LevelNumber');
        }
        global.userName = '';
        global.signature = '';
    });
    jQuery('#videoID').one('mousedown', function () {
        var action = jQuery('#fs').attr('data-actions');
        switch (action) {
            case 'WATCH_EPISODE01_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108322', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE02_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108324', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE03_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108326', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE04_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108328', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE05_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108330', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE06_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108332', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE07_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108334', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE08_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108336', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE09_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108338', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE10_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108340', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE11_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108342', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE12_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108344', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE13_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108346', 'processCoinsOnclick');
                break;
            case 'WATCH_EPISODE14_BLID':
                nitro.callAPI('method=user.logAction&tags=' + action + ',' + global.languageUC + '&sessionKey=' + global.sessionKey + '&asyncToken=30108348', 'processCoinsOnclick');
                break;
        }


    });

    /* ####################### ON PAGE LOAD HIDES ######################### */
    $('.characterLargeAvatar').hide();

    /* ####################### LOCATION QUOTES ######################### */
    var characterObject = { '393': 'barbie', '426': 'blissa', '427': 'chelsea', '376': 'ken', '403': 'nikki', '409': 'raquelle', '419': 'ryan', '411': 'skipper', '414': 'stacie', '425': 'taffy', '424': 'tawny', '387': 'teresa' };
    function swapLocationQuotes() {
        var newLoc = $('.locationQuoteTemplate').clone().removeClass().addClass('gridItem');
        jQuery.ajax({
            url: "/Handlers/LocationQuotes.ashx?locale=" + langUrl,
            data: "&locationID=" + locationIdentifier,
            dataType: 'json',
            error: function () {
            },
            success: function (data) {
                $.each(data, function (key, quote) {
                    var locationQuote = $('.locationQuoteTemplate').clone().removeClass().addClass('gridItem').appendTo('#closetQuotes .gridContainer').show();
                    locationQuote.find('.imgSBubble').attr('src', '/Content/img/commonAssets/characterFrames/barbieCharsFrame' + quote.CharacterID + '_noName.png');
                    locationQuote.find('.bubbleHeading').text(quote.Character);
                    locationQuote.find('.quote').text(quote.Quote);
                    locationQuote.find('.signUpBtn span').text(quote.Charcter);
                    locationQuote.find('.quoteCharLink').attr('href', '/' + langUrl + '/cast/' + characterObject[quote.CharacterID]);
                    locationQuote.find('.love-peter').attr('data-loveme', quote.ID);
                    locationQuote.find('.loveSentence').attr('data-loved', quote.ID);
                    locationQuote.find('.love-peter').click(function (e) {
                        var action = jQuery(this).find('.lipz').attr('data-actions');
                        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'notifications');
                        var item = jQuery(this).attr('data-loveme');
                        var type = jQuery(this).attr('data-doctorloves');
                        writeLoves(type, item);
                    });
                });
            }
        });
    }
    if ($('#closetQuotes').length > 0) {
        swapLocationQuotes();
    }

    /* ####################### EPISODE QUOTES ######################### */
    function hideTuneIn() {
        var episodeNumber = parseInt(document.URL.split('/')[5]);
        if (episodeNumber == 14) {
            $('.nextVideo').hide();
            $('.latestEpisode .videoDesc p').css('border-bottom', 'none');
        }
    }

    hideTuneIn();

    /* ####################### EPISODE QUOTES ######################### */
    function swapEpisodeQuotes() {
        var episodeNumber = document.URL.split('/')[5];
        var featuredCharacter = false;
        var characterObject = { '393': 'barbie', '426': 'blissa', '427': 'chelsea', '376': 'ken', '403': 'nikki', '409': 'raquelle', '419': 'ryan', '411': 'skipper', '414': 'stacie', '425': 'taffy', '424': 'tawny', '387': 'teresa' };
        var d = new Date();
        var n = d.getTime();
        jQuery.ajax({
            url: "/Handlers/EpisodeQuotes.ashx?call=" + n + "&locale=" + langUrl,
            data: "&episodeID=" + episodeIdentifier + "&episodeNumber=" + episodeNumber,
            dataType: 'json',
            error: function () {
            },
            success: function (data) {
                $.each(data, function (key, quote) {
                    if (featuredCharacter == false && quote.Featured == 'True') {
                        var episodeQuote = $('.featuredCharacter').attr('src', '/Content/img/commonAssets/featured/featured_episode' + episodeNumber + '.png');
                        $('#meetGang .barbieFrame .frame_desc p').text(quote.Quote);
                        $('#meetGang .largeBtn span').text(quote.ButtonText);
                        $('#meetGang .largeBarbieTtle').text(quote.Character);

                        $('#meetGang .mainFeaturedLink').attr('href', '/' + langUrl + '/cast/' + characterObject[quote.CharacterID]);
                        $('#meetGang .leftSection .barbie_desc').css('background', 'url(/Content/img/commonAssets/featured/Icon' + quote.CharacterID + '.png) no-repeat');
                        $('#meetGang .leftSection .barbie_desc p').text(quote.CharacterBio);
                        featuredCharacter = true;

                        /* Episodes featured character description  */
                        if ($('#meetGang .leftSection .barbie_desc p').length > 0) {
                            $('#meetGang .leftSection .barbie_desc p').verticalFontSizing({ maxHeight: 150, fontSizeContainer: $('#meetGang .leftSection .barbie_desc p') });
                        }
                    } else {
                        var episodeQuote = $('.episodeQuoteTemplate').clone().removeClass().addClass('gridItem').appendTo('#meetGang .gridContainer');
                        episodeQuote.find('.imgSBubble').attr('src', '/Content/img/commonAssets/characterFrames/barbieCharsFrame' + quote.CharacterID + '_noName.png');
                        episodeQuote.find('h3').text(quote.Character);
                        episodeQuote.find('.text_desc p').text(quote.Quote);
                        episodeQuote.find('.signUpBtn span').text(quote.ButtonText);
                        episodeQuote.find('.featuredLink').attr('href', '/' + langUrl + '/cast/' + characterObject[quote.CharacterID]);
                    }

                    /* Text re-sizing */
                    if ($('.bubbleBottom .text_desc p').length > 0) {
                        $('.bubbleBottom .text_desc p').verticalFontSizing({ maxHeight: 100, fontSizeContainer: $('.bubbleBottom .text_desc p') });
                    }
                    if ($('.gridItem .featuredLink .signUpBtn span').length > 0) {
                        $('.gridItem .featuredLink .signUpBtn span').horizontalFontSizing({ maxWidth: 120, fontSizeContainer: $('.gridItem .featuredLink .signUpBtn') });
                    }
                    if ($('#meetGang .largeBtn span').length > 0) {
                        $('#meetGang .largeBtn span').horizontalFontSizing({ maxWidth: 280, fontSizeContainer: $('#meetGang .largeBtn') });
                    }



                });
            }
        });
    }

    if ($('#meetGang .gridContainer').length > 0) {
        swapEpisodeQuotes();
    }

    /* ####################### LOCATION EPISODES ######################### */
    function retrieveLocationEpisodes(pageType) {
        var passingData;
        var i = 0;

        if (pageType == 'location') {
            passingData = "&location=" + locationIdentifier;
        }
        if (pageType == 'character') {
            passingData = "&character=" + document.URL.split('/')[5];
        }
        if (pageType == 'username') {
            passingData = "&username=" + global.userName;
        }

        jQuery.ajax({
            url: "/Handlers/FeaturedVideos.ashx?locale=" + langUrl,
            data: passingData,
            dataType: 'json',
            error: function () {
            },
            success: function (data) {
                if (data.length == 0) {
                    $('#myfavvids').hide();
                }
                $.each(data, function (key, videoObject) {

                    if (pageType == 'location') {
                        var locationVideo = $('.featuredVideoTemplate').clone().removeClass().addClass('videoSlider').appendTo('.locationVideos .sliderUl');
                        locationVideo.find('h3 span').text(videoObject.Title);
                        locationVideo.find('h3 span').attr('data-text', videoObject.Title);
                        locationVideo.find('.videoPoster').attr('src', '/Content/img/commonAssets/videoStills/location/episode_' + videoObject.EpisodeNumber + '.png');
                        locationVideo.find('a').attr('href', '/' + langUrl + '/episodes/' + videoObject.EpisodeNumber);
                    }
                    if (pageType == 'character') {
                        if (i < 3) {
                            var characterVideo = $('.videoListTemplate').clone().removeClass().addClass('videoList').insertBefore('.characterFavVids .listGradient .coins');
                            characterVideo.find('img').attr('src', '/Content/img/commonAssets/videoStills/leftColumn/episode_' + videoObject.EpisodeNumber + '.png');
                            characterVideo.find('h4').text(videoObject.Title);
                            characterVideo.find('a').attr('href', '/' + langUrl + '/episodes/' + videoObject.EpisodeNumber);
                        }
                    }
                    if (pageType == 'username') {
                        $.each(videoObject.EpisodeList, function (key, video) {
                            if (i < 3) {
                                var userVideo = $('.videoListTemplate').clone().removeClass().addClass('videoList').appendTo('.userFavVids .listGradient');
                                userVideo.find('img').attr('src', '/Content/img/commonAssets/videoStills/leftColumn/episode_' + video.EpisodeNumber + '.png');
                                userVideo.find('h4').text(video.Title);
                                userVideo.find('a').attr('href', '/' + langUrl + '/episodes/' + video.EpisodeNumber);
                            }
                        });
                    }

                    i++;
                });
            }
        });
    }

    if ($('.locationVideos').length > 0) {
        retrieveLocationEpisodes('location');
    }

    if ($('.characterFavVids').length > 0) {
        retrieveLocationEpisodes('character');
    }

    if ($('.userFavVids').length > 0) {
        retrieveLocationEpisodes('username');
    }

    /* ####################### PROMO BARBIE SIZE ######################### */
    if ($('#videoTeaser').length > 0 && $('.lightBarbie').length > 0) {
        $('.lightBarbie').attr('src', '\/Content\/img\/commonAssets\/barbieHeaderTall.png');
        $('.lightBarbie').attr('width', 287);
        $('.lightBarbie').attr('height', 299);
        $('.promoLightBox').css('top', -274);
    }
    if (($('#videoPage').length > 0) && ($('.lightBarbie').length > 0)) {
        $('.lightBarbie').attr('src', '\/Content\/img\/commonAssets\/barbieHeaderTall.png');
        $('.lightBarbie').attr('width', 287);
        $('.lightBarbie').attr('height', 299);
        $('.promoLightBox').css('top', -274);
    }
    /* ####################### CLOSE MENU ON LOGIN ######################### */
    jQuery('.capture_modal_open').bind('click', function () {
        jQuery('.close').trigger('click');
    });

    /* ####################### OPEN TOTE ######################### */
    jQuery('.fire-tote').bind('click', function () {
        jQuery('.account-nitro').trigger('click');
    });

    /* ####################### CLOSE PROMO POPUP ######################### */
    $('.promoCloseBtn').click(function (e) {
        $('#darkLayer').removeClass('darkClass');
        $('#container').removeClass('fixedContainer');
        $('.promoContainer').css('display', 'none');
        $('.welcomeContainer').css('display', 'none');
        $('.tuneInContainer').css('display', 'none');
        $('.registerContainer').css('display', 'none');
    });

    $('.capture_modal_open').click(function (e) {
        $('#darkLayer').removeClass('darkClass');
        $('#container').removeClass('fixedContainer');
        $('.promoContainer').css('display', 'none');
        $('.welcomeContainer').css('display', 'none');
        $('.tuneInContainer').css('display', 'none');
        $('.registerContainer').css('display', 'none');
    });

    var flowplayer = new Object();

    /* ####################### TUNE IN MODAL ######################### */
    $('.nextVideo img').click(function (event) {
        $('#darkLayer').addClass('darkClass');
        $('#container').addClass('fixedContainer');
        $('.tuneInContainer').css('display', 'block');
    });


    /* ####################### IND RELATIONSHIP HEARTS ######################### */
    if ($('.characterAvatarContainer').length > 0) {
        var characterHearts = { barbie: 7, nikki: 3, raquelle: 5, ken: 7, skipper: 3, stacie: 3, chelsea: 3, teresa: 3, ryan: 5, taffy: 1, blissa: 3, tawny: 1 };
        var characterUrl = document.URL.split('/')[5];

        for (var key in characterHearts) {
            if (key == characterUrl) {
                var numHearts = characterHearts[key];
                var heartList = "";
                for (var a = 0; a < numHearts; a++) {
                    heartList = heartList + "<li></li>";
                }
                $(heartList).appendTo($('.castRel .hearts'));
            }
        }
    }


    /* ####################### CHARACTER AVATAR IMAGE REPLACEMENT ######################### */
    if ($('.characterLargeAvatar').length > 0) {

        var characterAsideImages = [{ name: 'barbie', image1: '/Content/img/characterwall/barbie/ken.png', image2: '/Content/img/characterwall/barbie/toy.png', image3: '/Content/img/characterwall/barbie/bag.png', image4: '/Content/img/characterwall/barbie/letters.png' }, { name: 'blissa', image1: '/Content/img/characterwall/blissa/nailpolish.png', image2: '/Content/img/characterwall/blissa/seat.png', image3: '/Content/img/characterwall/blissa/bed.png', image4: '/Content/img/characterwall/blissa/couch.png' }, { name: 'chelsea', image1: '/Content/img/characterwall/chelsea/trampoline.png', image2: '/Content/img/characterwall/chelsea/bucket.png', image3: '/Content/img/characterwall/chelsea/cupcake.png', image4: '/Content/img/characterwall/chelsea/bear.png' }, { name: 'ken', image1: '/Content/img/characterwall/ken/barbie.png', image2: '/Content/img/characterwall/ken/cellphone.png', image3: '/Content/img/characterwall/ken/surfboard.png', image4: '/Content/img/characterwall/ken/hammer.png' }, { name: 'nikki', image1: '/Content/img/characterwall/nikki/laptop.png', image2: '/Content/img/characterwall/nikki/ipod.png', image3: '/Content/img/characterwall/nikki/camera.png', image4: '/Content/img/characterwall/nikki/boots.png' }, { name: 'raquelle', image1: '/Content/img/characterwall/raquelle/ryan.png', image2: '/Content/img/characterwall/raquelle/clapperboard.png', image3: '/Content/img/characterwall/raquelle/stool.png', image4: '/Content/img/characterwall/raquelle/purse.png' }, { name: 'ryan', image1: '/Content/img/characterwall/ryan/paper.png', image2: '/Content/img/characterwall/ryan/spray.png', image3: '/Content/img/characterwall/ryan/ryan.png', image4: '/Content/img/characterwall/ryan/guitar.png' }, { name: 'skipper', image1: '/Content/img/characterwall/skipper/mirror.png', image2: '/Content/img/characterwall/skipper/computer.png', image3: '/Content/img/characterwall/skipper/cellPhone.png', image4: '/Content/img/characterwall/skipper/videoCamera.png' }, { name: 'stacie', image1: '/Content/img/characterwall/stacie/clipboard.png', image2: '/Content/img/characterwall/stacie/soccerball.png', image3: '/Content/img/characterwall/stacie/flippers.png', image4: '/Content/img/characterwall/stacie/surfboard.png' }, { name: 'taffy', image1: '/Content/img/characterwall/taffy/frizby.png', image2: '/Content/img/characterwall/taffy/bed.png', image3: '/Content/img/characterwall/taffy/tennisBall.png', image4: '/Content/img/characterwall/taffy/bone.png' }, { name: 'tawny', image1: '/Content/img/characterwall/tawny/carrot.png', image2: '/Content/img/characterwall/tawny/towel.png', image3: '/Content/img/characterwall/tawny/barbie.png', image4: '/Content/img/characterwall/tawny/piano.png' }, { name: 'teresa', image1: '/Content/img/characterwall/teresa/cupcake.png', image2: '/Content/img/characterwall/teresa/book.png', image3: '/Content/img/characterwall/teresa/bag.png', image4: '/Content/img/characterwall/teresa/fish.png'}];

        var characterName = document.URL.split('/')[5];
        var characterAvatar = '/Content/img/characterwall/largeAvatar_' + characterName + '.png';
        $('.characterLargeAvatar').attr('src', characterAvatar);
        var relationshipIcon = '/Content/img/characterwall/relationshipAvatar' + characterName + '.png';
        $('.relIcon').attr('src', relationshipIcon);
        var heartsUlClass = characterName + '-hearts';
        $('.castRel ul').addClass(heartsUlClass);

        $.each(characterAsideImages, function (key, characterItems) {
            if (characterItems.name == characterName) {
                $('.charStat1').attr('src', characterItems.image1);
                $('.charStat2').attr('src', characterItems.image2);
                $('.charStat3').attr('src', characterItems.image3);
                $('.charStat4').attr('src', characterItems.image4);
            }
        });
    }


    /* ####################### MAP POPUP MOUSE EVENTS ######################### */
    $('.dreamHousePopUpBox li, .mallPopUpBox li, .popUpBox li').bind('mouseover', popUpLocationHover);
    $('.dreamHousePopUpBox li, .mallPopUpBox li, .popUpBox li').bind('mouseout', popUpLocationOut);

    function popUpLocationHover(event) {
        $(this).find('.locationThumbOverlay').css('top', '-64px');
        $(this).find('a').css('color', '#bc0b48');
    }

    function popUpLocationOut(event) {
        $(this).find('.locationThumbOverlay').css('top', '0');
        $(this).find('a').css('color', '#E74689');
    }



    /* ####################### SCALE LEFT AND RIGHT SECTIONS TO HAVE SAME HEIGHT - NEED TO ENSURE WORKING ######################### */
    var marginHeight;
    $('#section3').each(function () {
        marginHeight = ($(this).find('.outerLeft').outerHeight()) - ($(this).find('.outerRight').outerHeight());
        if (marginHeight > 0) {
            $(this).find('.gridItem').css({
                'marginTop': marginHeight / 4,
                'marginBottom': marginHeight / 4
            });
        } else {
            $(this).find('.leftSection').css({
                'min-height': $(this).find('.outerRight').outerHeight()
            });
        }
    });



    /* ####################### BUTTON GRADIENT CLASS TOGGLE ######################### */
    $('.gradientV').bind('mouseenter mouseleave', function () {
        $(this).find('p').toggleClass('nonHover').toggleClass('entered');
    });




    /* ####################### LOADING IMAGES DEPENDING ON WINDOW SIZE ######################### */
    $('.feedItem').find(".postPic").each(function () {
        var linkRef = $(this);
        var imgFileArray = linkRef.attr('id').split('.');
        var imgFilePre = imgFileArray[0];
        var imgFileExt = imgFileArray[1];
        if ($(window).width() < 800) {
            imgFilePre = imgFilePre + 'Small';
        }
        var image = $("<img></img>", {
            "class": "lazy",
            src: 'img/pinkImgBkgd.gif',
            "data-original": 'img/' + imgFilePre + '.' + imgFileExt
        });
        linkRef.append(image);
        $("img.lazy").lazyload();
    });




    /* ####################### CAST PAGE SET CHARACTER BLOCK HEIGHTS ######################### */
    var characterBlockMaxHeight = 0;
    var heightDifference = 0;
    var profileHeight = 0;

    function setCharacterBlockHeight() {
        $('.characterBlock').each(function () {
            if ($(this).outerHeight() > characterBlockMaxHeight) {
                characterBlockMaxHeight = $(this).outerHeight();
            }
        });

        $('.characterBlock').each(function () {
            profileHeight = $(this).find('.profile').outerHeight();
            heightDifference = characterBlockMaxHeight - $(this).outerHeight();
            $(this).find('.profile').height(profileHeight + heightDifference + 20);
        });
    }

    setCharacterBlockHeight();





    /* ####################### MAP FEATURED DESCRIPTIONS SET BLOCK HEIGHTS ######################### */
    var featuredDescMaxHeight = 0;

    function setFeaturedDescHeight() {
        $('.featuredDesc p').each(function () {
            if ($(this).outerHeight() > featuredDescMaxHeight) {
                featuredDescMaxHeight = $(this).outerHeight();
            }
        });

        $('.featuredDesc .descContainer').each(function () {
            $(this).height(featuredDescMaxHeight);
        });
    }

    setFeaturedDescHeight();





    /* #################### VIDEO PLAYER CODE ####################    */
    function episodeByDate() {
        jQuery.ajax({
            url: "/Handlers/GetEpisodesToDate.ashx?locale=" + langUrl,
            dataType: 'json',
            error: function () {
            },
            success: function (data) {
                var currentDate = new Date();
                var urlOne = document.URL.split('/')[3];
                var episodeNumber = document.URL.split('/')[5];
                var output = '';
                jQuery('.latestEpisode div.horzBtn .love-peter').attr('data-loveme', episodeNumber);
                jQuery('.latestEpisode p.loveSentence').attr('data-loved', episodeNumber);
                jQuery.each(data, function (key, value) {
                    if (value.StartDate <= currentDate) {
                        if (value.EpisodeNumber != '00') {
                            output += '<li class="block episode' + value.EpisodeNumber + '"><h5>' + value.EpisodeNumber + ' - ' + value.Title + '</h5><a href="/' + urlOne + '/episodes/' + value.EpisodeNumber + '"><img src="/Content/img/commonAssets/videoStills/challengeVideos/episode_' + value.EpisodeNumber + '.png" alt="' + value.Title + '"/></a></li>';
                        }
                    }
                });

                jQuery('div.episodes-row div.wrapper ul').html(output);
                jQuery('.episodes-row').blidCarousel({ intialView: 1, widthBool: 'true' });
                jQuery(window).smartresize(function () {
                    jQuery('.episodes-row').blidCarousel({ intialView: 1, widthBool: 'true' });
                });
                var videoPage = jQuery('body#videoPage');
                if (videoPage.length > 0) {

                    jQuery.each(data, function (key, value) {
                        if (episodeNumber == value.EpisodeNumber) {
                            switch (episodeNumber) {
                                case '01':
                                    jQuery('.backBtnPurple').css('display', 'none');
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep1Number.png) no-repeat top left');
                                    jQuery('.fwdBtnPurple').attr('href', '02');
                                    break;
                                case '02':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep2Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '01');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '03');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }
                                    break;
                                case '03':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep3Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '02');
                                    jQuery('.fwdBtnPurple').attr('href', '04');
                                    break;
                                case '04':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep4Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '03');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '05');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }
                                    break;
                                case '05':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep5Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '04');
                                    jQuery('.fwdBtnPurple').attr('href', '06');
                                    break;
                                case '06':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep6Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '05');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '07');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }
                                    break;
                                case '07':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep7Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '06');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '08');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '08':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep8Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '07');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '09');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '09':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep9Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '08');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '10');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '10':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep10Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '09');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '11');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '11':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep11Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '10');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '12');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '12':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep12Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '11');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '13');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '13':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep13Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '12');
                                    jQuery('.fwdBtnPurple').attr('href', '14');
                                    if (currentDate >= value.StartDate) {
                                        jQuery('.fwdBtnPurple').attr('href', '14');
                                    } else {
                                        jQuery('.fwdBtnPurple').hide();
                                    }

                                    break;
                                case '14':
                                    jQuery('.episodeTitleNumber').css('background', 'url(/Content/img/homePage/ep14Number.png) no-repeat top left');
                                    jQuery('.backBtnPurple').attr('href', '13');
                                    jQuery('.fwdBtnPurple').hide();
                                    break;
                            }

                        }



                    });
                }


            }
        });
    }
    if ($('.latestEpisode').length > 0) {
        episodeByDate();
    }


    /* ####################### RETURN PLAYER AVATAR IMAGES ######################### */
    function getProfile() {

        var userName = global.userName;
        $.ajax({
            url: "/Handlers/RetrieveProfile.ashx",
            data: "user=" + userName + "&locale=" + langUrl,
            dataType: 'json',
            error: function () {
            },
            success: function (data) {
                if (data != null) {
                    var backgroundImage = data.AvatarBackground;
                    var objectImage = data.AvatarForeground;
                    var thumbnailImage = data.AvatarSmall;
                    var menuBarThumbnailImage = data.AvatarSmall;

                    if ($('.playerAvatar').length > 0) {
                        $('.avatarBackground').attr('src', backgroundImage);
                        $('.avatarObject').attr('src', objectImage);
                    }
                    $('.smallMenuAvatar').css({ 'width': 'auto', 'height': '44px' });
                    $('.smallMenuAvatar').attr('src', thumbnailImage);
                    $('.avatar-small img').attr('src', menuBarThumbnailImage);
                } else {
                    if ($('.playerAvatar').length > 0) {
                        $('.avatarBackground').attr('src', '/Content/img/bfriends/backgrounds/bg_7.png');
                        $('.avatarObject').attr('src', '/Content/img/bfriends/object/techy.png');
                    }
                    $('.smallMenuAvatar').css({ 'width': 'auto', 'height': '44px' });
                    $('.smallMenuAvatar').attr('src', '/Content/img/menu/barbie-icon.png');
                    $('.avatar-small img').attr('src', '/Content/img/menu/avatar-small.png');
                }
            }
        });
    }

    getProfile();


    /* ####################### BREAK URL AND REDIRECT ######################### */

    var urlOne = document.URL.split('/')[4];
    var urlTwo = document.URL.split('/')[5];
    if (urlOne == undefined) {
        urlOne = '';
    }
    if (urlTwo == undefined) {
        urlTwo = '';
    }
    var currentURL = '' + urlOne + '/' + urlTwo + '';
    var languageList = '<li class="arabic"><a href="/ar-MEA/'
    + currentURL +
	'"> العربية  </a></li><li class="bulgarian"><a href="/bg-BG/'
    + currentURL +
    '">български</a></li><li class="china"><a href="/zh-CN/'
    + currentURL +
    '">中文</a></li><li class="czech"><a href="/cs-CZ/'
    + currentURL+
    '">Čeština</a></li><li class="danish"><a href="http://teaser.dreamhouse.barbie.com/da-DK/">Dansk</a></li><li class="dutch"><a href="/nl-NL/'
    + currentURL +
    '">Nederlands</a></li><li class="english"><a href="/en-US/'
    + currentURL +
    '">English US</a></li><li class="finnish"><a href="/fi-FI/'
    + currentURL +
    '">Suomi</a></li><li class="france"><a href="/fr-FR/'
    + currentURL +
    '">Français</a></li><li class="german"><a href="/de-DE/'
    + currentURL +
    '">Deutsch</a></li><li class="greek"><a href="/el-GR/'
    + currentURL +
    '">ελληνικά</a></li><li class="hebrew"><a href="/hb-IL/'
    + currentURL +
    '">עברית</a></li><li class="italian"><a href="/it-IT/'
    + currentURL +
    '">Italiano</a></li><li class="norwegian"><a href="http://teaser.dreamhouse.barbie.com/nb-NO/">Norsk</a></li><li class="poland"><a href="/pl-PL/'
    + currentURL +
    '">Polski</a></li><li class="brazil"><a href="/pt-BR/'
    + currentURL +
    '">Português - Brasil</a></li><li class="portugal"><a href="/pt-PT/'
    + currentURL +
    '">Português - Portugal</a></li><li class="russian"><a href="/ru-RU/'
    + currentURL +
    '">Руccкий</a></li><li class="latin-america"><a href="/es-LAM/'
    + currentURL +
    '">Español - América Latina</a></li><li class="spain"><a href="/es-ES/'
    + currentURL +
    '">Español - España</a></li><li class="swedish"><a href="http://teaser.dreamhouse.barbie.com/sv-SE/">Svenska</a></li><li class="turkish"><a href="/tr-TR/'
    + currentURL +
    '">Türkçe</a></li>';
    jQuery('.locationList').html(languageList);

    /* ####################### UPDATE LANGUAGE PROMPT BASED ON LANGUAGE ######################### */
    language = document.URL.split('/')[3];
    var dialect = jQuery('.dialect');
    var country = jQuery('.country');
    switch (language) {
        case 'ar-MEA':
            dialect.html('العربية');
            country.html('الشرق الأوسط أفريقيا').attr('data-text', 'الشرق الأوسط أفريقيا');
            break;
        case 'bg-BG':
            dialect.html('български');
            country.html('България').attr('data-text', 'България');
            break;
        case 'zh-CN':
            dialect.html('中文');
            country.html('中国').attr('data-text', '中国');
            break;
        case 'cs-CZ':
            dialect.html('Čeština');
            country.html('Česká Republika').attr('data-text', 'Česká Republika');
            break;
        case 'da-DK':
            dialect.html('Dansk');
            country.html('Danmark').attr('data-text', 'Danmark');
            break;
        case 'nl-NL':
            dialect.html('Nederlands');
            country.html('Nederland').attr('data-text', 'Nederland');
            break;
        case 'en-US':
            dialect.html('English');
            country.html('United States').attr('data-text', 'United States');
            break;
        case 'fi-FI':
            dialect.html('Suomi');
            country.html('Suomi').attr('data-text', 'Suomi');
            break;
        case 'fr-FR':
            dialect.html('Français');
            country.html('France').attr('data-text', 'France');
            break;
        case 'de-DE':
            dialect.html('Deutsch');
            country.html('Deutschland').attr('data-text', 'Deutschland');
            break;
        case 'el-GR':
            dialect.html('Ελληνικά');
            country.html('Ελλάδα').attr('data-text', 'Ελλάδα');
            break;
        case 'he-IL':
            dialect.html('עברית');
            country.html('ישראל').attr('data-text', 'ישראל');
            break;
        case 'hb-IL':
            dialect.html('עברית');
            country.html('ישראל').attr('data-text', 'ישראל');
            break;
        case 'it-IT':
            dialect.html('Italiano');
            country.html('Italia').attr('data-text', 'Italia');
            break;
        case 'nb-NO':
            dialect.html('Norsk');
            country.html('Norge').attr('data-text', 'Norge');
            break;
        case 'pl-PL':
            dialect.html('Polski');
            country.html('Polska').attr('data-text', 'Polska');
            break;
        case 'pt-BR':
            dialect.html('Português');
            country.html('Brasil').attr('data-text', 'Brasil');
            break;
        case 'pt-PT':
            dialect.html('Português');
            country.html('Portugal').attr('data-text', 'Portugal');
            break;
        case 'ru-RU':
            dialect.html('Pусский');
            country.html('Россия').attr('data-text', 'Россия');
            break;
        case 'es-LAM':
            dialect.html('Español');
            country.html('América Latina').attr('data-text', 'América Latina');
            break;
        case 'es-MX':
            dialect.html('Español');
            country.html('América Latina').attr('data-text', 'América Latina');
            break;
        case 'es-ES':
            dialect.html('Español');
            country.html('España').attr('data-text', 'España');
            break;
        case 'sv-SE':
            dialect.html('Svenska');
            country.html('Sverige').attr('data-text', 'Sverige');
            break;
        case 'tr-TR':
            dialect.html('Türkçe');
            country.html('Türkiye').attr('data-text', 'Türkiye');
            break;
    }


    /* ####################### HOMEPAGE WHAT'S HAPPENING & COMMUNITY STATS ######################### */
    var homePage = jQuery('body#videoPage');
    if (homePage.length > 0) {
        /* ####################### WHAT'S HAPPENING ######################### */
        /* ####################### LEADERBOARD STATISTICS ######################### */
        function getMyCountry() {
            jQuery.ajax({
                url: "/handlers/retrieveregionusers.ashx?locale=" + langUrl,
                dataType: 'json',
                error: function () {
                },
                success: function (data) {
                    var locationData = data.Regions;
                    var myGroupTotal = '';
                    jQuery.each(locationData, function (item, value) {
                        if (value.Culture == langUrl) {
                            myGroupTotal += value.TotalUsers;
                        }
                    });
                    if (myGroupTotal == '') {
                        myGroupTotal = '0';
                    }
                    var countryContainer = jQuery('ul.countryCount');

                    if (myGroupTotal >= 1000) {
                        myGroupTotal = myGroupTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,').replace(/[^a]/g, '<li class="pinkNumbFlip pink$&">$&</li>').replace('<li class="pinkNumbFlip pink,">', '<li class="pinkNumbFlip pinkComma">');
                        countryContainer.html(myGroupTotal);
                    } else {
                        myGroupTotal = myGroupTotal.toString().replace(/[^a]/g, '<li class="pinkNumbFlip pink$&">$&</li>').replace('<li class="pinkNumbFlip pink,">', '<li class="pinkNumbFlip pinkComma">');
                        countryContainer.html(myGroupTotal);
                    }
                }
            });
        }
        getMyCountry();

        function getAllUsers() {
            jQuery.ajax({
                url: "/handlers/retrieveregionusers.ashx?locale=" + langUrl,
                dataType: 'json',
                error: function () {
                },
                success: function (data) {
                    var totalUsers = data.TotalUsers;
                    var today = new Date();
                    var May11 = new Date('May 11, 2012');
                    var May15 = new Date('May 15, 2012');
                    var May18 = new Date('May 18, 2012');
                    var May21 = new Date('May 21, 2012');
                    var May25 = new Date('May 25, 2012');
                    var May28 = new Date('May 28, 2012');
                    var June1 = new Date('June 1, 2012');
                    var June8 = new Date('June 8, 2012');
                    var June15 = new Date('June 15, 2012');
                    var June22 = new Date('June 22, 2012');
                    var June29 = new Date('June 29, 2012');
                    var July6 = new Date('July 6, 2012');
                    var July13 = new Date('July 13, 2012');
                    var July20 = new Date('July 20, 2012');
                    var bCoinsSelector = jQuery('span.b-coins-awarded');
                    var heartsSelector = jQuery('span.hearts-awarded');
                    var eventsSelector = jQuery('span.events-awarded');
                    var loveSelector = jQuery('span.loves-awarded');
                    if (today <= May11) {
                        var multiplier = Math.ceil(totalUsers * 45);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today == May11) {
                        var multiplier = Math.ceil(totalUsers * 45);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= May15) {
                        var multiplier = Math.ceil(totalUsers * 96);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= May18) {
                        var multiplier = Math.ceil(totalUsers * 143);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= May21) {
                        var multiplier = Math.ceil(totalUsers * 199);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= May25) {
                        var multiplier = Math.ceil(totalUsers * 267);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= May28) {
                        var multiplier = Math.ceil(totalUsers * 325);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= June1) {
                        var multiplier = Math.ceil(totalUsers * 389);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= June8) {
                        var multiplier = Math.ceil(totalUsers * 457);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= June15) {
                        var multiplier = Math.ceil(totalUsers * 522);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= June22) {
                        var multiplier = Math.ceil(totalUsers * 578);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= June29) {
                        var multiplier = Math.ceil(totalUsers * 640);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= July6) {
                        var multiplier = Math.ceil(totalUsers * 703);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= July13) {
                        var multiplier = Math.ceil(totalUsers * 792);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }
                    if (today >= July20) {
                        var multiplier = Math.ceil(totalUsers * 858);
                        var coinsAwarded = Math.ceil(multiplier * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var eventsAwarded = Math.ceil(multiplier * 1.25).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var lovesAwarded = Math.ceil(multiplier * 1.33).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                        var heartsAwarded = multiplier.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
                        bCoinsSelector.html(coinsAwarded);
                        heartsSelector.html(heartsAwarded);
                        eventsSelector.html(eventsAwarded);
                        loveSelector.html(lovesAwarded);
                    }

                }
            });
        }
        getAllUsers();


    }




    /* ####################### CENTERING BUTTONS WITH UNKNOWN WIDTHS ######################### */
    /*var centerItemWidth = $('.centerItem').width();
    $('.centerItem').css({ 'width': centerItemWidth, 'margin-left': 'auto', 'margin-right': 'auto', 'text-align': 'center' });*/






    /* ####################### CACHE BACKGROUND IMAGE THEN REPLACE LOW RES IMAGE ALREADY ON SCREEN ######################### */
    /*var image = $("<img></img>", {
    src: 'img/largeImage.jpg'			  
    }).load(function(){
    $('body').css("background-image", "url("+ this.src  +")");
    });*/







    /* ####################### HIDE RATING FLOWERS ######################### */
    $('.flowers li').hide();












    /* ####################### LARGE LOCATION IMAGE SWAP OUT ######################### */
    function swapLocationLargeImage() {
        var UrlString = document.URL.split('/')[5].split('?')[0];
        var locationUrl = '/Content/img/locations/locationHeader/location-' + UrlString + '.png';
        $('.largeLocation').attr('src', locationUrl);
    }

    if ($('.largeLocation').length > 0) {
        swapLocationLargeImage();
    }

});









$(window).load(function () {

    var userString = global.userName;
    var langUrl = document.URL.split('/')[3];

    /* ####################### VIDEO RATING ######################### */
    if ($('.latestEpisode .rate').length > 0) {
        $('.selectME li').click(function (event) {
            var action = jQuery(this).attr('data-actions');
            processRanking(action);
            var rateNumber = parseInt($(this).html());
            var flowerUl = $(this).closest('ul').parent().next('ul');
            flowerUl.find('li:lt(' + (rateNumber) + ')').show();
            flowerUl.find('li:gt(' + (rateNumber - 1) + ')').hide();
            $('.rate').hide();
            var rateUrl = "/Handlers/RecordUserVideoRating.ashx";
            $.ajax({
                url: rateUrl,
                data: "user=" + userString + "&episode=" + episodeIdentifier + "&rating=" + rateNumber + "&locale=" + langUrl,
                dataType: 'json',
                error: function () {

                },
                success: function (data) {
                }
            });
        });
    }

    /* ####################### LOCATION RATING ######################### */
    if ($('#barbieCloset .rate').length > 0) {
        $('.selectME li').click(function (event) {
            var rateNumber = parseInt($(this).html());
            var flowerUl = $(this).closest('ul').parent().next('ul');
            flowerUl.find('li:lt(' + (rateNumber) + ')').show();
            flowerUl.find('li:gt(' + (rateNumber - 1) + ')').hide();
            $('.rate').hide();
            var rateUrl = "/Handlers/RecordUserLocationRating.ashx";
            $.ajax({
                url: rateUrl,
                data: "user=" + userString + "&location=" + locationIdentifier + "&rating=" + rateNumber + "&locale=" + langUrl,
                dataType: 'json',
                error: function () {

                },
                success: function (data) {
                }
            });
        });
    }


    /* ####################### GET URL PARAMETERS AND SEND DATA TO SQL FOR LOCATION GAMEPLAY ######################### */
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var urlParameters = getUrlVars();
    if ($('#barbieCloset').length > 0) {
        jQuery('#barbieCloset .userRate p.loveSentence').attr('data-loved', urlParameters[1]);
        jQuery('#barbieCloset .userRate div.horzBtn').attr('data-loveme', urlParameters[1]);
        jQuery('#barbieCloset .userRate .love-peter').attr('data-loveme', urlParameters[1]);
    }

    function sendDataLocationGamePlay() {
        console.log('gameplay location');
        var userName = global.userName;
        if (Modernizr.localstorage) {
            var level = localStorage.getItem('LevelNumber');
            if (level == null) {
                level = jQuery('.account-nitro .user-info .levelDetail .level').html();
            }
        } else {
            var level = getAttribute('LevelNumber');
            if (level == null) {
                level = jQuery('.account-nitro .user-info .levelDetail .level').html();
            }
        }
        var challengeID = urlParameters[0];
        var activityID = urlParameters[1];
        var selectedIndex = -1;
        var finalActivity = urlParameters[2];

        if (urlParameters[4].substr(urlParameters[4].length - 1) == '/') {
            var challengeOrder = (urlParameters[4]).slice(0, -1);
        } else {
            var challengeOrder = (urlParameters[4]);
        }
        var waitingForComment = urlParameters[3];
        var d = new Date();
        var n = d.getTime();
        $.ajax({
            url: "/Handlers/ActivityData.ashx?call=" + n,

            data: "user=" + userName + "&level=" + level + "&challengeID=" + challengeID + "&activityID=" + activityID + "&selectedIndex=" + selectedIndex + "&challengeComplete=" + finalActivity + "&challengeOrder=" + challengeOrder + "&waitingForComment=" + waitingForComment + "&locale=" + langUrl,

            dataType: 'json',
            error: function () {

            },
            success: function (data) {
                //window.location.href = "/" + langUrl + "/b-friends/mywall";
                completeActivity(activityID);
            }
        });
    }

    //jQuery('.select-correct').bind('click', function () {
    $('.sliderUl').delegate('.select-correct', 'click', function () {
        console.log('read from page');
        sendDataLocationGamePlay();
    });


    /* ####################### RETRIEVE VIDEO RATING ######################### */
    var ratingSymbol;
    switch (episodeIdentifier) {
        case '2617':
            ratingSymbol = 'flowers';
            break;

        case '2619':
            ratingSymbol = 'tennis';
            break;

        case '2620':
            ratingSymbol = 'horseshoe';
            break;

        case '2621':
            ratingSymbol = 'cupcake';
            break;

        case '2622':
            ratingSymbol = 'hairbrush';
            break;

        case '2623':
            ratingSymbol = 'purse';
            break;

        case '2624':
            ratingSymbol = 'beachball';
            break;

        case '2625':
            ratingSymbol = 'cellphone';
            break;

        case '2626':
            ratingSymbol = 'camper';
            break;

        case '2627':
            ratingSymbol = 'pawprint';
            break;

        case '2628':
            ratingSymbol = 'licence';
            break;

        case '2629':
            ratingSymbol = 'guitar';
            break;

        case '2630':
            ratingSymbol = 'giftbox';
            break;

        case '2631':
            ratingSymbol = 'shoe';
            break;

        default:
            ratingSymbol = 'flowers';
            break;
    }
    $('.ratingSymbol').removeClass().addClass('ratingSymbol ' + ratingSymbol);

    if ($('.latestEpisode .rate').length > 0) {
        if (global.userName == '' || global.userName == null) { } else {
            var rateUrl = "/Handlers/RetrieveUserVideoRating.ashx";
            var flowerRating;
            $.ajax({
                url: rateUrl,
                data: "user=" + global.userName + "&episode=" + episodeIdentifier + "&locale=" + langUrl,
                dataType: 'json',
                error: function () {

                },
                success: function (data) {
                    if (data.length > 0) {
                        $.each(data, function (key, episode) {
                            if (episode.Episode == episodeIdentifier) {
                                var epRating = episode.Rating;
                                flowerRating = parseInt(epRating);
                            }
                        });
                        $('.' + ratingSymbol).find('li:lt(' + flowerRating + ')').show();
                        if (flowerRating != undefined) {
                            $('.rate').hide();
                        }
                    }
                }
            });
        }
    }

    /* ####################### RETRIEVE LOCATION RATING ######################### */
    if ($('#barbieCloset .rate').length > 0) {

        if (global.userName == '' || global.userName == null) { } else {
            var rateUrl = "/Handlers/RetrieveUserLocationRating.ashx";
            var flowerRating;
            $.ajax({
                url: rateUrl,
                data: "user=" + userString + "&location=" + locationIdentifier + "&locale=" + langUrl,
                dataType: 'json',
                error: function () {

                },
                success: function (data) {
                    if (data.length > 0) {
                        $.each(data, function (key, location) {
                            if (location.Location == locationIdentifier) {
                                var locRating = location.Rating;
                                flowerRating = parseInt(locRating);
                            }
                        });
                        $('.flowers li:lt(' + flowerRating + ')').show();
                        if (flowerRating != undefined) {
                            $('.rate').hide();
                        }
                    }
                }
            });
        }
    }

    /* ####################### UNLOCKED CHARACTERS BY LEVEL ######################### */
    var unlocked = {};
    unlocked.level1 = ['barbie', 'nikki', 'teresa', 'ken'];
    unlocked.level2 = ['skipper', 'stacie', 'chelsea'];
    unlocked.level3 = ['taffy', 'tawny', 'ryan'];
    unlocked.level4 = ['blissa', 'raquelle'];

    /* ####################### CAST PAGE HEARTS AND LOCKS ######################### */
    if ($('.characterBlock').length > 0) {
        for (var k = 0; k < global.myLevelNumber; k++) {
            var levelArray = 'level' + (k + 1);
            $.each(unlocked[levelArray], function (i, item) {
                $('.' + item + '-hearts').css('display', 'block');
                $('.' + item + '-locked').css('display', 'none');
                $('.' + item + '-padlock').css('display', 'none');
            });
        }
    }

    if ($('.characterBlock').length > 0 && global.myLevelNumber == undefined) {
        $.each(unlocked.level1, function (i, item) {
            $('.' + item + '-hearts').css('display', 'block');
            $('.' + item + '-locked').css('display', 'none');
            $('.' + item + '-padlock').css('display', 'none');
        });
    }
    /* ####################### CHARACTER WALL LOGGED OUT STATE ######################### */
    var characterUrl = document.URL.split('/')[5];
    if ($('.characterAvatarContainer').length > 0) {
        for (var p = 1; p < 5; p++) {
            var levelArray = 'level' + p;
            $.each(unlocked[levelArray], function (index, item) {
                if (item == characterUrl) {
                    if (p > global.myLevelNumber || (global.myLevelNumber == undefined && p != 1)) {
                        $('.lockedAvatar').css('display', 'block');
                        $('.characterLargeAvatar').css('display', 'none');
                        $('#lockedLevelBlock').removeClass('logged-out').css('display', 'block');
                        $('.lockedNotice').css('display', 'block');
                        $('.characterPostBlocks').css('display', 'none');
                        $('#relationshipBlock').css('display', 'none');
                    } else {
                        $('.lockedAvatar').css('display', 'none');
                        $('.characterLargeAvatar').css('display', 'block');
                        $('#lockedLevelBlock').removeClass('logged-out').css('display', 'none');
                        $('.lockedNotice').css('display', 'none');
                        $('.characterPostBlocks').css('display', 'block');
                        $('#relationshipBlock').css('display', 'block');
                        $('.avatarTextContainer p').css('display', 'none');
                    }
                }
            });
            $('.avatarTextContainer').css('display', 'block');
        }
    }

    if ($('.characterAvatarContainer').length > 0 && global.myLevelNumber == "") {
        $.each(unlocked.level1, function (i, item) {
            if (item == characterUrl) {
                $('.lockedAvatar').css('display', 'none');
                $('.characterLargeAvatar').css('display', 'block');
                $('#lockedLevelBlock').removeClass('logged-out').css('display', 'none');
                $('.lockedNotice').css('display', 'none');
                $('.characterPostBlocks').css('display', 'block');
            }
        });
    }

    /* ####################### LOVE IT CLICK ######################### */
    /*function loveIt() {
    $(this).hide();
    $(this).parent().find('.loveSentence').show();
    }

    $('.horzBtn').bind('click', loveIt);*/

    /* ####################### CREATE RANDOM LOVE IT NUMBER ######################### */
    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
    $('.numberOfLoves').each(function () {
        var randomNumberOfLoves = randomFromTo(1000, 140000);
        $('.numberOfLoves').text(randomNumberOfLoves);
    });

    /* ####################### RETRIEVE CHARACTER NAMES AND SET LOVE ITS ######################### */
    /*function returnCharacterNames() {
    var characterNamesUrl = "/Handlers/Characters.ashx";
    var html = $.ajax({
    url: "/Handlers/Characters.ashx",
    async: false
    }).responseText;
    return html;
    }

    var characterNmeArray = ['barbie', 'nikki', 'teresa', 'ken', 'skipper', 'stacie', 'chelsea', 'taffy', 'tawny', 'ryan', 'blissa', 'raquelle'];
    $('.RaquelleLoves').each(function (index) {
    var characterLoves = $(this);
    var randomCharacter = characterNmeArray[(Math.floor(Math.random() * 10))];
    characterLoves.removeClass().addClass(randomCharacter + 'Loves');
    var namesArray = returnCharacterNames().split(',');
    $.each(namesArray, function (i, val) {
    $('.' + val.toLowerCase() + 'Loves').text(val);
    });
    });*/



});