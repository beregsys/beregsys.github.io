$(document).ready(function() {
    $('#my-slider').sliderPro({
        width: '1033px',
        height: '459px',
        slideDistance: 2,
        slideAnimationDuration: 1000,
        buttons: false,
        visibleSize: '100%',
        forceSize: 'fullWidth',
        autoplay: true,
        arrows: true
    });

    if ($(window).width() <= 760) {
        $('.main-nav').css('display', "none");
        console.log($(window).width());
    } else $('.main-nav').css('display', "block");
    $(window).resize(function() {
        if ($(window).width() <= 760) {
            $('.main-nav').css('display', "none");
            console.log($(window).width());
        } else $('.main-nav').css('display', "block");
        console.log($(window).width());
    });
    $("#toggle").on("click", function() {
        if ($('.main-nav').css('display') == 'none') {
            $(".main-nav").slideToggle("slow");
            $("nav").css("height", "auto");
        } else {
            $(".main-nav").slideToggle("slow");
            $("nav").css("min-height", "48px");
        }

    });
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        mainClass: 'mfp-fade',
        removalDelay: 300,
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

});
