"use strict";
window.addEventListener("load", function() {
  setTimeout(function() {
    document.querySelector(".loading-overlay").style.display = "none";
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
  $(".owl-two").owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });
  $(".owl-three").owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    dots: true
  });

  let images = document.querySelectorAll(".myImgs");
  let modal = document.querySelector("#myModal");
  let span = document.querySelector("#closeBtn");
  let modalImg = document.querySelector("#imgModal");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  document.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target.id === "imgModal") {
      modal.style.display = "none";
    }
  });
  if (span) {
    span.onclick = function() {
      modal.style.display = "none";
    };
  }
});
