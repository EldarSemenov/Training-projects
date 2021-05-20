const person = {
    firstName: "Jennifer",
    lastName: "Doe",
    age: 18
};
const incrementAge = person => {
    person.age = person.age + 1;
    return person;
}; console.log(incrementAge(person));
//
function addOne(number = 0){
    return number + 1;
}
console.log(addOne());
console.log(addOne(9));
//
const welcomeUser = (name = 'user') => {
    return `Hello ${name}`;
}; console.log(welcomeUser());
console.log(welcomeUser("Sam"));
//
const multiply = (a, b = 1) => {
    return a * b;
}; console.log(multiply(2, 2));
console.log(multiply(5));
//
const sum = (a = 0, b = 0) => {
    return a + b;
}; console.log(sum());
console.log(sum(10, 20));
//
const logUserIds = (userIds = []) => {
    userIds.forEach(userId => {
        console.log(userId);
    });
}; console.log(logUserIds([90, 22, 43]));
console.log(logUserIds());
//
let list = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
let actList = list.map(item => item.length);
console.log(actList);
//
const grades = [10, 13, 46];
grades.forEach(grade => {
    console.log(grade);
});
let num = [10, 23, 44, 90, 10, 120];
let act = num.filter(n => {
    return n > 100;
}); console.log(act);
//
const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        return sum += grade;
    }); return sum;
}; console.log(sumGrades([100, 100]));
//
const getPositiveTemp = (temperatures) => {
    return temperatures.filter(temperature => {
        return temperature > 0;
    });
}; console.log(getPositiveTemp([-100, 23, -2, 3, 34]));
//
let numbers = [-4, 2, -5, 23, -1];
let a = numbers.filter(number => number > 0);
console.log(a);