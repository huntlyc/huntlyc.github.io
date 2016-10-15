var isMenuShown = false;

jQuery(document).ready(function(){
    jQuery(window).on('scroll', function() {
        if(jQuery(window).outerWidth() > 400){
            jQuery('.paralax-img').parallax(0.3);
        }
    });

    jQuery('.menu-icon').click(function(event){
        event.preventDefault();

        if(!isMenuShown){ //Show
            jQuery('.site-nav').animate({'margin-top': 0}, 100);
        }else{ //Hide
            jQuery('.site-nav').animate({'margin-top': -34}, 100);
        }

        isMenuShown = !isMenuShown;
    })
});

jQuery(window).load(function(){
    jQuery('a.social-link').click(function(event){
        ga('send', {
              hitType: 'event',
              eventCategory: 'ExternalLink',
              eventAction: 'SocialLink',
              eventLabel: 'SocialLink - ' + jQuery(this).attr('data-network')
        });
    });
    jQuery('a.licence-link').click(function(event){
        ga('send', {
              hitType: 'event',
              eventCategory: 'ExternalLink',
              eventAction: 'LicenceLink',
              eventLabel: 'LicenceLink - ' + jQuery(this).attr('data-licence')
        });
    });
});

jQuery.fn.parallax = function(strength) {
    var scroll_top = jQuery(window).scrollTop();
    var move_value = Math.round(scroll_top * strength);
    jQuery(this).css('background-position', '0 ' + parseInt(move_value * -2) + 'px');
};



