$(document).ready(function(){$("#menu").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);});$("#choose").on("click",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);});$('.popup-with-form').magnificPopup({type:'inline',preloader:false,focus:'#name',mainClass:'mfp-fade',removalDelay:300,callbacks:{beforeOpen:function(){if($(window).width()<700){this.st.focus=false;}else{this.st.focus='#name';}}}});$('.popup-with-form').on('click',function(event){var item=$(this).closest('.product__item'),name=item.find('.product__name').text().trim(),size=item.find('.product__size').text().trim(),price=item.find('.product__price').text().trim(),arr=[name,size,price],data=arr.join(';');$('.form__title h3').text(name);$("input[name=product_info]").val(data);console.log(data);});$('#popup-form').submit(function(event){event.preventDefault();var form=$(this),data=form.serialize(),posting=$.post("php/mail.php",{data:data});posting.done(function(data){console.log(data);form.hide();form.parent().append("<div class='thank-you'>Спасибо, мы перезвоним вам<br>в течении 20 минут!</div>");setTimeout(function(){$('.mfp-close').click();form.show();$(".thank-you").hide();form.trigger("reset");},3000);});posting.fail(function(data){form.hide();form.parent().append("<div class='thank-you'>Спасибо, мы перезвоним вам<br>в течении 20 минут!</div>");setTimeout(function(){$('.mfp-close').click();form.show();$(".thank-you").hide();form.trigger("reset");},3000);});});$('.callback__form').submit(function(event){event.preventDefault();var form=$(this),data=form.serialize(),posting=$.post("php/mail.php",{data:data});posting.done(function(data){console.log(data);form.hide();form.parent().append("<div class='thank-you'>Спасибо, мы перезвоним вам<br>в течении 20 минут!</div>");setTimeout(function(){$('.mfp-close').click();form.show();$(".thank-you").hide();form.trigger("reset");},3000);});posting.fail(function(data){form.hide();form.parent().append("<div class='thank-you'>Спасибо, мы перезвоним вам<br>в течении 20 минут!</div>");setTimeout(function(){$('.mfp-close').click();form.show();$(".thank-you").hide();form.trigger("reset");},3000);});});var styles={};$(".hamburger").click(function(){$("nav .main__nav").slideToggle("slow",function(){if($('nav .main__nav').css('display')=='none'){styles={transform:'rotate(180deg)',background:'rgba(0,0,0,.5)'};$('.hamburger').css(styles);}else{styles={transform:'rotate(90deg)',background:'none'};$('.hamburger').css(styles);}});});$("#popup-form input[type=tel]").mask("+7 (999) 999-99-99");$(".callback__form input[type=tel]").mask("+7 (999) 999-99-99");});