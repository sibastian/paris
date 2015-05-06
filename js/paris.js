var numPages;
var scrollNumber = 1;

var wh = $(window).height();
var ww = $(window).width();


// onready
$(function(){
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





function nextPage(){
	console.log(scrollNumber)


	if(scrollNumber < numPages)
		scrollNumber++ 
	else
		scrollNumber = numPages;
	
	
	showPage(scrollNumber);


}

function prevPage(){
	console.log(scrollNumber)

	if(scrollNumber > 1)
		scrollNumber--
	else
		scrollNumber = 1;
	
	
	showPage(scrollNumber);
}





function initLayout(){

$('.pg').width(ww);
$('.pg').height(wh);
$('.page-wrap').width(numPages * ww)
// for each

}

function showPage(pageNo){

// var num = (parseInt(pageNo) - 1 ) ;
console.log("====");
console.log(pageNo);
console.log(wh);
console.log ((pageNo - 1) * wh);

$('.pg'+pageNo).animate({



// $('body').scrollTop(no);

  }, 500, function() {
    
    console.log('animation Complete!')

  });


}