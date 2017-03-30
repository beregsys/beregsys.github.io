$(document).ready(function(){
	$("#headerTel").on("click", function(event){
		event.PreventDefault();
		$(this).prev()
	});
});