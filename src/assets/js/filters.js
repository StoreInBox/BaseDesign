function toggleFilter() {
    var filter = $('[front-role="toggle-filter"]');
    filter.click(function() {
        $(this).toggleClass('toggle-filter--active');
    });
}
