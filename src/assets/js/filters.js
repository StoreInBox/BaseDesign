function toggleFilter() {
    var filter = $('[data-role="toggle-filter"]');
    filter.click(function() {
        $(this).toggleClass('toggle-filter--active');
    });
}
