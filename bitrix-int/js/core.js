$('#to-get').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#get').offset().top -50 }, 1000);
    e.preventDefault();
});
$('#to-int').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#int').offset().top -10 }, 1000);
    e.preventDefault();
});
$('#to-gifts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#gift').offset().top -10 }, 1000);
    e.preventDefault();
});