new Accordion('.accordion-evclid');


const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    speed: 700,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        draggable: true,
    },
});

const workSwiper = new Swiper('.work__swiper', {
    loop: false,
    speed: 700,
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
        el: '.work__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});


let body = document.querySelector('body');

let navList = document.querySelector('.nav__list');
let navItem = document.querySelectorAll('.nav__list > .nav__item');
let burgerMenu = document.querySelector('.burger__menu');
let burgerLines = document.querySelectorAll('.burger__line');
burgerMenu.addEventListener('click', () => {
    body.classList.toggle('body--overflow');
    navList.classList.toggle('nav__list--show');
    burgerLines[0].classList.toggle('first-line-open');
    burgerLines[1].classList.toggle('center-line-open');
    burgerLines[2].classList.toggle('last-line-open');

    navItem.forEach(element => element.classList.toggle('nav__item--show'));
});


let searchBtn = document.querySelector('.search__svg-open');
let searchForm = document.querySelector('.search__form ');
let headerLogo = document.querySelector('.header__logo');
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('search__svg-open--active');
    searchForm.classList.toggle('search__form--active');
    navList.classList.toggle('nav__list--hidden');
    headerLogo.classList.toggle('header__logo--hidden');
    burgerMenu.classList.toggle('burger__menu--hidden');
});


navItem.forEach(element => element.addEventListener('click', () => {
    navList.classList.remove('nav__list--show');
    burgerLines[0].classList.toggle('first-line-open');
    burgerLines[1].classList.toggle('center-line-open');
    burgerLines[2].classList.toggle('last-line-open');
    navItem.forEach(element => element.classList.remove('nav__item--show'));
}));


let paginationBullets = document.querySelectorAll('.work__list > .swiper-pagination-bullet');
paginationBullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
        let activeSlide = document.querySelectorAll('.swiper-slide-active .work__btn-wrapper button');
        console.log(activeSlide);
    });
});

