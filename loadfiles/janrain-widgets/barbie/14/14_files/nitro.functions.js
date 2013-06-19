//STORE USER LEVEL
function storeUserLevelLocal(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
}

currentLevel = data.Nitro.users.User.SiteLevel.name;
levelNumber = data.Nitro.users.User.SiteLevel.description;
localStorage.setItem('Level', currentLevel);
localStorage.setItem('LevelNumber', levelNumber);
global.myLevel = currentLevel;
global.myLevelNumber = levelNumber;
jQuery('.level').html(global.myLevel);
jQuery('.userID').html(global.userName);

}

function storeUserLevelAttribute(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	currentLevel = data.Nitro.users.User.SiteLevel.name;
	levelNumber = data.Nitro.users.User.SiteLevel.description;
	setAttribute('Level', currentLevel);
	setAttribute('LevelNumber', levelNumber);
	global.myLevel = currentLevel;
	global.myLevelNumber = levelNumber;
	jQuery('.level').html(global.myLevel);
	jQuery('.userID').html(global.userName);

}
//BADGES FOR MY FRIENDS
function processFriendBadges(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    var levelContainer = data.Nitro.challenges.Challenge;
    var barbieNumber = 0;
    var kenNumber = 0;
    var nikkiNumber = 0;
    var teresaNumber = 0;
    var ryanNumber = 0;
    var raquelleNumber = 0;
    var blissaNumber = 0;
    var tawnyNumber = 0;
    var taffyNumber = 0;
    var stacieNumber = 0;
    var chelseaNumber = 0;
    var skipperNumber = 0;
    var barbieProgress = '';
    var kenProgress = '';
    var barbieTags = '';
    var barbieData = '';

    jQuery.each(levelContainer, function (item, value) {

        barbieData += '<li class="' + value.customData + ' ' + value.folderName + '" data-achieved="' + value.rules.Rule.achieved + '">' + value.name + '</li>';
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('BARBIE') != -1) {
            barbieNumber = barbieNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('KEN') != -1) {
            kenNumber = kenNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('NIKKI') != -1) {
            nikkiNumber = nikkiNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('TERESA') != -1) {
            teresaNumber = teresaNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('TAWNY') != -1) {
            tawnyNumber = tawnyNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('TAFFY') != -1) {
            taffyNumber = taffyNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('BLISSA') != -1) {
            blissaNumber = blissaNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('RYAN') != -1) {
            ryanNumber = ryanNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('RAQUELLE') != -1) {
            raquelleNumber = raquelleNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('STACIE') != -1) {
            stacieNumber = stacieNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('SKIPPER') != -1) {
            skipperNumber = skipperNumber + 1;
        }
        if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1 && barbieData.indexOf('CHELSEA') != -1) {
            chelseaNumber = chelseaNumber + 1;
        }


    });
    jQuery('.challengeProgress ul').html(barbieData);
    jQuery('.challengeProgress ul li').css('display', 'none')
    jQuery('ul.barbie-progress li.BARBIE').css('display', 'block');
    jQuery('ul.ken-progress li.KEN').css('display', 'block');
    jQuery('ul.taffy-progress li.TAFFY').css('display', 'block');
    jQuery('ul.tawny-progress li.TAWNY').css('display', 'block');
    jQuery('ul.nikki-progress li.NIKKI').css('display', 'block');
    jQuery('ul.teresa-progress li.TERESA').css('display', 'block');
    jQuery('ul.blissa-progress li.BLISSA').css('display', 'block');
    jQuery('ul.stacie-progress li.STACIE').css('display', 'block');
    jQuery('ul.chelsea-progress li.CHELSEA').css('display', 'block');
    jQuery('ul.skipper-progress li.SKIPPER').css('display', 'block');
    jQuery('ul.ryan-progress li.RYAN').css('display', 'block');
    jQuery('ul.raquelle-progress li.RAQUELLE').css('display', 'block');
    switch (global.myLevelNumber) {
        case '1':
            jQuery('.LEVEL_02_EVENTS, .LEVEL_03_EVENTS, .LEVEL_04_EVENTS, .LEVEL_05_EVENTS, .LEVEL_06_EVENTS, .LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '2':
            jQuery('.LEVEL_03_EVENTS, .LEVEL_04_EVENTS, .LEVEL_05_EVENTS, .LEVEL_06_EVENTS, .LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '3':
            jQuery('.LEVEL_04_EVENTS, .LEVEL_05_EVENTS, .LEVEL_06_EVENTS, .LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '4':
            jQuery('.LEVEL_05_EVENTS, .LEVEL_06_EVENTS, .LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '5':
            jQuery('.LEVEL_06_EVENTS, .LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '6':
            jQuery('.LEVEL_07_EVENTS, .LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '7':
            jQuery('.LEVEL_08_EVENTS, .LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '8':
            jQuery('.LEVEL_09_EVENTS, .LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '9':
            jQuery('.LEVEL_10_EVENTS, .LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '10':
            jQuery('.LEVEL_11_EVENTS, .LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '11':
            jQuery('.LEVEL_12_EVENTS, .LEVEL_13_EVENTS').hide();
            break;
        case '12':
            jQuery('.LEVEL_13_EVENTS').hide();
            break;
    }
    jQuery('span.chelsea-badge-number').html(chelseaNumber);
    jQuery('span.skipper-badge-number').html(skipperNumber);
    jQuery('span.stacie-badge-number').html(stacieNumber);
    jQuery('span.tawny-badge-number').html(tawnyNumber);
    jQuery('span.taffy-badge-number').html(taffyNumber);
    jQuery('span.blissa-badge-number').html(blissaNumber);
    jQuery('span.ryan-badge-number').html(ryanNumber);
    jQuery('span.raquelle-badge-number').html(raquelleNumber);
    jQuery('span.nikki-badge-number').html(nikkiNumber);
    jQuery('span.teresa-badge-number').html(teresaNumber);
    jQuery('span.ken-badge-number').html(kenNumber);
    jQuery('span.barbie-badge-number').html(barbieNumber);
   // jQuery('.challengeProgress ul li:nth-child(n+5)').css('display', 'none');

}



//PROCESS LEVELS ON PAGE LOAD
function processLevelOne(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
    var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	var achieved = '';
	//console.log(levelContainer);
	jQuery.each(levelContainer, function (item, value) {
    achieved = value.rules.Rule.achieved;
    if (achieved == 0) {
        //console.log(achieved);
	        levelOutput += '<li></li>';
	    }

	    if (value.pointAward == '1' && value.rules.Rule.achieved == '1') {
	        heartNumber = heartNumber + 1;
	    }
	    if (value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1) {
	        badgeNumber = badgeNumber + 1;
	    }
	});

jQuery('ul.progress-level01').html(levelOutput);
jQuery('ul.progress-level01 li:first').addClass('powerEnd');
jQuery('span.heart-level01').html(heartNumber + '/5');
	jQuery('span.badge-level01').html(badgeNumber + '/1');
	
}
function processLevelTwo(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level02').html(levelOutput);
	jQuery('ul.progress-level02 li:first').addClass('powerEnd');
	jQuery('span.heart-level02').html(heartNumber + '/5');
	jQuery('span.badge-level02').html(badgeNumber+ '/2');
}
function processLevelThree(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level03').html(levelOutput);
	jQuery('ul.progress-level03 li:first').addClass('powerEnd');
	jQuery('span.heart-level03').html(heartNumber + '/4');
	jQuery('span.badge-level03').html(badgeNumber+ '/1');
}
function processLevelFour(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level04').html(levelOutput);
	jQuery('ul.progress-level04 li:first').addClass('powerEnd');
	jQuery('span.heart-level04').html(heartNumber + '/4');
	jQuery('span.badge-level04').html(badgeNumber+ '/1');
}
function processLevelFive(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level05').html(levelOutput);
	jQuery('ul.progress-level05 li:first').addClass('powerEnd');
	jQuery('span.heart-level05').html(heartNumber + '/3');
	jQuery('span.badge-level05').html(badgeNumber+ '/2');
}
function processLevelSix(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level06').html(levelOutput);
	jQuery('ul.progress-level06 li:first').addClass('powerEnd');
	jQuery('span.heart-level06').html(heartNumber + '/3');
	jQuery('span.badge-level06').html(badgeNumber+ '/1');
}
function processLevelSeven(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level07').html(levelOutput);
	jQuery('ul.progress-level07 li:first').addClass('powerEnd');
	jQuery('span.heart-level07').html(heartNumber + '/2');
	jQuery('span.badge-level07').html(badgeNumber+ '/1');
}
function processLevelEight(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level08').html(levelOutput);
	jQuery('ul.progress-level08 li:first').addClass('powerEnd');
	jQuery('span.heart-level08').html(heartNumber + '/3');
	jQuery('span.badge-level08').html(badgeNumber+ '/2');
}
function processLevelNine(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level09').html(levelOutput);
	jQuery('ul.progress-level09 li:first').addClass('powerEnd');
	jQuery('span.heart-level09').html(heartNumber + '/3');
	jQuery('span.badge-level09').html(badgeNumber+ '/2');
}
function processLevelTen(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level10').html(levelOutput);
	jQuery('ul.progress-level10 li:first').addClass('powerEnd');
	jQuery('span.heart-level10').html(heartNumber + '/3');
	jQuery('span.badge-level10').html(badgeNumber+ '/1');
}
function processLevelEleven(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level11').html(levelOutput);
	jQuery('ul.progress-level11 li:first').addClass('powerEnd');
	jQuery('span.heart-level11').html(heartNumber + '/2');
	jQuery('span.badge-level11').html(badgeNumber+ '/1');
}
function processLevelTwelve(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level12').html(levelOutput);
	jQuery('ul.progress-level12 li:first').addClass('powerEnd');
	jQuery('span.heart-level12').html(heartNumber + '/1');
	jQuery('span.badge-level12').html(badgeNumber+ '/1');
}
function processLevelThirteen(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level13').html(levelOutput);
	jQuery('ul.progress-level13 li:first').addClass('powerEnd');
	jQuery('span.heart-level13').html(heartNumber + '/4');
	jQuery('span.badge-level13').html(badgeNumber+ '/1');
}
function processLevelFourteen(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var levelContainer = data.Nitro.challenges.Challenge;
	var levelOutput = '';
	var badgeNumber = 0;
	var heartNumber = 0;
	jQuery.each(levelContainer, function(item, value){	
		if(value.rules.Rule.achieved == 0){						
			levelOutput +='<li></li>';
		}
		if(value.pointAward == 1 && value.rules.Rule.achieved == 1){
		heartNumber = heartNumber +1;	
		}
		if(value.catalogItemThumbUrl == true && value.rules.Rule.achieved == 1){
		heartNumber = badgeNumber +1;	
		}
	});
	jQuery('ul.progress-level14').html(levelOutput);
	jQuery('ul.progress-level14 li:first').addClass('powerEnd');
	jQuery('span.heart-level14').html(heartNumber + '/1');
	jQuery('span.badge-level14').html(badgeNumber+ '/1');
}


//UPDATE COIN BALANCE
function processCoins(data){
    nitro.callAPI('method=user.getPointsBalance&pointCategory=Coins&sessionKey=' + global.sessionKey + '&includeYearlyCredits=false', 'getCoins');
    notifications();
}
function processCoinsOnclick(data) {
    nitro.callAPI('method=user.getPointsBalance&pointCategory=Coins&sessionKey=' + global.sessionKey + '&includeYearlyCredits=false', 'getCoins');
    notifications();
    var charmID = data.Nitro.asyncToken;
    console.log(charmID);
    switch (charmID) {
        case '30108322':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108322&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
        case '30108324':
            nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108324&sessionKey=' + global.sessionKey + '', 'processTote');
            break;
    case '30108326':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108326&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108328':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108328&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108330':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108330&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108332':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108332&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108334':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108334&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108336':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108336&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108338':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108338&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108340':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108340&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108342':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108342&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108344':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108344&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108346':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108346&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    case '30108348':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=CHARMS&itemId=30108348&sessionKey=' + global.sessionKey + '', 'processTote');
        break;

}
}



//CALL BACK TOTAL BALANCE OF COINS ANYWHERE NEEDED
function getCoins(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
balance = data.Nitro.Balance.lifetimeBalance;
global.coins = data.Nitro.Balance.points;
jQuery.cookie('globalCoins', '' + global.coins + '', { expires: -1, path: '/' });
jQuery.cookie('globalCoins', '' + global.coins + '', { expires: 30, path: '/' });


     if(balance >= 1000){
    var commas = balance.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    jQuery('.points').html(commas);
    }else{
    jQuery('.points').html(balance);
}
if (global.coins >= 1000) {
    global.coins = global.coins.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    jQuery('.currentPoints').html(global.coins);
} else {
jQuery('.currentPoints').html(global.coins);
}

}
//TOTAL NUMBER OF COINS EARNED FROM VIDEO
function episodeCoins(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    balance = data.Nitro.Balance.lifetimeBalance;
    if (balance >= 1000) {
        var commas = balance.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        jQuery('.videoPoints').html(commas);
    } else {
        jQuery('.videoPoints').html(balance);
    }
}

//TOTAL NUMBER OF BADGES EARNED
function totalBgifts(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    var bgiftsContainer = data.Nitro.AvatarRecord.items;
    var badges = jQuery('.totalBadges');
    var badgesTotal = 0;
    var prop;
    for (prop in bgiftsContainer) {
        badgesTotal++;
    }

    badges.html(badgesTotal);
}
//TOTAL NUMBER OF ITEMS IN TOTE
function totalTote(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    var toteContainer = data.Nitro.AvatarRecord.items;
    var tote = jQuery('.totalTote');
    var toteTotal = 0;
    var prop;
    for (prop in toteContainer) {
        toteTotal++;
    }

    tote.html(toteTotal);
}

//TOTAL NUMBER OF HEARTS EARNED
function totalHearts(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    var heartContainer = data.Nitro.Balance.pointCategories.PointCategory;
    var heart = jQuery('.totalHearts');
    var heartsTotal = 0;
    jQuery(heartContainer).each(function (item, value) {
       if(value.name == 'Coins') {
        var coins = parseFloat(value.points);
        }
         heartsTotal += parseFloat(value.points);
        totalHearts = heartsTotal - coins;
     });
    
     heart.html(totalHearts);
}
//ADD FULL HEARTS FOR USER ON FRIENDS PAGE, TASKBAR, AND CAST PAGE
function processHearts(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
var heartContainer = data.Nitro.Balance.pointCategories.PointCategory;
console.log(heartContainer);
jQuery(heartContainer).each(function (item, value) {

    switch (value.name) {
        case 'BarbieHearts':
            var n = jQuery('ul.barbie-hearts li');
            var t = value.points;
            var l = jQuery('.listContent ul.barbie-hearts li');
            var v = jQuery('.profileContent ul.barbie-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            l.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'NikkiHearts':
            var n = jQuery('.nikki-hearts li');
            var t = value.points;
            var l = jQuery('.listContent ul.nikki-hearts li');
            var v = jQuery('.profileContent ul.nikki-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            l.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'RaquelleHearts':
            var n = jQuery('.raquelle-hearts li');
            var t = value.points;
            var l = jQuery('.listContent ul.raquelle-hearts li');
            var v = jQuery('.profileContent ul.raquelle-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            l.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'KenHearts':
            var n = jQuery('.ken-hearts li');
            var t = value.points;
            var l = jQuery('.listContent ul.ken-hearts li');
            var v = jQuery('.profileContent ul.ken-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            l.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'SkipperHearts':
            var n = jQuery('.skipper-hearts li');
            var t = value.points;
            var l = jQuery('.listContent ul.skipper-hearts li');
            var v = jQuery('.profileContent ul.skipper-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            l.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'StacieHearts':
            var n = jQuery('.chelsea-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.stacie-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'ChelseaHearts':
            var n = jQuery('.stacie-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.chelsea-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'TeresaHearts':
            var n = jQuery('.teresa-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.teresa-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'RyanHearts':
            var n = jQuery('.ryan-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.ryan-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'BlissaHearts':
            var n = jQuery('.blissa-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.blissa-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'TawnyHearts':
            var n = jQuery('.tawny-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.tawny-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
        case 'TaffyHearts':
            var n = jQuery('.taffy-hearts li');
            var t = value.points;
            var v = jQuery('.profileContent ul.taffy-hearts li');
            v.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            n.each(function (index) {
                if (index < t) {
                    jQuery(this).addClass('full');
                }
            });
            break;
    }

});
	
}
//CHARMS, TOTE, and BGIFTS PROCESSING FOR MY STATS PAGE
function processAvatars(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
}
	switch(data.Nitro.AvatarRecord.instanceName){
	    case 'TOTE':

	        var toteName = data.Nitro.AvatarRecord.items.CatalogItem;
       
	        var toteOutput = '';
	        jQuery(toteName).each(function (item, value) {
	            toteOutput += '<li><img src="'
						+ value.thumbUrl +
						'" alt="'
						+ value.name +
						'"/><br/></li>';
	            jQuery('ul.purse-list').html(toteOutput);
	        });
	        break;

	    case 'CHARMS':
	        var charmName = data.Nitro.AvatarRecord.items.CatalogItem;
	        console.log(charmName);
	        var charmOutput = '';
	        jQuery(charmName).each(function (item, value) {
	            charmOutput += '<li><h4>'
				+ value.name +
				'</h4><img src="' + value.thumbUrl + '" alt="' + value.name + '"/></li>';
	        });
	        jQuery('ul.charms').html(charmOutput);

	        jQuery('ul.charms li:first').addClass('firstLink');
	        var totalCharms = jQuery('ul.charms li').size();
	        if (totalCharms > 1) {
	            jQuery('ul.charms li:last').addClass('lastLink');

	        }

	        jQuery('.fwdBackSlider').blidSlider({ level: -1 });
	        break;
	}
}

//BADGES PROCESSING FOR MY STATS PAGE
function allBgifts(data){
	var bgiftsName = data.Nitro.CatalogRecord.catalogItems.CatalogItem;
	var bgiftsOutput = '';
	jQuery.each(bgiftsName, function (item, value) {
	    if (value.description != '') {
	        bgiftsOutput += '<div class="badgeDivs"><h3 class="pink">'
			+ value.name +
			'</h3><img src="' + value.fullUrl + '" alt="' + value.name + '" width="101" height="101"/><p>'
			+ value.description +
			'</p></div>';
	    }
	});
	jQuery('ul.badges-list').html(bgiftsOutput);	
	var theDivs = jQuery('.badgeDivs');
	var numDivs = theDivs.length;
	var theLis = jQuery('ul.badges-list li');
	var numLis = theLis.length;
	for (i=0; i< numDivs; i=i+2){
	    theDivs.eq(i).add(theDivs.eq(i+1)).wrapAll('<li></li>');
    }
        jQuery('ul.badges-list li div:even').addClass('topAsset clearfix');
        jQuery('ul.badges-list li div:odd').addClass('bottomAsset');
        jQuery('.slider').blidCarousel();
}
//CALLBACK CHARMS ON LEADERBOARD PAGE
function leaderboardCharms(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        console.log('Error:' + data.Nitro.Error.Message + ' man');
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=TOTE&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=CHARMS&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=BGIFTS&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        nitro.callAPI('method=user.getAvatarItems&sessionKey=' + global.sessionKey + '&instanceName=CHARMS&locale=' + global.languageUC + '', 'leaderboardCharms');

    }

  

    currentCharmLeaderboard = data.Nitro.AvatarRecord.items.CatalogItem;
   
    if (currentCharmLeaderboard == undefined) {
        currentCharmLeaderboard = 0;
    } else {
       currentCharmLeaderboard  = currentCharmLeaderboard.zOrder;
    }

    nitro.callAPI('method=site.getCatalog&catalogName=SEASON_ONE_BLID_ITEMS&tag=CHARMS&locale=' + global.languageUC + '', 'processLeaderboard');
    

}
function processLeaderboard(data) {
    var globe = jQuery('#nextChallenge .colContent .globe');
    var text = jQuery('#nextChallenge .colContent .current-level-charm');
    var country = jQuery('#nextChallenge .colContent .countryBG');
    var charmBraclet = jQuery('#nextChallenge .colContent .charmBraclet');
    var charmTitle = jQuery('h4 .next-level-charm');
    var charmDescription = jQuery('p.charm-description');
    var charmsTotal = data.Nitro.CatalogRecord.catalogItems.CatalogItem;
    var charmName = '';
    var charmImage = '';
    var charmGlobe = '';
    var charmCountry = '';
    var charmBraceletImage = '';
    var charmBraceletTitle = '';
    var charmBraceletDescription = '';
    if (currentCharmLeaderboard == 0) {
        currentCharmLeaderboard = parseInt(currentCharmLeaderboard) + 1;
        jQuery.each(charmsTotal, function (item, value) {
            if (currentCharmLeaderboard == value.zOrder) {
                charmName += '' + value.name + '';
                charmGlobe += '<img src="' + value.fullUrl + '" alt="' + value.name + '"/>';
                charmCountry += '<img src="' + value.fullUrl + '" alt="' + value.name + '"/>';

            }

            if (currentCharmLeaderboard + 1 == parseInt(value.zOrder) + 1) {
                charmBraceletImage += '<img src="' + value.thumbUrl + '" alt="' + value.name + '"/>';
                charmBraceletTitle += value.name;
                charmBraceletDescription += value.description;
            }
        });

    }else{
        currentCharmLeaderboard = parseInt(currentCharmLeaderboard) + 1;
        jQuery.each(charmsTotal, function (item, value) {
            if (currentCharmLeaderboard == value.zOrder) {
                charmName += '' + value.name + '';
                charmGlobe += '<img src="' + value.fullUrl + '" alt="' + value.name + '"/>';
                charmCountry += '<img src="' + value.fullUrl + '" alt="' + value.name + '"/>';

            }
        
            if (currentCharmLeaderboard == parseInt(value.zOrder) + 1) {
                charmBraceletImage += '<img src="' + value.thumbUrl + '" alt="' + value.name + '"/>';
                charmBraceletTitle += value.name;
                charmBraceletDescription += value.description;
            }
        });
    }
    currentCharmLeaderboard = currentCharmLeaderboard.toString();
    switch (currentCharmLeaderboard) {
        case '1':
            currentCharmLeaderboard = '01';
            break;
        case '2':
            currentCharmLeaderboard = '02';
            break;
        case '3':
            currentCharmLeaderboard = '03';
            break;
        case '4':
            currentCharmLeaderboard = '04';
            break;
        case '5':
            currentCharmLeaderboard = '05';
            break;
        case '6':
            currentCharmLeaderboard = '06';
            break;
        case '7':
            currentCharmLeaderboard = '07';
            break;
        case '8':
            currentCharmLeaderboard = '08';
            break;
        case '9':
            currentCharmLeaderboard = '09';
            break;
    }
    var leaderboardURL = document.URL;
    if(leaderboardURL.indexOf('leaderboard/') != -1){
       jQuery('.watchEpisode').attr('href', '../../episodes/' + currentCharmLeaderboard);
        }else{
        jQuery('.watchEpisode').attr('href', '../episodes/' + currentCharmLeaderboard);
    }
    globe.html(charmGlobe);
    country.html(charmCountry);
    charmBraclet.html(charmBraceletImage);
    text.html(charmName);
    charmTitle.html(charmBraceletTitle);
    charmTitle.attr('data-text', charmBraceletTitle);
    charmDescription.html(charmBraceletDescription);

}
//CALLBACK USER'S BGIFTS ON MY STATS PAGE
function mystatsBgifts(data) {
	var bgiftsName = data.Nitro.AvatarRecord.items.CatalogItem;
	var bgiftsOutput = '';
	jQuery(bgiftsName).each(function (item, value) {							
			bgiftsOutput +='<div class="clearfix badgeDivs"><h3 class="pink">'
			+value.name+
			'</h3><img src="'+value.fullUrl+'" alt="'+value.name+'" width="101" height="101"/><p>'
			+value.description+
			'</p></div>';


});
	jQuery('ul.badges-list').html(bgiftsOutput);	
	var theDivs = jQuery('.badgeDivs');
	var numDivs = theDivs.length;

	 for (i=0; i< numDivs; i=i+2){
		theDivs.eq(i).add(theDivs.eq(i+1)).wrapAll('<li></li>');
	}
jQuery('ul.badges-list li div:even').addClass('topAsset clearfix');
jQuery('ul.badges-list li div:odd').addClass('bottomAsset');
jQuery('.slider').blidCarousel();
}


//CALLBACK COMPLETED CHALLENGES ON THE MY STATS PAGE
function completedChallenges(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var eventName = data.Nitro.challenges.Challenge;
	var output = '';
	jQuery.each(eventName, function (item, value) {
	    if (value.rules.Rule.achieved == 1) {
	        output += '<li class="eventAsset purple"><h3 class="purple">'
		+ value.name +
		'</h3><div class="eventImg"><img src="'
		+ value.fullUrl +
		'" width="88" height="88" alt="'
		+ value.name +
		'"/></div><p class="asset_description">'
		+ value.description +
		'</p><div class="infoBar"><ul><li><span class="'
        + value.pointCategory +
        '"></span></li><li><span class="awards'
        + value.pointAward +
        '"></span></li></ul></div></li>';
	    }
	});
	jQuery('ul.events-mystats').html(output);
	jQuery('span.BarbieHearts, span.KenHearts, span.RyanHearts, span.RaquelleHearts, span.NikkiHearts, span.TeresaHearts, span.SkipperHearts, span.StacieHearts, span.ChelseaHearts, span.BlissaHearts').addClass('heartSmall');
}

//CALLBACK NEW CHALLENGES FOR USERS ON MY STATS PAGE
function newChallenges(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
var eventName = data.Nitro.challenges.Challenge;
console.log(eventName);
	var output ='';
	jQuery.each(eventName, function (item, value) {
	    if (value.rules.Rule.achieved == 0) {
	        if (global.myLevelNumber == '1') {
	            if (value.folderName == 'LEVEL_01_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '2') {
	            if (value.folderName == 'LEVEL_02_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '3') {
	            if (value.folderName == 'LEVEL_03_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '4') {
	            if (value.folderName == 'LEVEL_04_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '5') {
	            if (value.folderName == 'LEVEL_05_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '6') {
	            if (value.folderName == 'LEVEL_06_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '7') {
	            if (value.folderName == 'LEVEL_07_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '8') {
	            if (value.folderName == 'LEVEL_08_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '9') {
	            if (value.folderName == 'LEVEL_09_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '10') {
	            if (value.folderName == 'LEVEL_10_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '11') {
	            if (value.folderName == 'LEVEL_11_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '12') {
	            if (value.folderName == 'LEVEL_12_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '13') {
	            if (value.folderName == 'LEVEL_13_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	        if (global.myLevelNumber == '14') {
	            if (value.folderName == 'LEVEL_14_EVENTS') {
	                output += '<li class="eventAsset purple"><h3 class="purple">'
		                    + value.name +
		                    '</h3><div class="eventImg"><img src="'
		                    + value.fullUrl +
		                    '" width="88" height="88" alt="'
		                    + value.name +
		                    '"/></div><p class="asset_description">'
		                    + value.description +
		                    '</p><div class="infoBar"><ul><li><span class="'
                            + value.pointCategory +
                            '"></span></li><li><span class="awards'
                            + value.pointAward +
                            '"></span></li></ul></div></li>';
	            }
	        }
	    }
	});	
	jQuery('ul.events-mystats').html(output);
	jQuery('span.BarbieHearts, span.KenHearts, span.RyanHearts, span.RaquelleHearts, span.NikkiHearts, span.TeresaHearts, span.SkipperHearts, span.StacieHearts, span.ChelseaHearts, span.BlissaHearts').addClass('heartSmall');
}

//CALL BACK ALL CHALLENGES FOR MY STATS
function allChallenges(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
	var eventName = data.Nitro.challenges.Challenge;
	var output = '';
	jQuery.each(eventName, function(item, value){
	    output += '<li class="eventAsset purple"><h3 class="purple">'
		+ value.name +
		'</h3><div class="eventImg"><img src="'
		+ value.fullUrl +
		'" width="88" height="88" alt="'
		+ value.name +
		'"/></div><p class="asset_description">'
		+ value.description +
		'</p><div class="infoBar"><ul><li><span class="'
        + value.pointCategory +
        '"></span></li><li><span class="awards'
        + value.pointAward +
        '"></span></li></ul></div></li>';
	});	
	jQuery('ul.events-mystats').html(output);
	jQuery('span.BarbieHearts, span.KenHearts, span.RyanHearts, span.RaquelleHearts, span.NikkiHearts, span.TeresaHearts, span.SkipperHearts, span.StacieHearts, span.ChelseaHearts, span.BlissaHearts').addClass('heartSmall');
	jQuery('.fwdBackSlider').blidSlider({ level: -1 });
}

function writeNotifications(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    var output = '';
    var notifications = data.Nitro.notificationStyles.NotificationStyle;
    var menuFeed = jQuery('.menu-feed');
    jQuery.each(notifications, function (item, value) {
        output += value.html;
    });
    menuFeed.html(output);
}

function processInstance(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    }
    //nitro.callAPI('method=user.getPointsBalance&pointCategory=Coins&sessionKey=' + global.sessionKey + '&includeYearlyCredits=false', 'getCoins');

}
function processLocation(data){
	if(data == null){
		//console.log('No Data!');
		return;
	}
	if(data.Nitro.res == 'err'){
		//console.log('Error:'+data.Nitro.Error.Message+ ' man');
		return;
	}
    var urlParameters = getUrlVars();
    var activityID = urlParameters[1];
	var locationItems = data.Nitro.CatalogRecord.catalogItems.CatalogItem;
	var output = '';
	var itemSlider = jQuery('div.item-slider div ul');
	itemSlider.html();
	jQuery.each(locationItems, function(item, value){
	    output += '<li class="itemSlider clearfix" data-bool="' + value.description + '" onclick=""><img src="' + value.thumbUrl + '" alt="' + value.name + '"/></li>';
    });
itemSlider.html(output);
jQuery('.slider').blidCarousel();
jQuery.each(locationItems, function (item, value) {
      if (value.category == 'BARBIE_CLOSET' && activityID == '656') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_01.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=1]').attr('data-action', 'EVT_01.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'CHELSEA_BEDROOM' && activityID == '728' || value.category == 'CHELSEA_BEDROOM' && activityID == '727' || value.category == 'CHELSEA_BEDROOM' && activityID == '726') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_02.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=2]').attr('data-action', 'EVT_02.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '738') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_02.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=3]').attr('data-action', 'EVT_02.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_FOYER' && activityID == '776' || value.category == 'DREAMHOUSE_FOYER' && activityID == '774') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_03.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=4]').attr('data-action', 'EVT_03.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_KITCHEN' && activityID == '795') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_03.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=6]').attr('data-action', 'EVT_03.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_KITCHEN' && activityID == '797') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_03.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=5]').attr('data-action', 'EVT_03.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_CLOSET' && activityID == '902') { //Skipper Makeover which is still missing in Tridion
	        jQuery('li.itemSlider').attr('data-action', 'EVT_04.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=9]').attr('data-action', 'EVT_04.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_KITCHEN' && activityID == '1188' || value.category == 'DREAMHOUSE_KITCHEN' && activityID == '1189' || value.category == 'DREAMHOUSE_KITCHEN' && activityID == '1191') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_04.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=7]').attr('data-action', 'EVT_04.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_KITCHEN' && activityID == '1183') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_04.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=8]').attr('data-action', 'EVT_04.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BATHROOM' && activityID == '1264' || value.category == 'BARBIE_BATHROOM' && activityID == '1263') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_05.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=10]').attr('data-action', 'EVT_05.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1020' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1017' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1014') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_05.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=12]').attr('data-action', 'EVT_05.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '980') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_05.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=11]').attr('data-action', 'EVT_05.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_FOYER' && activityID == '1084') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_06.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=13]').attr('data-action', 'EVT_06.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1105' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1103') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_06.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=14]').attr('data-action', 'EVT_06.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_FOYER' && activityID == '1121' || value.category == 'DREAMHOUSE_FOYER' && activityID == '1120') { //Sunblock dropoff still missing from Tridion
	        jQuery('li.itemSlider').attr('data-action', 'EVT_06.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=15]').attr('data-action', 'EVT_06.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'CHELSEA_BEDROOM' && activityID == '1131' || value.category == 'CHELSEA_BEDROOM' && activityID == '1130') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_06.03_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=16]').attr('data-action', 'EVT_06.03_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_KITCHEN' && activityID == '1305') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_07.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=17]').attr('data-action', 'EVT_07.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1304') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_07.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=5]').attr('data-action', 'EVT_07.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BEACH' && activityID == '1327') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_07.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=19]').attr('data-action', 'EVT_07.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BEDROOM' && activityID == '1338' || value.category == 'BARBIE_BEDROOM' && activityID == '1337' || value.category == 'BARBIE_BEDROOM' && activityID == '1336' || value.category == 'BARBIE_BEDROOM' && activityID == '1335') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_07.03_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=20]').attr('data-action', 'EVT_07.03_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1389') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_08.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=21]').attr('data-action', 'EVT_08.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'RESTAURANT' && activityID == '1415' || value.category == 'RESTAURANT' && activityID == '1414' || value.category == 'RESTAURANT' && activityID == '1413' || value.category == 'RESTAURANT' && activityID == '1412') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_08.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=22]').attr('data-action', 'EVT_08.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1438') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_08.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=23]').attr('data-action', 'EVT_08.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'RESTAURANT' && activityID == '1508') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_09.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=24]').attr('data-action', 'EVT_09.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_CLOSET' && activityID == '1566') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_09.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=25]').attr('data-action', 'EVT_09.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1584' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1583' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1582' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1581') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_09.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=26]').attr('data-action', 'EVT_09.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'RAQUELLE_MANSION' && activityID == '1540' || value.category == 'RAQUELLE_MANSION' && activityID == '1539' || value.category == 'RAQUELLE_MANSION' && activityID == '1538' || value.category == 'RAQUELLE_MANSION' && activityID == '1537') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_10.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=27]').attr('data-action', 'EVT_10.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_FOYER' && activityID == '1554' || value.category == 'DREAMHOUSE_FOYER' && activityID == '1553' || value.category == 'DREAMHOUSE_FOYER' && activityID == '1552') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_10.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=28]').attr('data-action', 'EVT_10.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BEDROOM' && activityID == '1561' || value.category == 'BARBIE_BEDROOM' && activityID == '1560' || value.category == 'BARBIE_BEDROOM' && activityID == '1559' || value.category == 'BARBIE_BEDROOM' && activityID == '1558') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_10.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=29]').attr('data-action', 'EVT_10.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1517' || value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1518' || value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1519' || value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1520') { //RAD Recording is Missing
	        jQuery('li.itemSlider').attr('data-action', 'EVT_11.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=31]').attr('data-action', 'EVT_11.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'CHELSEA_BEDROOM' && activityID == '1501') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_11.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=30]').attr('data-action', 'EVT_11.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BATHROOM' && activityID == '1648' || value.category == 'BARBIE_BATHROOM' && activityID == '1647' || value.category == 'BARBIE_BATHROOM' && activityID == '1646' || value.category == 'BARBIE_BATHROOM' && activityID == '1645') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_12.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=32]').attr('data-action', 'EVT_12.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BATHROOM' && activityID == '1716' || value.category == 'BARBIE_BATHROOM' && activityID == '1715' || value.category == 'BARBIE_BATHROOM' && activityID == '1714') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.04_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=33]').attr('data-action', 'EVT_13.04_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BEDROOM' && activityID == '1712' || value.category == 'BARBIE_BEDROOM' && activityID == '1711') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=34]').attr('data-action', 'EVT_13.00_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1732') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.05_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=35]').attr('data-action', 'EVT_13.05_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'DREAMHOUSE_GARAGE' && activityID == '1726' || value.category == 'DREAMHOUSE_GARAGE' && activityID == '1725') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.03_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=36]').attr('data-action', 'EVT_13.03_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'BARBIE_BATHROOM' && activityID == '1749') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=37]').attr('data-action', 'EVT_13.01_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	    if (value.category == 'RAQUELLE_POOL' && activityID == '1748') {
	        jQuery('li.itemSlider').attr('data-action', 'EVT_13.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	        jQuery('li.itemSlider[data-bool=38]').attr('data-action', 'EVT_13.02_CORRECT_OBJ_BLID').addClass('select-correct');
	    }
	        if (value.category == 'BEACH' && activityID == '1800' || value.category == 'BEACH' && activityID == '1799') {
	            jQuery('li.itemSlider').attr('data-action', 'EVT_14.01_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	            jQuery('li.itemSlider[data-bool=39]').attr('data-action', 'EVT_14.01_CORRECT_OBJ_BLID').addClass('select-correct');
	        }
	        if (value.category == 'BARBIE_CLOSET' && activityID == '1805') {
	            jQuery('li.itemSlider').attr('data-action', 'EVT_14.02_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	            jQuery('li.itemSlider[data-bool=40]').attr('data-action', 'EVT_14.02_CORRECT_OBJ_BLID').addClass('select-correct');
	        }
	        if (value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1848' || value.category == 'DREAMHOUSE_LIVING_ROOM' && activityID == '1849') {
	            jQuery('li.itemSlider').attr('data-action', 'EVT_14.00_INCORRECT_OBJ_BLID').addClass('select-incorrect');
	            jQuery('li.itemSlider[data-bool=41]').attr('data-action', 'EVT_14.00_CORRECT_OBJ_BLID').addClass('select-correct');
	        }
    });	
	
}
//PROCESS EVENTS DATA
function processResults(data){
					if(data == null){
						//console.log('No Data!');
						return;
					}
					if(data.Nitro.res == 'err'){
						//console.log('Error:'+data.Nitro.Error.Message+ ' man');
						return;
					}
		var challengeName = data.Nitro.challenges.Challenge;

		                var getStartedText = jQuery('.get-started-text').text();
						var output ='';
						jQuery.each(challengeName, function(item, value){
							if(value.pointCategory == 'BarbieHearts' || 
							value.pointCategory == 'TawnyHearts' ||  
							value.pointCategory == 'SkipperHearts' || 
							value.pointCategory == 'KenHearts' || 
							value.pointCategory == 'RyanHearts' ||
							value.pointCategory == 'NikkiHearts' || 
							value.pointCategory == 'TeresaHearts' || 
							value.pointCategory == 'StacieHearts' || 
							value.pointCategory == 'ChelseaHearts' || 
							value.pointCategory == 'RaquelleHearts' ||
							value.pointCategory == 'BlissaHearts'){
							    reward = '<img src="/Content/img/event_icons/hearts.png" alt="Barbie Hearts"/>';
							}else if(value.pointCategory == 'Coins' && value.pointAward == 1 ||
							 value.pointCategory == 'Coins' && value.pointAward == 5 ||
							 value.pointCategory == 'Coins' && value.pointAward == 10){
				    reward = '<img src="/Content/img/menu/coins-icon.png" alt="B Coins"/>';
							}else if(value.pointCategory == 'Coins' && value.pointAward == 0){
								reward = '';
							}		
							output +=	'<li class="block"><h5>'
							+value.name+
							'</h5><div class="block-row clearfix"><div class="left-icon"><img src="'
							+value.thumbUrl+
							'" alt="'+value.name+'"/></div><div class="description">'
							+value.description+
							'</div></div><div class="bottom-row clearfix"><div class="reward">'
							+reward+
							'</div><div class="continue"><a href="../b-friends/my-wall/" class="lets-get-started">' + getStartedText  + ' <img src="/Content/img/menu/new-event-star.png"/></a></div></div></li>';
			});
			
			jQuery('.challenges').html(output);
			jQuery('.event-row').blidCarousel({ intialView: 1 });
			jQuery(window).smartresize(function () {
			    jQuery('.event-row').blidCarousel({ intialView: 1 });
			});
}
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
function buyDownload(data) {
    console.log('Download Fires');
    nitro.callAPI('method=user.debitPoints&sessionKey=' + global.sessionKey + '&points=' + data + '', 'processInstance');
}
function validateAvatars(data) {
    if (data == null) {
        return;
    }
    if (data.Nitro.res == 'err') {
        return;
    }

    var avatars;
    avatars = data.Nitro.UserCatalogInstance;
    if (avatars == undefined) {
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=BGIFTS&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=TOTE&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        nitro.callAPI('method=user.createAvatar&sessionKey=' + global.sessionKey + '&instanceName=CHARMS&catalogName=SEASON_ONE_BLID_ITEMS', 'processInstance');
        jQuery.cookie('hasInstance', 'hasInstance', { expires: 30, path: '/' });
    }
}
function completeActivity(data) {
    var action = 'LEVEL_ACTION_' + data;
    if (action == 'LEVEL_ACTION_1236' || action == 'LEVEL_ACTION_1235' || action == 'LEVEL_ACTION_1234') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=LEVEL_ACTION_1234,LEVEL_ACTION_1235,LEVEL_ACTION_1236,' + global.languageUC + '', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_623') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_628') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_630') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_675') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108668', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_690') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108670', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_902') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108452', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1116') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108812', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1140') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',CARE_SHARE,' + global.languageUC + '', 'processInstance');
        nitro.callAPI('method=user.removeAvatarItem&instanceName=TOTE&itemId=30108812&sessionKey=' + global.sessionKey + '', 'processTote');
        notifications;
    }
    else if (action == 'LEVEL_ACTION_1356') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108692', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1466') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',CARE_SHARE,' + global.languageUC + '', 'processInstance');
        nitro.callAPI('method=user.removeAvatarItem&sessionKey=' + global.sessionKey + '&itemId=30108692&instanceName=TOTE', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1201') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',CARE_SHARE,' + global.languageUC + '', 'processInstance');
        nitro.callAPI('method=user.removeAvatarItem&sessionKey=' + global.sessionKey + '&itemId=30108670&instanceName=TOTE', 'processInstance');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1649') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',CARE_SHARE,' + global.languageUC + '', 'processInstance');
        nitro.callAPI('method=user.removeAvatarItem&instanceName=TOTE&itemId=30108668&sessionKey=' + global.sessionKey + '', 'processTote');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1810') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108452', 'processToteItem');
        notifications();
    }
    else if (action == 'LEVEL_ACTION_1848') {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '&asyncToken=30108436', 'processToteItem');
        notifications();
    } else if (action == 'LEVEL_ACTION_642') {
        
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=LEVEL_ACTION_642_,' + global.languageUC + '', 'processInstance');
        notifications();
    }
    else {
        nitro.callAPI('method=user.logAction&sessionKey=' + global.sessionKey + '&tags=' + action + ',' + global.languageUC + '', 'processInstance');
        notifications();
    }

}
function processTote(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:'+data.Nitro.Error.Message+ ' man');
        return;
    }
        nitro.callAPI('method=user.getAvatarItems&sessionKey=' + global.sessionKey + '&instanceName=TOTE', 'processAvatars');
        nitro.callAPI('method=user.getAvatarItems&sessionKey=' + global.sessionKey + '&instanceName=TOTE', 'totalTote');
    }
