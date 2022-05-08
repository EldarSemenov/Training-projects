let numbers = [9, 5, 14, 3, 11];
let firstNumberAboveTen = numbers.find(function (number) {
    return number > 10;
});
console.log(firstNumberAboveTen);

let num = numbers.filter(function (number) {
    return number >= 12;
});
console.log(num);

let condition = numbers.filter(function (number) {
    return number >= 100;
});
console.log(condition);

let conditionTwo = numbers.find(function (number) {
    return number >= 100;
});
console.log(conditionTwo);

function FindYear(years, searchYear) {
    return years.find(function (year) {
        return year === searchYear;
    });
}
console.log(FindYear([2022, 2021, 2000], 2022));
console.log(FindYear([2011, 0202], 0213));

function getOddYears(years) {
    return years.filter(function (year) {
        return year % 2 !== 0;
    });
}
console.log(getOddYears([2022, 2033, 2042, 2012, 2011, 2055]));

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled);

const names = ["sam", "alex"];

const upperNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(upperNames);

const groceries = ["Apple", "Peach", "Tomato"];

let testOne = groceries.includes("Tomato");
console.log(testOne);

let testTwo = groceries.join(", ");
console.log(testTwo);

function isAppUsed(apps, app) {
    return apps.includes(app);
}
console.log(isAppUsed(["Tv", "iPhone"], "iPhone"));

function getStringSize(strings) {
    return strings.map(function (string) {
        return string.length;
    });
}
console.log(getStringSize(["Apple", "Pear", "Water"]));

function getRaisedGrades(grades) {
    return grades.map(function (grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}
console.log(getRaisedGrades([12, 13, 14, 15, 19, 20]));

function getVotersCount(ages) {
    return ages.filter(function (age) {
        return age >= 18;
    }).length;
}
console.log(getVotersCount([12, 45, 18, 19, 2, 14, 14, 17, 19]));

function getAmountVoters(ages) {
    const result = ages.filter(function (age) {
        return age >= 18;
    });
    return result.length;
}
console.log(getAmountVoters([12, 13, 14, 15, 16, 18, 20]));
