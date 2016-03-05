function pagesMenu() {
    var mobileMedia = window.matchMedia("(max-width : 992px)").matches;
    var pagesMenuBlock = $('[front-role="pages-menu"]');
    var topForPagesMenuBlock = $('[front-role="main-header"]').outerHeight();
    var pagesMenuBlockTrigger = $('[front-role="pages-menu-trigger"]');
    var pagesMenuBlockTriggerOffset = pagesMenuBlockTrigger.offset().left;
    var positionLeft;

    var triggerWith = pagesMenuBlockTrigger.width();
    var pagesMenuBlockWith;
    var setMarginLeft;

    if (!mobileMedia) {
        pagesMenuBlockWith = 200;
        positionLeft = pagesMenuBlockTriggerOffset;
        setMarginLeft = (pagesMenuBlockWith / 2) - triggerWith;
    } else {
        pagesMenuBlockWith = '100%';
        positionLeft = 0;
        setMarginLeft = 0;
    }

    pagesMenuBlock.css({
        'width': pagesMenuBlockWith,
        'top': topForPagesMenuBlock,
        'left': positionLeft,
        'margin-left': -setMarginLeft
    });

    pagesMenuBlockTrigger.click(function() {
        pagesMenuBlockTrigger.toggleClass('top-menu-list__link--active');
        pagesMenuBlock.toggleClass('pages-menu--active');
    });
}
