function searchArea() {
    var searchTrigger = $('[front-role="search-trigger"]');
    var searchArea = $('[front-role="search-area"]');
    var close = $('[front-role="search-trigger-close-icon"]');

    var body = $('body');

    var triggerPositionLeft = searchTrigger.offset().left;
    var triggerPositionTop = searchTrigger.offset().top;

    searchTrigger.css({
        "top": triggerPositionTop,
        "left": triggerPositionLeft
    });

    searchTrigger.click(function(e) {
        e.stopPropagation();
        searchTrigger.toggleClass('search__trigger--active');
        searchArea.toggleClass('search-area--active');
        body.toggleClass('no-scroll');
    });
    close.click(function() {
        searchTrigger.toggleClass('search__trigger--active');
        searchArea.toggleClass('search-area--active');
        body.toggleClass('no-scroll');
    });
}
