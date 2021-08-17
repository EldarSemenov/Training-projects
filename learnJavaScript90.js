const user = {
    id: 212,
    firstName: "Sam",
    lastName: "Green",
    grade: 3,
    age: 22
};
const key1 = 'id';
console.log(user[key1]);
const key2 = 'firstName';
console.log(user[key2]);
const key3 = 'lastName';
console.log(user[key3]);
const key4 = 'grade';
console.log(user[key4]);
const key5 = 'age';
console.log(user[key5]);
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({id: 2, name: "Alex"}, 'id'));
console.log(getValue({id: 2, name: "Tom"}, 'name'));
//
const getValueOfObject = (object, value) => {
    return object[value];
};
console.log(getValueOfObject({firstName: "Jason", lastName: "Oreon"}, "firstName"));
console.log(getValueOfObject({firstName: "Jason", lastName: "Oreon"}, "lastName"));
//
const user = {
    id: 1, 
    name: "Sam Green",
    age: 20
};
const keys = Object.keys(user);
console.log(keys);
//
const person = {
    firstName: "Dilon",
    lastName: "Peterson"
};
const dd = Object.keys(person);
console.log(dd);
//
const object = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object));
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
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is the ${course[detail]}`;
};
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name"));
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year"));
//
const getSentence = (data, detail) => {
    return `The name of the ${detail} where we would like to be is ${data[detail]}`;
};
console.log(getSentence({action: "rest", city: 'Los Angeles'}, 'city'));
*/
const getCountProperties = course => {
    return Object.keys(course).length;
}
console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"}));
console.log(getCountProperties({name: "LearnJavaScript", category: "Programming"}));
console.log(getCountProperties({}));
//
const getUpperCaseProperties = course => {
    return Object.keys(course).map(key => {
        return key.toUpperCase();
    });
}
console.log(getUpperCaseProperties({id: 1, course: 'JavaScript', name: 'Eldar'}));
//
const logValues = course => {
    return Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
}
logValues({id: 1, name: 'Learn JavaScript', year: 2021});