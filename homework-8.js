// Создайте объект на основе ваших данных

const userInfo = {
  name: "Мурад",
  surname: "Абдулсамедов",
  eMail: "abdussamadov86@gmail.com",
  job: "teacher",
  age: 38,
  city: "Makhachkala",
  relationshipStatus: "married",
}
console.log(userInfo)

// Создайте объект данных об автомобиле

const carInfo = {
  carMake: "ZEEKR",
  model: "7x",
  manufactureYear: 2026,
  color: "black",
  transmission: "single-stage reduction gear",
}

// дополнительное свойство - владелец авто

carInfo.owner = userInfo

console.log(carInfo)


// функция принимающая аргументом объект, описанный в пункте №4

function ensureMaxSpeed(obj) {
 if (!obj.hasOwnProperty("maxSpeed")) {
 obj["maxSpeed"] = 255;
 console.log(`Свойство "maxSpeed" добавлено. Значение: ${obj["maxSpeed"]}`);
 } else {
 console.log("Свойство 'maxSpeed' уже существует. Ничего не делаем.");
 }
}

ensureMaxSpeed(carInfo);
ensureMaxSpeed(carInfo);

// функция, получающая первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести

function getInfo(obj, key) {
  console.log(obj[key]);
}

const user1 = {
  firstName: 'Мурад',
  surName: 'Абдулсамедов',
  age: 38
}

getInfo(user1, 'surName');


// Создать массив, содержащий список продуктов

const products = ['Хлеб', 'Молоко', 'Яйца']

console.log(products);


// Создать массив,содержащий книги

const books = [
 {
  title: '100 самых влиятельных людей в истории',
  author: 'Майкл Х. Харт',
  year: 1978,
  coverColor: 'золотой',
  genre: 'историческая биография'
 },

 {
  title: 'Великие правители: от Александра до Путина',
  author: 'Игорь Курукин',
  year: 2010,
  coverColor: 'зеленый',
  genre: 'история'
 },

 {
  title: 'Гении науки: от Ньютона до Хокинга',
  author: 'Стивен Хокинг',
  year: 2005,
  coverColor: 'голубой',
  genre: 'научная биография'
 },

 {
  title: 'Титаны бизнеса: как они изменили мир',
  author: 'Эндрю Карнеги',
  year: 2015,
  coverColor: 'серый',
  genre: 'бизнес-биография'
 }
];

// Добавляем книгу в конец

books.push({
    title: 'Пророки и философы: духовные лидеры',
    author: 'Карен Армстронг',
    year: 2008,
    coverColor: 'белый',
    genre: 'религиозная философия'
});

console.log('Книги о влиятельных личностях');
console.log(books);

// Серия книг "Семь лучей солнца"

const sunRaysBooks = [
 {
  title: 'Семь лучей солнца: Книга 1 - Рождение света',
  author: 'Анна Светлова',
  year: 2015,
  coverColor: 'золотистый',
  genre: 'фэнтези'
 },

 {
  title: 'Семь лучей солнца: Книга 2 - Тени прошлого',
  author: 'Анна Светлова',
  year: 2016,
  coverColor: 'серебряный',
  genre: 'фэнтези'
 },

 {
  title: 'Семь лучей солнца: Книга 3 - Восход новой эры',
  author: 'Анна Светлова',
  year: 2017,
  coverColor: 'оранжевый',
  genre: 'фэнтези'
 },

 {
  title: 'Семь лучей солнца: Книга 4 - Закат империи',
  author: 'Анна Светлова',
  year: 2019,
  coverColor: 'красный',
  genre: 'фэнтези'
 },

 {
  title: 'Семь лучей солнца: Книга 5 - Возвращение героя',
  author: 'Анна Светлова',
  year: 2021,
  coverColor: 'золотой',
  genre: 'фэнтези'
 }
];

// метод спред

const allBooks = [...books, ...sunRaysBooks];

console.log('Объединенный массив книг');
console.log(allBooks);
console.log(`Всего книг: ${allBooks.length}`);

// функция сортировки книг по редкости

function markRareBooks(booksArray) {

 return booksArray.map(book => {

 const newBook = { ...book };
        
 newBook.isRare = book.year > 2000;
        
 return newBook;
 });

}
    
const rareBooks = markRareBooks(allBooks);

console.log('Редкие книги');
console.log(rareBooks);
