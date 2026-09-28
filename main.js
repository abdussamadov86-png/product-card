import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';

import { Laptop, Phone } from './devices.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

const macbook = new Laptop('Apple', 'MacBook Pro', 250000, 16);
macbook.getInfo();
macbook.getRam();

const iphone = new Phone('Apple', 'iPhone 15', 120000, 48);
iphone.getInfo();
iphone.getCamera();


const modal = new Modal('modal');
const openBtn = document.getElementById('registration-button');

openBtn.addEventListener('click', () => {
  modal.open();
});

console.log(modal.isOpen())



const form = new Form('registration-form');

form.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.isValid()) {
    form.reportValidity();
    return;
  }

  const data = form.getValues();

  // проверка
  if (data.password !== data.passwordRepeat) {
    alert('Пароли не совпадают');
    return;
  }

  const user = {
    ...data,
    createdOn: new Date(),
  };

  console.log(user);
  form.reset();
  modal.close();
});
  


// Окрашивание одной карточки
const productCard = document.querySelector(".card");
const cardColorChange = document.querySelector("#card-color-change");
const greenColor = "rgb(26, 255, 0)";

cardColorChange.addEventListener("click", () => {
  productCard.style.backgroundColor = greenColor;
});

// Окрашивание всех карточек
const productCards = document.querySelectorAll(".card");
const allCardColorChange = document.querySelector("#allCard-color-change");
const blueColor = "rgb(0, 38, 255)";

allCardColorChange.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = blueColor));
});

// Открытие Google страницы
const openPageGoogl = document.querySelector("#googlePage-open");
openPageGoogl.addEventListener("click", openGooglePage);

function openGooglePage() {
  const answer = confirm("Открыть Google?");
  if (answer === true) {
    window.open("http://google.com");
  }
}

// Выведение текста в консоль
const outputeLogBtn = document.querySelector("#outpute-log");
outputeLogBtn.addEventListener("click", () => outputeLog("Салам"));

function outputeLog(message) {
  alert(message);
  console.log(message);
}

// Кнопка изменения цвета
const colorChangeButton = document.querySelector(".color-change-button");

colorChangeButton.addEventListener("click", () => {
  colorChangeButton.classList.toggle("active");
});
