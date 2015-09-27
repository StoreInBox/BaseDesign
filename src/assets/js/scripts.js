(function($) {

    function scrollToContent() {
        var trigger = $('[data-front="scroll-to-content"]');
        var windowHeight = $(window).height();
        trigger.click(function() {
            $('html, body').animate({
              scrollTop: windowHeight
            }, 1000);
        });
    }

    // document ready
    $(window).on('load', function() {
        scrollToContent();
    });

    // all initial on window resize
    $(window).on('resize', function() {});


})(jQuery);
