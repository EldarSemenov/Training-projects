class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}

function lastCharacter(name) {
    return name[name.length - 1];
}
console.log(lastCharacter("Eldar"));

function getDescription(text) {
    return text.substring(0, 10);
}
console.log(getDescription("sjdfjhslvslkjv"));

function getNextAge(age) {
    if (age === "") {
        return 0;
    } else if (age === undefined) {
        return "You did not indicate the age";
    }
    return Number.parseInt(age, 10) + 100;
}
console.log(getNextAge("3984"));
console.log(getNextAge());
console.log(getNextAge(""));

function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if (number >= 0) {
            return (sum += number);
        }
    });
    return sum;
}
console.log(sumPositiveNumbers([-2, -3, -4, 5, 4]));

function getSumNegativeNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (num) {
        if (num < 0) {
            return (sum += num);
        }
    });
    return sum;
}
console.log(getSumNegativeNumbers([-2, -2, 4, 5, 6, 9, 12]));

function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if (number % 2 !== 0) {
            sum += number;
        }
    });
    return sum;
}
console.log(sumOddNumbers([3, 4, 3, 22, 3]));

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(function (number) {
    return number > 10;
});
console.log(numbersAboveTen);

let numbers = [10, 20, 30];

let numbersLessThanTwenty = numbers.filter(function (num) {
    return num <= 20;
});
console.log(numbersLessThanTwenty);

let names = ["Sam", "Alex", "Charlie"];

let result = names.find(function (name) {
    return name === "Alex";
});
console.log(result);

let numbers = [9, 5, 14, 3, 11];
let firstNumberAboveTen = numbers.find(function (num) {
    return num > 10;
});
console.log(firstNumberAboveTen);

function getYear(years, searchYear) {
    return years.find(function (year) {
        return year === searchYear;
    });
}
console.log(getYear([2020, 2021, 2022], 2021));

let numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (num) {
    return num * 2;
});
console.log(doubled);

const names = ["Sam", "Alex"];

const upperNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(upperNames);

const groceries = ["Apple", "Peach", "Tomato"];

console.log(groceries.includes("Tomato"));
console.log(groceries.toString());
console.log(groceries.join(", "));

function getRaisedGrades(grades) {
    return grades.map(function (grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}
console.log(getRaisedGrades([20, 20, 19, 19, 18, 17]));

function getVotersCount(ages) {
    return ages.filter(function (age) {
        return age >= 18;
    }).length;
}
console.log(getVotersCount([12, 13, 16, 17, 19, 21, 45]));

const user = {
    id: 1,
    firstName: "Eldar",
    lastName: "Neumann",
    age: 20,
};
user.lastName = "Semenov";
user.age = 37;
user.age = user.age + 1;
console.log(user);
console.log(user.id);
console.log(user.firstName);

function addOne(number = 0) {
    return number + 1;
}
console.log(addOne(3));
console.log(addOne());

function welcomeUser(name = "user") {
    return `Hello ${name}`;
}
console.log(welcomeUser("Eldar"));
console.log(welcomeUser());

const sum = function (a = 0, b = 0) {
    return a + b;
};
console.log(sum(11, 1));

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 2));

const minus = (a, b) => a - b;
console.log(minus(10, 2));

const grades = [10, 8, 13];

const func = grades.forEach(grade => {
    console.log(grade);
});

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(num => {
    return num > 10;
});
console.log(numbersAboveTen);

let degrees = [-1, -2, 4, 5];

const positiveDegrees = degrees.filter(degree => degree > 0);
console.log(positiveDegrees);

const names = ["Sam", "Eldar", "Charlie"];

const result = names.find(name => name === "Eldar");
console.log(result);
