"use strict";
console.log('hasaswwkj');

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
loadScript('js/burger.js');
loadScript('js/accordion.js');
// loadScript('js/tabs.js');
/*
он будет загружаться только после того как будет добавлен в документ, то есть выполнения этой строки document.body.append(script);
Динамически загружаемые скрипты по умолчанию ведут себя как asynk, то есть они все равно здесь никого ждать не будут, скрипт который загрузился здесь первым так и будет загружаться первым. В редких случаях нам нужно что бы они загружались немного по другому. И для этого мы можем так же изменить относительный порядок скриптов при их загрузке. Что бы это сделать, мы можем перед тем как поместить его на страницу, взять наш скрипт и написать
script.async = false;
За счет того что мы установили асинхронность false script.async = false; js файлы будут выполняться строго друг за другом.
*/