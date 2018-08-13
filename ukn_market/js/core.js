/**
 * Created by Sviatoslav on 26.08.2016.
 */
$(window).load(function() {
    $('.first-slider').flexslider({
        animation: "slide",
        controlNav: false,
        prevText: "",
        nextText: ""
    });

    $('.portfolio-slider').flexslider({
        animation: "slide",
        itemWidth: 255,
        itemMargin: 30,
        move: 1,
        prevText: '',
        nextText: ''
    });

    $('.news-slider').flexslider({
        animation: "slide",
        controlNav: false,
        prevText: '',
        nextText: ''
    });

    $('.our-team-slider').flexslider({
        animation: "slide",
        itemWidth: 290,
        controlNav: false,
        move: 1,
        prevText: '',
        nextText: ''
    });

    $('.licence-slider').flexslider({
        animation: "slide",
        itemWidth: 292.5,
        controlNav: false,
        move: 1,
        prevText: '',
        nextText: ''
    });
});