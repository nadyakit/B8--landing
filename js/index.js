//Init swiper
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: true,
})
//Init swiper mobile
const swiper_mobile = new Swiper('.swiper-mobile', {
  autoplay: {
    delay: 5000,
  },
  autoHeight: true,
  slidesPerView: 1,
  effect: 'cards',
  cardsEffect:{
    slideShadows:false
  },
  spaceBetween: 0,
  direction: 'horizontal',
  loop: true,
})
