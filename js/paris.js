var scrollPosition = 0;

$(function(){
	$('.logo-wrapper .content h1').mouseover(function(){
		$(this).fadeToggle(400);
	});
	$('.logo-wrapper .content p').mouseover(function(){
		$(this).show();
	});

	$('#showEmail').on('click', function(){
		$('#Email').toggle();
	});



$(document).scroll(function(){
	$("html").niceScroll();
	scrollPosition=($(document).scrollTop());
	console.log(scrollPosition);
	



	if(scrollPosition > 600)
	{
		$('#header').addClass('fixed-header');
	}
	if(scrollPosition < 600)
	{
		
		$('#header').removeClass('fixed-header');
	}

	// Main Logo
	if(scrollPosition > 40)
	{
	
	
		$('#mainLogo').addClass('fadeOut animated');
	}	
	if(scrollPosition < 40)
	{
	
	$('#mainLogo').removeClass('fadeOut animated');
		$('#mainLogo').addClass('fadeIn animated');
	}


	//Settitle
	if(scrollPosition > 300)
	{
	
		$('#SeTitle').addClass('rubberBand animated');
	}


	if(scrollPosition > 7400)
	{
	
		$('#WoTitle').addClass('rubberBand animated');
	}

	if(scrollPosition > 1000)
	{
	
		$('#DeSol').addClass('rubberBand animated');
	}

	if(scrollPosition > 700)
	{
	
		$('#sideTitle').addClass('bounceInRight animated');
	}


	if(scrollPosition > 1400)
	{
	
		$('#sideTitle1').addClass('bounceInRight animated');
	}


	if(scrollPosition > 1500)
	{
	
		$('#head1').addClass('bounceInRight animated');
	}

	if(scrollPosition > 4800)
	{
	
		$('#MoDev').addClass('rubberBand animated');
	}

	if(scrollPosition > 11300)
	{
	
		$('#CuTitle').addClass('rubberBand animated');
	}


	if(scrollPosition > 12600)
	{
	
		$('#CoTitle').addClass('rubberBand animated');
	}
})





});