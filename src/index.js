import './styles/main.scss';

const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
const req = require.context("./icons/", false, /\.svg$/);
requireAll(req);


var swiper = new Swiper(".mySwiper", {
    loop:true, 
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.myheader__bars');
const close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu--translate');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--translate');
})

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});