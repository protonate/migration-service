(function ($) {

    $.fn.characterWall = function (callback) {

        return this.each(function () {

            var characterObject;
            var randomNumber;
            var randomCharacter;
            var loveItCount;
            var onPageLoad = true;
            var characters = ['Barbie', 'Blissa', 'Chelsea', 'Ken', 'Nikki', 'Raquelle', 'Ryan', 'Skipper', 'Stacie', 'Taffy', 'Tawny', 'Teresa'];
            var langUrl = document.URL.split('/')[3];
            var characterName = document.URL.split('/')[5];
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

            $('.templateLeft, .templateRight, .commentTemplate').hide();


            /* #################### RETRIEVE CHARACTER DATA FROM TRIDION - RETURNING JSON ####################*/

            function retrieveCharacterData() {
                $.ajax({
                    url: "/Handlers/CharacterPost.ashx",
                    data: "character=" + characterName + "&locale=" + langUrl,
                    dataType: 'json',
                    error: function () {
                        console.log('error');
                    },
                    success: function (data) {
                        characterObject = data;
                        createPosts();
                        console.log(data);
                    }
                });
            }

            var unlocked = {};
            unlocked.level1 = ['barbie', 'nikki', 'teresa', 'ken'];
            unlocked.level2 = ['skipper', 'stacie', 'chelsea'];
            unlocked.level3 = ['taffy', 'tawny', 'ryan'];
            unlocked.level4 = ['blissa', 'raquelle'];

            var characterUrl = document.URL.split('/')[5];
            var retrieveData = false;

            for (var i = 1; i < 5; i++) {
                var levelArray = 'level' + i;
                $.each(unlocked[levelArray], function (index, item) {
                    if (item == characterUrl) {
                        if (i > level) {

                        } else {
                            retrieveData = true;
                        }
                    }
                });
            }

            if (retrieveData == true) {

                retrieveCharacterData();
            }



            /* #################### CREATE WALL POSTS FROM CHARACTER DATA ####################*/

            function createPosts() {
                var feedPosition;
                var postHeaderImage;
                var newPost;

                $.each(characterObject, function (key, characterDetails) {

                    characterName = characterDetails.Title;
                    //console.log(characterDetails.Character);
                    /* #################### CREATE CHARACTER HEADER IMAGE DEPENDING ON CHARACTER NAME RETURNING FROM TRIDION ####################*/
                    if ($('.characterPostBlocks .active').length > 0) {
                        feedPosition = $('.characterPostBlocks .active:first').attr('class').split(' ')[0];
                    } else {
                        feedPosition = 'commentFeedRight';
                    }
                    //console.log('feedPosition: ' + feedPosition);
                    //console.log('feedPosition: ' + feedPosition);
                    if (feedPosition == 'commentFeedLeft') {
                        newPost = $('.characterPostBlocks .templateRight:last').clone().prependTo('.characterPostBlocks').removeClass().addClass('commentFeedRight active').show();
                        characterFeed = 'FeedRight';
                    } else {
                        newPost = $('.characterPostBlocks .templateLeft:last').clone().prependTo('.characterPostBlocks').removeClass().addClass('commentFeedLeft active').show();
                        characterFeed = 'FeedLeft';
                    }




                    /* #################### ADD CHARACTER IMAGE TO DIV ####################*/

                    postHeaderImage = characterFeed + characterDetails.CharacterID;
                    console.log(postHeaderImage);
                    //newPost.hide();
                    //console.log(postHeaderImage);
                    newPost.find('div.characterName').addClass(postHeaderImage);

                    /* #################### ADD POST CONTENT ####################*/

                    $('<p/>', {
                        html: characterDetails.Post
                    }).prependTo(newPost.find(newPost.find('.speechBlockContent')));
                    $('<h3/>', {
                        html: characterDetails.Character
                    }).attr('class', 'firstActivityCharacter').prependTo(newPost.find(newPost.find('.speechBlockContent')));

                    newPost.find('.love-peter').attr('data-loveme', characterDetails.ID);
                    newPost.find('.loveSentence').attr('data-loved', characterDetails.ID);

                    switch (characterDetails.CharacterID) {
                        case "393":
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL,DOLLTASTIC");
                            break;
                        case "409":
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL,FRIEND_TO_ALL");
                            break;
                        case "411":
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "414":
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "427":
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        default:
                            newPost.find('.characterLove .lipz').attr('data-actions', "LOVE_GENERAL");
                    }

                    /* #################### POST COMMENTS ####################*/

                    if (characterDetails.Comments != null || characterDetails.Comments != undefined) {
                        $.each(characterDetails.Comments, function (key, postComment) {
                            //console.log(characterDetails.Comments);
                            var commentBlock = newPost.find('.commentTemplate').clone().removeClass().addClass('comment clearfix').appendTo(newPost.find('.commentContainer')).show();
                            commentBlock.find('.feedAvatar').attr('src', ('/Content/img/characterwall/commentAvatar_' + postComment.CharacterID + '.png'));
                            commentBlock.find('.character_name').html(postComment.Character);
                            commentBlock.find('.commentText').html(postComment.Comment);

                            commentBlock.find('.love-peter').attr('data-loveme', postComment.ID);
                            commentBlock.find('.loveSentence').attr('data-loved', postComment.ID);



                            switch (postComment.CharacterID) {
                                case "393":
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL,DOLLTASTIC");
                                    break;
                                case "409":
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL,FRIEND_TO_ALL");
                                    break;
                                case "411":
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                                    break;
                                case "414":
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                                    break;
                                case "427":
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                                    break;
                                default:
                                    commentBlock.find('.characterCommentLove .lipz').attr('data-actions', "LOVE_GENERAL");
                            }


                        });
                    } else {
                        //newPost.find('.loveItBlock').css('border-radius', '0 0 5px 5px');
                    }

                });

                $('div.characterLove').delegate('.love-peter', 'click', function () {
                    var item = jQuery(this).attr('data-loveme');
                    var type = jQuery(this).attr('data-doctorLove');
                    var action = jQuery(this).find('span').attr('data-actions');
                    writeLoves(type, item, action);
                });

                $('div.characterCommentLove').delegate('.love-peter', 'click', function () {
                    var item = jQuery(this).attr('data-loveme');
                    var type = jQuery(this).attr('data-doctorLove');
                    var action = jQuery(this).find('span').attr('data-actions');
                    writeLoves(type, item, action);
                });

                newPost.show();
            }

            checkLoveIts();




            /* #################### LOVE ITS #################### */

            function writeLoves(type, item, action) {
                var d = new Date();
                var n = d.getTime();
                jQuery.ajax({
                    url: "/Handlers/RecordLove.ashx?call=" + n,
                    data: "&user=" + global.userName + "&type=" + type + "&item=" + item + "",
                    dataType: 'json',
                    error: function () {
                        console.log('Error!');
                    },
                    success: function (data) {
                        callback({ loveIt: action });
                        writeLoveDetails(item);
                    }
                });
            }

            function writeLoveDetails(item) {
                var d = new Date();
                var n = d.getTime();
                jQuery.ajax({
                    url: "/Handlers/randomloveit.ashx?call=" + n + "&locale=" + langUrl,
                    datatype: 'json',
                    error: function () {

                    },
                    success: function (data) {
                        var output = data;
                        $('p[data-loved="' + item + '"]').html(output);
                        checkLoveIts();
                    }
                });
            }

            /* ####################### CHECK LOVE ITS ######################### */
            function checkLoveIts() {
                var d = new Date();
                var n = d.getTime();
                jQuery.ajax({
                    url: "/Handlers/RetrieveUserLoves.ashx?call=" + n + "&locale=" + langUrl,
                    data: "&user=" + global.userName + "",
                    dataType: 'json',
                    error: function () {
                        //console.log('Error!');
                    },
                    success: function (data) {
                        console.log(data);
                        var lovesToChange = [];
                        lovesToChange = jQuery('.love-peter');
                        var arrayEpisodes = [];
                        loveMe = [];
                        var totalDoctorLoves = jQuery('.myTotalLoves');
                        var arrayChallenges = [];
                        var arrayComments = [];
                        var arrayWall = [];
                        var arrayLocation = [];

                        arrayEpisodes = data.EpisodeLoves;
                        if (arrayEpisodes != null) {
                            arrayEpisodes = jQuery.grep(arrayEpisodes, function (n) { return (n); });
                        }

                        arrayChallenges = data.ChallengeLoves;
                        if (arrayChallenges != null) {
                            arrayChallenges = jQuery.grep(arrayChallenges, function (n) { return (n); });
                        }

                        arrayComments = data.ChallengeCommentLoves;
                        if (arrayComments != null) {
                            arrayComments = jQuery.grep(arrayComments, function (n) { return (n); });
                        }

                        arrayWall = data.WallCommentLoves;
                        if (arrayWall != null) {
                            arrayWall = jQuery.grep(arrayWall, function (n) { return (n); });
                        }

                        arrayLocation = data.LocationLoves;
                        if (arrayLocation != null) {
                            arrayLocation = jQuery.grep(arrayLocation, function (n) { return (n); });
                        }

                        totalDoctorLoves.html(data.Count);

                        jQuery(lovesToChange).each(function (i) {
                            loveMe = jQuery(this).attr('data-loveme');
                            if (onPageLoad == true) {
                                writeLoveDetails(loveMe);
                                onPageLoad = false;
                            }
                            if (jQuery.inArray(loveMe, arrayEpisodes) != -1) {
                                jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                jQuery('[data-loveme*=' + loveMe + ']').hide();
                                jQuery('[data-loved*=' + loveMe + ']').show();
                            }
                            if (arrayEpisodes != null) {
                                if (arrayEpisodes.indexOf(loveMe) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayChallenges) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayComments) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayLocation) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayWall) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                            }

                        });
                    }
                });
            }




        });

        return this;

    };
})(jQuery);