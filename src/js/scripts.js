$(document).ready(function() {

	
	
	

$('body').on('click', '.scrollTo', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var offset = Math.floor($(target).offset().top);
		$('html').animate({
			scrollTop: offset
		}, 800, function() {

		});
})

	
	
});

