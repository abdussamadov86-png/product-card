import { comments } from "./comments.js";

// массив чисел 1-10 с фильтром от 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtNum = numbers.filter(function(number) {
  return number > 4;
})

console.log(filtNum);



// массив строк

let strings = ["Сивак", "Миск", "Четки", "Книга", "Коврик"];

console.log(strings.includes("Четки"));
console.log(strings.includes("Тюбетейка"));


// функция переворота

function reverseNumArr(numbers1) {
  return numbers1.reverse();
}
let numbers1 = [1,2,3,4,5,6,7,8,9,10];
let invertedNum = reverseNumArr(numbers1)

console.log(invertedNum);

function reverseStringArr(strings1) {
  return strings1.reverse();
}
let strings1 = ["Сивак", "Миск", "Четки", "Книга", "Коврик"]
let invertedString = reverseStringArr(strings1)

console.log(strings1);



// Вывести в консоль массив комментариев юзеров с почтой ".com"

let comEmail = comments.filter(comment => comment.email.includes(".com"));

console.log(comEmail);