// var modal = document.getElementById("myModal");
// var span = document.getElementById("close");

// var images = document.getElementsByClassName("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// var i;
// for (i = 0; i < images.length; i++) {
//   images[i].onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//   };
// }
// span.onclick = function () {
//   modal.style.display = "none";
// };

$(document).ready(function () {
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loading-overlay').hide();
    }, 1500);
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
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

  // $(document).keyup(function (e) {
  //   if (e.keyCode == 27) {
  //     modal.style.display = "none";
  //   }
  // });
});