function processToteItem(data) {
    var returnedItem = data.Nitro.asyncToken;
    switch(returnedItem){
        case '30108668':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=TOTE&itemId=30108668&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
        case '30108436':
        nitro.callAPI('method=user.placeAvatarItem&sessionKey=' + global.sessionKey + '&itemId=30108436&instanceName=TOTE', 'processTote');
        break;
        case '30108670':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=TOTE&itemId=30108670&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
        case '30108452':
        nitro.callAPI('method=user.placeAvatarItem&sessionKey=' + global.sessionKey + '&itemId=30108452&instanceName=TOTE', 'processTote');
        break;
        case '30108692':
        nitro.callAPI('method=user.placeAvatarItem&sessionKey=' + global.sessionKey + '&itemId=30108692&instanceName=TOTE', 'processTote');
        break;
        case '30108812':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=TOTE&itemId=30108812&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
        case '30108452':
        nitro.callAPI('method=user.placeAvatarItem&instanceName=TOTE&itemId=30108452&sessionKey=' + global.sessionKey + '', 'processTote');
        break;
    }

}

function processBgifts(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    } else {
        nitro.callAPI('method=user.getAvatarItems&sessionKey=' + global.sessionKey + '&instanceName=BGIFTS&locale=' + global.languageUC + '', 'totalBgifts');
    }


}

