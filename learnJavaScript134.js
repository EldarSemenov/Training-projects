function welcomeUser(name = 'User'){
    return `Hello ${name}`;
}
console.log(welcomeUser('Sam'));
console.log(welcomeUser());
//
function logUserIds (userIds = []) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
}
logUserIds([10, 20, 30]);
logUserIds();
//
const sum = (a, b) => a + b;
console.log(sum(1, 1));
//
const isLegal = age => age >= 18;
console.log(isLegal(20));
//
const numbers = [9, 5, 14, 11, 3, 9];
const numbersAboveTen = numbers.filter(number => number > 10);
console.log(numbersAboveTen);
//
const names = ['Sam', 'Alex', 'Charlie'];
const result = names.find(name => name === 'Alex');
console.log(result);
//
const numbers = [2, 2, 2, 2, 2];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
//
const grades = [20, 12, 19, 20, 16, 18, 19, 20, 17];
const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(', ');
}
console.log(getRaisedGrades(grades));
console.log(grades);
//
const getMessage = message => {
    if(message.endsWith('.')) {
        return message;
    } else return message + '.';
}
console.log(getMessage('Hello World'));
console.log(getMessage('Hi.'));
console.log(getMessage('Good morning'));
//
const getUnit = text => {
    if(text.includes('℃')) {
        return 'Celsius';
    }else if(text.includes('°F')) {
        return 'Fahrenheit';
    } else {return 'N/A';}
    }
    
    // Sample usage - do not modify
    console.log(getUnit("It is 15°C today")); // Celsius
    console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
    console.log(getUnit("Why is it 20°C")); // Celsius
    console.log(getUnit("Are you sure that it'll be 55°F?")); // Fahrenheit
    console.log(getUnit("It is expected to be cold.")); 
//
let apps = 'Calculator,Phone,Contacts';
let appsArray = apps.split(',');
console.log(appsArray);
//
const message = "You are welcome.";
let result = message.replaceAll(" ", "_");
console.log(message);
console.log(result);
//
const getCountTodos = todos => {
    return todos.split(",").length;
}
console.log(getCountTodos('Laundry,Wash dishes,Clean table'));
console.log(getCountTodos('Feed cat,Degrease bike chain'));
//
const users = [
    {
        id: 1,
        name: 'Sam Doe'
    },
    {
        id: 2,
        name: 'Alex Blue'
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);
const csv = userNamesArray.join(', ');
console.log(csv);
//
const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ul>`;
console.log(html);
//
const persons = [
    {
        firstName: 'Alex',
        lastName: 'Muro',
        age: 23
    },
    {
        firstName: 'Jason',
        lastName: 'Kolisto',
        age: 56
    },
    {
        firstName: 'Eldar',
        lastName: 'Neumann',
        age: 37
    }
];
const html = `<ol>
${persons.map(person => `<li>${person.firstName}</li>`).join('')}</ol>`;
console.log(html);

const html_second = `<ul>${persons.map(person => `<li>${person.lastName}</li>`).join('')}</ul>`;
console.log(html_second);

const html_third = `<ol>${persons.map(person => `<li>${person.age}</li>`).join('')}</ol>`;
console.log(html_third);
//
const rows = [['Protein', '17g'], ['Carbs', '20g'], ['Fat', '30g']];

const renderTableRows = rows => {
   return rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('');
}
console.log(renderTableRows(rows));
//
const cars = [['Tesla', '39000'], ['BMW', '77000'], ['Elios', '200000']];

const renderCars = cars => {
    return cars.map(car => `<tr><td>${car[0]}</td><td>${car[1]}</td></tr>`).join('');
}
console.log(renderCars(cars));
*/
const persons = [['Alex', 'Muro'], ['Sergey', 'Melikov'], ['Tom', 'Boston']];

const randerPersonsNames = persons => {
    return persons.map(person => 
    `<tr><td>${person[0]}</td><td>${person[1]}</td></tr>`).join('');
}
console.log(randerPersonsNames(persons));