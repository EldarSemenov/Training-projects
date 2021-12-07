function getNextAge(age) {
    if(age === "") {
        return 0;
    } else {
        return Number.parseInt(age + 1);
    }
}
console.log(getNextAge(''))
console.log(getNextAge(23));
//
const grades = [10, 8, 13];
grades.forEach(function(grade) {
    console.log(grade);
});
//
let names = ['Sam', 'Alex', 'Charlie'];
let result  = names.find(function(name) {
    return name === 'Alex';
});
console.log(result);
//
let numbers = [9, 5, 14, 3, 11];

let letFirstNumberAboveTen = numbers.find(function(number) {
    return number > 10;
});
console.log(letFirstNumberAboveTen);
//
const numbers = [2, 3, 5, 10];
const doubled = numbers.map(function(num) {
    return num * 2;
}); 
console.log(doubled);
//
const names = ['sam', 'Alex'];
const action = names.map(function(name) {
    return name.toUpperCase();
});
console.log(action);
//
const user = {
    id: 1,
    firstName: 'Sam',
    lastName: 'Doe',
    age: 20
};
user.lastName = 'Green',
user.age = user.age + 20,
console.log(user);
//
function getWeatherCity(city){
    return `It's currently ${city.value} degrees in ${city.name}`;
}
console.log(getWeatherCity({name: 'Berlin', value: 3}));