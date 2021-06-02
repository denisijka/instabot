"use strict";
console.log('ksjdks');


// const menu = document.querySelector('.header__menu'),
//     menuItem = document.querySelectorAll('.header__menu-item'),
//     hamburger = document.querySelector('.header__burger');


// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('header__burger_active');
//     menu.classList.toggle('header__menu_active');


// });

// menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('header__burger_active');
//         menu.classList.toggle('header__menu_active');
//     });
// });


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggle('active');
        $('body').toggleClass('lock');
    });
});


