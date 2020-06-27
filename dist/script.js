$('#header').click(function() {
	$('#menu').toggle();
	$('#content').toggleClass("blur");
});

$('#menu').click(function() {
	$('#menu').toggle();
	$('#content').removeClass("blur");
});

$("#header").mouseenter(function(){
	$('#content').addClass("bluur");
});

$("#header").mouseleave(function(){
	$('#content').removeClass("bluur");
});

$('#footer').click(function() {
	$('#menu').toggle();
	$('#content').toggleClass("blur");
});