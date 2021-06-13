"use strict";
console.log('tabs.js');
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.working__tab'),
        tabsContent = document.querySelectorAll('.working__tabcontent'),
        tabsParent = document.querySelector('.working__tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
    }
});