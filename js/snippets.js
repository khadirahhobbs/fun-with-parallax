// ----------------------------------------------
// A different sticky nav part

/* $(function() {

$('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {

            $('html,body').animate({
            scrollTop: target.offset().top-$('#fixedbar').outerHeight()
            }, 1000);

            return false;
        }
  }
});
}); */

// ----------------------------------------------
// Let's try this smooth scroll again

// Smooth Scroll on clicking nav items
$('nav').click(function () {
  var $href = $(this).attr('href');
  $('nav').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

});