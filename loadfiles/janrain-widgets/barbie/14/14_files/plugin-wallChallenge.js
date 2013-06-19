(function ($) {

    $.fn.wallChallenge = function (options, callback) {

        options = options;

        return this.each(function () {

            var langUrl = document.URL.split('/')[3];
            var firstVisibleActivity = false;
            var firstInChallenge = "";
            var inCompleteChallengeVisible = false;
            var nextPrevChallenge = 'next';
            var displayActivity = true;
            var userID = 0;
            var challengeIndex = 624;
            var userName = global.userName;
            var commentThenRequest = false;
            var onPageLoad = true;
            var characterName;
            var altCharacterName;
            var latestChallenge;

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
            var lastVisibleChallenge = '';
            var seeMoreLevel = level;
            var challengesObject;
            var challengeOrder;
            var firstChallenge = true;
            var firstActivityInChallenge;
            var challengeComplete;
            var commentVisible;
            var selectedNextActivity = -1;
            var nextPartialActivity = '';
            var seeMoreFirst = false;
            var locationLink = false;
            var activityIndex = 0; /* #################### THIS VALUE WILL BE RETRIEVED FROM SQL AND / OR INCREMENTED ON PROGRESS AS TO HOW MANY ACTIVITES WITHIN THE CHALLENGE HAVE BEEN COMPLETED ####################*/

            /* #################### HIDE THE EXISTING BLOCKS OF CODE ON THE PAGE - THESE WILL ONLY BE USED AS TEMPLATES TO CLONE FROM ####################*/

            $('.templateLeft, .templateRight, .seeMoreBtn, .commentContainerTemplate, .commentTemplate, .imageQuestionTemplate, .textQuestionTemplate').hide();
            $('.interactiveSection, .comment').hide();

            /* #################### RETRIEVE CHALLENGE DATA FROM TRIDION - RETURNING JSON ####################*/
            function retrieveNextChallenge(gameLevel) {
                var d = new Date();
                var n = d.getTime();
                challengesObject = [];
                selectedNextActivity = -1;
                if (gameLevel > global.myLevelNumber) {
                    level = gameLevel;
                } else {
                }
                $.ajax({
                    url: "/Handlers/Challenges.ashx?call=" + n,
                    data: "&user=" + userName + "&level=" + level + "&locale=" + langUrl,
                    dataType: 'json',
                    error: function () {

                    },
                    success: function (data) {
                        if (parseInt(data.ChallengeLevel) > level) {
                            level = parseInt(data.ChallengeLevel);
                        }
                        //console.log(data);
                        //console.log(level);
                        nextPrevChallenge = 'next';
                        challengesObject = data;
                        if (onPageLoad == true) {
                            //console.log('not timed');
                            createChallenges();
                        } else {
                            setTimeout(function () {
                                //console.log('timed');
                                createChallenges();
                            }, 1000);
                        }
                    }
                });
            }

            retrieveNextChallenge(level);





            function retrievePrevChallenge() {
                $('.seeMoreBtn').hide();
                var d = new Date();
                var n = d.getTime();
                var postBlockClasses = $('.postBlocks .active:last').attr('class').split(' ');
                if (lastVisibleChallenge == '') {
                    lastVisibleChallenge = parseInt(postBlockClasses[postBlockClasses.length - 1]);
                }
                if (challengeOrder == 1 && level > 1) {
                    seeMoreLevel = seeMoreLevel - 1;
                }
                if (lastVisibleChallenge != 624) {
                    $.ajax({
                        url: "/Handlers/SeeMore.ashx?call=" + n,
                        data: "&user=" + userName + "&level=" + seeMoreLevel + "&challenge=" + lastVisibleChallenge + "&locale=" + langUrl,
                        dataType: 'json',
                        error: function () {

                        },
                        success: function (data) {
                            //console.log(data);
                            if (data.ChallengeOrder == 1 && seeMoreLevel > 1) {
                                seeMoreLevel = seeMoreLevel - 1;
                            }
                            nextPrevChallenge = 'prev';
                            challengesObject = data;
                            createChallenges();
                        }
                    });
                } else {
                    $('.seeMoreBtn').hide();
                }
            }

            $('.seeMoreBtn').bind('click', retrievePrevChallenge);






            /* #################### GENERATE LEFT OR RIGHT BLOCKS OPPOSITE TO PREVIOUS BLOCK EXISTING AT TOP OF PAGE - ENSURING LEFT AND RIGHT ALTERNATING POSTS ####################*/

            function createChallenges() {

                var feedPosition;
                var newPost;
                var postType;
                var postTypeFound = false;
                var postHeaderImage;
                var noChoices = false;
                var postIndex;
                var characterFeed;
                var waitingForComment = false;
                firstVisibleActivity = false;
                firstActivityInChallenge = true;
                nextPartialActivity = '';
                selectedNextActivity = -1;

                if (challengesObject.Activities.length > 0) {

                    challengeComplete = challengesObject.ChallengeComplete;
                    commentThenRequest = challengesObject.CommentViewed;

                    /* #################### IF REQUESTING NEXT CHALLENGE (NEW CHALLENGE) #################### */

                    if (nextPrevChallenge == 'next') {

                        challengeIndex = challengesObject.ChallengeID;
                        challengeOrder = challengesObject.ChallengeOrder;
                        latestChallenge = challengesObject.ChallengeID;
                        latestChallengeOrder = challengesObject.ChallengeOrder;

                        if ($('.postBlocks .active').length > 0) {
                            feedPosition = $('.postBlocks .active:first').attr('class').split(' ')[0];
                        } else {
                            feedPosition = 'commentFeedRight';
                        }

                        if (feedPosition == 'commentFeedLeft') {
                            newPost = $('.postBlocks .templateLeft:last').clone().prependTo('.postBlocks').removeClass().addClass('commentFeedRight active ' + challengeIndex);
                            characterFeed = 'FeedRight';
                        } else {
                            newPost = $('.postBlocks .templateRight:last').clone().prependTo('.postBlocks').removeClass().addClass('commentFeedLeft active ' + challengeIndex);
                            characterFeed = 'FeedLeft';
                        }
                    } else {

                        /* #################### IF REQUESTING PREVIOUS CHALLENGE #################### */

                        challengeIndex = challengesObject.ChallengeID;
                        challengeOrder = challengesObject.ChallengeOrder;
                        lastVisibleChallenge = challengeIndex;

                        if (challengeIndex == 624) {
                            seeMoreFirst = true;
                        } else {
                            seeMoreFirst = false;
                        }

                        feedPosition = $('.postBlocks .active:last').attr('class').split(' ')[0];

                        if (feedPosition == 'commentFeedLeft') {
                            newPost = $('.postBlocks .templateLeft:last').clone().appendTo('.postBlocks').removeClass().addClass('commentFeedRight active ' + challengeIndex + ' previous');
                            characterFeed = 'FeedRight';
                        } else {
                            newPost = $('.postBlocks .templateRight:last').clone().appendTo('.postBlocks').removeClass().addClass('commentFeedLeft active ' + challengeIndex + ' previous');
                            characterFeed = 'FeedLeft';
                        }
                    }

                    /* #################### ADD CHARACTER IMAGE TO DIV ####################*/
                    characterName = challengesObject.ChallengeCharacter.toLowerCase();
                    postHeaderImage = characterFeed + challengesObject.CharacterID;
                    newPost.hide();
                    newPost.find('.interactiveSection, .comment').hide();
                    newPost.find('div.characterName').addClass(postHeaderImage);

                    /* #################### ADD DATA ATTRIBUTE TO LOVE IT BUTTON #################### */
                    newPost.find('.love-peter').attr('data-loveme', challengeIndex);
                    newPost.find('.loveSentence').attr('data-loved', challengeIndex);

                    switch (challengesObject.CharacterID) {
                        case "393":
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL,DOLLTASTIC");
                            break;
                        case "409":
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL,FRIEND_TO_ALL");
                            break;
                        case "411":
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "414":
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "427":
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        default:
                            newPost.find('.challengeLove .lipz').attr('data-actions', "LOVE_GENERAL");
                    }

                    $('div.flatLoveItBtn').delegate('.love-peter', 'click', function () {
                        var item = jQuery(this).attr('data-loveme');
                        var type = jQuery(this).attr('data-doctorLove');
                        var action = jQuery(this).find('span').attr('data-actions');
                        writeLoves(type, item, action);
                    });

                    /* #################### LOOP THROUGH CHALLENGE OBJECT DTERMINING POST TYPE AND GENERATE RELEVANT BLOCK ####################*/
                    $.each(challengesObject.Activities, function (key, activity) {

                        postTypeFound = false;

                        if (activity.Choice1Text == null) {
                            noChoices = true;
                            postIndex = newPost.index();
                        }

                        /* #################### VIDEO POST BLOCK ####################*/
                        var potentialVideoUrl = activity.Choice1Text;
                        if (activity.Choice1Text != null) {
                            if (potentialVideoUrl.indexOf('episode') >= 0 && postTypeFound == false) {
                                var videoBlock = newPost.find('.videoQuestion').eq(0).clone().addClass('activity ' + 'activity_' + activity.ActivityID).insertBefore(newPost.find('.loveIt'));
                                createVideoPost(newPost, videoBlock, activity, postIndex);
                                postTypeFound = true;
                            }
                        }

                        /* #################### PHOTO POST BLOCK ####################*/
                        var potentialPhotoUrl = activity.Choice1Text;
                        if (activity.Choice1Text != null) {
                            if (potentialPhotoUrl.indexOf('gameplay') >= 0 && postTypeFound == false) {
                                var photoBlock = newPost.find('.photoQuestion').eq(0).clone().addClass('activity ' + 'activity_' + activity.ActivityID).insertBefore(newPost.find('.loveIt'));
                                createPhotoPost(newPost, photoBlock, activity, postIndex);
                                postTypeFound = true;
                            }
                        }


                        /* #################### IMAGE QUESTION BLOCK ####################*/
                        if (activity.Choice1Image != null && postTypeFound == false) {
                            var imageBlock = newPost.find('.imageQuestion').eq(0).clone().addClass('activity ' + 'activity_' + activity.ActivityID).insertBefore(newPost.find('.loveIt'));
                            createImagePost(newPost, imageBlock, activity, postIndex);
                            postTypeFound = true;
                            postType = 'image';
                        }

                        /* #################### TEXT QUESTION BLOCK ####################*/
                        if (activity.ActivityHTML != null && postTypeFound == false) {
                            var textBlock = newPost.find('.textQuestion').eq(0).clone().addClass('activity ' + 'activity_' + activity.ActivityID).insertBefore(newPost.find('.loveIt'));
                            createTextPost(newPost, textBlock, activity, postIndex);
                            postTypeFound = true;
                            postType = 'text';
                        }
                    });
                    if (postType == 'text') {
                        newPost.find('.unanswered').bind('mouseover', btnHover);
                        newPost.find('.unanswered').bind('mouseout', btnOut);
                    }
                    if (postType == 'image') {
                        newPost.find('.unanswered').bind('mouseover', imgHover);
                        newPost.find('.unanswered').bind('mouseout', imgOut);
                    }
                    newPost.find('.unanswered').bind('click', { 'challengeBlock': newPost }, answerSelected);
                    newPost.find('.activity').eq(0).show();
                    newPost.slideDown(1000);

                    if (challengeComplete == true && commentVisible == false) {
                        //newPost.find('.commentContainer:last').detach().appendTo(newPost).show();
                    }
                    if (selectedNextActivity != -1) {
                        nextPartialActivity = ($('.activity_' + selectedNextActivity));
                        var activityContainer = nextPartialActivity.parent();
                        nextPartialActivity.detach().insertBefore(activityContainer.find('.loveIt')).slideDown(1000, function () {
                            nextPartialActivity.find('.questionBtn span').each(function () {
                                var spanWidth = parseInt($(this).outerWidth());
                                if (spanWidth > 580) {
                                    $(this).css({ 'font-size': '10', 'white-space': 'normal', 'line-height': '14px', 'padding': '2px 0 10px 0' });
                                }
                            });
                        });
                    }
                }
                if (seeMoreFirst == false) {
                    $('.seeMoreBtn').show();
                    $('.animatedSpinner').hide();
                }
                if (commentThenRequest == true) {
                    setTimeout(function () {
                        retrieveNextChallenge(level);
                    }, 1000);
                }
                checkLoveIts();
            }





            /* #################### POPULATE GENERATED POST TYPE BLOCKS WITH DATA FROM CHALLENGE OBJECT ####################*/

            function createVideoPost(newPost, videoBlock, activity, postIndex) {
                var videoSrc = activity[('Choice1Text')];
                var choiceImg = activity[('Choice1Text')].split('/')[2];
                var activityID = activity.ActivityID;
                var finalActivity = activity.IsFinalActivityInChallenge;
                var activityCharName = "";

                if (firstActivityInChallenge == true) {
                    activityCharName = '<span class="firstActivityCharacter">' + activity.Character + '</span><br />';
                    altCharacterName = activity.Character;
                } else {
                    if (altCharacterName != activity.Character) {
                        activityCharName = '<span class="nextActivityCharacter">' + activity.Character + '</span><br />';
                        altCharacterName = activity.Character;
                    }
                }

                if (activity.Character != null && activityCharName != "") {
                    videoBlock.find('.question').html(activityCharName + activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                } else {
                    videoBlock.find('.question').html(activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                }
                videoBlock.find('.question').html(videoBlock.find('.question').html().replace(/\/episode/g, '/' + langUrl + '/episode'));
                //videoBlock.find('.quizVideo h3').eq(0).html(activity.ActivityTitle);
                videoBlock.find('.sparkleFrame').attr('src', '/Content/img/commonAssets/videoStills/challengeVideos/episode_' + choiceImg + '.png');
                var value = document.URL.charAt(document.URL.length - 1);
                if (value == '/') {
                    var startUrl = '../..';
                } else {
                    var startUrl = '..';
                }
                videoBlock.find('.quizVideo a').attr('href', startUrl + videoSrc);
                if (newPost.attr('class').split(' ').slice(-1) != 'previous') {
                    if (finalActivity == 'True') {
                        //console.log('send data 1');
                        sendData(activityID, -1, 1, true, false);
                    } else {
                        //console.log('send data 2');
                        sendData(activityID, -1, 0, false, false);
                    }
                }

                firstActivityInChallenge = false;
            }




            function createPhotoPost(newPost, photoBlock, activity, postIndex) {
                var imgSrc = activity[('Choice1Text')];
                var activityID = activity.ActivityID;
                var finalActivity = activity.IsFinalActivityInChallenge;
                var activityCharName = "";

                if (firstActivityInChallenge == true) {
                    activityCharName = '<span class="firstActivityCharacter">' + activity.Character + '</span><br />';
                    altCharacterName = activity.Character;
                } else {
                    if (altCharacterName != activity.Character) {
                        activityCharName = '<span class="nextActivityCharacter">' + activity.Character + '</span><br />';
                        altCharacterName = activity.Character;
                    }
                }

                if (activity.Character != null && activityCharName != "") {
                    photoBlock.find('.question').html(activityCharName + activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                } else {
                    photoBlock.find('.question').html(activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                }
                photoBlock.find('.wallPhoto').attr('src', imgSrc);

                if (finalActivity == 'True') {
                    //console.log('send data 3');
                    sendData(activityID, -1, 1, true, false);
                } else {
                    setTimeout(function () {
                        //console.log('send data 4');
                        sendData(activityID, -1, 0, false, false);
                        var nextActivity = activity[('Choice1NextActivity')];
                        var outerDiv = $(this).parent();
                        var latestActivity = outerDiv.find('.' + nextActivity).detach().insertBefore(outerDiv.find('.loveIt')).slideDown();
                        checkNextActivity(latestActivity);
                    }, 2000);
                }

                firstActivityInChallenge = false;
            }




            function createImagePost(newPost, imageBlock, activity, postIndex) {

                if (activity.ActivityHTML != null) {
                    var activityCharName = "";

                    if (firstActivityInChallenge == true) {
                        activityCharName = '<span class="firstActivityCharacter">' + activity.Character + '</span><br />';
                        altCharacterName = activity.Character;
                    } else {
                        if (altCharacterName != activity.Character) {
                            activityCharName = '<span class="nextActivityCharacter">' + activity.Character + '</span><br />';
                            altCharacterName = activity.Character;
                        }
                    }

                    if (activity.Character != null && activityCharName != "") {
                        imageBlock.find('.question').html(activityCharName + activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                    } else {
                        imageBlock.find('.question').html(activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                    }
                    imageBlock.attr({ 'data-finalActivity': activity.IsFinalActivityInChallenge, 'data-activityID': activity.ActivityID, 'data-NoChoiceNextActivity': activity.NoChoiceNextActivity });

                    var i = 1;
                    var choiceImg = activity[('Choice' + i + 'Image')];
                    var choiceText = activity[('Choice' + i + 'Text')];
                    var deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                    var deadEndText = activity[('Choice' + i + 'IsDeadEndHTML')];
                    var nextAcivity = activity[('Choice' + i + 'NextActivity')];
                    var finalActivity = activity.IsFinalActivityInChallenge;
                    var challengeID = activity.ParentChallengeID;
                    var activityID = activity.ActivityID;
                    var activityComplete = activity.UserChoice;
                    var commentObject = activity.ActivityComments;
                    var visible = false;
                    var newString;
                    /* #################### IF ACTIVITY IS COMPLETE SHOW IT #################### */
                    if (activityComplete != null || activityComplete != undefined) {
                        visible = true;
                    }

                    /* #################### IF THE ACTIVITY IS INCOMPLETE, HAS NO CHOICES, IS THE FINAL ACTIVITY AND IS ALSO THE FIRST ACTIVITY IN CHALLENGE #################### */
                    if (activityComplete == null && choiceImg == null && finalActivity == 'True' && firstVisibleActivity == false) {
                        var challengeComplete = 1;
                        //console.log('send data 5');
                        sendData(activityID, -1, challengeComplete, true, false);
                        visible = true;
                        firstVisibleActivity = true;
                    }



                    if (activityComplete == null && choiceImg == null && finalActivity == 'False' && firstVisibleActivity == false) {
                        var challengeComplete = 0;
                        //console.log('send data 6');
                        sendData(activityID, -1, challengeComplete, false, false);
                        visible = true;
                        //firstVisibleActivity = true;
                    }


                    firstActivityInChallenge = false;


                    /* #################### IF THERE ARE CHOICES IN THE ACTIVITY #################### */
                    while (choiceImg != null && choiceImg != undefined) {

                        choiceImg = activity[('Choice' + i + 'Image')];
                        choiceImgArray = activity[('Choice' + i + 'ImageArray')];
                        choiceText = activity[('Choice' + i + 'Text')];
                        deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                        deadEndText = activity[('Choice' + i + 'IsDeadEndHTML')];
                        nextActivity = 'activity_' + activity[('Choice' + i + 'NextActivity')];

                        if (activityComplete == null || activityComplete == undefined) {
                            if (nextPrevChallenge == 'prev') {
                                //DONT DISPLAY ACTIVITY IF USER HASN'T SELECTED IT
                            } else {
                                var newQuestion = imageBlock.find('.questionImg').eq(0).clone().removeClass().addClass('questionImg wallQuestion unanswered').appendTo(imageBlock.find('.eventSection')).show();
                                //DISPLAY THE FIRST UNANSWERED INTERACTIVITY ONLY
                                if (firstVisibleActivity == false) {
                                    visible = true;
                                    firstVisibleActivity = true;
                                }
                            }
                        } else {
                            var completeActivitiyIndex = parseInt(activityComplete) + 1;
                            if (completeActivitiyIndex == i) {
                                var newQuestion = imageBlock.find('.questionImg').eq(0).clone().removeClass().addClass('questionImg wallQuestion answered').css('opacity', '1').appendTo(imageBlock.find('.eventSection')).show();
                                selectedNextActivity = activity[('Choice' + i + 'NextActivity')];
                            } else {
                                var newQuestion = imageBlock.find('.questionImg').eq(0).clone().removeClass().addClass('questionImg wallQuestion answered').css('opacity', '0.5').appendTo(imageBlock.find('.eventSection')).show();
                            }
                            visible = true;
                        }
                        newQuestion.find('.itemImage').attr('src', 'data:image/png;base64,' + choiceImgArray);
                        newQuestion.find('.itemName').html(choiceText);

                        newQuestion.find('span').attr({ 'data-deadEnd': deadEnd, 'data-deadEndText': deadEndText, 'data-nextActivity': nextActivity, 'data-finalActivity': finalActivity, 'data-challengeID': challengeID, 'data-activityID': activityID }).appendTo(newQuestion);

                        i++;
                        choiceImg = activity[('Choice' + i + 'Image')];
                        deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                    }

                    if (commentObject.length > 0) {
                        createActivityComment(newPost, imageBlock, commentObject, activityID);
                    } else {
                    }

                    if (visible == true) {
                        imageBlock.slideDown();
                    }
                }
            }









            function createTextPost(newPost, textBlock, activity, postIndex) {
                if (activity.ActivityHTML != null) {
                    var activityCharName = "";

                    if (firstActivityInChallenge == true) {
                        activityCharName = '<span class="firstActivityCharacter">' + activity.Character + '</span><br />';
                        altCharacterName = activity.Character;
                    } else {
                        if (altCharacterName != activity.Character) {
                            activityCharName = '<span class="nextActivityCharacter">' + activity.Character + '</span><br />';
                            altCharacterName = activity.Character;
                        }
                    }

                    if (activity.Character != null && activityCharName != "") {
                        textBlock.find('.question').html(activityCharName + activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                    } else {
                        textBlock.find('.question').html(activity.ActivityHTML.replace(/\/cast/g, '/' + langUrl + '/cast'));
                    }
                    textBlock.find('.question').html(textBlock.find('.question').html().replace(/\/map/g, '/' + langUrl + '/map'));
                    textBlock.find('.question').html(textBlock.find('.question').html().replace(/\/episode/g, '/' + langUrl + '/episode'));
                    textBlock.attr({ 'data-finalActivity': activity.IsFinalActivityInChallenge, 'data-activityID': activity.ActivityID, 'data-NoChoiceNextActivity': activity.NoChoiceNextActivity });
                    var i = 1;
                    var choice = activity[('Choice' + i + 'Text')];
                    var deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                    var deadEndText = activity[('Choice' + i + 'IsDeadEndHTML')];
                    var nextActivity = 'activity_' + activity[('Choice' + i + 'NextActivity')];
                    var finalActivity = activity.IsFinalActivityInChallenge;
                    var noChoiceNextActivity = activity.NoChoiceNextActivity;
                    var challengeID = activity.ParentChallengeID;
                    var activityID = activity.ActivityID;
                    var activityComplete = activity.UserChoice;
                    var commentObject = activity.ActivityComments;
                    var visible = false;
                    var newString;

                    /* #################### IF THE ACTIVITY IS A LOCATION INTERACTIVITY, CHANGE HREF TO INCLUDE ACTIVITY ID ETC #################### */
                    if (activityComplete == null) {
                        if (activity.ActivityHTML.indexOf('href="/locations') != -1 || activity.ActivityHTML.indexOf('href="../locations') != -1 || activity.ActivityHTML.indexOf('href="../../locations') != -1 || activity.ActivityHTML.indexOf('/locations/') != -1) {
                            locationLink = true;
                            $(activity.ActivityHTML).each(function () {
                                if ($(this).attr('href') != undefined) {
                                    anchorLink = $(this).attr('href');
                                    if (anchorLink.indexOf('location') != -1) {
                                        anchorLink = $(this).attr('href').slice(0, -1);
                                        if (commentObject.length > 0) {
                                            waitingForComment = true;
                                        } else {
                                            waitingForComment = false;
                                        }
                                        if (finalActivity == 'True') {
                                            var finalActivityIndex = 1;
                                        } else {
                                            var finalActivityIndex = 0;
                                        }
                                        var value = document.URL.charAt(document.URL.length - 1);
                                        if (value == '/') {
                                            var startUrl = '../..';
                                        } else {
                                            var startUrl = '..';
                                        }
                                        //par1 = challengeID, par2 = activityID, par3 = finalActivity, par4 = waitingForComment, par5 = challengeOrder
                                        if (anchorLink.substring(0, 4) == "http") {
                                            var anchorArray = anchorLink.split('/');
                                            anchorLink = '/' + anchorArray[3] + '/' + anchorArray[4];
                                            newString = startUrl + anchorLink + '?par1=' + challengeIndex + '&par2=' + activityID + "&par3=" + finalActivityIndex + "&par4=" + waitingForComment + '&par5=' + challengeOrder;
                                        } else {
                                            newString = startUrl + anchorLink + '?par1=' + challengeIndex + '&par2=' + activityID + "&par3=" + finalActivityIndex + "&par4=" + waitingForComment + '&par5=' + challengeOrder;
                                        }
                                        linkText = $(this).text();
                                    }
                                }
                            });
                            var newHtml = (activity.ActivityHTML).replace(anchorLink, newString);
                            textBlock.find('.question').html(newHtml);
                            textBlock.find('.question').html(textBlock.find('.question').html().replace(/\/cast/g, '/' + langUrl + '/cast'));
                            if (activityComplete == null && firstVisibleActivity == false) {
                                firstVisibleActivity = true;
                            }
                        }
                    }



                    /* #################### IF ACTIVITY IS COMPLETE SHOW IT #################### */
                    if (activityComplete != null || activityComplete != undefined) {
                        visible = true;
                        locationLink = false;
                    }



                    /* #################### IF THE ACTIVITY IS COMPLETE BUT HAS NO CHOICES RECORD THE NEXT ACTIVITY IN SELECTEDNEXTACTIVITY #################### */
                    if (activityComplete != null && activityComplete != undefined && choice == null) {
                        selectedNextActivity = noChoiceNextActivity;
                    }



                    /* #################### IF THE ACTIVITY IS INCOMPLETE, HAS NO CHOICES, IS THE FINAL ACTIVITY AND IS ALSO THE FIRST ACTIVITY IN CHALLENGE #################### */
                    var oneOffPost = true;

                    if (activityComplete == null && choice == null && finalActivity == 'True' && selectedNextActivity == activityID) {
                        if (activity.ActivityHTML.indexOf('href="/locations') == -1 && activity.ActivityHTML.indexOf('href="../locations') == -1 && activity.ActivityHTML.indexOf('href="../../locations') == -1) {
                            var challengeComplete = 1;
                            //console.log('send data 7');
                            sendData(activityID, -1, challengeComplete, true, false);
                            visible = true;
                            firstVisibleActivity = true;
                            locationLink = false;
                            oneOffPost = false;
                        }
                    }




                    if (activityComplete == null && choice == null && finalActivity == 'True' && firstVisibleActivity == false && oneOffPost == true) {
                        if (activity.ActivityHTML.indexOf('href="/locations') == -1 && activity.ActivityHTML.indexOf('href="../locations') == -1 && activity.ActivityHTML.indexOf('href="../../locations') == -1) {
                            var challengeComplete = 1;
                            //console.log('send data 8');
                            sendData(activityID, -1, challengeComplete, true, false);
                            visible = true;
                            firstVisibleActivity = true;
                            locationLink = false;
                            oneOffPost = false;
                        }
                    }



                    if (activityComplete == null && choice == null && finalActivity == 'False' && firstVisibleActivity == false && locationLink == false) {
                        if (activity.ActivityHTML.indexOf('href="/locations') == -1 && activity.ActivityHTML.indexOf('href="../locations') == -1 && activity.ActivityHTML.indexOf('href="../../locations') == -1) {
                            var challengeComplete = 0;
                            //console.log('send data 9');
                            sendData(activityID, -1, challengeComplete, false, false);
                            visible = true;
                            locationLink = false;
                        }
                    }


                    firstActivityInChallenge = false;




                    /* #################### IF THERE ARE CHOICES IN THE ACTIVITY #################### */
                    while (choice != null && choice != undefined) {

                        choice = activity[('Choice' + i + 'Text')];
                        deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                        deadEndText = activity[('Choice' + i + 'IsDeadEndHTML')];
                        nextActivity = 'activity_' + activity[('Choice' + i + 'NextActivity')];
                        locationLink = false;

                        if (activityComplete == null || activityComplete == undefined) {
                            if (nextPrevChallenge == 'prev') {
                                //DONT DISPLAY ACTIVITY IF USER HASN'T SELECTED IT
                            } else {
                                var newQuestion = textBlock.find('.questionBtn').eq(0).clone().removeClass().addClass('questionBtn wallQuestion unanswered').appendTo(textBlock.find('.qContainer')).show();
                                //DISPLAY THE FIRST UNANSWERED INTERACTIVITY ONLY
                                //console.log(activity.ActivityHTML);
                                //console.log(firstVisibleActivity);
                                //console.log(selectedNextActivity);
                                if (firstVisibleActivity == false && (selectedNextActivity == null || selectedNextActivity == -1 || selectedNextActivity == activityID)) {
                                    visible = true;
                                    firstVisibleActivity = true;
                                }
                            }
                        } else {
                            var completeActivitiyIndex = parseInt(activityComplete) + 1;
                            if (completeActivitiyIndex == i) {
                                var newQuestion = textBlock.find('.questionBtn').eq(0).clone().removeClass().addClass('questionBtn wallQuestion answered').css('opacity', '1').appendTo(textBlock.find('.qContainer')).show();
                                selectedNextActivity = activity[('Choice' + i + 'NextActivity')];
                            } else {
                                var newQuestion = textBlock.find('.questionBtn').eq(0).clone().removeClass().addClass('questionBtn wallQuestion answered').css('opacity', '0.5').appendTo(textBlock.find('.qContainer')).show();
                            }
                            if (activityComplete == -1) {
                                selectedNextActivity = -1;
                            }
                            visible = true;
                        }
                        $('<span/>', {
                            html: choice
                        }).attr({ 'data-deadEnd': deadEnd, 'data-deadEndText': deadEndText, 'data-nextActivity': nextActivity, 'data-finalActivity': finalActivity, 'data-challengeID': challengeID, 'data-activityID': activityID }).appendTo(newQuestion);

                        i++;
                        choice = activity[('Choice' + i + 'Text')];
                        deadEnd = activity[('Choice' + i + 'IsDeadEnd')];
                    }

                    if (commentObject.length > 0) {
                        createActivityComment(newPost, textBlock, commentObject, activityID);
                    } else {
                    }

                    if (visible == true) {
                        textBlock.detach().insertBefore(newPost.find('.loveIt')).slideDown('fast', function () {
                            textBlock.find('.questionBtn span').each(function () {
                                var spanWidth = parseInt($(this).outerWidth());
                                if (spanWidth > 580) {
                                    $(this).css({ 'font-size': '10', 'white-space': 'normal', 'line-height': '14px', 'padding': '2px 0 10px 0' });
                                }
                            });
                        });
                    }

                    if (visible == true && activity[('Choice1Text')] == null && locationLink == false) {
                        newPost.find(('.comment_' + activityID)).detach().insertAfter(textBlock).slideDown();
                    }
                }
            }












            /* #################### ACTIVITY ANSWER CLICKED #################### */

            function answerSelected(event) {
                var challengeBlock = event.data.challengeBlock;
                var deadEnd = $(this).find('span').attr('data-deadEnd');
                var deadEndText = $(this).find('span').attr('data-deadEndText');
                var nextActivity = $(this).find('span').attr('data-nextActivity');
                var finalActivity = $(this).find('span').attr('data-finalActivity');
                var challengeID = $(this).find('span').attr('data-challengeID');
                var activityID = $(this).find('span').attr('data-activityID');
                var selectedIndex = $(this).parent().find('.unanswered').index($(this));

                $(this).parent().find('.unanswered').unbind("mouseover", btnHover);
                $(this).parent().find('.unanswered').unbind("mouseout", btnOut);
                $(this).parent().find('.unanswered').unbind("click", answerSelected);

                if (finalActivity == 'True') {
                    var challengeComplete = 1;
                } else {
                    var challengeComplete = 0;
                }
                var postBlock = $(this).parent().parent();

                if (deadEnd == 'True') {
                    var newDeadEndText = deadEndText.replace('/bfriends/mystats/', '/' + langUrl + '/b-friends/my-stats/');
                    $('<p/>', {
                        html: newDeadEndText
                    }).insertBefore(challengeBlock.find('.loveIt'));
                } else {
                    //console.log('send data 10');
                    sendData(activityID, selectedIndex, challengeComplete, false, false);
                    if (finalActivity != 'True') {
                        nextActivity = nextActivity;
                        var outerDiv = $(this).closest('.speechBlockContent');
                        var latestActivity = outerDiv.find('.' + nextActivity).detach().insertBefore(outerDiv.find('.loveIt')).slideDown(1000, function () {
                            latestActivity.find('.questionBtn span').each(function () {
                                var spanWidth = parseInt($(this).outerWidth());
                                if (spanWidth > 580) {
                                    $(this).css({ 'font-size': '10', 'white-space': 'normal', 'line-height': '14px', 'padding': '2px 0 10px 0' });
                                }
                            });
                        });

                        setTimeout(function () {
                            checkNextActivity(latestActivity);
                        }, 2000);

                        $('.deadEndText').hide();
                        activityIndex++;
                    } else {
                        var activityArray = (677, 754, 886, 1236, 1235, 1234, 1073, 1253, 1251, 1370, 1445, 1603, 1494, 992, 1695, 1775, 1774, 1773, 1848);
                        var newLevelNumber = parseInt(level);
                        $.each(activityArray, function (index, item) {
                            if (activityID == item) {
                                level = (newLevelNumber + 1);
                            }
                        });
                        retrieveNextChallenge(level);
                    }
                }
                if (locationLink != true) {
                    var commentAfter = $('.speechBlockContent').find('.' + nextActivity);
                    $('.speechBlockContent').find('.comment_' + (nextActivity.replace('activity_', ''))).detach().insertAfter(commentAfter).slideDown();
                }
            }





            /* THE BELOW FUNCTION RUNS IF THE LATEST VISIBLE ACTIVITY ON THE SCREEN IS THE LAST ACTIVITY IN THE CHALLENGE */
            /* IF THE SUB-STRING '<a href="/location' IS PRESENT IN THE QUESTION THEN THE USER MUST RETRIEVE AN ITEM FROM THE LINKED LOCATION TO COMPLETE THE ACTIVITY */

            function checkNextActivity(latestActivity) {
                //console.log(latestActivity.find('.question').html());
                if (latestActivity.find('.question').html().indexOf('href="/locations') == -1 && latestActivity.find('.question').html().indexOf('href="../locations') == -1 && latestActivity.find('.question').html().indexOf('href="../../locations') == -1 && latestActivity.find('.question').html().indexOf('/locations/') == -1) {
                    if (latestActivity.attr('data-finalActivity') == 'True') {
                        // THIS WILL ONLY EVER OCCUR IF THE FINAL ACTIVITY IS JUST TEXT WITHOUT ANY INTERACTIVITY
                        var activityID = latestActivity.attr('data-activityID');
                        //console.log('send data 11');
                        sendData(activityID, -1, 1, true, false);
                    } else {
                        var noChoiceNextActivity = latestActivity.attr('data-NoChoiceNextActivity');
                        if (noChoiceNextActivity != null) {
                            var nextLatestActivity = latestActivity.parent().find('.activity_' + noChoiceNextActivity).detach().insertBefore(latestActivity.parent().find('.loveIt')).slideDown();

                            nextLatestActivity.find('.questionBtn span').each(function () {
                                var spanWidth = parseInt($(this).outerWidth());
                                if (spanWidth > 580) {
                                    $(this).css({ 'font-size': '10', 'white-space': 'normal', 'line-height': '14px', 'padding': '2px 0 10px 0' });
                                }
                            });

                            if (latestActivity.parent().find('.activity_' + noChoiceNextActivity).attr('data-finalactivity') == 'True') {
                                //console.log('send data 12');
                                sendData(noChoiceNextActivity, -1, 1, true, false);
                            } else {
                                checkNextActivity(nextLatestActivity);
                            }
                        }
                    }


                } else {
                    // THIS WILL ONLY EVER OCCUR IF THE FINAL ACTIVITY IS A LOCATION LINK - THIS FUNCTION WILL APPEND DATA TO THE END OF THE ANCHOR LINK HREF

                    var challengeActivity = latestActivity.attr('class').split(' ');
                    var uniqueActivityId = parseInt(challengeActivity[challengeActivity.length - 1].split('_')[1]);
                    var activityText = latestActivity.find('.question').text();
                    var locationString = latestActivity.find('.question').html();
                    var anchorLink;
                    var newString;
                    var linkText;

                    if (locationString.indexOf('?par1') == -1) {
                        $(locationString).each(function () {
                            if ($(this).attr('href') != undefined) {
                                anchorLink = $(this).attr('href');
                                if (anchorLink.indexOf('location') != -1) {
                                    anchorLink = $(this).attr('href').slice(0, -1);

                                    if (anchorLink.substring(0, 4) == "http") {
                                        var anchorArray = anchorLink.split('/');
                                        anchorLink = '/' + anchorArray[3] + '/' + anchorArray[4];
                                    }

                                    if (latestActivity.attr('data-finalActivity') == 'True') {
                                        if ($('.comment' + uniqueActivityId).length > 0) {
                                            waitingForComment = true;
                                        } else {
                                            waitingForComment = false;
                                        }
                                        var value = document.URL.charAt(document.URL.length - 1);
                                        if (value == '/') {
                                            var startUrl = '../..';
                                        } else {
                                            var startUrl = '..';
                                        }
                                        newString = startUrl + anchorLink + '?par1=' + challengeIndex + '&par2=' + uniqueActivityId + "&par3=1&par4=" + waitingForComment + '&par5=' + challengeOrder;
                                    } else {
                                        waitingForComment = false;
                                        newString = startUrl + anchorLink + '?par1=' + challengeIndex + '&par2=' + uniqueActivityId + "&par3=0&par4=" + waitingForComment + '&par5=' + challengeOrder;
                                    }
                                    linkText = $(this).text();
                                }
                            }
                        });
                        var newHtml = locationString.replace(anchorLink, newString);
                        latestActivity.find('.question').html(newHtml);
                    }
                }
                if (latestActivity.find('.wallQuestion').html() == "") {
                    if (latestActivity.find('.question').html().indexOf('href="/locations') == -1 && latestActivity.find('.question').html().indexOf('href="../locations') == -1 && latestActivity.find('.question').html().indexOf('href="../../locations') == -1) {
                        $('.speechBlockContent').find('.comment_' + activityID).detach().insertAfter(latestActivity).slideDown();
                    }
                }
            }







            function createActivityComment(newPost, activityBlock, commentObject, activityID) {
                var commentContainer = newPost.find('.commentContainerTemplate').eq(0).clone().removeClass().addClass('commentContainer comment_' + activityID).insertAfter(activityBlock);
                $.each(commentObject, function (key, comment) {
                    var commentBlock = newPost.find('.commentTemplate').eq(0).clone().removeClass().addClass('activityComment comment');
                    commentBlock.appendTo(commentContainer).show();
                    commentBlock.find('.feedAvatar').attr('src', '/Content/img/characterwall/commentAvatar_' + comment.CharacterID + '.png');
                    commentBlock.find('.character_name').html(comment.Character);
                    commentBlock.find('.commentText').html(comment.Comment.replace('/cast', '/' + langUrl + '/cast'));
                    commentContainer.hide();

                    commentBlock.find('.love-peter').attr('data-loveme', comment.CommentID);
                    commentBlock.find('.loveSentence').attr('data-loved', comment.CommentID);

                    switch (comment.CharacterID) {
                        case "393":
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL,DOLLTASTIC");
                            break;
                        case "409":
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL,FRIEND_TO_ALL");
                            break;
                        case "411":
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "414":
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        case "427":
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL,SWEET_SISTER");
                            break;
                        default:
                            commentBlock.find('.commentLove .lipz').attr('data-actions', "LOVE_GENERAL");
                    }
                });
                $('div.commentLove').delegate('.love-peter', 'click', function () {
                    var item = jQuery(this).attr('data-loveme');
                    var type = jQuery(this).attr('data-doctorLove');
                    var action = jQuery(this).find('span').attr('data-actions');
                    writeLoves(type, item, action);
                });
            }





            /* #################### SEND SQL DATA #################### */

            function sendData(activityID, selectedIndex, finalActivity, requestChallenge, waitingForComment) {
                var d = new Date();
                var n = d.getTime();
                $.ajax({
                    url: "/Handlers/ActivityData.ashx?call=" + n,

                    data: "&user=" + userName + "&level=" + level + "&challengeID=" + latestChallenge + "&activityID=" + activityID + "&selectedIndex=" + selectedIndex + "&challengeComplete=" + finalActivity + "&challengeOrder=" + latestChallengeOrder + "&waitingForComment=" + waitingForComment + "&locale=" + langUrl,

                    dataType: 'json',
                    error: function () {

                    },
                    success: function () {
                        if (requestChallenge == true) {
                            var activityArray = [677, 754, 886, 1236, 1235, 1234, 1073, 1253, 1251, 1370, 1445, 1603, 1494, 992, 1695, 1775, 1774, 1773, 1848];
                            var newLevelNumber = parseInt(level);
                            $.each(activityArray, function (index, item) {
                                if (activityID == item) {
                                    level = (newLevelNumber + 1);
                                }
                            });
                            callback({ activityID: activityID, level: level });
                            setTimeout(function () {
                                retrieveNextChallenge(level);
                            }, 2000);
                        } else {
                            var newLevelNumber = parseInt(level);
                            callback({ activityID: activityID, level: newLevelNumber });
                        }
                    }
                });
            }





            /* #################### LOVE ITS #################### */

            function writeLoves(type, item, action) {
                var d = new Date();
                var n = d.getTime();
                jQuery.ajax({
                    url: "/Handlers/RecordLove.ashx?call=" + n,
                    data: "user=" + global.userName + "&type=" + type + "&item=" + item + "",
                    dataType: 'json',
                    error: function () {

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
                    url: "/Handlers/randomloveit.ashx?call=" + n,
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
                    url: "/Handlers/RetrieveUserLoves.ashx?call=" + n,
                    data: "user=" + global.userName + "",
                    dataType: 'json',
                    error: function () {

                    },
                    success: function (data) {
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
                                jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                jQuery('[data-loveme*=' + loveMe + ']').hide();
                                jQuery('[data-loved*=' + loveMe + ']').show();
                            }
                            if (arrayEpisodes != null) {
                                if (arrayEpisodes.indexOf(loveMe) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayChallenges) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayComments) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayLocation) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                                if (jQuery.inArray(loveMe, arrayWall) != -1) {
                                    jQuery('[data-loveme*=' + loveMe + ']').parent('.flatLoveItBtn').css({ 'background': 'none', '-pie-background': 'none' }).hide();
                                    jQuery('[data-loveme*=' + loveMe + ']').hide();
                                    jQuery('[data-loved*=' + loveMe + ']').show();
                                }
                            }

                        });
                    }
                });
            }





            /* #################### HOVER STATES FOR BUTTONS BELOW #################### */

            function imageHover() {
                $(this).addClass('questionImgHover');
                $(this).css('cursor', 'pointer');
            }
            function imageOut() {
                $(this).removeClass('questionImgHover');
            }



            function btnHover() {
                $(this).parent().find('.questionBtn').css('opacity', '0.5');
                $(this).css('opacity', '1');
                $(this).css('cursor', 'pointer');
            }
            function btnOut() {
                $(this).parent().find('.questionBtn').css('opacity', '1');
            }

        });

        return this;

    };
})(jQuery);