  




// song is autoplay but user can pause or stop 
   var sonG;

function plaY(id){
  //make lang strict 
  "use strict"; 
  //set song to variable 
    sonG = document.getElementById(id);
    // play song 
    sonG.play();
}

function pauSe(){
  sonG.pause();
}

function stOp(){
  sonG.currentTime = 0;
  sonG.pause();
}

 function openMenu() {
    document.getElementById("mobiMenu").style.width = "180px";
}

 function closeMenu() {
    document.getElementById("mobiMenu").style.width = "0";
}


function successful() { 
  var x = document.getElementById("subBut").value;
 document.getElementById("subBut").innerHTML = "Successful !!!";
 $('#bForm').children('input','textarea').val('');
  //change element back 
  document.getElementById("subBut").innerHTML = x;
}

// for the button index page  
$("#mobi-menu-caller").click(function(){  console.log("hello"); 
    $("#mobiMenu").hasClass("width")? $("#mobiMenu").removeClass("width"): $("#mobiMenu").addClass("width"); 
    console.log("Hope you like the page");
   });

//when a menu is clicked on the page it closes the sidebar 
$(".moMenu").click(function(){  console.log("hello"); 
    $("#mobiMenu").hasClass("width")? $("#mobiMenu").removeClass("width"): $("#mobiMenu").addClass("width"); 
    console.log("Menu Closed");
   });

// for the button in materials page 
  $("#sm-caller").click(function(){  console.log("hello"); 
    $("#sidemenu").hasClass("sm-left")? $("#sidemenu").removeClass("sm-left"): $("#sidemenu").addClass("sm-left"); 
    console.log("Hope you like the Page");
   });


   
$(document).ready(function() {

  //scroll effect for navigatons
  $(function() {
  //@ find a href that starts with a # but has other chracters after it
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          // @2000 is the time the scroll takes to get to the div 
          scrollTop: target.offset().top
        }, 2500);
        return false;
      }
    }
  });
}); 

//carousel 
$(function() { $("#blueCarousel").carousel(); });

});


/* menu */
// jQuery(function(e){e("body").html(),!0,e("#main-menu-caller").on("click",function(){$menuCaller=e(this),$mainMenu=e("#main-menu"),$mainMenu.hasClass("activated")?$mainMenu.find("a").fadeOut("fast",function(){$mainMenu.removeClass("activated"),$menuCaller.removeClass("lines-close")}):e("#ui-layer").each(function(){$mainMenu.addClass("activated"),$menuCaller.addClass("lines-close"),setTimeout(function(){$mainMenu.find("a").each(function(n,i){e(i).css({display:"inline-block"}).shuffleLetters();var a;e(i).mouseenter(function(){a=setTimeout(function(){e(i).css({height:e(i).height()+"px",display:"inline-block"}),setTimeout(function(){e(i).css({height:"",display:"inline-block"})},1e3)},50)}),e(i).mouseleave(function(){clearTimeout(a)})})},350)})}),e(".menu").on("click",function(n){n.stopPropagation(),n.preventDefault(),e("#main-menu").removeClass("activated"),e("#main-menu-caller").removeClass("lines-close")})});