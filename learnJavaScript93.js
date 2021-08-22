const dimensions = [20, 5];
const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const location = [24.34873, 2.8347];
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
console.log(getFullName(['Alex', 'Tomerson']));
//
const lat = [5.230];
const lng = [1.233];
const point = [...lat, ...lng];
console.log(point);
//
const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(items);
console.log(otherItems);
//
const sum = (x, y, z) => {
    return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));
//\\
const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
};
console.log(getApps(['Calculator'], ['App', 'Tv']));
//\\
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
console.log(user.id);
const key = 'age';
console.log(user[key]);
//\\
const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({id: 2, name: 'Sam'}, 'name'));
console.log(getValue({id: 3, name: 'Tom'}, 'id'));
//\\
const person = {
    id: 233,
    name: "Sam Green",
    age: 23
};
console.log(Object.keys(person));
console.log(Object.values(person));
//\\
const object1 = {
    a: 'something',
    b: 42,
    c: false
};
console.log(Object.keys(object1));
console.log(Object.values(object1));
//\\
const settings = {
    theme: "Dark",
    version: '2.4.1',
    beta: false
};
const keys = Object.keys(settings);
console.log(keys);
keys.forEach(key => {
    console.log(settings[key]);
});
//\\
const user = {
    firstName: 'Jason',
    lastName: 'Oliwest',
    age: 22,
    idNumber: 23872 
};
const keys = Object.keys(user);
console.log(keys);
keys.forEach(key => {
    console.log(user[key]);
});
//\\
const actor = {
    name: "Oliver Stone",
    age: 56,
    timeArriving: 12.00,
    assitent: 'Poll Anderson',
    id: 293823,
    idOdHelper: 92839283
};
const actorKeys = Object.keys(actor);
console.log(actorKeys);
actorKeys.forEach(key => {
    console.log(actor[key]);
});
//\\
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
};
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name"));
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year"));
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, 'id'));
//\\
const getCountProperties = course => {
    return Object.keys(course).length;
};
console.log(getCountProperties({id: 1, name: 'Learn JavaScript', year: 2021, category: 'Programming'}));
console.log(getCountProperties({name: 'Learn JavaScript', category: 'Programming'}));
console.log(getCountProperties({}));
//\\
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase()
    );
};
console.log(getUpperCasedProperties({id: 1, name: 'Learn JavaScript', year: 2021}));
//\\
const getLowerCasedProperties = course => {
    return Object.keys(course).map(key => key.toLowerCase());
};
console.log(getLowerCasedProperties({id: 23, nameOfCourse: "Python", year: 2023}));
//\\
const logValues = course => {
    return Object.keys(course).forEach(key => console.log(course[key]));
};
logValues({id: 23, name: 'Learn JavaScript', year: 2024});
//\\
const person = {
    id: 1,
    firstName: 'Sam'
};
console.log(`Hello ${person}`);
//\\
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const values = Object.values(user);
console.log(values);
//\\
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1));
//\\
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const entries = Object.entries(user);
console.log(entries);
//\\
const getUpperCasedValues = course => {
    return Object.values(course).map(value => value.toUpperCase());
};
console.log(getUpperCasedValues({name: 'Learn JavaScript', category: 'Programming'}));
console.log(getUpperCasedValues({name: 'Learn Python'}));
//\\
const vizualizeEntries = course => {
    return Object.entries(course).forEach(co => console.log(co));
};
vizualizeEntries([{name: 'Learn Python', year: 2022}, {name: 'Learn JavaScript', year: 2021}]);
//\\
const age = 18;
const id = 2323;
const car = 'Tesla';
const person = {
    name: 'John',
    age,
    id,
    car
};
console.log(person);
//\\
const darkMode = false;
const isAdmin = true;
const settings = {
    isAdmin,
    darkMode
};
console.log(settings);
//\\
const sum = (a, b) => {
    console.log(a);
    console.log(b);
    let total = a + b;
    console.log(total);
    return total;
}
sum(1, 3);
//\\
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}
sum(1, 3);
//\\
const getUserObject = (id, name) => {
    return {id, name};
};
console.log(getUserObject(234, 'Sam'));
console.log(getUserObject(23, 'Tom'));
//\\
const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}
getProduct(2, 3);
//\\
const getSum = (a, b, c) => {
    console.log({a, b, c});
    let total = a + b + c;
    console.log({total});
    return total;
}
getSum(4, 4, 4);
//\\
const config = {
    id: 1,
    isAdmin: false,
    theme: {dark: false, accessibility: true}
};
//const id = config.id;
//console.log(id);
//const isAdmin = config.isAdmin;
//console.log(isAdmin);
//const theme = config.theme;
//console.log(theme);
const {id, isAdmin, theme} = config;