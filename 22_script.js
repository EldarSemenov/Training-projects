
const name = "Eldar";
const age = 37;
const job = "Web Developer";
const city = "Minneapolis";
let hrml;

function hello() {
    return "Hello World!";
}

html = `<ul>
<li>Name :   ${name}</li>
<li>Age :   ${age}</li>
<li>Job :   ${job}</li>
<li>City :   ${city}</li>
<li>City :   ${hello()}</li>
<li>Check the age: ${age > 30 ? "Over 30" : "Under 30"}</li> 
</ul>`;

document.body.innerHTML = html;

const numbers = [43, 56, 33, 23, 44, 36, 5];
const num2 = new Array(12, 12, 77);
console.log(numbers);
console.log(num2);
const mixed = [22, "Hello", true, undefined, null, { a: 2, b: 3 }, new Date()];
console.log(mixed);

let val;

val = numbers.length;
val = Array.isArray(numbers);

console.log(numbers);
console.log(val);

const numbers = [23, 40, 56];
let val;
val = numbers.find(num => num < 50);
val = numbers.find(num => num > 40);
val = numbers.filter(num => num < 56);
val = numbers.some(num => num > 40);
val = numbers.every(num => num > 56);
console.log(val);
*/
const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 37,
    email: "steve@gmail.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Minneapolis",
        state: "MN",
    },
    getBirthYear: function () {
        return 2022 - this.age;
    },
};
let val;

val = person;
val = person.firstName;
val = person["firstName"];
val = person.hobbies[1];
val = person.address.state;
val = person.address["state"];
val = person.getBirthYear();

console.log(val);

const people = [
    { name: "Jhon", age: 30 },
    { name: "Mike", age: 23 },
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name); // Jhon Mike
}
