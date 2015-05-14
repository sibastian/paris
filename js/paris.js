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

}

function showPage(no, att) {

// onOff = -1;
console.log(att)

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
			
$('.pg'+currentPage).hide();

			currentPage = no;




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

   

}


// post animations animations play
function postAnimation(page)
{
//	alert(page);
}