document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2.5,
    },
    1201: {
      slidesPerView: 4,
    },
  },
});

const swiper2 = new Swiper2(".mySwiper2", {
   slidesPerView: 3,
 spaceBetween: 28,
  grabCursor: 'true',
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