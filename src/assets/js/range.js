function rangeFilter() {

    var rangeFilter = $('[data-role="range-filter"]');

    rangeFilter.each(function() {
        var slider = $(this).find($('[data-role="range-input"]'));
        var sliderLabel = $(this).find($('[data-role="range-label"]'));
        sliderLabel.html(slider.val());
        slider.on('change', function(e) {
          console.log(e.target.value);
          sliderLabel.html(e.target.value);
        });
    });
}
