console.log("Please have sense and you will be safe"),console.log("I am trying to have sense but your not helpig"),$(function(){$(".site__Form").on("submit",function(e){e.preventDefault();var t=$(".site__Form").serialize(),o=function(){var e;return e=!0,$(".formrequired").each(function(){0===$(this).val().length?($(this).addClass("error"),$(".form__required").show(),e=!1):($(".form__required").hide(),$(this).removeClass("error"))}),!(!e||!function(){var e;return!!Modernizr.input.placeholder||($('input[type="text"]').each(function(){var e;return e=$(this).attr("placeholder"),$(this).val(e),$(this).focus(function(){if(e===$(this).val())return $(this).val("")}),$(this).blur(function(){if(""===$(this).val())return $(this).val(e)})}),e=0,$(this).on("change",function(){if(!(3<=++e))return!1}))}())&&(loadingIcon.show(),!0)};return $.ajax({url:"../sendform.php",data:t,type:"POST",beforeSend:function(){return o()},complete:function(e){400===e.status||402===e.status||404===e.status||500===e.status?$(".form__error").show():$("form__success").show()}}),!1}),$(".servicetype--link").click(function(e){e.preventDefault();var t=$(this.hash);console.log(t.offset().top+t.height()),t.show(function(){console.log("Please work"),$(".moreService").hide(),$("html, body").animate({scrollTop:t.offset().top},2e3)})})});