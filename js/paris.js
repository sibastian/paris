var scrollPosition = 0;


function motion() {
	$('#fstMax').show();
	$('#fstMax').addClass('zoomIn animated');
	$('.pics1').fadeIn(200);

	// setTimeout(motion2(), 1000);
}

function motion2() {
	$('.pics2').fadeIn(200);
}


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
	$('.title').fadeToggle(200);



$(document).scroll(function(){
	$("html").niceScroll();
	scrollPosition=($(document).scrollTop());
	console.log(scrollPosition);
	



	if(scrollPosition > 600)
	{
		$('#header').addClass('fixed-header');
	}
	if(scrollPosition < 620)
	{
		
		$('#header').removeClass('fixed-header');
	}

	// Main Logo
	if(scrollPosition > 108)
	{
	
		$('#mainLogo').addClass('fadeOut animated');
	}	
	if(scrollPosition < 108)
	{
	
	$('#mainLogo').removeClass('fadeOut animated');
		$('#mainLogo').addClass('fadeIn animated');
	}


	//Settitle
	if(scrollPosition > 273)
	{
	
		$('#SeTitle').addClass('fadeInUp animated');
	}

// services
	if(scrollPosition > 890)
	{
	
		$('#DeSol').addClass('fadeInUp animated');
	}

	if(scrollPosition > 700)
	{
	
		$('#sideTitle').addClass('fadeInRight animated');
	}

// works

	if(scrollPosition > 7400)
	{
	
		$('#WoTitle').addClass('fadeInUp animated');
	}


	if(scrollPosition > 1383)
	{
	
		$('#sideTitle1').addClass('fadeInRight animated');
	}

	if(scrollPosition > 1390)
	{
	
		$('#head1').addClass('fadeInRight animated');
	}



// mobile ux


	// if(scrollPosition > 1688)
	// {
	// 	$('#fstMax').show();
	// 	$('#fstMax').addClass('zoomIn animated');
	// }

	// if(scrollPosition > 1960)
	//  {
	// 	$('#fstMax').removeClass('zoomIn animated');
	// 	$('#fstMax').addClass('zoomOut animated');
	// 	$('#miniContent').show();
	// 	$('#miniContent').addClass('zoomIn animated');
	//  }
	 
	//  if(scrollPosition > 1970)
	//  {
		
	// 	$('#miniContent').addClass('drag-to-side');
	//  }


	 // if(scrollPosition > 1982)
	 // {	
	 // 	$('.miniContent').show();
	 // 	$('.miniContent').addClass('zoomIn animated');
	 // }

	 // if(scrollPosition > 1800)
	 // {
	 // 	$('#fstMax').addClass('zoomIn animated');

	 // }
	 if(scrollPosition > 1800)
	 {
		setTimeout(motion(), 1000);
	 }

	 if(scrollPosition > 2488)
	 {	
	 	$('#lst-mini').show();
	 	$('#lst-mini').addClass('zoomIn animated');
	 }

})





});