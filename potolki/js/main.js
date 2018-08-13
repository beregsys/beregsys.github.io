$(document).ready(function() {
	//popup
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-fade',
        removalDelay: 500,
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
	//masked input
	$("input[type='tel']").mask("+7 (999) 999-99-99");
	$.mask.definitions['~'] = '([0-9])?';
	$("input[type='text']").mask("~~~",{placeholder:" "});
	//form post data
	$('#free').submit(function(event) {
        event.preventDefault();
        var form = $(this),
            data = form.serialize();
            console.log(data);
            var posting = $.post("php/mail.php", {
                data: data
            });
        posting.done(function(data) {
            window.location.href = "thank-you.html";
        });
        posting.fail(function(data) {
            window.location.href = "thank-you.html";
        });
    });
    $('#price').submit(function(event) {
        event.preventDefault();
        var form = $(this),
            data = form.serialize();
            console.log(data);
            var posting = $.post("php/mail.php", {
                data: data
            });
        posting.done(function(data) {            
            window.location.href = "thank-you.html";
        });
        posting.fail(function(data) {
            window.location.href = "thank-you.html";
        });
    });
});