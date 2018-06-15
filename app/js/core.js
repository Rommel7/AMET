$(window).on('load', function () {
  setTimeout(function () {
    $('.loading-overlay').hide();
  }, 1000);
});


$(document).ready(function () {
  $('.owl-two').owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true
  });
  $('.owl-three').owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: true
  });

  setTimeout(function () {
    $('header, footer').hide();
  }, 60000*60);

  var modal = document.getElementById("myModal");
  var span = document.getElementById("close");

  var images = document.getElementsByClassName("myImg");
  var modalImg = document.getElementById("img01");

  var i;
  for (i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    };
  }
  span.onclick = function () {
    modal.style.display = "none";
  };

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      modal.style.display = "none";
    }
  });

  $(document).click(function (event) {
    if ($(event.target).closest("#myModal").length) {
      $("body").find("#myModal").hide();
    }
  });
});