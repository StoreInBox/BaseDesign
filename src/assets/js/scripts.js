// document ready
$(window).on('load', function() {
    scrollToContent();
    equalheight('[front-role="product-list"] [front-role="product-list-item"]');
    fixPanel();
    productImage();
    catalogueBlock();
    CategoriesMneu();
    toggleFilter();
    rangeFilter();
    pagesMenu();
    cartPreview();
    searchArea();
    itemsCount();
});

// all initial on window resize
$(window).on('resize', function() {
    equalheight('[front-role="product-list"] [front-role="product-list-item"]');
    catalogueBlock();
    pagesMenu();
    cartPreview();
});