function placeItem(data) {
    if (data == null) {
        //console.log('No Data!');
        return;
    }
    if (data.Nitro.res == 'err') {
        //console.log('Error:' + data.Nitro.Error.Message + ' man');
        return;
    } else
        var ownedItems = data.Nitro.OwnedItemsRecord.ownedItems.CatalogItem;
    var output = '';
        jQuery(ownedItems).each(function (key, value) {
        switch (value.catalogItemId) {
            case '3010836':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=3010836&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108368':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=3010836&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108356':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108356&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108402':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108402&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108398':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108398&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108902':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108902&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108350':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108350&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108900':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108900&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108364':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108364&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108376':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108376&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108394':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108394&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108390':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108390&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108404':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108404&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108400':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108400&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108358':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108358&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108352':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108352&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108372':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108372&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108366':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108366&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108386':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108386&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108378':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108378&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108358':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108358&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108354':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108354&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108360':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108360&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108362':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108362&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108406':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108406&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
            case '30108374':
                nitro.callAPI('method=user.placeAvatarItem&instanceName=BGIFTS&itemId=30108374&sessionKey=' + global.sessionKey + '', 'processBgifts');
                break;
        }

    });

    nitro.callAPI('method=user.getAvatarItems&sessionKey=' + global.sessionKey + '&instanceName=BGIFTS', 'totalBgifts');

 
}

