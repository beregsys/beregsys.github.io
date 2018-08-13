$(document).ready(function () {
    $('.new-franch').jRange({
        from: 0,
        to: 5,
        step: 1,
        scale: [0,1,2,3,4,5],
        format: '%s',
        width: 490,
        snap: true,
        showLabels: false
    });
    $('.franch-cost-range').jRange({
        from: 50000,
        to: 500000,
        step: 1,
        format: function (value) {
            value = Math.ceil(value/1000);
            $('.pointer-value.cost').html(value + 'k');
        },
        width: 490,
        snap: true,
        showLabels: false,
        scale: ['50k','500k']
    });
    $('.month-paiment-range').jRange({
        from: 10000,
        to: 100000,
        step: 1,
        format: function (value) {
            value = Math.ceil(value/1000);
            $('.pointer-value.payment').html(value + 'k');
        },
        width: 490,
        snap: true,
        showLabels: false,
        scale: ['10k','100k']
    });
    function displayVals() {
        var franchazie, franchCost, monthlyFees, result;
        franchazie = $('.new-franch').val();
        franchCost = $('.franch-cost-range').val();
        monthlyFees = $('.month-paiment-range').val()
        result = (franchazie * franchCost) + parseInt(monthlyFees);
        $('#result').html(result);
    }
    $(".new-franch").change(displayVals);
    $(".franch-cost-range").change(displayVals);
    $(".month-paiment-range").change(displayVals);
    displayVals();


});

function showText(element) {
    element.style.height = 'auto';
    element.style.zIndex = '2';
    var tagP = element.getElementsByTagName('p');
    var tagA = element.getElementsByTagName('a');
    tagP[0].style.height = 'auto';
    tagA[0].style.display = 'none'
}
$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 93) {
            $('.main-menu').parent('.block').addClass('stickytop');
            $('.screen_1').addClass("somemargin");
        }
        else{
            $('.main-menu').parent('.block').removeClass('stickytop');
            $('.screen_1').removeClass("somemargin");
        }
    });
});