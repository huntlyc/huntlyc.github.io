var navLinkColor = null;

jQuery(document).ready(function(){
	navLinkColor = jQuery('nav a:eq(0)').css('color');

	jQuery('nav a').hover(function(){		
		jQuery(this).stop().animate({'color': jQuery(this).attr('data-color')});
	},function(){
		jQuery(this).stop().animate({'color': navLinkColor});
	});

	jQuery(window).scroll(function(event){
		var scrolled = jQuery(window).scrollTop();
		jQuery('#paralax-img').css({'background-position-y': -(scrolled * 0.6) + 'px'});
	})
});

