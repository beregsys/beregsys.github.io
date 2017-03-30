$(document).ready(function(){
	$(".tel-js").on("click", function(event){
		event.preventDefault();
		var id = $(this).prev().attr("id"),
			tel = $(this).prev(),
			fullTel = (id == "free-tel") ? "8 800 555-11-11" : "8 495 215-33-33";
		tel.text(fullTel);
		$(this).hide();
	});
});