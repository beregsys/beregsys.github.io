$(document).ready(function (){

  $("input[name='phone']").mask("+7(999) 999-99-99"); 

	//плавный переход по якорям 
 	$("nav li").click(function(){
        var link = $(this).find("a").attr("href");
        $("html, body").animate({scrollTop : $(link).offset().top-57},400);
		
        setTimeout(function(){location.hash = link;},100);		
		return false;
	}); 
	
  function fixEvent(e) {
    e = e || window.event;
    if(!e.target) e.target = e.srcElement;
    return e;
  }

  function closePopup(e, popup) {
      var container = $(popup);
      if (container.has(e.target).length === 0){
           container.fadeOut();
      }
  }

    $(".zakaz").click(function(){
      $(".lightbox1").fadeIn();
    });
     $(".zakaz1").click(function(){
      $(".lightbox5").fadeIn();
    });
    $(".n2").click(function(){
      $(".lightbox2").fadeIn();
    });
    $(".n3").click(function(){
      $(".lightbox3").fadeIn();
    });
    $(".n4").click(function(){
      $(".lightbox4").fadeIn();
    });

    $(".lightbox-close").click(function(){
      $(".lightbox1,.lightbox2, .lightbox3, .lightbox4, .lightbox5").fadeOut();
    });

      $(".lightbox1,.lightbox2, .lightbox3, .lightbox4, .lightbox5").click(function (e) {
        e = fixEvent(e);
        closePopup(e, ".lightbox1,.lightbox2, .lightbox3, .lightbox4, .lightbox5");
    });
	

	//slider
 $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 137,
    itemMargin: 40,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

   $('#carousel1').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 137,
    itemMargin: 40,
    asNavFor: '#slider1'
  });
 
  $('#slider1').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel1"
  });

     $('#carousel2').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 137,
    itemMargin: 40,
    asNavFor: '#slider2'
  });
 
  $('#slider2').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel2"
  });



  $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > "500") {
            $(".fixed").fadeIn("slow")
          }
          else $(".fixed").fadeOut("slow");
        });
  });

      $(".up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow")
        return false;
    })


	//отправка форм
	
	$(".form1").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });

    $(".form2").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });

      $(".form3").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });
        $(".form4").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });


  $(".form5").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });

    $(".form6").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                },
                text: {
                    required: true,
                    minlength: 11
                },
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });

        $(".form7").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });
    $(".design-form").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        form.reset();
                        $(".result").show();
                        window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });
    $(".book-form").validate({
        rules: {
                phone: {
                    required: true,
                    minlength: 11
                }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {
                   if(data == 'Спасибо за заявку!') {
                        $(form).hide();
                        $(".form-title").hide();
                        $(".book-text").hide();
                        $(form).parent().append("<div class='thank-you'>Книга отправлена Вам на почту</div>");
                        setTimeout(function(){
                          $(form).show();
                          $(".form-title").show();
                          $(".book-text").show();
                          $(".thank-you").remove();
                          $(form).trigger("reset");
                        }, 5000);
                        // window.location="thank.html"
                    }
                }
            });
            return false;
        }
    });



}); //конец ready