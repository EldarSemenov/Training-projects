let double = x => x * 2;
console.log(double(100));
//
let sum = (a, b) => a * b;
console.log(sum(12, 12));
//
let $sum = (a, b) => a + b;
console.log($sum(100, 100));
//
let number = [100, 200, 300, 400, 500];
let changeNumber = number.map(num => num + 1);
console.log(changeNumber);
//
let friends = [
    {name: "Julia", age: 22},
    {name: "Jason", age: 21},
    {name: "Larson", age: 12},
    {name: "Edison", age: 34},
    {name: "Karl", age: 11},
    {name: "Markus", age: 17},
    {name: "Winson", age: 15},
    {name: "Jhon", age: 22}
];
let action = friends.filter(friend => friend.age >= 18);
console.log(action);
//
let words = ['word', 'yes', 'no', 'color', 'house', 'home'];
let act$ = words.filter(word => word.length > 4);
console.log(act$);
//
const getPassingGrade = grades => {
    return grades.filter(grade => grade >= 10);
}; console.log(getPassingGrade([12, 44, 1, 90, 8, 5, 7, 33]));
//
const getFreezingTemp = temperatures => {
    return temperatures.filter(temp => temp <= 0);
}; console.log(getFreezingTemp([3, -10, 23, -3, 0]));
//
const itHasAmsterdam = cities => {
    return cities.includes("Amsterdam");
}; console.log(itHasAmsterdam(["New York", "Minneapolis", "Sacramento", "Amsterdam"]));
//
const getNamesString = people => {
    return people.join(", ");
}; console.log(getNamesString(["Jhon", "Julia", "Larson"]));
//
const splitBySemiColon = string => {
    return string.split(" ;");
}; console.log(splitBySemiColon("Laris;Lorem;Bolis"));
//
const arrayToUpperCase = names => {
    return names.map(name => name.toUpperCase());
}; console.log(arrayToUpperCase(["loris", "jason", "julia"]));
//
const doubleNumberGrade = grades => {
    return grades.map(grade => grade * 2);
}; console.log(doubleNumberGrade([100, 200, 300]));
//s