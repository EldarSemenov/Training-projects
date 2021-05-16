let name = "Sam";
name += " Green";
console.log(name);
//
let a = 2;
let b = 'hello';
console.log(a += 3);
console.log(b += ' world');
//
function concatInitials(firstNameInitial, lastNameInitial){
    return `${firstNameInitial} ${lastNameInitial}`;
}; 
console.log(concatInitials("J", "D"));
console.log(concatInitials("James", "Aldor"));
//
console.log(`Welcome ${name}.
You have ${2 * 5} new notifications!`);
//
function sayHello(name){
    return `Hello ${name}`;
};
console.log(sayHello("Jack"));
//
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
};
console.log(getFullName("Sam", "Doe"));
console.log(getFullName("Alex", "Blue"));
//
const multilineString = () => {
    return `I am learning
    Java Script and it's 
    realy awesome!`;
};
console.log(multilineString());
//
function capitalize(word){
    return word[0].toUpperCase() +
    word.substring(1).toLowerCase();
};
console.log(capitalize("jHoN"));
console.log(capitalize("sam"));
console.log(capitalize("ALEX"));
console.log(capitalize("CHarLie"));
//
let answer = 42;
const act = answer.toString(); console.log(act);
//
function convertNumberToString(number){
    return number.toString();
};
console.log(convertNumberToString(234));
console.log(convertNumberToString(99));
//
let str = "42";
let aa = Number.parseInt(str, 10);
console.log(aa);
//
function getNextAge(age){
    return Number.parseInt(age, 10) + 1;
};
console.log(getNextAge("23"));
console.log(getNextAge(90));
//
let language = "C++";
console.log(language);
language = "Java Script";
console.log(language);
//
let x = 1;
if(x === 1){
    let x = 2; console.log(x);
};
console.log(x);
const number = 42;
try{
    number = 99;
}catch(err){
    console.log(err)
};
console.log(number);







