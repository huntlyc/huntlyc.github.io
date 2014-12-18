jQuery(document).ready(function(){
    jQuery(window).on('scroll', function() {
        jQuery('.paralax-img').parallax(0.5);
    });
});

jQuery.fn.parallax = function(strength) {
    var scroll_top = $(window).scrollTop();
    var move_value = Math.round(scroll_top * strength);
    this.css('background-position-y', '-'+ move_value +'px');
};

