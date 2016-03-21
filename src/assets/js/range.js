function rangeFilter() {

    var rangeFilter = $('[front-role="range-filter"]');

    rangeFilter.each(function() {
        var slider = $(this).find($('[front-role="range-input"]'));
        var sliderLabel = $(this).find($('[front-role="range-label"]'));
        sliderLabel.html(slider.val());
        slider.on('change', function(e) {
          sliderLabel.html(e.target.value);
        });
    });
}
