// Main JavaScript file

(function($) {

	// Responsive Formatting
	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: 'css/style.css', containers: 1400, grid: { gutters: 50 } },
			wide:		{ range: '-1680', href: 'css/style-wide.css', containers: 1200, grid: { gutters: 40 } },
			normal:		{ range: '-1280', href: 'css/style-normal.css', containers: 960, lockViewport: true },
			narrow:		{ range: '-980', href: 'css/style-narrow.css', containers: '95%', grid: { gutters: 25 } },
			narrower:	{ range: '-840', href: 'css/style-narrower.css', grid: { collapse: true } },
			mobile:		{ range: '-640', href: 'css/style-mobile.css', containers: '90%', grid: { gutters: 15 } }
		}
	}, {
		layers: {
			layers: {
				navPanel: {
					animation: 'pushX',
					breakpoints: 'narrower',
					clickToClose: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="navList" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 275
				},
				titleBar: {
					breakpoints: 'narrower',
					height: 44,
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>',
					position: 'top-left',
					side: 'top',
					width: '100%'
				}
			}
		}
	});
	
	// Sticky header with slide down effect
	$(function() {
		$("#header").before($(".StickyHeader").clone().addClass("fixed"));
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 200) {
				$('.StickyHeader.fixed').addClass('slideDown');
			} else{
				$('.StickyHeader.fixed').removeClass('slideDown');
			}
		});
	});

	// Disable animations/transitions until page has loaded.
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$body.addClass('loading');
			$window.on('load', function() {
				$body.removeClass('loading');
			});
	});
	
	// Initiate Dropdowns.
	$(function() {
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0
		});
	});
	
})(jQuery);
  
/* Back-to-top Button */
jQuery(document).ready(function() {
  var offset = 100; // When the button will appear.
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
