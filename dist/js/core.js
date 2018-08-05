'use strict';

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

  if (top.location.pathname === '/certificates.html') {
    (function () {
      var images = document.getElementsByClassName("myImgs");
      var modal = document.getElementById("myModal");
      var span = document.getElementById("closeBtn");
      var modalImg = document.getElementById("imgModal");

      var i = void 0;
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
    })();
  }
});