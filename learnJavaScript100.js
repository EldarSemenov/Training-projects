const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = 'id';
console.log(user[key]);
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({id: 2, name: 'Sam'}, 'name'));
console.log(getValue({id: 2, name: 'Sam'}, 'id'));
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}
console.log((getValue({id: 23, name: 'Sam', lastName: 'Tompson'}, 'lastName')));
//
const user = {
    id: 1, 
    name: 'Sam Green',
    age: 20
}
const keys = Object.keys(user);
console.log(keys);
//
const object = {
    a: 'some string',
    b: 42,
    c: false
};
console.log(Object.keys(object));
//
const settings = {
    theme: 'Dark',
    version: '2.4.1',
    beta: false
}
const keys = Object.keys(settings);
console.log(keys);
keys.forEach(key => {
    console.log(settings[key]);
});
//
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
}
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'name'));
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'year'));
//
const getCountProperties = course => {
    return Object.keys(course).length;
}
console.log(getCountProperties({id: 1, name: 'Learn JavaScript', year: 2021, category: 'Programming'}));
console.log(getCountProperties({name: 'Learn JavaScript', category: 'Programming'}));
console.log(getCountProperties({}));
//
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
} 
console.log(getUpperCasedProperties({id: 1, name: 'Learn JavaScript', year: 2021}));
console.log(getUpperCasedProperties({name: 'Learn JavaScript', category: 'Programming'}));
//
const logValues = course => {
    return Object.keys(course).forEach(key => console.log(course[key]));
}
logValues({id: 1, name: 'Learn JavaScript', year: 2021});
//
const translations = {
    welcome: {
        dutch: 'Welkom',
        french: 'Bienvenue',
        english: 'Welcome'
    }
};