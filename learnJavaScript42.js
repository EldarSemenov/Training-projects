/*import { double } from './helper.js';
console.log(double(5));
import {Helper} from "./helper.js";

const capitalizeName = name => {
    const helper = new Helper(name);
    return helper.capitalize();
}
console.log(capitalizeName("phILIP"));
*/
function sum(a, b){
    return a + b;
}
console.log(sum(1, 3));
console.log(sum(12, 12));
//
function multiply(a, b){
    return a * b;
};
console.log(multiply(2, 3));
console.log(multiply(4, 4));
//
function getCharCount(str){
    return str.length;
};
console.log(getCharCount("Hello World!"));
console.log(getCharCount("Sam"));
console.log(getCharCount("Charley is here"));
//
function shoutMyName(name){
    return name.toUpperCase();
};
console.log(shoutMyName("Sam"));
console.log(shoutMyName("Charley"));
console.log(shoutMyName("alex"));
//
function lowerName(name){
    return name.toLowerCase();
};
console.log(lowerName("Sam"));
console.log(lowerName("ALEX"));
//
const language = "JavaScript";
console.log(language[language.length - 2]);
console.log(language[language.length - 10]);
//
function getFirstCharacter(name){
    return name[0];
};
console.log(getFirstCharacter("Denver"));
console.log(getFirstCharacter("Slat-Lake-City"));
//
function getLastCharacter(name){
    return name[name.length -1];
};
console.log(getLastCharacter("Sam"));
console.log(getLastCharacter("Alex"));
console.log(getLastCharacter("Charley"));
//
const word = "Alexandr";
const action = word.substring(0, 4);
console.log(action);
//
function skipFirstCharacter(text){
    return text.substring(1);
};
console.log(skipFirstCharacter("XCode"));
console.log(skipFirstCharacter("Hello"));
//
function getDescription(text){
    return text.substring(0, 10);
};
console.log(getDescription("Amsterdemious"));


