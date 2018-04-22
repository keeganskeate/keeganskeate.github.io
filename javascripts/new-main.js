// Main JavaScript file

// Disable animations/transitions until page has loaded.
(function($) {
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$body.addClass('loading');
			$window.on('load', function() {
				$body.removeClass('loading');
			});
	});
})

(jQuery);
  
// Back-to-top Button
jQuery(document).ready(function() {
  var offset = 250; // When the button will appear.
  var duration = 300; // The time until the button will appear in milliseconds.
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  });
});
