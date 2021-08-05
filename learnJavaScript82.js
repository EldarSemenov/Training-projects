function sum(x, y){
    return x + y;
};
console.log(sum(5, 5));
console.log(sum(2, 2));
console.log(sum(100, 100));
//
function multiply(a, b) {
    return a * b;
};
console.log(multiply(3, 3));
console.log(multiply(90, 90));
//
function divide(z, u){
    return z / u;
};
console.log(divide(100, 10));
//
function minus(q, r){
    return q - r;
};
console.log(minus(234, 89));
//
console.log('this is a string');
console.log("This is another correct string");
console.log("Nice!".length);
//
let text = "Hello World!";
console.log(text.length);
//
let txt = "USA";
console.log(txt.toLowerCase());
console.log(txt.toLowerCase().length)
//
let op = "Word";
console.log(op.toUpperCase());
//
function sumOne(a, b){
    console.log(a);
    console.log(a + b);
    return a + b;
};
sumOne(2, 2);
//
function getCharCount(str){
    return str.length;
};
console.log(getCharCount("Samuel"));
console.log(getCharCount("One"));
console.log(getCharCount("H"));
//
function shoutMyName(name){
    return name.toUpperCase();
};
console.log(shoutMyName("sam"));
console.log(shoutMyName("ChaRLey"));
console.log(shoutMyName("alex"));
//
function lowerName(name){
    return name.toLowerCase();
};
console.log(lowerName("JACK"));
console.log(lowerName("DAN"));
//
let language = "JavaScript";
console.log(language[0]);
console.log(language[4]);
console.log(language[language.length - 1]);
//
let t = "New-York";
console.log(t[t.length - 1]);
console.log(t[0]);
console.log(t[t.length - 5]);
//
function getFirstCharacter(name){
    return name[0];
};
console.log(getFirstCharacter("Amsterdam"));
console.log(getFirstCharacter("Japan"));
//
function getLastCharacter(name){
    return name[name.length - 1];
};
console.log(getLastCharacter("Alex"));
console.log(getLastCharacter("Dunno"));
console.log(getLastCharacter("BP"));
//
let lang = "JavaScript";
console.log(lang.substring(0, 4));
//
let str = "Metropolitan";
console.log(str.substring(7, 10));
console.log(str.substring(7));
//
let string = "Java Script";
console.log(string.substring(5));
//
function skipFirstCharacter(text){
    return text.substring(1);
};
console.log(skipFirstCharacter("Xcode"));
console.log(skipFirstCharacter("Success"));
//
function getDescription(txt){
    return txt.substring(0, 10);
};
console.log(getDescription("Hello! How are you?"))
//
let prefix = "Mrs.";
let name1 = "Sam";
let strings = prefix + " " + name1;
console.log(strings);
//
let name2 = "Alex";
name2 = name2 + " Blue";
console.log(name2);
//
let lastName = "Semenov";
lastName += " Eldar";
console.log(lastName);
//
let title = "Lincoln";
title += " is a president of the USA";
console.log(title);
//
function concatInitials(firstNameInitial, lastNameInitial) {
    return `${firstNameInitial}${lastNameInitial}`;
};
console.log(concatInitials("Z", "A"));
console.log(concatInitials("HA", "LL"));
//
function getDescriptionText(text) {
    return text.substring(0, 10) + "...";
};