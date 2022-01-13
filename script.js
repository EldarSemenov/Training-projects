let func = (x, callback) => callback(x);

func(10, variable => console.log(variable));

// // // // // function one(name, callback) {
// // // // //   callback(name);
// // // // // }
// // // // // function three() {
// // // // //   console.log("Three");
// // // // // }
// // // // // one("I am ", three);
// // // // function printVariable(variable) {
// // // //   console.log(variable);
// // // // }
// // // // console.log(printVariable);

// // // // function func(x) {
// // // //   x("Hello World");
// // // // }
// // // // func(printVariable);
// // // // //
// // // // const writeVar = variable => {
// // // //   console.log(variable);
// // // // };
// // // // const executor = s => {
// // // //   s("Hello Eldar. You got this topic");
// // // // };
// // // // executor(writeVar);

// // // // const getSum = (a, b) => {
// // // //   console.log(a, b);
// // // // };

// // // // const makeSum = sum => {
// // // //   sum(sum);
// // // // };
// // // // makeSum(2, 2);
// // // // function printVariable(variable) {
// // // //   console.log(variable);
// // // // }

// // // // function func(x) {
// // // //   x("Hello World");
// // // // }
// // // // func(printVariable);
// // // // function printVariable(variable) {
// // // //   console.log(variable);
// // // // }
// // // // printVariable("Hello");

// // // // function func(x) {
// // // //   x("Hello World!");
// // // // }

// // // // func(printVariable);

// // // // function makeSum(a, b) {
// // // //   console.log(a + b);
// // // // }
// // // // makeSum(2, 2);

// // // // function executeMath(action) {
// // // //   action(10, 10);
// // // // }

// // // // executeMath(makeSum);
// // // // function sum(a, b) {
// // // //   console.log(a + b);
// // // // }
// // // // function printVar(variable) {
// // // //   console.log(variable);
// // // // }

// // // // function executorOfFunctions(e, s) {
// // // //   e(2, 2);
// // // //   s("Hello World!");
// // // // }
// // // // executorOfFunctions(sum, printVar);
// // // // const sum = (a, b) => {
// // // //   console.log(a + b);
// // // // };

// // // // const printVar = variable => {
// // // //   console.log(variable);
// // // // };

// // // // const functionExecutor = (func1, func2) => {
// // // //   func1(100, 100);
// // // //   func2("Hello World Again!");
// // // // };

// // // // functionExecutor(sum, printVar);
// // // // const math = (a, b, c) => {
// // // //   console.log((a + b) * c);
// // // // };
// // // // const stringFunction = string => {
// // // //   console.log(string);
// // // // };

// // // // const executorFunction = (func1, func2) => {
// // // //   func1(2, 2, 2);
// // // //   func2("Hello World!");
// // // // };

// // // // executorFunction(math, stringFunction);
// // // // const sumCallBack = (a, b, callback) => {
// // // //   callback(a + b);
// // // // };
// // // // callback(2, 2);
// // // // function sumCallBack(a, b, callback) {
// // // //   callback(a + b);
// // // // }
// // // // function handleSum(sum) {
// // // //   console.log(sum);
// // // // }

// // // // sumCallBack(1, 2, handleSum);

// // // // function sumMath(a, b, result) {
// // // //   result(a + b);
// // // // }
// // // // function getSum(sum) {
// // // //   console.log(sum);
// // // // }

// // // // sumMath(4, 4, getSum);
// // // // function printVariable(variable) {
// // // //   console.log(variable)
// // // // }

// // // // function getDataFunction (name, callback) {
// // // //   callback(name)
// // // // }
// // // // getDataFunction('Hello')

// // // function printVariable(variable) {
// // //   console.log(variable);
// // // }

// // // function printName(name, callback) {
// // //   callback("Hello " + name);
// // // }

// // // printName("Eldar", printVariable);
// // function printVar(variable) {
// //   console.log(variable);
// // }

// // function getGreetName(name = "User", callback) {
// //   callback("Hello " + name + " I am glad to see you!");
// // }

// // getGreetName("Eldar!", printVar);

// // function getSum(sum) {
// //   console.log(sum);
// // }

// // function math(a, b, c, callback) {
// //   callback(a + b + c);
// // }

// // math(2, 8, 2, getSum);
// // function printName(name, callback) {
// //   callback("Hello " + name);
// // }
// // printName("Eldar!", function (variable) {
// //   console.log(variable);
// // });
// // //
// // function mathNum(a, b, callback) {
// //   callback(a * b);
// // }
// // mathNum(100, 2, function (sum) {
// //   console.log(sum);
// // });
// // function getInformation(firstName, lastName, callback) {
// //   callback(firstName[0] + lastName[0]);
// // }
// // getInformation("Eldar", "Semenov", function (abbriviation) {
// //   console.log(abbriviation);
// // });
// // function getFirstLettersFromName(firstName, lastName, callback) {
// //   callback(firstName[0] + lastName[0]);
// // }
// // getFirstLettersFromName("Elena", "Semenova", function (abbriviation) {
// //   console.log(abbriviation);
// // });

// function printName(name, callback) {
//   callback("Hello " + name);
// }
// function printvar(va) {
//   console.log(va);
// }
// printName("Eldar", function (va) {
//   console.log(va);
// });

// printName("Sasha", printvar);
// console.log("El");
// console.log("Eldar Semenov");

// const sumArrow = (a, b) => a + b;
// console.log(sumArrow(25, 25));

// const getName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
// console.log(getName("Eldar", "Semenov"));

// console.log(sumArrow);
// const writeName = name => {
//   console.log(name);
// };
// writeName("Eldar");

// const returnABR = (firstName, lastName) => firstName[0] + " " + lastName[0];
// console.log(returnABR("Eldar", "Semenov"));

// const printHello = name => "Hello " + name;
// console.log(printHello("Alex"));

// const hi = () => console.log("Hi!");

// hi();

function func(x, callback) {
  callback(x);
}
// func(10, function (variable) {
//   console.log(variable);
// });
func("Eldar", variable => console.log(variable));

let math = (a, b, c, d, callback) => callback(a + b + c * d);

math(1, 2, 3, 2, variable => console.log(variable));

let capitalizedName = (name, result) =>
  result(name[0].toUpperCase() + name.substring(1).toLowerCase());

capitalizedName("vIKtoR", variable => console.log(variable));
