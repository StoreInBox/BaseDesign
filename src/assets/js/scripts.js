// document ready
$(window).on('load', function() {
    scrollToContent();
    equalheight('[data-front="product-list"] [data-front="product-list-item"]');
    fixPanel();
    productImage();
    catalogueBlock();
});

// all initial on window resize
$(window).on('resize', function() {
    equalheight('[data-front="product-list"] [data-front="product-list-item"]');
});
