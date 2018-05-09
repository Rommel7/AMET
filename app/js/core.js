$(document).ready(function() {
  $(window).on('load', function() {
    setTimeout(function() {
      $('.loading-overlay').hide();
    }, 1500);
  });

  $('.owl-two').owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: false
  });
  $('.owl-three').owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: true
  });
});
