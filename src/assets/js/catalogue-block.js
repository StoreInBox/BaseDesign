function catalogueBlock() {
    var catalogueBlock = $('[front-role="catalogue-block"]');
    var topForBlock = $('[front-role="main-header"]').outerHeight();
    var catalogueBlockTrigger = $('[front-role="catalogue-block-trigger"]');
    var catalogueBlockTriggerOffset = catalogueBlockTrigger.offset().left;

    catalogueBlock.css({
        'top': topForBlock + 1,
    });

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
