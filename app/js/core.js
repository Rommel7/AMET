$(window).on('load', () => {
  setTimeout(() => {
    $('.loading-overlay').hide();
  }, 1000);
});

$(document).ready(() => {
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
    (() => {
      let images = document.getElementsByClassName("myImgs");
      let modal = document.getElementById("myModal");
      let span = document.getElementById("closeBtn");
      let modalImg = document.getElementById("imgModal");

      let i;
      for (i = 0; i < images.length; i++) {
        images[i].onclick = function () {
          modal.style.display = "block";
          modalImg.src = this.src;
          modalImg.alt = this.alt;
        };
      }
      span.onclick = () => {
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