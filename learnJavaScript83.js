let language = "JavaScript";
console.log(`I am learning ${language}`);
//
const name = "John";
console.log(`Welcome ${name}. You have ${2 * 10} new notifications`);
//
function sayHello(name){
    return `Hello ${name}`;
};
console.log(sayHello("Alex"));
console.log(sayHello("Tommy"));
//
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
};
console.log(getFullName("Jonc", "Tommylis"));
console.log(getFullName("Alex", "Muro"));
//
function getMultiLineString(){
    return `I am learning JavaScript
            and I found it to be
            quite fun!`;
};
console.log(getMultiLineString());
//
function renderTableRow(label, value){
    return `<tr>
                  <td>${label} here</td>
                  <td>${value} here</td>
            </tr>`;
};
//
function capitalize(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
};
console.log(capitalize("gIsT"));
console.log(capitalize("fAST"));
console.log(capitalize("quitE"));
//
function substring(word){
    return word.substring(5, 10);
};
console.log(substring("kduer.....jashd"));
console.log(substring("qwert.....kjsdsadlkjsd"));
console.log(capitalize("roma"));
//Project
function getTheLengthOfTheCharacter(name){
    return name.length;
};
console.log(getTheLengthOfTheCharacter("Tomos"));
console.log(getTheLengthOfTheCharacter("kjsdhkhsdlahfj"));
///////////
function getTheFirstCharacterOfTheName(name){
    return name[0];
};
console.log(getTheFirstCharacterOfTheName("Linda"));
console.log(getTheFirstCharacterOfTheName("Lisa"));
/////////
function getTheLastCharacterOfTheName(name){
    return name.substring(name.length - 1);
};
console.log(getTheLastCharacterOfTheName("jhasdS"));
console.log(getTheLastCharacterOfTheName("jhsdF"));
///////
function LowerCase(name){
    return name.toLowerCase();
};
console.log(LowerCase("KHJ"));
console.log(LowerCase("WEST"));
///////
function UpperCase(name){
    return name.toUpperCase();
};
console.log(UpperCase("kass"));
console.log(UpperCase("west"));
//////////
function receiveTheCapitalizeName(name){
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
};
console.log(receiveTheCapitalizeName("dINGO"));
console.log(receiveTheCapitalizeName("roMaN"));
console.log(receiveTheCapitalizeName("PoMpEo"));
////////
function lastCh(name){
    return name.substring(name.length - 1);
};
console.log(lastCh("Alex"));
///////
function getLast(name){
    return name.substring(name.length - 1);
};
console.log(getLast("EartH"));
//NUMBERS
let answer = 42;
answer.toString();
console.log(answer.toString());
//
function convertNumberToString(number){
    return number.toString();
};
console.log(convertNumberToString(55));
console.log(convertNumberToString(1000));
//
let str = "42";
console.log(Number.parseInt(str, 10));
//
console.log(Number.parseInt("123abc", 10));
//
function getTheNextAge(age){
    return Number.parseInt(age, 10) + 1;
};
console.log(getTheNextAge("22"));
//
function NextAge(age){
    return Number.parseInt(age, 10) + 100;
};
console.log(NextAge("200"));
//
function getBoxWidth(value){
    return Number.parseInt(value, 10);
};
console.log(getBoxWidth("200"));
//
function getTheStrNumber(value){
    return value.toString();
};
console.log(getTheStrNumber(900));
//
console.log(12 % 5);
console.log(20 % 5);
//
function getDivisionRemainderBy2(number){
    return number % 2;
};
console.log(getDivisionRemainderBy2(40));
//
function divisionRemainderBy2(num){
    return Number.parseInt(num, 10) % 2
};
console.log(divisionRemainderBy2("100"));
//
let name1 = "Sam";
console.log(name1);
//
let language = "C++";
console.log(language);
language = "JavaScript";
console.log(language);
//
let sum = 0;
sum += 1;
console.log(sum);
//
const language1 = "C++";
console.log(language1);
//
const grade = 15;
if(grade >= 10){
    console.log("Passing grade")
};
//
const grade = 3;
if(grade >= 10){
    console.log("Passing grade");
}else{
    console.log("Failing grade");
}
//
const gr = 10;
if(gr > 10){
    console.log("Passing grade");
} else if(gr === 10){
    console.log("Passing on the limit");
}else {
    console.log("Failing grade");
};
//
function testNumber(a){
    let result;
    if(a > 0){
        result = 'positive';
    }else {
        result = 'Not positive';
    }
    return result;
}; console.log(testNumber(-1));
//
function canVote(age){
    if(age >= 18){
        return true;
    }
    else{return false;}
};
console.log(canVote(12));
console.log(canVote(19));
console.log(canVote(-1));
//
function canYouVote(age){
    if (age >= 18){
        return "You can vote!"
    } return "Sorry, you can not vote."
};
console.log(canYouVote(13));
console.log(canYouVote(19));
//
function getNextAge(age){
    if(age === ''){return 0}
    return Number.parseInt(age, 10) + 1;
};
console.log(getNextAge("we"));
console.log(getNextAge(''));
console.log(getNextAge(23));
console.log(getNextAge(100));
//
function getDiscription(text){
    if (text.length > 10){
        return text.substring(0, 10) + `.......`
    }
    return text;
};
console.log(getDiscription("Hello World! This is my first project!"));
console.log(getDiscription("Hi! This is Eldar. Can we see each other next to the University"));