let numbers = [9, 5, 14, 3, 11];
let numbersAboveTen = numbers.filter(function(number){
    return number >= 10;
}); 
console.log(numbersAboveTen);
//
let years = [2000, 2008, 2020, 2023];
let act = years.filter(function(year){
    return year >= 2010;
});
console.log(act);
//
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
//
function returnPositiveTemperatures(temperatures){
    return temperatures.filter(function(temperature){
        return temperature > 0;
    });
}
console.log(returnPositiveTemperatures([20, -1, -2, -23, 5]));
//
function getFreezingTemperatures(temperatures){
    return temperatures.filter(function(temperature){
        return temperature < 0;
    });
}
console.log(getFreezingTemperatures([23, 12, 44, 56, 11, -4]));
//
let names = ["Sam", "Alex", "Charlie"];
let res = names.find(function(name){
    return name === "Alex";
});
console.log(res);
//
let numbers = [9, 5, 14, 3, 11];
let firstNumberAboveTen = numbers.find(function(number){
    return number > 10;
});
console.log(firstNumberAboveTen);
//
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
//
function getYear(years, searchYear){
    return years.find(function(year){
        return year === searchYear;
    });
}
console.log(getYear([2020, 2025, 2011, 2030], 2025));
console.log(getYear([2012, 2013, 2014], 2022));
//
function getOddYears(years){
    return years.filter(function(year){
        return year % 2 !== 0;
    });
}
console.log(getOddYears([2021, 2020, 2023, 2025, 2022]));
//
const numbers = [4, 4, 5, 5];
const doubled = numbers.map(function(number){
    return number * 2;
});
console.log(doubled);
//
const names = ['alex', 'eldar', 'elious', 'mattew'];
const UpperCase = names.map(function(name){
    return name.toUpperCase();
});
console.log(UpperCase);
//
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 100);
console.log(map1);
//
const groceries = ["Apple", "Peach", "Tomato"];
let action = groceries.includes("Tomato");
let action1 = groceries.includes("tomato");
console.log(action);
console.log(action1);
//
const array = [1, 2, 3];
console.log(array.includes(2));
//
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dino'));
//
const groceries = ["Apple", "Peach", "Tomato"];
console.log(groceries.toString());
//
const products = ["Apples", "Oranges", "Peaches", "Tomatos", "Grapes"];
console.log(products.join(", "));
console.log(groceries.join("; "));
console.log(groceries.join(" ,"));
//
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('---'));
//
function isAppUsed(apps, app){
    return apps.includes(app);
};
console.log(isAppUsed(['calculator', 'tv'], 'tv'));
console.log(isAppUsed(['calculator', 'phone', 'camera', 'tv'], 'electric Car'));
//
function getStringSizes(strings){
    return strings.map(function(string){
        return string.length;
    });
};
console.log(getStringSizes(['appsles', 'tv', 'covid', 'virus', 'length']));
//
function getTheNumberOfGrades(grades){
    return grades.length;
}
console.log(getTheNumberOfGrades([10, 12, 14, 16, 13, 19]));
//
function getSumGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
        return sum += grade;
    });
    return sum;
};
console.log(getSumGrades([20, 20, 20, 20, 20]));
//
function getTheAverageValue(grades){
    let sum = 0;
    grades.forEach(function(grade){
        return sum += grade / grades.length;
    });
    return sum;
}
console.log(getTheAverageValue([10, 11, 12, 17, 19, 20, 15, 16, 14]));
//
function getPassingGrades(grades){
    return grades.filter(function(grade){
        return grade >= 10;
    });
};
console.log(getPassingGrades([10, 11, 9, 7, 4, 6, 3, 15]));
//
function getFailingGrades(grades){
    return grades.filter(function(grade){
        return grade <= 9;
    });
};
console.log(getFailingGrades([12, 12, 9, 34, 5, 6, 7]));
//
function getRaisedGradesByOne(grades){
    return grades.map(function(grade){
        if(grade + 1 > 20) {return 20;}
        return grade + 1;
    });
};
console.log(getRaisedGradesByOne([20, 20, 20, 18, 18, 15, 17]));
//
function getVotersCount(ages){
    return ages.filter(function(age){
        return age >= 18;
    }).length;
};
console.log(getVotersCount([12, 19, 22, 11, 5, 89, 45, 23, 66, 45, 3, 24, 18, 17, 19, 20, 21, 3, 5, 14]));
//
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
console.log(user.id);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user);
user.lastName = 'Blue';
user.age = user.age + 10;
console.log(user);
//
function getProductDetails(){
    let product = {
        release: 1988,
        title: "Amazon-Liberty",
        price: 34000,
        devisedBy: "Steven Kolinson"
    };
    return product;
};
console.log(getProductDetails());
//
console.log(getWeather({name: "Amsterdam", value: 3}));
console.log(getWeather({name: "Brasilia", value: 24}));
function getWeather(city){
    return `It's currently ${city.value} degrees in ${city.name}`;
};
//
const person = {
    firstName: "Jenifer",
    lastName: "Doe",
    age: 20
};
console.log(incrementAge(person));
function incrementAge(person){
    person.age = person.age + 10;
    return person;
};
//
function addOne(number = 0){
    return number + 1;
};
console.log(addOne(10));
console.log(addOne());
//
function welcomeUser(name = "User"){
    return `Hello ${name}. We are glad to see you in our site`;
};
console.log(welcomeUser("Samuel"));
console.log(welcomeUser());
//
function multiply(a, b = 1){
    return a * b;
};
console.log(multiply(10, 10));
console.log(multiply(100));
//
function sum(a = 0, b = 0){
    return a + b;
};
console.log(sum());
console.log(sum(1, 3));
//
function logUserIds(userIds = []){
    userIds.forEach(function(userId){
        console.log(userId);
    });
};
logUserIds([10, 15, 14]);
logUserIds();
//
const sum = (a, b) => {
    return a + b
};
console.log(sum(1, 1));
//
const triple = value => {
    return value * 3;
};
console.log(triple(3));
//
const grades = [10, 8, 13];
grades.forEach((grade) => {
    console.log(grade);
});
*/
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number)=> {
    console.log(number);
});
const action = numbers.map((number) => {
    return number * 100;
});
console.log(action);
//
const action2 = numbers.filter((number) => {
    return number >= 30;
});
console.log(action2);
//
const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    });
    return sum;
};
console.log(sumGrades([12, 12, 12]));