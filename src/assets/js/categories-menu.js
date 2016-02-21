function CategoriesMneu() {
    var SubTabContainer = $('[data-role="sub-tab"]');
    var SubTabTrigger = $('[data-role="sub-tab-trigger"]');
    SubTabContainer.hide().filter(':first').show();
    SubTabTrigger.filter(':first').addClass('active');
    SubTabTrigger.hover(function () {
        var currentLoop = $(this).attr('sub-tabTrigger');
        SubTabContainer.hide();
        SubTabContainer.filter('[sub-tabTrigger='+currentLoop+']').show();
        SubTabTrigger.removeClass('active');
        $(this).addClass('active');
    });
}
