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

let numbers1 = [1,2,3,4,5,6,7,8,9,10];
numbers1.reverse();
console.log(numbers1);

let strings1 = ["Сивак", "Миск", "Четки", "Книга", "Коврик"]
strings1.reverse();
console.log(strings1);


import { comments } from "./comments.js";
