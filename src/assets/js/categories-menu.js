function CategoriesMneu() {
    var activeClass = "catalogue-main-nav__item--active";
    var SubTabContainer = $('[front-role="sub-tab"]');
    var SubTabTrigger = $('[front-role="sub-tab-trigger"]');

    SubTabContainer.hide().filter(':first').show();
    SubTabTrigger.filter(':first').addClass(activeClass);
    SubTabTrigger.hover(function () {
        var currentLoop = $(this).attr('sub-tabTrigger');
        SubTabContainer.hide();
        SubTabContainer.filter('[sub-tabTrigger='+currentLoop+']').show();
        SubTabTrigger.removeClass(activeClass);
        $(this).addClass(activeClass);
    });
}
