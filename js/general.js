jQuery(document).ready(function(){
    jQuery(window).on('scroll', function() {
        jQuery('.paralax-img').parallax(0.5);
    });
});

jQuery.fn.parallax = function(strength) {
    var scroll_top = jQuery(window).scrollTop();
    var move_value = Math.round(scroll_top * strength);
    jQuery(this).css('background-position', '0 ' + parseInt(move_value * -1) + 'px');
};