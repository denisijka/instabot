"use strict";
console.log('hello');

const tabs = document.querySelectorAll('.working__tabs'),
    // tabs это те вкладки на которые будем кликать.
    tabsContent = document.querySelectorAll('.header__tabcontent'),
    // tabsContent - это весь контент который будет находиться в верстке. Это класс который будет отвечать за контент.
    tabsParent = document.querySelector('.working__tab');
// tabsParent - это родитель, который будет содержать все табы.

function hideTabContent() {
    // Скрыть все ненужные нам табы:
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });
    /*
    Добавим не большой функционал - то что мы будем работать с классом активности. Когда мы скрываем все табы из видимости, мы так же будем убирать классы активности у всех табов которые здесь находятся.*/
    tabs.forEach(item => { /* item - что мы обращаемся к каждому отдельному табу. */
        item.classList.remove('working__tab_active');
        /* мы будем у каждого из элементов табов удалять класс активности. Помещаем в кавычки класс working__tab_active и точку не ставим, потому что мы и так работаем с классами, нам команда classList и так об этом говорит.*/
    });
}


// 2. Создадим функцию, которая будет на оборот - показывать нам табы:

function showTabContent(i = 0) {
    /* Нам нужно строго понимать - к какому элементу мы обращаемся. Раскрываем квадратные скобки [i]. И этот номер, который нам нужно показать, мы будем передавать как аргумент как (i).*/
    tabs[i].classList.add('tabheader__item_active');
}
hideTabContent();
showTabContent();