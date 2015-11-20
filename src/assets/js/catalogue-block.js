function catalogueBlock() {
    var catalogueBlock = $('[front-role="catalogue-block"]');
    var topForBlock = $('[front-role="main-header"]').outerHeight();
    var catalogueBlockTrigger = $('[front-role="catalogue-block-trigger"]');
    var catalogueBlockTriggerOffset = catalogueBlockTrigger.offset().left;

    catalogueBlock.css({
        'top': topForBlock,
        'padding-right': catalogueBlockTriggerOffset,
        'padding-left': catalogueBlockTriggerOffset
    });

    catalogueBlockTrigger.click(function() {
        catalogueBlockTrigger.toggleClass('catalogue--active');
        catalogueBlock.toggleClass('catalogue-block--active');
    });
}
