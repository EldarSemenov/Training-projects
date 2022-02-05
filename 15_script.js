/*
const numbers = [22, 43, 58];
console.time("Time");
let numbersAboveFourty = numbers.filter(number => {
    return number > 40;
});
console.log(numbersAboveFourty);
console.timeEnd();

const name = "Jhon";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

html =
    "<ul><li>Name : " +
    name +
    "</li><li>Age : " +
    age +
    "</li><li>Job : " +
    job +
    "</li><li>city : " +
    city +
    "</li></ul>";

document.body.innerHTML = html;

function hello() {
    return "Hello Wolrd!";
}
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? "Over 30" : "Under 30"}</li>
</ul>`;
document.body.innerHTML = html;

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[3];
// val = numbers[0];
// numbers[2] = 1000;
// val = numbers.indexOf(5);
// numbers.push(250);
// numbers.unshift(1200);
// numbers.pop();
// numbers.pop();
// numbers.shift();
// numbers.splice(1, 2);
// numbers.reverse();
val = numbers.concat(numbers2);
val = fruit.sort();
val = numbers.sort();
val = numbers.sort(function (x, y) {
    return x - y;
});
val = numbers.sort(function (x, y) {
    return y - x;
});

function under50(num) {
    return num < 50;
}
val = numbers.find(under50);
val = numbers.filter(function (num) {
    return num <= 33;
});

console.log(numbers);
console.log(val);
*/
const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 37,
    email: "steve@oal.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Miami",
        state: "FL",
    },
    getBirthyear: function () {
        return 2022 - this.age;
    },
};
let val;

val = person;
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthyear();

console.log(val);

const people = [
    { name: "Jhon", age: 30 },
    { name: "Mike", age: 23 },
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
