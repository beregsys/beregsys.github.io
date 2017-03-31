$(document).ready(function(){
	$(".tel-js").on("click", function(event){
		event.preventDefault();
		var id = $(this).prev().attr("id"),
			tel = $(this).prev(),
			fullTel = (id == "free-tel") ? "8 800 555-11-11" : "8 495 215-33-33";
		tel.text(fullTel);
		$(this).hide();
	});
	if ($(window).width() <= 760) {
        $('.menu').css('display', "none");
        console.log($(window).width());
    } else $('.menu').css('display', "block");
    $(window).resize(function() {
        if ($(window).width() <= 760) {
            $('.menu').css('display', "none");
            console.log($(window).width());
        } else $('.menu').css('display', "block");
        console.log($(window).width());
    });
    $("#toggle").on("click", function() {
        if ($('.menu').css('display') == 'none') {
            $(".menu").slideToggle("slow");
            $("nav").css("height", "auto");
        } else {
            $(".menu").slideToggle("slow");
            $("nav").css("min-height", "48px");
        }

    });
});