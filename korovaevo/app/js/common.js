$(function() {
	$(document).ready(function(){
		// $('.main-slider').owlCarousel({
		// 	items   : 1,
		// });

		var owl = $('.main-slider');
		owl.owlCarousel({
			items         : 1,
			dotsContainer : '.slider-dots',
			//dots          : false
		});

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
		


	});
});
