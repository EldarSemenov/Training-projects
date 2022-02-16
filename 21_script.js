console.table({ a: 1, b: 2 });
console.log({ a: 4, b: 3 });
console.clear();

CONSOLE.TIME() Allows to know the time for execution for a code

console.time("Hello"); //put a code between these two lines
console.log("This is a string"); //code
console.log("This is a number:", 23); //code
console.timeEnd("Hello");//put a code between these two lines

// The output is:

// 21_script.js:7 This is a number: 23
// 21_script.js:8 Hello: 0.107177734375 ms

console.log({ name: "Sam", age: 23 });
console.table({ name: "Alex", age: 34 });

let val;

val = 5;
val = String(5);
val = String(true);
val = String(new Date());
val = String([1, 2, 3, 4]);
val = (34).toString();
val = false.toString();

val = "67";
val = Number.parseInt("8");
val = Number.parseFloat("12.12");
val = Number.parseInt("12.12");
console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));
// console.log(val.length);
// console.log(Number.parseFloat("34,9"));

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;

let val;

// val = num1 + num2;
val = Math.PI;
val = Math.round(2.5);
val = Math.ceil(2.4); //output 3
val = Math.sqrt(16);
val = Math.pow(2, 2);
val = Math.pow(4, 4); //
val = Math.pow(5, 3); // 125  means 5 * 5 * 5
val = Math.min(2, 3, 4, 5, 33, 1, 334); // output 1 This method gives the minimum number
val = Math.max(2, 3, 4, 5, 33, 1, 334); // output 334 This method gives the maximum number

console.log(val);

const firstName = "William";
const lastName = "Johnson";

let val;

console.log(val);

const firstName = "Eldar";
const lastName = "Semenov";
val = firstName.concat(" ", lastName);
console.log(val);
val = firstName.lastIndexOf("d"); //output 2
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);
val = firstName[firstName.length - 1];
val = firstName.substring(0, 2);
val = firstName.slice(0, 2);
val = firstName.slice(-3);
const str = "Hello there my name is Eldar";
val = str.split(" ");

const tags = "web design,web development,programming";
val = tags.split(",");
val = str.replace("Eldar", "Artur");

console.log(val);
