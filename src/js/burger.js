"use strict";
console.log('ksjdks');


const menu = document.querySelector('.header__menu'),
    menuList = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__burger'),
    newElement = document.createElement('li'),
    ru = document.querySelector('.header__change-ru'),
    slash = document.querySelector('.slash'),
    en = document.querySelector('.header__change-en');

// newElement.classList.add('extra_menu-item');
// newElement.classList.add('header__menu-item');
// newElement.append(ru, slash, en);
// menuList.append(newElement);


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__menu_active');

    ru.classList.toggle('on');


});

// menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('header__burger_active');
//         menu.classList.toggle('header__menu_active');
//     });
// });


// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.header__burger, .header__menu').toggle('active');
//         $('body').toggleClass('lock');
//     });
// });


