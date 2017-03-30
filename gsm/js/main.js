$(document).ready(function(){
	$(".tel-js").on("click", function(event){
		event.preventDefault();
		var id = $(this).prev().attr("id"),
			tel = $(this).prev(),
			fullTel = (id == "free-tel") ? "888" : "999";
		tel.text(fullTel);
	});
});