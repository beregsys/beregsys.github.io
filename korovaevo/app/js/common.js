$(function() {
	$(document).ready(function(){
		
		if( $(window).width() > 900 ) {
			var owl = $('.main-slider');
			owl.owlCarousel({
				items         : 1,
				dotsContainer : '.slider-dots',
				nav: true,
				navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'/></svg>"],
				autoplay: true,
				autoplayHoverPause: true
			});
		}
		// check when last slider
		$('.main-slider').on('change.owl.carousel', function(e) {
			if (e.namespace && e.property.name === 'position' 
			&& e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1) {
				setTimeout(function(){
					$('.slider-dots__item')[0].click();
				}, 5000);
			}
		});

		function moved() {
			var owl = $(".main-slider").data('owlCarousel');
			if (owl.currentItem + 1 === owl.itemsAmount) {
					alert('THE END');
			}
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
		});

		//scroll to blocks 
		$("nav a").on("click", function() {
			if ($(this).text() != 'Вакансии') {
				var scrollTo = $(this).attr("href");
				$('html, body').animate({
						scrollTop: $(scrollTo).offset().top
				}, 1000);
				if( $(window).width() < 900 ) {
					$('.header__hamburger').click();
				}
			}
		});

		// mobile menu toggle class
		$('.header__hamburger').on('click', function(){
			$('.header').toggleClass('open');
		});

		

	});

});

var mapKharkov, mapPoltava, mapKremen, mapKropyv, mapDoneck;
function initMap() {
	mapKharkov = new google.maps.Map(document.getElementsByClassName('map-canvas-kharkov')[0], {
		center: {lat: 49.990101, lng: 36.328416},
		zoom: 10,
		disableDefaultUI: true
	});

	mapPoltava = new google.maps.Map(document.getElementsByClassName('map-canvas-poltava')[0], {
		center: {lat: 49.555881, lng: 34.503576},
		zoom: 10,
		disableDefaultUI: true
	});

	mapKremen = new google.maps.Map(document.getElementsByClassName('map-canvas-kremen')[0], {
		center: {lat: 49.061218, lng: 33.425571},
		zoom: 10,
		disableDefaultUI: true
	});

	mapKropyv = new google.maps.Map(document.getElementsByClassName('map-canvas-kropyv')[0], {
		center: {lat: 48.521723, lng: 32.213045},
		zoom: 10,
		disableDefaultUI: true
	});

	mapDoneck = new google.maps.Map(document.getElementsByClassName('map-canvas-doneck')[0], {
		center: {lat: 48.590028, lng: 38.004926},
		zoom: 10,
		disableDefaultUI: true
	});

	var markerKharkov = new google.maps.Marker({
		position: {lat: 49.990101, lng: 36.328416},
		map: mapKharkov
	});

	var markerPoltava = new google.maps.Marker({
		position: {lat: 49.555881, lng: 34.503576},
		map: mapPoltava
	});

	var markerKremen = new google.maps.Marker({
		position: {lat: 49.061218, lng: 33.425571},
		map: mapKremen
	});

	var markerKropyv = new google.maps.Marker({
		position: {lat: 48.521723, lng: 32.213045},
		map: mapKropyv
	});

	var markerDoneck = new google.maps.Marker({
		position: {lat: 48.590028, lng: 38.004926},
		map: mapDoneck
	});
}