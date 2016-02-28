function pagesMenu() {
    var mobileMedia = window.matchMedia("(max-width : 992px)").matches;
    var pagesMenuBlock = $('[front-role="pages-menu"]');
    var topForPagesMenuBlock = $('[front-role="main-header"]').outerHeight();
    var pagesMenuBlockTrigger = $('[front-role="pages-menu-trigger"]');
    var pagesMenuBlockTriggerOffset = pagesMenuBlockTrigger.offset().left;
    var positionLeft;

    var triggerWith = pagesMenuBlockTrigger.width();
    var pagesMenuBlockWith;

    if (!mobileMedia) {
        pagesMenuBlockWith = 200;
        positionLeft = pagesMenuBlockTriggerOffset;
    } else {
        pagesMenuBlockWith = '100%';
        positionLeft = 0;
    }

    var setMarginLeft = (pagesMenuBlockWith / 2) - triggerWith;

    pagesMenuBlock.css({
        'width': pagesMenuBlockWith,
        'top': topForPagesMenuBlock,
        'left': positionLeft,
        'margin-left': -setMarginLeft
    });

    pagesMenuBlockTrigger.click(function(event) {
        event.stopPropagation();
        pagesMenuBlockTrigger.toggleClass('top-menu-list__link--active');
        pagesMenuBlock.toggleClass('pages-menu--active');
    });

    $('html').click(function() {
        if (pagesMenuBlock.hasClass('pages-menu--active')) {
            pagesMenuBlockTrigger.toggleClass('top-menu-list__link--active');
            pagesMenuBlock.toggleClass('pages-menu--active');
        }
    });
}
