let array = [1, 2, 3];
array.push(1000);
array.push(["Hello World!", "Hello Katty"]);
console.log(array);
console.log(array[0]);

const a = [
  ["Hi", "bye"],
  [12, 3294],
];
console.log(a);
console.log(a[0]);
console.log(a[1][1]);

const abc = ["a", "b", "c", "d", "e"];
console.log(abc[2]);

const num = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
console.log(num[0][3]);
console.log(num[1][2]);
console.log(num[2][0]);

let person = {
  name: "Eldar",
  age: 37,
  favoriteNumber: 12,
  sayHello: function () {
    console.log("Hello World!");
  },
  tellHi() {
    console.log("Hi!");
  },
  getDay() {
    console.log("Monday");
  },
};
person.sayHello();
person.tellHi();
person.getDay();

let car = {
  make: "Money",
  Model: "Tesla 3",
  isUsed: true,
  makeNoise() {
    console.log("Vroom!");
  },
};
let property = "Model";

console.log(car);
car.makeNoise();
console.log(car["isUsed"]);
console.log(car[property]);

let person2 = {
  name: "Eldar Semenov",
  hobbies: ["Fitness", "Programming"],
  address: {
    st: "2987 main st",
    city: "Minneapolis",
  },
};
console.log(person2.address.city);
console.log(person2.hobbies[1]);

let book = {
  title: "Flowers",
  author: {
    name: "James Lin",
    age: 34,
  },
};
book.author.name = "El Lino";
book.title = "New Title";
console.log(book);

let numbers = [12, 23, 56];
numbers[2] = 1000;
console.log(numbers);

let a = 10;
let b = "hi";
let c = [1, 2];
let d = [3, 4, 5];
d.push(6);

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);

const ob = {
  name: "Eldar",
};
ob.age = 25;
console.log(ob);
//
const a = [1, 2];
const elementToAdd = 3;

function add(array, element) {
  array.push(element);
  return array;
}
console.log(add(a, elementToAdd));

const numbers = [2, 4, 5, 6, 10];
const elementToAdd = 1000;

const add = (array, element) => {
  element += 1;
  array.push(element);
  return array;
};
console.log(add(numbers, elementToAdd));
console.log(numbers);
console.log(elementToAdd);

const array = numbers;
array.push(2000);
console.log(array);
//
const a = [1, 2, 3, 4, 5];

a.forEach((element, index) => {
  console.log(element + " " + index);
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(number + "--" + index);
});
const newNumbers = numbers.map(number => {
  return number * 2;
});
console.log(newNumbers);

const newFilter = numbers.filter(number => {
  return number <= 2;
});
console.log(newFilter);

const n = numbers.find(number => {
  return number === 2;
});
console.log(n);

const s = numbers.some(number => {
  return number > 4;
});
console.log(s);

const e = numbers.every(number => {
  return number > 4;
});
console.log(e);

const reduceMethod = numbers.reduce((total, current) => {
  return total + current;
}, 0);
console.log(reduceMethod);

const reducedMultiply = numbers.reduce((total, current) => {
  return total * current;
}, 1);
console.log(reducedMultiply);

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];
const sum = items.reduce((total, current) => {
  return total + current.price;
}, 0);
console.log(sum);

const a = [1, 2, 3, 4, 5];

const question = a.includes(2);
console.log(question);

let a = "Hello";
let b = "World";

console.log(`${a} ${b}`);

const firstName = "Eldar";
const lastName = "Semenov";

console.log(`${firstName} ${lastName}`);

function createUser(name, age) {
  return {
    name: name,
    age,
    age,
    human: true,
  };
}
console.log(createUser("Eldar", 37));

const date = new Date();
console.log(date.getMonth());
*/
function User(name, age) {
  return { name: name, age: age, human: true };
}
const user = new User("Sally", 25);
console.log(user);
const user2 = new User("James", 33);
console.log(user2);