function priceRange () {
    var slider = $('[data-role="price-range"]');
    var sliderLabel = $('[data-role="price-range-label"]');
    sliderLabel.html(slider.val());
    slider.on('change', function(e) {
      console.log(e.target.value);
      sliderLabel.html(e.target.value);
    });
}
