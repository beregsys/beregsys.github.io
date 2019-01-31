$(function() {

	$(document).ready(function(){
		$(".sale-slider").owlCarousel({
			items   : 1,
			nav     : true,
			navText : ""
		});

		$(".tab_item").not(":first").hide();
		$(".tabs-wrapper .tab").click(function() {
			$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});
	// var windowW = $(window).width();
	// var wall = new freewall(".image-gallery");
	// wall.reset({
	// 	selector: ".gallery-item",
	// 	animate: true,
	// 	cellW: 150,
	// 	cellH: "auto",
	// 	gutterX : 0,
	// 	gutterY : 0,
	// 	onResize: function() {
			
	// 		wall.fitWidth();
	// 	}
	// });
	//wall.fitWidth();

	$(".image-gallery img").parent().hover(function() {
		$(".image-gallery .gallery-item").css("opacity", ".6");
		$(this).css("opacity", "1");
	}, function() {
		$(".image-gallery .gallery-item").css("opacity", ".8");
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: true,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	//mask phone in callback form
	$("#phone").mask("+7 (999) 9999999",{placeholder:" "});

	//scroll to blocks 
	$("nav a").on("click", function() {
		var scrollTo = $(this).attr("href");
		var offset = (scrollTo === "#js-contact") ? $(document).height() : 0;
		$('html, body').animate({
				scrollTop: $(scrollTo).offset().top + offset
		}, 1000);
	});

	
    
	$(window).on("scroll", onScroll);

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('nav a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				($(window).scrollTop() > 3000 && $(window).width() > 940) ? $("footer").css("position", "fixed") : $("footer").css("position", "static");
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos || $(document).height() - scrollPos < 1100) {
						$('nav a').removeClass("active");
						currLink.addClass("active");
				}
				else{
						currLink.removeClass("active");
				}
		});
	}

	//sticky menu
	$(window).scroll(function() {
		var positionTop = $(window).scrollTop(),
				header = $("header"),
				width = $(window).width();
		(positionTop > 500 && width > 940) ? header.addClass("sticky") : header.removeClass("sticky");
	});
	
	//hamburger menu open
	$(".burger-ico").on("click", function() {
		$(".header").toggleClass("open");
	});

	//tabs controll
	$(".tab-prev").on("click", function(e) {
		e.preventDefault();
		$(".tabs .active").prev().click();
	});

	$(".tab-next").on("click", function(e) {
		e.preventDefault();
		$(".tabs .active").next().click();
	})
});
