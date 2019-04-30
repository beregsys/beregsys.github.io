$(function() {
	$(document).ready(function(){
		
		if( $(window).width() > 900 ) {
			var owl = $('.main-slider');
			owl.owlCarousel({
				items         : 1,
				dotsContainer : '.slider-dots'
			});
		}
		$('.slider-dots__item').click(function(){
			owl.trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		// Go to the next item
		$('.main-slider__nav .btn-next').click(function(e) {
			e.preventDefault();
			owl.trigger('next.owl.carousel');
		})
	// Go to the previous item
		$('.main-slider__nav .btn-prev').click(function(e) {
			e.preventDefault();
				owl.trigger('prev.owl.carousel', [300]);
		});

		var gallery = $('.gallery-slider');

		gallery.owlCarousel({
			items:1,
			lazyLoad:true,
			loop:true,
			nav:false,
			dots:false
		});

		$('.gallery-slider-navigation .btn-next').click(function(e) {
			e.preventDefault();
			gallery.trigger('next.owl.carousel');
		})
	// Go to the previous item
		$('.gallery-slider-navigation .btn-prev').click(function(e) {
			e.preventDefault();
				gallery.trigger('prev.owl.carousel', [300]);
		});

		const defaultHeight = 60,
					navBottomPos = 220;

		$('.jsShowMore').on('click', function(e){
			e.preventDefault();
			var phoneList = $(this).prev();
			console.log(phoneList);
			phoneList.toggleClass('main-slider__show-phones');
			phoneList.trigger('heightChange');
		});

		$('.main-slider__phones').bind('heightChange', function(){
			var listHeight = $('.main-slider__phones').height(),
					neededHeight = listHeight - defaultHeight,
					list = $('.main-slider__nav');
			(neededHeight) ? list.css('bottom', neededHeight + 'px' ) : list.css('bottom', '');
			// console.log(navPos.top = 595);
			
		});

		//scroll to blocks 
		$("nav a").on("click", function() {
			var scrollTo = $(this).attr("href"),
					offset = 0;
			//var offset = (scrollTo === "#js-contact") ? $(document).height() : 0;
			$('html, body').animate({
					scrollTop: $(scrollTo).offset().top + offset
			}, 1000);
			$('.header__hamburger').click();
		});

		// mobile menu toggle class
		$('.header__hamburger').on('click', function(){
			console.log($(this));
			$('.header').toggleClass('open');
		});

		

	});

});

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {lat: 49.990101, lng: 36.328416},
		zoom: 15,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: {lat: 49.990101, lng: 36.328416},
		map: map,
		title: 'Hello World!'
	});
}