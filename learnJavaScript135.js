const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);
//
const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);
const someUnder10 = numbers.some(number => number < 10);
console.log(someUnder10);
//
const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10);
console.log(allAbove10);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);
const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);
const someUnder10 = numbers.some(number => number < 10);
console.log(someUnder10);
//
const items = ['Pen', 'Paper'];
items.length = 0;
console.log(items);
//
const products = ['Paper', 'Pen', 'Staples', 'Pencil', 'Computer', 'Printer', 'Table'];

const deleteItem = products.splice(1, 1);
console.log(products);
const deldeteLastItem = products.splice(5, 1);
console.log(products);
const deleteComputer = products.splice(3, 1);
console.log(products);
const deleteTwoItems = products.splice(2, 2);
console.log(products);
const deleteFirstItems = products.splice(0, 1);
console.log(products);
const deleteLastItem = products.splice(0, 1);
console.log(products);
//
const grades = [20, 20, 20];

const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const multiply = grades.reduce((total, current) => {
    return total * current;
}, 1);
console.log(multiply);
//
const dimensions = [20, 5];

const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const location = [24.34873, 2.8373];

const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
}
console.log(getLocationString(location));
//
const getFullName = user => {
   const [firstName, lastName] = user;
   return `${firstName} ${lastName}`;
}
console.log(getFullName(['Sam', 'Blue']));
console.log(getFullName(['Elios', 'Neumanm']));
//
const lat = [5.234];
const lng = [1.412];

const point = [...lat, ...lng];
console.log(point);
//
const items = ['Tomatoes', 'Oranges'];
const otherItems = [...items, 'Apples'];
console.log(otherItems);
//
const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
}
console.log(getApps(['Calculator', 'Whatsapp'], ['Chrome', 'Firefox']));
//
const user = {
    id: 1,
    name: 'Sam Green'
};
console.log(user.id);
console.log(user.name);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = 'id';
console.log(user[key]);
const keyName = 'name';
console.log(user[keyName]);
const keyAge = 'age';
console.log(user[keyAge]);
//
const getValue = (user, keyToRead) => {
   return user[keyToRead];
}
console.log(getValue({id: 2, name: 'Sam'}, 'name'));
console.log(getValue({id: 2, name: 'Sam'}, 'id'));
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const keys = Object.keys(user);
console.log(keys);
//
const settings = {
    theme: 'Dark',
    version: '2.4.1',
    beta: false
};
const keys = Object.keys(settings);
console.log(keys);
keys.forEach(key => {
    console.log(settings[key]);
});
//
const user = {
    id: 23,
    firstName: 'Alex',
    lastName: 'Dinis',
    age: 44
};
const keys = Object.keys(user);
console.log(keys);
keys.forEach(key => {
    console.log(user[key]);
});
//
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
}
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'name'));
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'year'));
//
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
}
console.log(getUpperCasedProperties({id: 2, name: 'JavaScript', year: 2021}));