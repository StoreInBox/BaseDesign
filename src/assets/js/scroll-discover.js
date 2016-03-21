// scroll by click discover more
function scrollToContent() {
    var trigger = $('[front-role="scroll-to-content"]');
    var windowHeight = $(window).height();
    var panelHeight = $('[front-role="base-header"]').height() + 10;
    trigger.click(function() {
        $('html, body').animate({
          scrollTop: windowHeight - panelHeight
        }, 1000);
    });
}
