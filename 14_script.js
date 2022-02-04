const form = document.querySelector("#quiz-form");
const answers = document.querySelector(".answer");

form.addEventListener("submit", e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked);
    console.log(checkedAnswers);

    answers.forEach(answer => {
        const isCorrect = answer.value === "true";
        console.log(isCorrect);
    });
});

alert("Hello!");
alert("Hello World!");

console.log("Hi!");
console.log(3234);
console.log(true);
var greeting = "understand!";
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ car: "Tesla", owner: "Eldar Semenov" });
console.error("THIS IS AN ERROR");
console.clear();
console.warn("This is a warning");

console.time("Time");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.timeEnd("Time");

var name = "Jhon Doe";
console.log(name);
name = "Steve Smith";
console.log(name);
var greeting;
console.log(greeting);
greeting = "Hello!";
console.log(greeting);
var firstName = "Eldar";
var first_name = "Sara";
var FirstName = "Tommy";

let name = "Jhon Doe";
console.log(name);
name = "Steven Smith";
console.log(name);

const name = "Jhon";
console.log(name);
name = "Sara";
console.log(name);

const person = {
    name: "Jhon",
    age: 30,
};
person.name = "Sara";
person.age = 32;
console.log(person);

const numbers = [12, 3, 4, 5];
numbers.push(1000);
console.log(numbers);

console.time("Time");
console.log("What time time is it now?");
console.timeEnd("Time");

const name = "Jhon Doe";
console.log(typeof name);
const age = 45;
console.log(typeof age);
const hasKids = true;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let test = undefined;
console.log(typeof test);
const sym = Symbol();
console.log(typeof sym);
const hobbies = ["movies", "music"];
console.log(typeof hobbies);
const address = {
    city: "Boston",
    state: "MA",
};
console.log(typeof address);
const today = new Date();
console.log(today);
console.log(typeof today);

let val;
val = String(5);
val = String(4 + 4);
val = String(true);
val = String(new Date());
val = String([1, 2, 3]);
val = (5).toString();
val = false.toString();
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = parseInt("100");
val = parseFloat("100.30");
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(1));

const vall = String(5);
const val2 = 6;
const sum = Number(vall + val2);
console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

val = Math.PI;
val = Math.E;
val = Math.round(2.2);
val = Math.ceil(2.1);
val = Math.floor(2.8);
val = Math.sqrt(4);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(23, 34, 66, 11, 4);
val = Math.max(23, 34);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val);

const firstName = "William";
const lastName = "Johnson";
const age = 37;
const str = "Hello there, my name is Eldar";
const tags = "web design,web development,programming";
let val;

val = firstName + lastName;
val = firstName + " " + lastName;
val = "Eldar ";
val += "Semenov";
val = "Hello, my name is " + firstName + " and I am " + age;
val = "That's awesome, I can't wait";
val = firstName.length;
val = firstName.concat(" ", lastName);
val = firstName.toUpperCase();
val = firstName[0];
val = firstName.indexOf("W");
val = firstName.lastIndexOf("l");
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);
val = firstName.substring(0, 4);
val = firstName.slice(-3).toUpperCase();
val = str.split(" ");
val = tags.split(",");
val = str.replace("Eldar", "Brad");
val = str.includes("Hello");
console.log(val);
