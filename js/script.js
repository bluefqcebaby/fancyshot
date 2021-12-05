'use strict'
//Проверка на поддержку wepb изображений
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});


//Слайдер работ
const swiperWorks = new Swiper(".works__slider", {
  slidesPerView: 2.3,
  centeredSlides: true,
  spaceBetween: 10,
  breakpoints: {
    628: {
      slidesPerView: 2.5,
      initialSlide: 1,
      centeredSlides: false,
    },
    1000: {
      slidesPerView: 4,
      initialSlide:1,
    },
    1400: {
      slidesPerView: 5,
      initialSlide: 1,
      spaceBetween: 30,
    }
  }
});


//Мобильное меню
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu-btn-open');
  menu.classList.toggle('menu-open');
  body.classList.toggle('scroll-lock');
});

//анимация появления элементов слайдера
const sliders = document.querySelectorAll('.works__slider-wrapper')
let sliderItems = [];
let check;
let counter = 0;
let callback = (entries) => {
  check = true;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slideAnimation')
      let elems = entry.target.parentNode.childNodes
      setTimeout(() => {
        for (let i = 0; i < elems.length; i++) {
          if (elems[i].innerHTML) {
            elems[i].style.transitionDelay = '0s';
          }
        }
      }, 500)
      observer.unobserve(entry.target)
    }
  });
}
let options = {
  threshold: 0.1,
}
let observer = new IntersectionObserver(callback, options);

if (sliders.length > 0) {
  for (let j = 0; j < sliders.length; j++) {
    let delay = 0;
    let slider = sliders[j];
    const sliderChilds = slider.childNodes;
    for (let i = 0; i < sliderChilds.length; i++) {
      if (sliderChilds[i].innerHTML) {
        sliderItems.push(sliderChilds[i])
      }
    }
    for (let i = 0; i < sliderItems.length; i++) {
      let sliderItem = sliderItems[i];
      sliderItem.style.transitionDelay = delay + 's';
      // sliderItem.style.transitionProperty = 'transform';
      delay += 0.1;
      observer.observe(sliderItem)
    }
    sliderItems = [];
  }
}
//