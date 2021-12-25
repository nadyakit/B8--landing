//Init swiper
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
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
    delay: 3000,
    disableOnInteraction: false
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

let isOpen = false;
function closeBurger(){
  $(".text_first").css("opacity", "1")
  $(".button_first").css("opacity", "1")

  $(".menu-items").css("opacity", "0")

  $("#burger-btn img").attr("src","img/burger.svg")
  $("#burger-btn img").css("height", "5vw")
  $("#burger-btn img").css("width", "10vw")
}
function openBurger(){
  $(".text_first").css("opacity", "0")
  $(".button_first").css("opacity", "0")

  $(".menu-items").css("opacity", "1")

  $("#burger-btn img").attr("src","img/close.svg")
  $("#burger-btn img").css("height", "7vw")
  $("#burger-btn img").css("width", "7vw")
}
$("#burger-btn").click(function() {
  if (isOpen) {
    closeBurger()
    isOpen = false
  }
  else {
    openBurger()
    isOpen = true
  }
  console.log(isOpen)
})
