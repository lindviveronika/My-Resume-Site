$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('rotate');
		$('.nav-links').slideToggle();
	});

	$('a[href^="#"]').on('click', function(event) {
		var headerHeight = 100;
	    var target = $( $(this).attr('href') );
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - headerHeight
	        }, 1000);
	    }
	});
});