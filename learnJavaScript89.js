const grades = [12, 12];
const sum = grades.reduce((total, current) => {
    return total + current
}, 0);
console.log(sum);
//
const numbers = [4, 4];
const multiply = numbers.reduce((total, current) => {
    return total * current;
}, 1);
console.log(multiply);
//
//const actionForEach = numbers.forEach(number => {
//    return number[0] * number[1];
//}, 1);
//console.log(actionForEach);
//
const sumNumbers = numbers => {
    return numbers.reduce((total, current) => {
        return total + current;
    }, 0);
}
console.log(sumNumbers([1, 1, 1]));
//
const multiplyNumbers = numbers => {
    return numbers.reduce((total, number) => {
        return total * number;
    }, 1);
}
console.log(multiplyNumbers([2, 2]));
//
const dimensions = [20, 5];
const width = dimensions[0];
const height = dimensions[1];
console.log(width);
console.log(height);
//
const dimensions = [20, 5];
const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const parameters = [10, 20, 5];
const [width, long, height] = parameters;
console.log(height);
//
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
//
const location = [24.87343, 2.8374];

const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};
console.log(getLocationString(location));
//
const getFullName = user => {
    const [firstName, lastName] = user;
    return `${firstName} ${lastName}`;
};
console.log(getFullName(["Alex", "Blue"]));
//
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point);
//
const items = ['Tissues', 'Oranges'];
const otherItems = [...items, 'Tomatoes'];
console.log(otherItems);
//
const sum = (x, y, z) => {
    return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));
//
const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
}
console.log(getApps(['calculator', 'tv'], ['smartphone', 'console']));
//
const user = {
    id: 1,
    name: "Sam Green"
};
console.log(user.id);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = 'id';
console.log(user[key]);
const value1 = 'name';
console.log(user[value1]);
const value2 = 'age';
console.log(user[value2]);
//
const person = {
    idNumber: 2983,
    firstName: 'Jason',
    lastName: 'Geolious',
    age: 21,
    nickName: 'First'
};
const value1 = 'idNumber';
console.log(person[value1]);
const value2 = 'firstName';
console.log(person[value2]);
const value3 = 'lastName';
console.log(person[value3]);
const value4 = 'age';
console.log(person[value4]);
const value5 = 'nickName';
console.log(person[value5]);
//
const city = {
    lat: 23.983,
    lng: 2.903,
    name: 'Los Angeles',
    code: 293
};
const key1 = 'lat';
console.log(city[key1]);
const key2 = 'lng';
console.log(city[key2]);
const key3 = 'name';
console.log(city[key3]);
const key4 = 'code';
console.log(city[key4]);
//
const numbers = {
    first: 29382,
    second: 22983,
    third: 2832777
};
const key1 = 'first';
console.log(numbers[key1]);
const key2 = 'second';
console.log(numbers[key2]);
const key3 = 'third';
console.log(numbers[key3]);