"use strict";
console.log('ksjdks');


const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.burger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('header__menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('header__menu_active');
    });
});




