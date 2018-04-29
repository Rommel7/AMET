$(document).ready(function() {
  $(window).on('load', function() {
    setTimeout(function() {
      $('.loading-overlay').hide();
    }, 1500);
  });

  $('.owl-two').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: true
  });
  $('.owl-three').owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: true
  });
});
