// Main JavaScript file

// Javascript Core Functions
jQuery(document).ready(function() {

  // Back-to-top Button
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

  // Disable animations/transitions until page has loaded.
  jQuery(document).ready((function() {
    jQuery('body').addClass('loading');
    jQuery(window).on('load', function() {
      jQuery('body').removeClass('loading');
    });
  });

});
