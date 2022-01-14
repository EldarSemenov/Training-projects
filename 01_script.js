function doStuff(a, b, name) {
  print(sum(a, b));
  print(sayHi(name));
}

function print(variable) {
  console.log(variable);
}
function sum(a, b) {
  return a + b;
}
function sayHi(name) {
  return "Hi " + name;
}

doStuff(2, 3, "Eldar");

let print = variable => {
  console.log(variable);
};

let sum = (a, b) => a + b;

let sayHello = string => string;

let combineFunction = (a, b, string) => {
  print(sum(a, b));
  print(sayHello(string));
};

combineFunction(100, 100, "Hello World!");

let print = variable => console.log(variable);

let sum = (a, b) => a + b;
let sayHello = name => `Hello ${name}`;

let multiFunction = (a, b, name) => {
  print(sum(a, b));
  print(sayHello(name));
};
multiFunction(1000, 1000, "Eldar");

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 1));
console.log("Hello World!");
console.log("Hi");

function sayHi(name) {
  let result = "Hi " + name;
  console.log(result);
}
let name = "Eldar";
ksafsh;
sayHi(name);

function print(variable) {
  let c = 3;
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(c);
  };
}
let a = print(1);
a(2);

function print(variable) {
  let a = 1;
  return function (variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(a);
  };
}
let result = print(22);
result(100);

let a = 1;
a = 2;
console.log(a);

let a = "1.4";
console.log(a);
console.log(typeof a);
console.log(Number.parseFloat(a));

let a = 12;
let b = a.toString();
console.log(b);
console.log(typeof b);

const a = 1;
const b = "1";
console.log(a != b);

let d = 2;
console.log(d >= null);

const a = parseInt("skhdksjds");
console.log(a);
const b = 1;

console.log(isNaN(b));
