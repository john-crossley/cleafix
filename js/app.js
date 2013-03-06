$(document).ready( function() {

	// The navigation
	$('a[href=#team]').on('click', function() {
		scroll_to($('#team'));
		return false;
	});

	$('a[href=#about]').on('click', function() {
		scroll_to($('#about'));
		return false;
	});

	$('a[href=#about]').on('click', function() {
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
		controlNavigation: 'bullets',
		thumbsFitInViewport: false,
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

function scroll_to(object) {
	$('html, body').animate({
		scrollTop: object.offset().top
	}, 600);
}