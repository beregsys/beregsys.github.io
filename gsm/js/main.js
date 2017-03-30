$(document).ready(function(){
	$(".tel-js").on("click", function(event){
		event.preventDefault();
		console.log($(this).prev().attr("id");
	});
});