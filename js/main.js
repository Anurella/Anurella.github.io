
/*
 good if animation is not needed 
function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    console.log(document.body.scrollTop);
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function test(elID)
{
    scrollTo(document.getElementById(elID).offsetTop, 500);
}*/

  // Add smooth scrolling to all links
  $("a.pagNav").on('click', function(event) {
  	event.preventDefault();

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          // @2000 is the time the scroll takes to get to the div 
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }// End if

  });

