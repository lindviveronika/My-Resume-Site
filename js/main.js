$(document).ready(function(){

	//REGISTER USERS IP ADRESS
	$.get('php/counter.php');

	//SHOW NAV ON CLICK
	$('.nav-icon').click(function(){
		$(this).toggleClass('rotate');
		$('.nav-links').slideToggle();
	});

	//SCROLL DOWN ON NAV ANCHOR CLICK
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

	//HIDE NAV WHEN CLICKING OUTSIDE
	$(document).mouseup(function (e)
	{
	    var menu = $(".nav-links");
	    var menuicon = $('.nav-icon');

	    if (!menu.is(e.target) && menu.has(e.target).length === 0 && !menuicon.is(e.target)) {
			$('.nav-icon').removeClass('rotate');
			$('.nav-links').slideUp();
	    }
	});


});