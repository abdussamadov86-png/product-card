import { comments } from "./comments.js";

// Массив чисел 1-10 с фильтром от 5
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtNum = numbers.filter(function(number) {
  return number > 4;
});

console.log(filtNum);

// Массив строк
let strings = ["Сивак", "Миск", "Четки", "Книга", "Коврик"];

console.log(strings.includes("Четки"));
console.log(strings.includes("Тюбетейка"));

// Функция переворота чисел
function reverseNumArr(numbers1) {
  return numbers1.reverse();
}

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let invertedNum = reverseNumArr(numbers1);

console.log(invertedNum);

// Функция переворота строк
function reverseStringArr(strings1) {
  return strings1.reverse();
}

let strings1 = ["Сивак", "Миск", "Четки", "Книга", "Коврик"];
let invertedString = reverseStringArr(strings1);

console.log(strings1);

// Вывести в консоль массив комментариев юзеров с почтой ".com"
let comEmail = comments.filter(comment => comment.email.includes(".com"));

console.log(comEmail);

// Перебрать массив: пользователи с id <= 5, postId: 2, у кого id > 5, postId: 1
let users = comments;
let newUsers = users.map(user => {
  return {
    ...user,
    postId: user.id <= 5 ? 2 : 1
  };
});

console.log(newUsers);

// Перебрать массив: объекты состоят из Id и имени
let usersFilter = comments;
let usersIdName = usersFilter.map(user => {
  return {
    id: user.id,
    name: user.name
  };
});

console.log(usersIdName);

// Перебираем массив: добавляем свойство isInvalid; если символов больше 180 то true, иначе false
let userBody = comments;
let bodySize = userBody.map(user => {
  return {
    ...user,
    isInvalid: user.body.length > 180
  };
});

console.log(bodySize);

// Используя методы reduce и map, вывести массив почт
let usersEmails = comments;
let emails = usersEmails.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);

console.log(emails);

// Используя методы toString(), join(), массив с задания №11, привести к строке
let emailStrings = emails.toString();
let joinEmail = emails.join("-");

console.log(emailStrings);
console.log(joinEmail);