function checkLevel(level) {
    //console.log('keith is recording level = ' + level);
    level = level.toString();
        if (level == '2') {
                switch (global.language) {
                    case 'bg-bg':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'zh-cn':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'da-dk':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'nl-nl':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'en-us':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202', 'processInstance');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'fi-fi':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'cs-cz':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'de-de':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'el-gr':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'fr-fr':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'hb-il':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'he-il':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'it-it':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'nb-no':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'nl-nl':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'pl-pl':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'pt-br':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'pt-pt':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'ru-ru':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'es-lam':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'es-mx':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'es-es':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'sv-se':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                    case 'tr-tr':
                        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%202');
                        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
                        break
                }

        }
            if (level == '3') {
				switch (global.language) {
				    case 'bg-bg':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'zh-cn':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'da-dk':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'en-us':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203', 'processInstance');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fi-fi':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'cs-cz':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'de-de':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'el-gr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fr-fr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'hb-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'he-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'it-it':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nb-no':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pl-pl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-br':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-pt':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'ru-ru':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-lam':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-mx':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-es':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'sv-se':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'tr-tr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%203');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				}
        }
            if (level == '4') {
				switch (global.language) {
				    case 'bg-bg':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'zh-cn':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'da-dk':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'en-us':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204', 'processInstance');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fi-fi':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'cs-cz':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'de-de':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'el-gr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fr-fr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'hb-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'he-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'it-it':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nb-no':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pl-pl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-br':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-pt':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'ru-ru':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-lam':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-mx':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-es':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'sv-se':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'tr-tr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%204');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				}
        }
            if (level == '5') {
 				switch (global.language) {
				    case 'bg-bg':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'zh-cn':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'da-dk':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'en-us':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205', 'processInstance');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fi-fi':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'cs-cz':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'de-de':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'el-gr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'fr-fr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'hb-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'he-il':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'it-it':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nb-no':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'nl-nl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pl-pl':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-br':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'pt-pt':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'ru-ru':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-lam':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-mx':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'es-es':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'sv-se':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				    case 'tr-tr':
				        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%205');
				        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
				        break
				}
        }
        if (level == '6') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%206');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '7') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%207');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '8') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%208');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '9') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%209');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '10') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2010');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '11') {
 			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2011');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '12') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2012');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '13') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2013');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }
        if (level == '14') {
			switch (global.language) {
			    case 'bg-bg':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'zh-cn':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'da-dk':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'en-us':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014', 'processInstance');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fi-fi':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'cs-cz':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'de-de':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'el-gr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'fr-fr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'hb-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'he-il':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'it-it':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nb-no':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'nl-nl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pl-pl':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-br':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'pt-pt':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'ru-ru':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-lam':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-mx':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'es-es':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'sv-se':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			    case 'tr-tr':
			        nitro.callAPI('method=user.setLevel&sessionKey=' + global.sessionKey + '&levelName=Level%2014');
			        nitro.callAPI('method=user.getLevel&sessionKey=' + global.sessionKey + '&locale=' + global.languageUC + '', 'setGlobalLevel');
			        break
			}
        }

}

