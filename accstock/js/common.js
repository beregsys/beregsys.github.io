$(function() {
    $(document).ready(function() {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#email',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#email';
                    }
                }
            }
        });
        $('.method-item').on('click', function (e) {
            $('.method-item').removeClass('active');
            $(this).addClass('active')
        });
        $('#payment-js').on('submit',function (e) {
            e.preventDefault();
            //console.log('click submit');
            $('.form-content').hide();
            $('.loader-wrapper').show();
            setTimeout( function(){
                $('#form-js-hide').hide();
                $('.form-success').show();
            } , 4000);
            $('.back-btn').on('click', function () {
                $('.mfp-close').click();
                $('.form-success, .loader-wrapper').hide();
                $('#form-js-hide, .form-content').show();

            });
        });
        $(".menu a, .header-btn, .footer-btn").on("click", function() {
            var scrollTo = $(this).attr("href");
            var offset = (scrollTo === "#tbl") ? -100 : 0;
            $('html, body').animate({
                scrollTop: $(scrollTo).offset().top + offset
            }, 1000);
        });
        new WOW().init();
    });
});
