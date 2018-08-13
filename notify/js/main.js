$(document).ready(function() {
    $('.img_hover').on('click', function(event) {
        var parent = $(this).parent();
        $('.review__list_name').hide();
        $('.review__list_text').hide();
        parent.siblings(".review__list_name").toggle();
        parent.siblings(".review__list_text").toggle();
    });
    new WOW().init();
});
