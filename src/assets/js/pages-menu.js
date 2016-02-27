function pagesMenu() {
    var pagesMenuBlock = $('[front-role="pages-menu"]');
    var topForPagesMenuBlock = $('[front-role="main-header"]').outerHeight();
    var pagesMenuBlockTrigger = $('[front-role="pages-menu-trigger"]');
    var pagesMenuBlockTriggerOffset = pagesMenuBlockTrigger.offset().left;

    var triggerWith = pagesMenuBlockTrigger.width();
    var pagesMenuBlockWith = 200;
    var setMarginLeft = (pagesMenuBlockWith / 2) - triggerWith;

    pagesMenuBlock.css({
        'width': pagesMenuBlockWith,
        'top': topForPagesMenuBlock,
        'left': pagesMenuBlockTriggerOffset,
        'margin-left': -setMarginLeft
    });

    pagesMenuBlockTrigger.click(function() {
        pagesMenuBlockTrigger.toggleClass('top-menu-list__link--active');
        pagesMenuBlock.toggleClass('pages-menu--active');
    });
}
