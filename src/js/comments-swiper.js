import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  simulateTouch: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

mySwiper.slideNext();
