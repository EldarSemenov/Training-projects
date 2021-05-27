const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const key = "id";
console.log(user[key]);
//
const getvalue = (user, keyToRead) => {
    return user[keyToRead];
}; console.log(getvalue({id: 2, name: "Sam Green"}, "name"));
console.log(getvalue({id: 2, name: "Sam Green"}, "id"));
//
const keys = Object.keys(user);
console.log(keys);
//
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
}; console.log(Object.keys(object1));
//
const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};
const keys1 = Object.keys(settings);
console.log(keys1);
keys1.forEach(key => {
    console.log(settings[key]);
});
//
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
};
console.log(getCourseDetail({name: "Learn JavaScript", year: 2021}, "name"));
console.log(getCourseDetail({name: "Learn JavaScript", year: 2021}, "year"));
//
const getCountProperties = course => {
    return Object.keys(course).length;
}; console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021,
catedory: "Programming"
}));
//
const getUpperCasedProperties = (course) => {
    return Object.keys(course).map(key => key.toUpperCase());
}; 
console.log(getUpperCasedProperties({id: 1, name: "Learn JavaScript", year: 2021,
catedory: "Programming"}));
//
const logValues = course => {
    return Object.keys(course).forEach(key => 
        console.log(course[key]));
}; (logValues({id: 1, name: "Learn JavaScript", year: 2021,
catedory: "Programming"}));
//
const person = {
    id: 1123,
    firstName: "Sam"
}; console.log(`Hello ${person}`);
//
const user1 = {
    id: 23,
    name: "Sam Green",
    age: 20
}; 
const values = Object.values(user1);
console.log(values);
//
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
}; console.log(Object.values(object2));
//
const user2 = {
    id: 2,
    name: "Avraam Lincoln",
    age: 21
}; const entries = Object.entries(user2);
console.log(entries);
//
const object3 = {
    a: 'somestring',
    b: '42'
};
for (const[key, value] of Object.entries(object3)) {
    console.log(`${key}: ${value}`);
};
//
const getUpperCasedValues = course => {
    return Object.values(course).map(value =>
        value.toUpperCase());
    };
console.log(getUpperCasedValues({name: "Java Script", user: "Eldar"}));
//
const visualizeEntries = course => {
    return Object.entries(course);
}; console.log(visualizeEntries({id: 1, name: "Learn JavaScript", year: 2021}));
//
const age = 18;
const person1 = {
    name: "John",
    age
};
//
const isAdmin = false;
const darkMode = true;
const settings1 = {
    isAdmin,
    darkMode
}; console.log(settings1);
//
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}; console.log(sum(1, 4));
//
const getUser = (id, name) => {
    return {id, name};
}; console.log(getUser(23, "Sam"));
console.log(getUser(2, "John"));
//
const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}; getProduct(4, 4);
//
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
//const id = config.id; 
//const isAdmin = config.isAdmin;
//const theme = config.theme;
// This can be refactored with object destructuring as follows:
//const {id, isAdmin, theme} = config;
//
//const {isAdmin, theme} = config;
// Basic assignment
const user3 = {
    id: 23,
    is_varified: true
}; const {id, is_varified} = user3;
console.log(id); 
console.log(is_varified);
//
const student = {
    name_: "Alex",
    id_: 82646234
};
const {name_, id_} = student;
console.log(name_);
console.log(id_);