function cartPreview() {
    console.log('Init cart preview');
    var cartPreviewBlock = $('[front-role="cart-preview"]');
    var cartPreviewTrigger = $('[front-role="cart-preview-trigger"]');
    var topForPagesMenuBlock = $('[front-role="main-header"]').outerHeight();

    cartPreviewBlock.css({
        'top': topForPagesMenuBlock
    });

    cartPreviewTrigger.click(function(event) {
        event.stopPropagation();
        cartPreviewTrigger.toggleClass('top-menu-list__link--active');
        cartPreviewBlock.toggleClass('cart-preview--active');
    });
}
