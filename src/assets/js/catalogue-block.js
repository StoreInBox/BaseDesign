function catalogueBlock() {
    var mobileMedia = window.matchMedia("(max-width : 992px)").matches;
    var catalogueBlock = $('[front-role="catalogue-block"]');
    var topForBlock = $('[front-role="main-header"]').outerHeight();
    var catalogueBlockTrigger = $('[front-role="catalogue-block-trigger"]');
    var catalogueBlockTriggerOffset = catalogueBlockTrigger.offset().left;

    if (!mobileMedia) {
        catalogueBlock.css({
            'top': topForBlock,
            'padding-right': catalogueBlockTriggerOffset,
            'padding-left': catalogueBlockTriggerOffset
        });
    } else {
        catalogueBlock.css({
            'top': topForBlock,
            'padding-right': 0,
            'padding-left': 0
        });
    }

    catalogueBlockTrigger.click(function(event) {
        event.stopPropagation();
        catalogueBlockTrigger.toggleClass('catalogue--active');
        catalogueBlock.toggleClass('catalogue-block--active');
    });
    catalogueBlock.click(function(event) {
        event.stopPropagation();
    })

    $('html').click(function() {
        if (catalogueBlock.hasClass('catalogue-block--active')) {
            catalogueBlockTrigger.toggleClass('catalogue--active');
            catalogueBlock.toggleClass('catalogue-block--active');
        }
    });
}
