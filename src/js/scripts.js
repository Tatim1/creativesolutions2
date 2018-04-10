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

	// $('#inputEmail3, #inputPassword3, #message').on('input', function(){
	// 	if ($('#inputEmail3').val().trim().length > 2 &&
	// 		$('#inputPassword3').val().trim().length > 2 &&
	// 		$('#message').val().trim().length > 2) {
	// 			$('#send').removeAttr('disabled');
	// 	} else {
	// 		$('#send').attr('disabled', 'disabled');
	// 	};
	// });

	// $('#send').on('click', function(e){
	// 	e.preventDefault();
	// 	$('#myModal').find('.modal-title').text('Success');
	// 	$('#myModal').find('.modal-body p').text('You have successfully send your message.');
	// 	$('#myModal').modal();
	// });
	
});