/* ####################### REGISTER MODAL ######################### */
function registerPopUp() {
    //console.log('Register Popup Fired!');
    $('#darkLayer').addClass('darkClass');
    $('#container').addClass('fixedContainer');
    $('.registerContainer').css('display', 'block');
    $('html, body').scrollTop(0);
}
function writeLoves(type, item) {
    jQuery.ajax({
        url: "/Handlers/RecordLove.ashx",
        data: "user=" + global.userName + "&type=" + type + "&item=" + item + "",
        dataType: 'json',
        error: function () {
            //console.log('Error!');
        },
        success: function (data) {
            nitro.callAPI('method=user.getPointsBalance&pointCategory=Coins&sessionKey=' + global.sessionKey + '&includeYearlyCredits=false', 'getCoins');
            writeLoveDetails(item);
        }
    });
}
function processRanking(action) {
    console.log(action);
    nitro.callAPI('method=user.logAction&tags=' + action + '&sessionKey=' + global.sessionKey + '', 'processCoinsOnclick');
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
var onPageLoad = true;
function checkLoveIts() {
    if (global.userName != null) {
        var langUrl = document.URL.split('/')[3];
        jQuery.ajax({
            url: "/Handlers/RetrieveUserLoves.ashx?locale=" + langUrl,
            data: "&user=" + global.userName + "",
            dataType: 'json',
            error: function () {
                //console.log('Error!');
            },
            success: function (data) {
                console.log(data);
                var lovesToChange = jQuery('.love-peter');
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

                });
            }
        });
    }
}
checkLoveIts();
