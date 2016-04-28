(function(){
	//create array of adjectives and attributes
	//create counter array variable
	//get button id
	//on button click, reveal random(?) word
		//push current index to counter
	//on next button click, get random word, excluding counter
		//reveal random word
		//push current index to counter
})();

$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');

		event.preventDefault();
	});
});