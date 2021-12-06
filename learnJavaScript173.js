for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}
for(let counter = 10; counter <= 100; counter++) {
    console.log(counter);
}
//
for(let count = 10; count <= 100; count++) {
    console.log(count);
}
for(let counter = 0.1; counter <= 1; counter++) {
    console.log(counter);
}
//
for(let counter = -1; counter <= 10; counter++){
    console.log(counter);
}
//
const people = ['Sam', 'Alex'];

for(let index = 0; index < people.length; index++) {
    console.log(people[index]);
}
//
const people = ['Sam', 'Alex'];
people.forEach(person => {
    console.log(person);
});
for(let number = 5; number >= 0; number--) {
    console.log(number);
}
for(let num = 10; num >= 0; num--) {
    console.log(num);
}
//
for(let num = 0; num <= 20; num += 2) {
    console.log(num);
}
//
for(let number = 27; number >= 0; number -= 3){
    console.log(number);
}
//
for(let number = 0; number <= 100; number += 5){
    console.log(number);
}
//
const logFromOneToTwenty = () => {
    for(let number = 1; number <= 20; number++) {
        console.log(number);
    }
}
logFromOneToTwenty();
//
const logOneToTwentyOdd = () => {
    for(let num = 1; num <= 20; num += 2) {
        console.log(num);
    }
}
logOneToTwentyOdd();
//
const logFifteenToZero = () => {
    for(let num = 15; num >= 0; num--) {
        console.log(num);
    }
}
logFifteenToZero();
//
const people = ['Sam', 'Alex'];
for(const person of people) {
    console.log(person);
}
//
const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
for(const num of numbers) {
    console.log(num);
}
//
let sum = 0;
for (const number of numbers) {
    sum += number;
    if(sum >= 500) {
        break;
    }
}
//
const items = [1, 2, 3, 4];

for(const item of items) {
    if(item % 2 === 0) {
        console.log('Even number, skip the iteration');
        continue;
    }
    console.log('Odd number', item);
}
//
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const item of items) {
    if(item % 2 === 0) {
        console.log('Even number, skip the iteration');
        continue;
    }console.log('Odd number:', item);
}
//
const numbers = [1, 3, 5, 7, 6, 10, 23, 56, 89, 44, 66, 90, 34, 23, 11];

for(const number of numbers) {
    if(number % 2 !== 0) {
        console.log('This is odd number. Let`s skip it!');
        continue;
    }
    console.log('Appropriate number:', number);
}
//
const names = ['Dorian', 'Marcus', 'Alexandr', 'Tom', 'Eldar', 'Natalia'];
for(const name of names) {
    if(name.length % 2 === 0) {
        console.log('This name contains not odd number:', name);
        continue;
    } console.log('Odd name:', name);
}
//
const numbers = [34, 23, 44, 56, 12, 11, 13, 10, 9, 2, 17, 19, 45, 76, 88, 77, 71, 93];
for(const number of numbers) {
    if(number % 2 !== 0) {
        console.log('Odd number:', number);
        continue;
    } console.log('Even number:', number);
}
//
const sumNumbers = numbers => {
    let sum = 0;
    for(const number of numbers) {
        sum += number;
    } return sum;
}
console.log(sumNumbers([12, 12]));
console.log(sumNumbers([100, 200]));
//
const person = {
    id: 1,
    name: 'Alex',
    lastName: 'Muro'
};
for(const key in person) {
    console.log(key);
    console.log(person[key]);
}
//
const createShape = shape => {
    for(const key in shape){
        console.log(shape[key]);
    }
}
createShape({
    type: 'square',
    dimensions: [10, 10]
});
createShape({
    type: 'rectangle',
    dimensions: [20, 15]
});
//
const array = ['apple', 'orange', 'pear'];

for(const item of array) {
    console.log(item);
}