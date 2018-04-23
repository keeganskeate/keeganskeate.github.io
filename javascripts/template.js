// Main JavaScript file

// Back-to-top Button
jQuery(document).ready(function() {
	var offset = 250; // The offset is when the button will appears.
	var duration = 300; // The duration is the time until the button will appear in milliseconds.
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
