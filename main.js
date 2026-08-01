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
  colorChangeButton.classList.toggle("active-2");
});
