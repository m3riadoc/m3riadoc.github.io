document.addEventListener('DOMContentLoaded', function () {
  // Utworzenie nowego obiektu Swiper2
  var swiper2 = new Swiper2('.mySwiper2', {
    slidesPerView: 3,
    spaceBetween: 28,
    pagination: {
      el: '.swiper2-pagination',
      clickable: true,
      dynamicBullets: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 3,
      },
    },
  });
});
