function fixPanel() {
    var win = $(window);
    var baseHeader = $('[front-role="base-header"]');
    var scrollTop = baseHeader.height() + 20;
    var siteBody = $('[front-role="body"]');
    win.scroll(function() {
        if (win.scrollTop() >= scrollTop) {
            baseHeader.addClass('base-header--fixed-active');
        } else {
            baseHeader.removeClass('base-header--fixed-active');
        }
    });
}
