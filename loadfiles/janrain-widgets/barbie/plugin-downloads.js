(function ($) {

    $.fn.downloads = function (callback) {

        return this.each(function () {

            var userName = global.userName;
            var userCoins = global.coins;
            var downloadsObject;
            var purchaseID;
            var purchasePrice;
            var clickedItem;
            var slider = $(this);
            var downloadType = $(this).attr('id').replace('Downloads', '');
            var langUrl = document.URL.split('/')[3];
            var maxWidth;
            if (slider.find('.purchaseOuter').length > 0) {
                $('.purchasePopUp').hide();
            }
            if (slider.find('.downloadPopUpOuter').length > 0) {
                $('.downloadPopUpOuter').hide();
            }
            if (slider.find('.purchaseOuter').length > 0) {
                slider.find('.downloadOuter').hide();
            }
            slider.find('.template').hide();

            /* ####################### RETRIEVE DOWNLOADABLES ######################### */
            $.ajax({
                url: "/Handlers/RetrieveDownloadables.ashx",
                data: "user=" + userName + "&downloadType=" + downloadType + "&locale=" + langUrl,
                dataType: 'json',
                error: function () {
                },
                success: function (data) {
                    downloadsObject = data;
                    populateDownloads();
                    console.log(userCoins);
                    console.log(data);
                }
            });

            /* ####################### RETRIEVE DOWNLOADABLES ######################### */

            function populateDownloads() {
                switch (downloadType) {
                    case "wallpaper":
                        maxWidth = 317;
                        break;
                    case "avatar":
                        maxWidth = 150;
                        break;
                    case "signature":
                        maxWidth = 150;
                        break;
                    case "printable":
                        maxWidth = 150;
                        break;
                }

                $.each(downloadsObject, function (key, downloadable) {

                    var newDownloadable = slider.find('li.template').clone().removeClass().addClass('active').css('display', 'block');
                    if (downloadType == 'wallpaper') {
                        newDownloadable.attr({ 'data-computerUrl': downloadable.DesktopUrl, 'data-tabletUrl': downloadable.IpadUrl, 'data-ipadUrl': downloadable.AndroidUrl });
                    } else {
                        newDownloadable.attr({ 'data-downloadableUrl': downloadable.DownloadableUrl });
                    }

                    newDownloadable.find('.pinkGradTitle').attr('data-text', downloadable.ItemTitle);

                    newDownloadable.find('.downloadableThumb').attr('src', downloadable.ThumbUrl);

                    if (newDownloadable.find('.purchaseOuter').length == 0) {
                        newDownloadable.find('.downloadOuter').bind('click', downloadItem);
                    }

                    if (downloadable.Purchased == 'True') {
                        if (newDownloadable.find('.purchaseOuter').length > 0) {
                            newDownloadable.find('.purchaseOuter').hide();
                        }
                        newDownloadable.find('.downloadOuter').show();
                        newDownloadable.find('.downloadOuter').bind('click', downloadItem);
                    } else {
                        newDownloadable.find('.purchaseOuter').attr({ 'data-downloadableId': downloadable.ID, 'data-price': parseInt(downloadable.Price) });
                        if (parseInt(downloadable.Price) > userCoins || userCoins == undefined) {
                            newDownloadable.find('.purchaseOuter').css('opacity', 0.4);
                        } else {
                            newDownloadable.find('.purchaseOuter').bind('click', purchaseItem);
                        }
                    }
                    newDownloadable.appendTo(slider.find('.sliderUl'));
                });
                slider.find('.template').remove();
            }

            /* ####################### DOWNLOAD POPUP ######################### */

            function downloadItem(event) {

                event.stopPropagation();

                if (slider.find('.downloadPopUpOuter').length > 0) {
                    var computerUrl = $(this).parent().attr('data-computerUrl');
                    var tabletUrl = $(this).parent().attr('data-tabletUrl');
                    var ipadUrl = $(this).parent().attr('data-ipadUrl');

                    slider.find('.computer a').attr('href', computerUrl);
                    slider.find('.tablet a').attr('href', tabletUrl);
                    slider.find('.ipad a').attr('href', ipadUrl);

                    slider.find('.purchasePopUp').hide();
                    var outerWrapper = $(this).parent().parent().parent().offset().left;
                    var popUpPosition = (($(this).parent().offset().left) - outerWrapper) + 20;
                    slider.find('.downloadPopUpOuter').css('left', popUpPosition);
                    slider.find('.downloadPopUpOuter').show();
                } else {
                    var downloadableUrl = $(this).parent().attr('data-downloadableUrl');
                    window.open(downloadableUrl);
                }
            }

            if (slider.find('.downloadPopUpOuter').length > 0) {
                slider.find('.downloadPopUp li').click(function (e) {
                    var deviceType = this.innerHTML.toLowerCase();
                    e.stopPropagation();
                });
            }

            /* ####################### PURCHASE POPUP ######################### */

            function purchaseItem(event) {
                event.stopPropagation();
                $('.downloadPopUpOuter').hide();
                var outerWrapper = $(this).parent().parent().parent().offset().left;
                var popUpPosition = (($(this).parent().offset().left) - outerWrapper) - 50;
                slider.find('.purchasePopUp').css('left', popUpPosition);
                slider.find('.purchasePopUp').show();
                purchaseID = $(this).attr('data-downloadableId');
                purchasePrice = parseInt($(this).attr('data-purchasePrice'));
                clickedItem = $(this);
            }

            /* ####################### CLOSE POPUPS ######################### */

            $(document).click(function () {
                $('.downloadPopUpOuter, .purchasePopUp').hide();
            });

            /* ####################### CONFIRM PURCHASE ######################### */

            slider.find('.yellowBtn').bind('click', purchaseConfirmed);

            function purchaseConfirmed() {
                event.stopPropagation();
                callback(purchasePrice);

                clickedItem.unbind('click', purchaseItem);
                clickedItem.hide().parent().find('.downloadOuter').show().bind('click', downloadItem); ;
                $('.downloadPopUpOuter, .purchasePopUp').hide();
                
                $.ajax({
                    url: "/handlers/recordpurchase.ashx",
                    data: "user=" + userName + "&purchaseID=" + purchaseID + "&locale=" + langUrl,
                    dataType: 'json',
                    error: function () {
                        console.log('no data');
                    },
                    success: function (data) {
                        console.log('data');
                    }
                });
            }

        });

        return this;

    };
})(jQuery);

