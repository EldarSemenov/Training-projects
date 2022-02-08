const color = "green";

switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
        break;
}
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(`Today is ${day}`);

let month;

switch (new Date().getMonth()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}
console.log(`The current month is ${month}`);

//FUNCTION DECLARATION
function greet() {
    // console.log("Hello");
    return "Hello";
}
console.log(greet());

function greetOne(firstName) {
    return `Hello ${firstName}`;
}
console.log(greetOne("Eldar"));
function greetTwo(firstName = "Our", lastName = "User") {
    return `Hello ${firstName} ${lastName}`;
}
console.log(greetTwo());

//FUNCTION EXPRESSION

const square = function (x) {
    return x * x;
};
console.log(square(2));

const triple = function (x) {
    return x * 3;
};
console.log(triple(3));

const square = function (a = 2) {
    return a * a;
};
console.log(square());

//immediately invokable function expressions
(function () {
    console.log("IIFE Ran...");
})();

(function () {
    console.log(`I've wrote IIFE function by myself`);
})();

(function (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
})("Eldar", "Semenov");

(function (a, b) {
    console.log(a + b);
})(100, 100);

//PROPERTY METHODS
const todo = {
    add: function () {
        console.log("Add todo...");
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    },
};
todo.delete = function () {
    console.log("Delete todo...");
};

todo.add();
todo.edit(1000);
todo.delete();
