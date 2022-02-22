
console.table({ a: 2, b: 3 });
console.clear();
console.warn("This is a warning");
console.time("Code is finished");
const name = () => {
    return "EL";
};
console.log(name());
console.timeEnd("Code is finished");

let val;

const today = new Date();
let birthday = new Date("10-10-1984 23:55:00");

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear(); //
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //1645351858934 // seconds that was after January First
console.log(val);
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3); //Tue Mar 12 1985 03:55:00 GMT+1000 (Chamorro Standard Time)
birthday.setMinutes(30); //Tue Mar 12 1985 03:30:00 GMT+1000 (Chamorro Standard Time)
birthday.setSeconds(25); // Tue Mar 12 1985 03:30:25 GMT+1000 (Chamorro Standard Time)
console.log(birthday); //Sat Mar 10 1984 23:55:00 GMT+1000 (Chamorro Standard Time)

// const id = "100";

//equal to
if (id == 100) {
    console.log("correct");
} else {
    console.log("incorrect");
}
// not equal to
if (id != 101) {
    console.log("NOT");
} else {
    console.log("Equal");
}
//equal to value & type
if (id === 100) {
    console.log("correct");
} else {
    console.log("incorrect");
}
//equal to value & type
if (id !== 100) {
    console.log("correct");
} else {
    console.log("incorrect");
}

if (typeof id !== "undefined") {
    console.log(`The ID is ${id}`);
} else {
    console.log(`No ID`);
}

if (typeof age === "undefined") {
    console.log("No Age");
} else {
    console.log(`Age is ${age}`);
}

const id = 100;

if (id > 200) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

const color = "red";

if (color === "red") {
    console.log("Color is red");
} else if (color === "blue") {
    console.log("Color is blue");
} else {
    console.log("Color is not red or blue");
}

//LOGICAL OPERATOR
const name = "Steve";
const age = 20;
// && - stands for and
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
//The output: Steve is an adult

// OR
// || stands for or
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

const id = 100;
console.log(id === 100 ? "CORRECT" : "INCORRECT");

//WITHOUT BRACES
if (id === 100) console.log("yes");
else console.log("no");
*/

/*     SWITCHES     */
const color = "red";

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
console.log(`Today is ${day}`); // Today is Tuesday
