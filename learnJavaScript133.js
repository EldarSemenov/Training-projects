const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
const API = new FetchWrapper("https://api.learnjavascript.online");

API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
const button = document.querySelector("#button");
const result = document.querySelector("#result");

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

button.addEventListener("click", () => {
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
        result.textContent = data.message;
    });
});
//
const form = document.querySelector("#form");
const input = document.querySelector("#input");

const API = new FetchWrapper("https://api.learnjavascript.online");

form.addEventListener("submit", event => {
    event.preventDefault();
    API.put("/demo/grades.json", {
        grade: input.value
    }).then(data => {
        console.log(data);
    });
});
//
import FetchWrapper from "./exportFile120.js";

const citiesDropdown = document.querySelector("#cities-dropdown");
const result = document.querySelector("#weather-result");

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

citiesDropdown.addEventListener("change", () => {
    API.get(`weatherstack/${citiesDropdown.value}.json`)
    .then(data => {
        const temperature = data.current.temperature;
        result.textContent = `It's ${temperature} degries celsius`;
    });
});
//
function capitalize(word){
   return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
}
console.log(capitalize("nEUMANN"));
console.log(capitalize("gergia"));
//
const grade = 3;
if (grade >= 10) {
    console.log('Passing grade');
} else {
    console.log('Failing grade');
}
//
const grade = 10;

if (grade > 10) {
    console.log('Passing grade');
} else if (grade === 10) {
    console.log('Passing on the limit');
} else {
    console.log('Failin grade');
}
// 
const canVote = age => age >= 18;
console.log(canVote(19));
console.log(canVote(12));
//
function getNextAge (age) {
    if (age === "") {
        return 0;
    } 
    return Number.parseInt(age, 10) + 1;
}
console.log(getNextAge("120"));
console.log(getNextAge(""));
//
const getDescriptionText = text => {
    if(text.length > 10) {
        return text.substring(0, 10) + '...';
    } return text;
}
console.log(getDescriptionText('This  text that has more 10 chcarcters'));
console.log(getDescriptionText('Hello!'));
//
const numbers = [];
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.push(20);
console.log(numbers);
numbers.push(30, 40, 50);
console.log(numbers);
//
const grades = [10, 9, 334];
grades.forEach(function(grade) {
    console.log(grade);
});
grades.forEach(grade => {
    console.log(grade);
});
//
function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if(number > 0) {
            return sum += number;
        }
    }); 
    return sum;
}
console.log(sumPositiveNumbers(-1, -4, 5, 10));
//
function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if(number > 0) {
            return sum += number;
        } 
    }); return sum; 
    }
    // Sample usage - do not modify
    console.log(sumPositiveNumbers([15, -5, 10])); // 25
    console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

function sumPosNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if(number > 0) {
            return sum += number;
        }
    }); return sum;
}
console.log(sumPosNumbers(-2, -3, 4, 6));
//
function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if(number > 0) {
            return sum += number;
        } 
    }); return sum; 
}
console.log(sumPositiveNumbers([-2, -4, 2, 2]));
//
function getSumPosNumbers (numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if(number > 0) {
            return sum += number;
        }
    });
    return sum;
}
console.log(getSumPosNumbers([-12, -34, -34, -55, 2, -345, 6, 2]));
//
let numbers = [9, 5, 13, 3, 11];

let numbersAboveTen = numbers.filter(function(number) {
    return number >= 10;
});
console.log(numbersAboveTen);
//
let names = ['Sam', 'Alex', 'Charlie'];

let result = names.find(function(name) {
    return name === 'Alex';
});
console.log(result);
//
let numbers = [9, 5, 14, 3, 11];

let firstNumberAboveTen = numbers.find(function(number) {
    return number > 10;
});
console.log(firstNumberAboveTen);
//
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled);
//
const groceries = ['Apple', 'Peach', 'Tomato'];

console.log(groceries.includes('Tomato'));
//
const groceries = ['Apple', 'Peach', 'Tomato'];
console.log(groceries.join('; '));
//
const grades = [20, 12, 19, 23, 22, 11, 13, 15, 18, 19, 27];

function getRaisedGrades (grades) {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        } return grade + 1;
    });
}
console.log(getRaisedGrades(grades));
console.log(grades);
//
const ages = [22, 12, 44, 34, 67, 92, 55, 23, 11, 30, 20, 14, 9, 16, 17, 18];
//
function numberOfVoters (ages) {
    return ages.filter(function (age) {
        return age >= 18;
    }).length;
}
console.log(numberOfVoters(ages));
//
function getNumOfVoters (ages) {
    const result = ages.filter(function(age) {
        return age >= 18;
    });
    return result.length;
}
console.log(getNumOfVoters(ages));
//
const numOfVoters = ages => {
    return ages.filter(age => {
        return age >= 18;
    }).length;
}
console.log(numOfVoters(ages));
*/
const user = {
    id: 1,
    firstName: 'Eldar',
    lastName: 'Semenov',
    age: 20
}
user.lastName = 'Neumann';
user.age = user.age + 17;
console.log(user);