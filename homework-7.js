//Вывод в консоль лог: город и температуру
function showTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура — ${temperature} градусов по Цельсию`);
}
showTemperature('Махачкала', 36);

//Вывод в консоль лог: по заднному параметру вывод скорости света
const SPEEDLIGHT = 299792;
function checkSpeed(speed) {
  if (speed > SPEEDLIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed === SPEEDLIGHT) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}
checkSpeed(400000);
checkSpeed(40000);
checkSpeed(299792);

//Вывод в консоль лог: покупка синхрофазотрона
const productName = 'Синхрофазотрон ОИЯИ';
let productPrice = 2_500_000;

function buyProduct(myBalance) {
  if (productPrice <= myBalance) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - myBalance;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct(150_000);
buyProduct(2_500_000_000);

//Функция выбора любимой марки авто (Создать 1 функцию и именовать её по своему усмотрению)

const myFavoriteCar = 'ZEEKR';
function buyThings(car) {
  if (car === myFavoriteCar) {
    console.log('Беру, мой любимый авто');
  } else {
    console.log('Нет, спасибо.');
  }
}
buyThings('ZEEKR');
buyThings('another');

//Создать 3 переменных

let grandmotherName = 'Чакар';

const g_mBirthDay = 1378;

var myFavoriteFruit = 'apple';