"use strict";
window.addEventListener("load", function() {
  setTimeout(function() {
    document.querySelector(".loading-overlay").style.display = "none";
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {

  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      778: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
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
