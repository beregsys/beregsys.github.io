$(document).ready(function(){

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

    //Открывает поп-ап обратный звонок
    $('.open-callback-popup').click(function(){
        $('.dialogs .popup').removeClass('active').hide();
        $('.callback__form').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.callback__form').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    //Открывает поп-ап с формой нужной категории
    $('.open-consult-popup').click(function(){
        var img = $(this).parent().find('.cases__item__cover').clone();
        var name = $(this).parent().find('.case__title').text();
        var number = ($(this).parent().index()) + 1;
        $('.dialogs .popup').removeClass('active').hide();
        $('.popup.consult__case .consult__case__title').html(name);
        $('.popup.consult__case .case__container__img').html(img);
        $('.popup.consult__case .case__block').hide();
        $('.popup.consult__case .case__block.i' + number).show();
        $('.popup.consult__case .typeofform').val('Консультация - ' + name);
        $('.popup.consult__case').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.popup.consult__case').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
    //Открывает поп-ап c политикой конфидециальности
    $('.open-polytic').click(function(){
        $('.dialogs .popup').removeClass('active').hide();
        $('.polytic-popup').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.polytic-popup').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $(".dialogs .close, .dialogs .close-bg").click(function() {
        $('.dialogs .popup').removeClass('active');
        $(".dialogs").animate({"opacity":0}, 200, function() {
            $(".dialogs").hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y':'auto'});
    });

	
});	