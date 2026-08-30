
import { productCards } from "./products.js";

const template = document.getElementById('productCards-template');
const container = document.getElementById('productCards-list');

// Функция для запроса количества карточек
function getCardCount() {
  let count;
  
  while (true) {
    const input = prompt("Сколько карточек отобразить? От 1 до 5");
    
    if (input === null) {
      return null;
    }
    
    count = Number(input);
    
    if (Number.isInteger(count) && count >= 1 && count <= 5) {
      return count;
    }
    
    alert("Пожалуйста, введите число от 1 до 5!");
  }
}

// Функция для рендеринга карточек
function renderCards(products) {
  container.innerHTML = '';
  
  if (!products || products.length === 0) {
    container.innerHTML = '<li>Нет товаров для отображения</li>';
    return;
  }
  
  products.forEach(product => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.productCards-image').src = `img/${product.image}.jpg`;
    clone.querySelector('.productCards-image').alt = product.name;
    clone.querySelector('.productCards-name').textContent = product.name;
    clone.querySelector('.productCards-purpose').textContent = product.purpose;
    clone.querySelector('.productCards-description').textContent = product.description;
    clone.querySelector('.compound__value').textContent = product.compound;
    clone.querySelector('.product__value').textContent = product.price + ' ₽';
    
    container.appendChild(clone);
  });
}

// ЗАДАНИЕ 4: reduce
const productDescription = productCards.reduce((acc, product) => {
  acc.push({
    [product.name]: product.description
  });
  return acc;
}, []);

console.log('Массив объектов { название: описание }:');
console.log(productDescription);

// ЗАДАНИЕ 5: Запуск
const cardCount = getCardCount();

if (cardCount === null) {
  container.innerHTML = '<li>Вы отменили отображение карточек</li>';
} else {
  const productsToShow = productCards.slice(0, cardCount);
  renderCards(productsToShow);
}

