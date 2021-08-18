const person = {
    id: 1,
    firstName: "Sam"
};
console.log(person.age);
console.log(`Hello ${person.firstName}`);
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
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1));
//
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const entries = Object.entries(user);
console.log(entries);
//
const getUpperCasedValues = course => {
    return Object.values(course).map(value => {
        return value.toUpperCase();
    });
}
console.log(getUpperCasedValues({course: 'Learn JavaScript'}));
//
const visualizeEntries = course => {
    return Object.entries(course);
};
console.log(visualizeEntries({id: 1, name: 'Learn JavaScript', year: 2021}));
//
function lastCharacter(name){
    return name[name.length - 1];
};
console.log(lastCharacter('House'));
//
function getNextAge(age){
    if(age === '') {return 0;}
    return Number.parseInt(age, 10) + 1
};
console.log(getNextAge(22));
console.log(getNextAge('f'));
console.log(getNextAge('25'));
//
function getDiscriptionText(text){
    if(text.length > 10){
        return text.substirng(0, 10) + '...';
    }
    return text;
};
console.log(getDiscriptionText('The first characters of the text'));
console.log(getDiscriptionText("How are?"));
//
function getDescriptionText(text){
    if(text.length > 10){
        return text.substring(0, 10) + '...';
    }
    return text;
};
console.log(getDescriptionText('How can I help you?'));
console.log(getDescriptionText('The code'));
//
function useCalculator(apps){
    apps.push("Calculator");
    return apps;
};
console.log(useCalculator(['tv', 'radio']));