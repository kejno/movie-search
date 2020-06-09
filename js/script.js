/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import initSlider from './utils/initSlider';
import cardGeneration from './utils/cardGeneration';
import translateWords from './utils/translateWords';
import Keyboard from './Keyboard/Keyboard';
import { rowsOrder, lang } from './utils/initKeyboard';
import '../css/style.css';

new Keyboard(rowsOrder).init(lang).generateLayout();

const input = document.querySelector('.search-input');
const keyboard = document.querySelector('.keyboard-container');
const countPage = 1;
keyboard.classList.add('disable');
input.value = 'dream';
cardGeneration(input.value, countPage).then(() => initSlider.init());

// Событие click на кнопку Search
document.querySelector('.search-btn').addEventListener('click', (event) => {
  event.preventDefault();
  translateWords(input.value.toLowerCase()).then((data) => {
    cardGeneration(data, 1).then((result) => {
      result ? initSlider.removeAllSlides() : null;
    });
  });
});

// При нажатии на ENTER экранной клавиатуры
document.querySelectorAll('.keyboard__key')[41].addEventListener('click', () => {
  translateWords(input.value.toLowerCase()).then((data) => {
    cardGeneration(data, 1).then((result) => {
      result ? initSlider.removeAllSlides() : null;
    });
  });
});

// Событие click на крестик(ОЧИСТИТЬ ПОЛЕ С ФИЛЬМАМИ)
document.querySelector('.search-clear').addEventListener('click', () => { input.value = ''; });

// Событие click на иконку клавиатуры
document.querySelector('.search-tia').addEventListener('click', () => {
  if (keyboard) keyboard.classList.toggle('disable');
});
