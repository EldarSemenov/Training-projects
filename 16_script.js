let val;

const today = new Date();
let birthday = new Date("10-10-1984 23:55");
birthday = new Date("10/10/1984");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1987);
birthday.setHours(3);
birthday.setMinutes(23);
birthday.setSeconds(23);

console.log(birthday);

if(something) {
  do something
}

const id = 100;
if (id == 101) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

const id = "100";
if (id != 101) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

const id = 100;
if (id === 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

//let id = 100;

if (typeof id !== "undefined") {
    console.log(`The ID is ${id}`);
} else {
    console.log(`No id`);
}

let id = 200;
if (id >= 200) {
    console.log("correct");
} else {
    console.log("incorrect");
}

const color = "black";
if (color === "red") {
    console.log("Color is red");
} else if (color === "blue") {
    console.log("Color is blue");
} else {
    console.log("Color is neiser red or blue");
}

const name = "Steve";
const age = 70;
if (age > 0 && age <= 12) {
    console.log(`${name} is a child!`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

if (age < 16 || age > 65) {
    console.log(`${name} can not run a race`);
} else {
    console.log(`${name} is registered for the race`);
}

const id = 90;
console.log(id === 100 ? "CORRECT" : "INCORRECT");

const age = 24;
console.log(age >= 30 ? "You can do that" : "You need to wait");
*/
const users = [
    {
        id: 1,
        name: "Sam Doe",
    },
    {
        id: 2,
        name: "Alex Blue",
    },
];
const userNamesArray = users.map(user => user.name).join(", ");
console.log(userNamesArray);
const csv = userNamesArray.join(", ");
console.log(csv);
const csv = users.map(user => user.name).join(", ");
console.log(csv);
const element = document.querySelector(".div");
element = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ul>`;

