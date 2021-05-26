/*const translations = {
    welcome: 
    {
    dutch: "Welkom",
    french: "Bienvenue",
    english: "Welcome"
    }
};
const getTranslation = (language) => {
    return translations.welcome[language];
};console.log(getTranslation(english));
*/
const person = {
    id: 1,
    firstName: "Sam"
}; console.log((`Hello ${person.firstName}!`));
//
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const values = Object.values(user);
console.log(values);
//
const object1 = {
    a: 'something',
    b: 42,
    c: false
}; console.log(Object.values(object1));
//
const user1 = {
    id: 1,
    name: "Aaron Jad",
    age: 20
}; const entries = Object.entries(user1);
console.log(entries);
//
const getUpperCaseValues = course => {
    return Object.values(course).map(value => 
        value.toUpperCase());
}; console.log(getUpperCaseValues({name: "Learn JavaScript"}));
console.log(getUpperCaseValues({name: "Learn JavaScript", category: "Programming"}));
//
const visualizeEntries = course => {
    return Object.entries(course);
}; console.log(visualizeEntries({id: 1, name: "Learn JavaScript", year: 2021}));