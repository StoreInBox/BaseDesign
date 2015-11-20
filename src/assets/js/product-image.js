function productImage() {
    // slick lib
    $('[front-role="product-images-preview"]').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });
    $('[front-role="product-images-preview-prev"]').click(function() {
        $('[front-role="product-images-preview"]').slick('slickPrev');
    });
    $('[front-role="product-images-preview-next"]').click(function() {
        $('[front-role="product-images-preview"]').slick('slickNext');
    });

    // actions
    var previewImage = $('[front-role="product-image-preview-trigger"]');
    var currentImage = previewImage[0];

    previewImage.click(function() {
        currentImage = $(this).data('image');
    });
}
