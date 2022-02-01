const isUserLoggin = true;
if (isUserLoggin) {
    console.log("logged in");
} else {
    console.log("not logged in");
}

isUserLoggin ? console.log("logged in") : console.log("not logged in");

const isUserLoggedIn = true;
let message = "";

if (isUserLoggedIn) {
    message = "Welcome to Our WebSite!";
} else {
    message = "Please, Log In";
}
console.log(message);

const isUserLoggedIn = false;
const message = isUserLoggedIn
    ? "Welcome to Our Website!"
    : "You need to Login, please";
console.log(message);

const age = false;
const VoteMessage = age ? "Thank you for voting" : "Sorry, you can not vote";
console.log(VoteMessage);

const addApp = (apps, app) => {
    apps.push(app);
    return apps;
};
console.log(addApp(["Waches", "TV", "Tesla Model S"], "MacBook Pro"));

const number = 10;

switch (number) {
    case 0:
        console.log("It is zero");
        break;
    case 1:
    case 2:
        console.log("It is small");
        break;
    case 3:
    case 4:
        console.log("It is medium");
        break;
    case 5:
        console.log("It is large");
        break;
    default:
        console.log("Try again");
}

for (let i = 0; i < 10; i++) {
    console.log("Hi!");
}

for (let number = 1; number < 21; number++) {
    console.log(number);
}

const list = ["a", "b", "c"];

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
}

const word = "Element";

for (let i = 0; i < word.length; i++) {
    const item = word[i];
    console.log(item);
}

for (let i = 0; i < 5; i++) {
    if (i > 2) break;
    console.log(i);
}

for (let i = 0; i < 6; i++) {
    console.log("Start " + i);
    if (i > 2) continue;
    console.log("End " + i);
}

for (let num = 1; num < 11; num++) {
    console.log(`This is number: ${num}`);
    if (num > 5) continue;
    console.log(`This is other number: ${num}`);
}

for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

let i = 0;

while (i < 10) {
    i++;
    console.log(i);
}

const person = {
    name: "Kyle",
    friend: {
        name: "Joe",
        friend: {
            name: "Sally",
        },
    },
};
let currentPerson = person;
while (currentPerson != null) {
    console.log(currentPerson.name);
    currentPerson = currentPerson.friend;
}

let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}

let i = 0;
do {
    console.log("The number is  " + i);
    i++;
} while (i < 10);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

const person = {
    name: "Eldar",
    friend: {
        name: "Jason",
        friend: {
            name: "Sally",
        },
    },
};

let currentPerson = person;
while (currentPerson != null) {
    console.log(currentPerson.name);
    currentPerson = currentPerson.friend;
}

const person = {
    name: "Eldar",
    friend: {
        name: "Jason",
        friend: {
            name: "Sally",
            firend: {
                name: "Mark",
            },
        },
    },
};
let currentPerson = person;
while (currentPerson != null) {
    if (currentPerson.name === "Sally") break;
    console.log(currentPerson.name);
    currentPerson = currentPerson.friend;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

function printNumber(number) {
    if (number > 10) return;
    console.log(number);
    printNumber(number + 1);
}
printNumber(1);

function printNumber(i) {
    if (i > 20) return;
    console.log(i);
    printNumber(i + 1);
}
printNumber(4);

function loopNumber(num) {
    if (num > 15) return;
    console.log(num);
    loopNumber(num + 3);
}
loopNumber(3);

function loopNumbers(number) {
    if (number > 10) return;
    console.log(number);
    loopNumbers(number + 2);
}
loopNumbers(2);

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);

for (let a = 1; a <= 100; a++) {
    sum = sum + a;
}
console.log(sum);

function sumNumbersBelow(number) {
    if (number <= 0) return 0;
    return number + sumNumbersBelow(number - 1);
}
console.log(sumNumbersBelow(10));

const person = {
    name: "Kyle",
    friend: {
        name: "Sally",
        friend: {
            name: "Jhon",
            friend: {
                name: "Jason",
            },
        },
    },
};
function printNames(currentPerson) {
    if (currentPerson == null) return;
    console.log(currentPerson.name);
    printNames(currentPerson.friend);
}
printNames(person);

function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum = sum + grade;
    });
    return sum;
}
console.log(sumGrades([10, 10, 10]));

function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if (number >= 0) {
            sum = sum + number;
        }
    });
    return sum;
}
console.log(sumPositiveNumbers([-12, -234, -2, -5, -10, 34, 1]));

const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
};
//countToTen();
const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
};

function printNumbers(number = 1) {
    if (number > 10) return;
    console.log(number);
    number++;
    printNumbers(number);
}
printNumbers();

function printNumber(num) {
    if (num > 10) return;
    console.log(num);
    printNumber(num + 1);
}
printNumber(3);

function printOneHundred(num) {
    if (num > 100) return;
    console.log(num);
    printOneHundred(num + 10);
}
printOneHundred(10);
