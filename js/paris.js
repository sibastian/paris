var numPages;
var currentPage = 1;
var nextPage;

var prevPage;
var wh = $(window).height();
var ww = $(window).width();

var onOff=-1;

// onready
$(function() {

    $('body').scrollTop(0);

    numPages = $('.pg').length;


    initLayout();


    $('.pg1').fadeIn();



})


// onscroll
$('body').on({
    'mousewheel': function(e) {

        // e.preventDefault();
        //       e.stopPropagation();
        //Scroll timeOut Check
        // clearTimeout($.data(this, 'scrollTimer'));
        //     $.data(this, 'scrollTimer', setTimeout(function() {


        // //Stoping window srolle event

        //    if (e.target.id == 'el') return;



        //     	if(e.originalEvent.wheelDelta / 120 > 0) {
        //         // console.log('up');
        //         prevPage();
        //     } else {
        //         // console.log('down');
        //         nextPage();
        //     }



        // console.log("Scroll Paused");
        //console.log("Haven't scrolled in 250ms!");
        // }, 100));







    }

});




$('.pg-next').click(function(){showPage(currentPage, 'next'); })
$('.pg-prev').click(function(){showPage(currentPage, 'prev'); })

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
   showPage(currentPage, 'prev');
  }
  else if(e.keyCode == 39) { // right
    showPage(currentPage, 'next');
  }
});




function initLayout() {

    $('.pg').width(ww);
    $('.pg').height(wh);
    $('.page-wrap').width(numPages * ww)
        // for each


        $("body").css("background","#333")
}

function showPage(no, att) {

// onOff = -1;
console.log(att);


if((currentPage) != (no+1))
    switch (att) {
        case 'prev': 
      	no--;
      	var className = '.pg'+parseInt(no);
	console.log(currentPage)


			$('.pg'+currentPage).fadeIn;
			$('.pg'+currentPage).css('z-index','1000');


	nextPage = $(className);

console.log(nextPage.attr('class'));
	nextPage.css({
		"position": "absolute",
		"display": "block",
		"z-index":'1005',
		"left": "-" + ww + 'px',
		"top":0

	})

	nextPage.animate({

		"position": "absolute",
		"display": "block",
		"left": 0



	},200,"linear",function(){
			
// $('.pg'+currentPage).hide(); 

			
			$('.pg'+currentPage).hide();
			currentPage = no;

			postAnimation(currentPage);




	});

break;




        case 'next':
		 no++
		 var className = '.pg'+parseInt(no);
	console.log(currentPage)
	nextPage = $(className);
			
			
			$('.pg'+currentPage).show();
			$('.pg'+currentPage).css('z-index','1000');

console.log(nextPage.attr('class'));

	nextPage.css({
		"position": "absolute",
		"display": "block",
		"left": ww + 'px',
		"z-index":'1005',
		"top":0

	})

	nextPage.animate({

		"position": "absolute",
		"display": "block",
		"left": 0



	},200,"linear",function(){
		
			$('.pg'+currentPage).hide();
			currentPage = no;

			postAnimation(currentPage);



	});

break;
        default:
            console.error("Att error : Pg" + pageNo + " : Attr : " + att);

    }

    else
    	console.log('same page idiot!')

   

}


// post animations animations play
function postAnimation(page)
{
 // alert(page);

 switch(page)
 {
 	//services
 	case 2 :
 	// alert("Yo");
 	$('.s-list.s').hide();
 	$('.s-title.s').fadeIn();

 	$('.s-title.s').animate({
 		"left":"50%",
 		"opacity":"1"
 	},250,function(){
 		// alert("Ho");
 		inv = setTimeout(post_service, 1000)

 	});

 	break;
// eo 2



 	//products
 	case 3 :
 	// alert("Yo");
 	$('.s-list.p').hide();
 	$('.s-title.p').fadeIn();

 	$('.s-title.p').animate({
 		"left":"50%",
 		"opacity":"1"
 	},250,function(){
 		// alert("Ho");
 		inv = setTimeout(post_product, 1000)

 	});

 	break;
// eo 2

	
 	//works
 	case 4 :
 	// alert("Yo");
 	$('.s-list.p').hide();
 	$('.s-title.p').fadeIn();

 	$('.s-title.p').animate({
 		"left":"50%",
 		"opacity":"1"
 	},250,function(){
 		// alert("Ho");
 		inv = setTimeout(post_works, 1000)

 	});

 	break;
// eo 2

	
 	//works
 	case 5 :
 	// alert("Yo");
 	$('.s-list.p').hide();
 	$('.s-title.p').fadeIn();

 	$('.s-title.p').animate({
 		"left":"50%",
 		"opacity":"1"
 	},250,function(){
 		// alert("Ho");
 		inv = setTimeout(post_contact, 1000)

 	});

 	break;
// eo 2






default:
console.error("Post Anim : " + page);


 }


}
// postAnimation

function post_service(){

// alert('service')

$('.s-title.s').fadeOut();
$('.pg-services .title.small.s').fadeIn();
$('.s-list.s-design.s').delay(500).fadeIn();
$('.s-list.s-app.s').delay(1000).fadeIn();


clearTimeout();
}


function post_product(){

// alert('product')

$('.s-title.p').fadeOut();
$('.pg-products .title.small.p').fadeIn();
$('.s-list.s-design.p').delay(500).fadeIn();
$('.s-list.s-app.p').delay(1000).fadeIn();


clearTimeout();
}




function post_works(){

// alert('product')

$('.s-title.p').fadeOut();
$('.pg-works .title.small.w').fadeIn();
$('.s-list.s-app.p.s-app0').delay(300).fadeIn();
$('.s-list.s-app.p.s-app25').delay(500).fadeIn();
$('.s-list.s-app.p.s-app75').delay(700).fadeIn();
$('.s-list.s-app.p.s-app100').delay(900).fadeIn();


clearTimeout();

    $('.w-list').click(function(){
    		wClicked($($(this)[0]).attr('data-wFull'));
    		// wClicked()
    });
}

function post_contact(){

// alert('product')

$('.s-title.p').fadeOut();
$('.pg-contact .title.small.c').fadeIn();
$('.contact-container').delay(300).fadeIn();

clearTimeout();

    $('.w-list').click(function(){
    		wClicked($($(this)[0]).attr('data-wFull'));
    		// wClicked()
    });
}






//wclicked adfmn.dfklgherkgheqlk; j3lvt o3	ip[9o0]
function wClicked(dat){
	//var yo;
	//var a;
//for a in $('.w-list'){
	//console.log(a[0]);

//}

	// $('.w-list').hide();
	
	// yo = $('.w-list.s-app'+dat);
	// yo.show();
	// yo.removeClass('s-app'+dat);
	// yo.addClass('s-app'+200);

	// $('.w-list.s-app'+dat).animate({
	// 	'display':'block',
	// 	'top':'0',
	// 	'left': '0',
	// 	'width':'100%'
	// },200, function(){
	// 	console.log('done');
	// });

}