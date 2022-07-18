const numbers = [5, 5, 5, 5];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const grades = [19, 20, 18, 17, 16];

const getRaisedGrades = grades => {
    return grades
        .map(grade => {
            if (grade + 1 > 20) {
                return 20;
            }
            return grade + 1;
        })
        .join(" - ");
};
console.log(grades);
console.log(getRaisedGrades(grades));

const name = " sam ";
const result = name.trim();
console.log(result);

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);

let resultTwo = appsArray.join(", ");
console.log(resultTwo);

const message = "You are welcome.";
console.log(message.replace(" ", "_"));
console.log(message);
console.log(message.replaceAll(" ", "-"));
console.log(message);

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
const csv = users.map(user => user.name).join(", ");
console.log(csv);

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

const csv = users.map(user => user.name).join(", ");
console.log(csv);

const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ul>`;
console.log(html);

const html = `<ol>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ol>`;
console.log(html);

const rows = [
    ["Carbs", "17g"],
    ["Protein", "19g"],
    ["Fat", "5g"],
];
console.log(rows);

const renderTableRows = rows => {
    return rows
        .map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
        .join("");
};
console.log(renderTableRows(rows));

const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);

const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);

const someOver18 = numbers.some(num => num >= 18);
console.log(someOver18);

const someUnder10 = numbers.some(num => num < 10);
console.log(someUnder10);

const items = ["Pen", "Paper"];
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
    return total + current;
});
console.log(`Sum is ${sum}`);

const numbers = [5, 2, 10];

const result = numbers.reduce((total, current) => {
    return total * current;
}, 1);
console.log(result);

const numbers = [10, 10];

const multiplication = numbers => {
    let sum = 1;
    numbers.forEach(num => (sum *= num));
    return sum;
};
console.log(multiplication(numbers));

const plus = numbers => {
    let sum = 0;
    numbers.forEach(num => (sum += num));
    return sum;
};
console.log(plus(numbers));
