"use strict";
console.log('ksjdks');


const menu = document.querySelector('.header__menu'),
    menuList = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__burger'),
    newLi = document.createElement('li'),
    newARu = document.createElement('a'),
    newSlash = document.createElement('p'),
    newAEn = document.createElement('a'),
    newLiMenu = document.createElement('li');





hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__menu_active');

    // create classes
    newLi.classList.add('header__menu-extra');
    newLiMenu.classList.add('header__menu-extra');
    newARu.classList.add('header__rus');
    newSlash.classList.add('header__slash');
    newAEn.classList.add('header__eng');
    // add textContent
    newLiMenu.textContent = 'Меню';
    newARu.textContent = 'ru';
    newSlash.textContent = '/';
    newAEn.textContent = 'en';


    newLi.append(newARu, newSlash, newAEn);
    menuList.prepend(newLiMenu);
    menuList.append(newLi);

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


