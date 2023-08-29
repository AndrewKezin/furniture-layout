// Меню-гамбургер
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const body = document.body;

// клонируем меню, чтобы отрендерить его в всплывающем popup со своими стилями
const menu = document.querySelector('#menu').cloneNode(1);

// Обработчик для кнопки гамбургера
hamb.addEventListener('click', hambHandler);

// Функция открытия всплывающего popup-меню
function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active'); // изменить кнопку гамбургера
    body.classList.toggle('noscroll'); // отменить прокрутку для body
    renderPopup();
}

// Отрендерить скопированное меню в popup
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызвать функцию закрытия popup
links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
});

// Функция закрытия popup
function closeOnClick() {
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}
