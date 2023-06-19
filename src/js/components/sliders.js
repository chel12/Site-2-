
Swiper.use([Navigation, Pagination]);
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  slidesPerView: 1,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-nav__next',
    prevEl: '.slider-nav__prev',
  },
});
