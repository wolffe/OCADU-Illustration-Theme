// Homepage Imageload Biznezz
$(function () {
	$('.home img').hide();//hide all the images on the page	
});

var i = 0;//initialize
var int=0;//Internet Explorer Fix
$(window).bind("load", function() {//The load event will only fire if the entire page or document is fully loaded
	var int = setInterval("doThis(i)",100);//500 is the fade in speed in milliseconds
	$('.home .post').show();//hide all the images on the page	
	
});

function doThis() {
	var images = $('.home img').length;//count the number of images on the page
	if (i >= images) {// Loop the images
		clearInterval(int);//When it reaches the last image the loop ends
	}
	$('img:hidden').eq(0).fadeIn(100);//fades in the hidden images one by one
	i++;//add 1 to the count
}

// Masonry for some grid action
$('.grid-large').masonry({ columnWidth: 310, animate: true, itemSelector: '.post' });

$('.grid-large').masonry({ columnWidth: 310, animate: true, itemSelector: '.gallery-item' });

$('.grid-small').masonry({ columnWidth: 155, animate: true, itemSelector: '.post' });

$('#illustrator-archive').masonry({ columnWidth: 155, animate: true, itemSelector: '.post' });

// A quick go at keyboar nav. I'm sure there is a better way at this
$(document.documentElement).keyup(function (event) {
  // handle cursor keys, illustrator navigation
  if (event.keyCode == 37 && ($(".prev-link a").length)) {
		window.location = $('.prev-link a').attr('href');
  } else if (event.keyCode == 39 && ($(".next-link a").length)) {
		window.location = $('.next-link a').attr('href');  
  }

  // Work navigation
  if (event.keyCode == 37 && ($("#image-navigation .nav-previous a").length)) {
		window.location = $('#image-navigation .nav-previous a').attr('href');
  } else if (event.keyCode == 39 && ($("#image-navigation .nav-next a").length)) {
		window.location = $('#image-navigation .nav-next a').attr('href');  
  }

});

// Jump menu business
function MM_jumpMenu(targ,selObj,restore){ //v3.0
	  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
	  if (restore) selObj.selectedIndex=0;
	}

// Jump menu nice-ness 
$("select").uniform();