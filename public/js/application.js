$(document).ready(function() {
	$('.open-left').on('click', function(e) {
		e.preventDefault()
		if ($('.drawer-left').css('width') == '0px') {
			openLeftDrawer();
		}else{ ($('.drawer-left').css('width') !== '0px')
			closeLeftDrawer();
		}
	})	
	$('.open-right').on('click', function(e) {
		e.preventDefault()
		if ($('.drawer-right').css('width') == '0px') {
			openRightDrawer();
		}else{ ($('.drawer-right').css('width') !== '0px')
			closeRightDrawer();
		}
	})
// Right Drawer
var openRightDrawer = function(){
	$('.drawer-right').show();
	$('.drawer-right').animate({width:250, avoidTransforms:true }, 1500);
};

var closeRightDrawer = function() {
	$('.drawer-right').animate({width:0, avoidTransforms:true }, 600);
};
// Left Drawer
var openLeftDrawer = function(){
	$('.drawer-left').show();
	$('.drawer-left').animate({width:250, avoidTransforms:true }, 1500);
};

var closeLeftDrawer = function() {
	$('.drawer-left').animate({width:0, avoidTransforms:true }, 600);
};

});


// Jquery
// on click button set display to none
// else
// on click set to display: block

// (document, window.navigator, "standalone");
	// var ProfileLoader = function(){
	// if ('profile' display = none
		// $ajax
		// 	changing the display to block
		// 	$ jquery call the scroller css to the change margin left: 0% .css
 	// else (profile displa= block)
 	// 	$ajax
 	// 	profile display to none
	// $.ajax({
	// 	url
	// })


// 	}

// if($('#yourID').css('display') == 'none')
// {

// }