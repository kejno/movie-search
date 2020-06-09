/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import Swiper from 'swiper';
import cardGeneration from './cardGeneration';
import translateWords from './translateWords';

let count = 2;
const input = document.querySelector('.search-input');
export default new Swiper('.swiper-container', {
  spaceBetween: 80,
  slidesPerView: 1,
  loop: true,
  init: false,
  /* width: 680, */
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    700: {
      slidesPerView: 2,
    },
    1202: {
      slidesPerView: 3,
    },
  },
  on: {
    reachEnd: () => {
      translateWords(input.value.toLowerCase()).then((data) => {
        cardGeneration(data, count);
      });
      count += 1;
    },
  },
});
