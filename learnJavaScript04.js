function sayHello(name){
    return `Hello ${name}`;
}; document.getElementById("grades").innerHTML =
sayHello("Julia!");
console.log(sayHello("Julia"));
////////////////////////////////
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
};document.getElementById("id01").innerHTML =
getFullName("Julia", "Hosky");
console.log(getFullName("Julia", "Hosky"));
///////////////////////////////
function getMultilineString(){
    return `The template strings 
    are so powerful!`;
};document.getElementById("id02").innerHTML =
getMultilineString();
console.log(getMultilineString());
///////////////////////////////////
function capitalize(name){
    return name[0].toUpperCase() +
    name.substring(1).toLowerCase();
}; document.getElementById("id03").innerHTML = 
capitalize("roBERT");
console.log(capitalize("roBERT"));
/////////////////////////////////////
function removeExtraWhiteSpace(text){
    return text.trim();
};document.getElementById("id04").innerHTML =
removeExtraWhiteSpace(" This text has no extra white space. ");
console.log(removeExtraWhiteSpace(" This text has no extra white space "));
//////////////////////////////////////
let removeIT = txt => {
    return txt.trim();
}; console.log(" this ");
///////////////////////////////////////
let startwith = text => {
    return text.startsWith("Department of Justice");
}; document.getElementById("id05").innerHTML =
startwith("Department of Justice");
console.log(startwith("Department of Justice"));
//////////////////////////////////////
let returnFun = word => {
    return word[0];
}; console.log(returnFun("Eldar"));
//////////////////////////////////////
let theNameLength = txt => {
    return txt.length;
};console.log(theNameLength("How many times?"));
/////////////////////////////////////////
let theLasrChar = txt => {
    return txt[txt.length -1]; 
}; console.log(theLasrChar("Eldar"));
////////////////////////////////////////
let converNumberToString = number => {
    return number.toString();
};document.getElementById("id06").innerHTML =
converNumberToString(100000);
console.log(converNumberToString(100000));
///////////////////////////////////////
let convertStringToNumber = string => {
    return Number.parseInt(string, 10);
}; console.log(convertStringToNumber("12434"));
///////////////////////////////////////////////
let divideNumbers = (a, b) => {
    return a / b;
}; console.log(divideNumbers(12, 2));
///////////////////
let divisionRemainder = (a, b) => {
    return a % b;
}; console.log(divisionRemainder(10, 2));
//////////////////
let isEvenNumber = x => {
    return x % 2 === 0;
}; console.log(isEvenNumber(100));
//////////////////
let isOddNumber = x => {
    return x % 2 !== 0;
}; console.log(isOddNumber(21));
////////////////////
let count = 0 => {
    count++;
    return count;
};
//////////////////
function canVote (age){
    if (age >= 18) {return true};
};
/////////////////////

function canVote2 (age) {
    if (age >= 0) {
        return true;
    }else {
        return false;
    }
};
/////////////////////

