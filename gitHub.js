console.log("Hello World");

const grades = [10, 8, 13];

grades.forEach(function (grade) {
    console.log(grade);
});

function loopThroughElements(elements) {
    return elements.forEach(function (element) {
        console.log(element);
    });
}
loopThroughElements(["Apples", "Pears", "Grapes"]);

const arrowLoopThroughElements = elements => {
    return elements.forEach(element => {
        console.log(element);
    });
};
arrowLoopThroughElements(["BMW", "Tesla", "Toyota"]);
console.log("Hello World!");

const grades = [10, 14, 15];
grades.forEach(function (grade) {
    console.log(grade);
});

const people = ["Sam", "Alex"];
people.forEach(function (person) {
    console.log(person);
});

const buildings = ["Main", "Brothers", "Pink"];
buildings.forEach(function (object) {
    console.log(object);
});

function logUserIds(userIds) {
    userIds.forEach(function (userId) {
        console.log(userId);
    });
    return true;
}

function logGrades(grades) {
    grades.forEach(function (grade) {
        console.log(grade);
        return 10;
    });
    return 20;
}

function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum = sum + grade;
    });
    return sum;
}
console.log(sumGrades([10, 10, 10]));
console.log(sumGrades([50, 50]));

function getPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if (number >= 0) {
            return (sum = sum + number);
        }
    });
    return sum;
}
console.log(getPositiveNumbers([12, 10, 1, -34, -1, -33, 100]));

function getSumOfOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if (number % 2 !== 0) {
            return (sum = sum + number);
        }
    });
    return sum;
}

console.log(getSumOfOddNumbers([20, 1, 3, 5, 40]));

function getSumOfEvenNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (num) {
        if (num % 2 === 0) {
            return (sum = sum + num);
        }
    });
    return sum;
}
console.log(getSumOfEvenNumbers([20, 1, 3, 5, 40]));

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(function (number) {
    return number >= 10;
});
console.log(numbersAboveTen);

let years = [2000, 2008, 2020, 2023];

let yearAbove = years.filter(function (year) {
    return year >= 2010;
});
console.log(yearAbove);

function temperaturesAboveTen(temperatures) {
    return temperatures.filter(function (temp) {
        return temp > 0;
    });
}
console.log(temperaturesAboveTen([2, -1, -10, 3]));

function getFrizingTemperatures(temperatures) {
    return temperatures.filter(function (temp) {
        return temp < 0;
    });
}
console.log(getFrizingTemperatures([-21, 33, -2, 90, -5]));

let names = ["Sam", "Alex", "Charlie"];
let result = names.find(function (name) {
    return name === "Alex";
});
console.log(result);
