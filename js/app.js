function scroll_to(object, current) {
	$('a').removeClass('current'); // Remove all classes and apply current.
	current.addClass('current'); // Add the current css class to the selected menu item.

	$('html, body').animate({
		scrollTop: object.offset().top - 200
	}, 800);
}

$(document).ready( function() {

	var title = "- clearfix - Web Development Agency";

	var sticky_navigation_offset_top = $('#stickyheader').offset().top;

	var stickynavigation = function() {
		var scroll_top = $(window).scrollTop();

		$('#stickyheader').removeAttr("style");

		if ( scroll_top > sticky_navigation_offset_top ) {
			$('#stickyheader').addClass('stickyheader');
		} else {
			$('#stickyheader').removeClass();
		}

	};

	stickynavigation();

	$(window).scroll( function() {

		var scroll_loc = $(window).scrollTop();

		if ( scroll_loc > $('#home').offset().top ) {
			$('a').removeClass('current');
			$('a[href=#home]').addClass('current');
		}

		if ( scroll_loc > $('#work').offset().top ) {
			$('a').removeClass('current');
			$('a[href=#work]').addClass('current');
		}

		if ( scroll_loc > $('#team').offset().top ) {
			$('a').removeClass('current');
			$('a[href=#team]').addClass('current');
		}

		if ( scroll_loc > $('#contact').offset().top ) {
			$('a').removeClass('current');
			$('a[href=#contact]').addClass('current');
		}

		stickynavigation();
	});

	// The navigation
	$('a[href=#home]').on('click', function() {
		document.title = "Home " + title;
		scroll_to($('#home'), $(this));
		return false;
	});

	$('a[href=#work]').on('click', function() {
		document.title = "Work " + title;
		scroll_to($('#work'), $(this));
		return false;
	});

	$('a[href=#team]').on('click', function() {
		document.title = "Team " + title;
		scroll_to($('#team'), $(this));
		return false;
	});

	$('a[href=#about]').on('click', function() {
		document.title = "About " + title;
		scroll_to($('#about'), $(this));
		return false;
	});

	$('a[href=#contact]').on('click', function() {
		document.title = "Contact " + title;
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
});