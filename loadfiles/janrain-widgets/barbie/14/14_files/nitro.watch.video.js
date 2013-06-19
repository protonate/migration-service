jQuery(window).load(function () {
    var episodeNumber = document.URL.split('/')[5];
    var watchAction = 'WATCH_EPISODE' + episodeNumber + '_BLID';
    var rankAction = 'RANK_EPISODE' + episodeNumber + '_BLID';
    jQuery('.selectME li').attr('data-actions', rankAction);
    jQuery('#fs').attr('data-actions', watchAction);
});