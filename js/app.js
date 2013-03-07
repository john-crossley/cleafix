$(document).ready( function() {

	var sticky_navigation_offset_top = $('#stickyheader').offset().top;

	var stickynavigation = function() {
		var scroll_top = $(window).scrollTop();

		$('#stickyheader').removeAttr("style");

		if ( scroll_top > sticky_navigation_offset_top ) {
			$('#stickyheader').addClass('stickyheader');
		} else {
			// $('#stickyheader').css({
			// 	'position': 'relative'
			// });
			$('#stickyheader').removeClass();
		}

	};

	stickynavigation();

	$(window).scroll( function() {
		stickynavigation();
	});

	// The navigation
	$('a[href=#home]').on('click', function() {
		scroll_to($('#home'), $(this));
		return false;
	});

	$('a[href=#work]').on('click', function() {
		scroll_to($('#work'), $(this));
		return false;
	});

	$('a[href=#team]').on('click', function() {
		scroll_to($('#team'), $(this));
		return false;
	});

	$('a[href=#about]').on('click', function() {
		scroll_to($('#about'), $(this));
		return false;
	});

	$('a[href=#contact]').on('click', function() {
		scroll_to($('#contact'), $(this));
		return false;
	});

	$('#full-width-slider').royalSlider({
		loopRewind: true,
		keyboardNavEnabled: true,
		controlsInside: true,
		imageScaleMode: 'fill',
		autoScaleSlider: true,
		autoScaleSliderWidth: 960,
		autoScaleSliderHeight: 350,
		// controlNavigation: 'none',
		thumbsFitInViewport: true,
		navigateByClick: true,
		startSlideId: 0,
		autoPlay: true,
		transitionType:'move',
		globalCaption: true,
		deeplinking: {
		  enabled: true,
		  change: false
		}
	});
})

function scroll_to(object, current) {
	$('a').removeClass('current'); // Remove all classes and apply current.
	current.addClass('current'); // Add the current css class to the selected menu item.

	$('html, body').animate({
		scrollTop: object.offset().top-($('header').height()*2)-50
	}, 600);
}