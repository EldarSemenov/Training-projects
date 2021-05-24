const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const key = "id"; 
console.log(user[key]);
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({id: 2, name: "Sam"}, "name"));// Sam
console.log(getValue({id: 2, name: "Green"}, "id"));// 2
//
const user1 = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const keys = Object.keys(user1);
console.log(keys);
//
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object1));
//
const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};
const key1 = Object.keys(settings);
console.log(key1);
key1.forEach(key => {
    console.log(settings[key]);
});
//
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
};
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name"));
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year"));
//The course name is Learn JavaScript
//The course year is 2021
//
const getCarDetails = (car, detail) => {
    return `The ${detail} of this car is ${car[detail]}`; 
};
console.log(getCarDetails({name: "Volvo", price: 34000, year: 2018}, "name"));
console.log(getCarDetails({name: "Volvo", price: 34000, year: 2018}, "price"));
//
const getStudentDetails = (student, detail) => {
    return `The ${detail} of this student is ${student[detail]}`;
}
console.log(getStudentDetails({firstName: "Alex", lastName: "Doe", 
age: 23, id: 28947}, "age"));
console.log(getStudentDetails({firstName: "Alex", lastName: "Doe", 
age: 23, id: 28947}, "firstName"));
/*
const house = {
    name: "Neverland",
    price: 1.500000,
    year: 2029
};
const getHouseDetails = (house, name) => {
    return `
The ${name} of this house is ${house[name]}`;
};
//console.log(getHouseDetails(house[name]), "name");
//
/*const getHouse = house => {
    return `${house}`;
}; console.log(getHouse(${house}));
*/
const getHouseDetails = (house, detail) => {
    return `The ${detail} of this house is ${house[detail]}`; 
};
console.log(getHouseDetails({name: "Neverland",
price: 1.500000, year: 2029}, "name"));
console.log(getHouseDetails({name: "Neverland",
price: 1.500000, year: 2029}, "price"));
console.log(getHouseDetails({name: "Neverland",
price: 1.500000, year: 2029}, "year"));
//
const getCountProperties = course => {
    return Object.keys(course).length;
};
console.log(getCountProperties({id: 1, name: "Learn JavaScript",
year: 2021, category: "Programming"}));
console.log(getCountProperties({name: "Learn JavaScript", category: "Programming"}));
//
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key =>
        key.toUpperCase());
};
console.log(getUpperCasedProperties({id: 1,
name: "Learn JavaScript", year: 2021}));
console.log(getUpperCasedProperties({name: "Learn JavaScript",
category: "Programming"}));