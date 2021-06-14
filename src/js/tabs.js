"use strict";
console.log('tabs.js');
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.working__tab'),
        tabsContent = document.querySelectorAll('.working__tabcontent'),
        tabsParent = document.querySelector('.working__tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // Надо будет выполнить 2 операции вместо 1 - ой, потому что мы работаем с классами.Нам нужно будет добавить класс hide, а второй часью нам нужно будет удалить класс show.И это тот случай когда нам нужно применять комбинацию двух методов, toggle использовать не можем иначе начнется каша с этими классами при переключении.
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('working__tab_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('working__tab_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('working__tab')) {
            // Когда мы кликнули в определенный пункт (working__tab), мы должны 
            // определить его номер в списке всех наших табов и по этому
            // номеру вызвать функцию showTabContent();, для того что бы определенный таб показать на страничке. И сделать это мы можем обычным перебором. То есть мы переберем все табы которые лежат в нашей переменной tabs и будем сравнивать что если элемент который находится в этом tabs совпадает с тем элементом который кликнул пользователь, тогда мы берем его номер и показываем на странице.
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });


        }
    });
});