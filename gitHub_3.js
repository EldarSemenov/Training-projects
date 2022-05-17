const message = "You are welcome.";
const action = message.replaceAll(" ", "_");
console.log(action);

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);

const message = "You are welcome";
const action = message.replaceAll(" ", "-");
console.log(action);

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
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);

const csv = userNamesArray.join(", ");
console.log(csv);

const userIds = users.map(user => user.id);
console.log(userIds);

const csv2 = userIds.join(", ");
console.log(csv2);

const students = [
    {
        id: 23,
        firstName: "Alex",
        lastName: "Ujin",
    },
    {
        id: 34,
        firstName: "Kile",
        lastName: "Mintos",
    },
    {
        id: 90,
        firstName: "Noj",
        lastName: "Nikki",
    },
];
const html = `<ol>
${students.map(student => `<li>${student.firstName}</li>`).join(", ")}
</ol>`;
console.log(html);

const secondHTML = `<ul>${students.map(
    student => `<li>${student.id}</li>`
)}</ul>`;
console.log(secondHTML);

const cars = [
    {
        model: "Tesla Model 3",
        inStock: true,
    },
    {
        model: "BMW 3",
        inStock: true,
    },
    {
        model: "Ford Focus 5",
        inStock: false,
    },
];

const newHTML = `<ol>${cars.map(car => `<li>${car.model}</li>`)}</ol>`;
console.log(newHTML);

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);

const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);

const myNumbers = [100, 1000, 78, 56, 45];

const thisNumbersMore200 = myNumbers.some(num => num >= 200);
console.log(thisNumbersMore200);

const moreThan500 = myNumbers.every(num => num > 500);
console.log(moreThan500);

const items = ["pen", "paper"];
items.length = 0;
console.log(items);

const items = ["Pen", "Paper", "Staples"];

const deleteItem = items.splice(0, 1);
console.log(deleteItem);
console.log(items);

const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);

console.log(sum);

let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
    console.log(`Total is ${total}`);
    console.log(`Current is ${current}`);
    console.log("---");
    return total + current;
}, 0);
console.log(`Sum is ${sum}`);

const numbers = [5, 2, 10];

const result = numbers.reduce((total, current) => {
    return total * current;
}, 1);
console.log(result);

const numbers = [2, 2, 2];

let sum = 0;

const action = numbers => {
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
};
console.log(action(numbers));
