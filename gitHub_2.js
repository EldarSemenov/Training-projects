const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20,
};
console.log(user.id);
console.log(user.firstName);
console.log(user.age);
console.log(user.isAdmin);

user.lastName = "Semenov";
user.age = user.age + 29;

console.log(user);

const programmer = {};
console.log(programmer);

programmer.firstName = "Eldar";
programmer.lastName = "Semenov";

function getProductDetails() {
    return {
        id: 1,
        title: "Tesla Model 3",
        inStock: true,
    };
}
console.log(getProductDetails());

function getWeather(city) {
    return `It's currently ${city.value} degrees in ${city.name}`;
}
console.log(getWeather({ name: "Salt Lake City", value: 25 }));
console.log(getWeather({ name: "Eagle Mountain", value: 24 }));

const student = {
    name: "Alex Yeston",
    age: 19,
    fund: 1900,
};
function incerementAge(student) {
    student.age = student.age + 1;
    return student;
}
console.log(incerementAge(student));

function incerementFunds(student) {
    student.fund = student.fund + 200;
    return student;
}
console.log(incerementFunds(student));

console.log(student);

function welcomeUser(name = "user") {
    return `Hello ${name}`;
}
console.log(welcomeUser("Eldar"));
console.log(welcomeUser());

const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 1));

const grades = [10, 8, 12];

const result = grades.forEach(grade => {
    console.log(grade);
});

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(number => {
    return number > 10;
});
console.log(numbersAboveTen);

const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    });
    return sum;
};
console.log(sumGrades([10, 10, 10]));

const getPositiveTemp = temperatures => {
    return temperatures.filter(temp => {
        return temp > 0;
    });
};
console.log(getPositiveTemp([10, 1, -12, -34, -78, -2, 2]));

const sum = (a, b) => a + b;
console.log(sum(2, 2));

const isLegal = age => age >= 18;
console.log(isLegal(19));

const triple = value => value * 2;
console.log(triple(10));

const numbers = [9, 5, 14, 3, 11, 10, 17, 20];

const numbersAboveTen = numbers.filter(number => number >= 10);
console.log(numbersAboveTen);

const temperatures = [-12, 13, -4, -3, 90, -45];

const tempBelowZero = temperatures.filter(temperature => temperature < 0);
console.log(tempBelowZero);

const names = ["Jhon", "Eldar", "Mike", "Roman", "Ivan"];

const result = names.find(name => name === "Eldar");
console.log(result);

const test = names.includes(name => name === "Eldar");
console.log(test);

const numbers = [100, 100, 100];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const grades = [20, 12, 15, 18, 19, 19, 19];

const getRaisedGrades = grades => {
    return grades
        .map(grade => {
            if (grade + 1 > 20) {
                return 20;
            }
            return grade + 1;
        })
        .join(", ");
};
console.log(getRaisedGrades(grades));

const stringSizes = strings => {
    return strings.map(string => string.length);
};
console.log(stringSizes(["apple", "pear", "grapes"]));

const name = " Sam Blue ";
console.log(name);
console.log(name.trim());

const sentence = "Hello there. Welcome!";
console.log(sentence.startsWith("H"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.endsWith("!"));
console.log(sentence.endsWith("Welcome"));
console.log(sentence.includes("there"));

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray);
