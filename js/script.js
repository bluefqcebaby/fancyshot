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

const slider = new Swiper(".works__slider", {
    slidesPerView: 1.3,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 30,
    breakpoints: {
        628: {
            slidesPerView: 2,
            initialSlide: 1,
        },
        1000: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 5,
            initialSlide: 2,
        }
    }
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('menu-btn-open')
    menu.classList.toggle('menu-open')
    body.classList.toggle('scroll-lock')
})