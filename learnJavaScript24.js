const answer  = 42;
console.log(answer.toString())
console.log(Number.parseInt("23"));
console.log(Number.parseInt("42", 10));
let count = 10;
console.log(count.toString());
console.log((12).toString());
console.log((17.3).toString());
console.log(Number.parseInt("1290", 10));
//
const convertNumber = number => {
    return number.toString();
}; console.log(convertNumber(123));
//
const convertString = string => {
    return Number.parseInt(string);
}; console.log(convertString("87", 10)); // with radix;
//
let even = 8 % 2;
let odd = 5 % 2;
console.log({even, odd});
console.log(even, odd);
//
const num = 60;
const isEven = num % 2 === 0;
console.log(isEven);
//
const num1 = 23;
const isOdd = num1 % 2 !== 0;
console.log(isOdd);
//
const isEvenNumber = x => {
    return x % 2 === 0;
}; console.log(isEvenNumber(4));
console.log(isEvenNumber(5));
//
const isOddNUmber = x => {
    return x % 2 !== 0;
}; console.log(isOddNUmber(9));
console.log(isOddNUmber(10));
//
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x);
}; console.log(x);
//
const num2 = 123;
try{
    num2 = 99;
}catch (error){
    console.log(error);
}; console.log(num2);
//
let counter = 0; counter += 1; console.log(counter);
const ageLimit = 18; console.log(ageLimit);
try{
    ageLimit = 20
}catch (err) {
    console.log(err);
}
//
function defineVariable(){
    let num3 = 0;
    num3 += 1;
    return num3;
}; console.log(defineVariable());
//
const defineAgeLimit = () => {
    const ageLimit1 = 18;
    return ageLimit1;
}; console.log(defineAgeLimit());
//
const testNum = a => {
    let result;
    if (a >= 100) {
        result = 'Passed';
    }else {
        result = 'Not passed';
    }
    return result;
}; console.log(testNum(90));
console.log(testNum(102));
//
const passTest = income => {
    let tax;
    if (income < 3000) {tax = "Pay 5%";}
    else if (income < 4000) {tax = "Pay 7.5%";}
    else if (income > 5000) {tax = "Pay 10.5 %";}
    else{tax = "Pay 20%";}
    return tax;
}; console.log(passTest(3500));
console.log(passTest(4800));
console.log(passTest(5000));
console.log(passTest(2900));
//
const canVote = age => {
    if(age >= 18){return true;}
    else{return false;}
}; console.log(canVote(33)); 
console.log(canVote(12));
//
const isPassing = grade => {
    if (grade >= 10){return true;}
    else {return false;}
}; console.log(isPassing(1));
//
function isPass (grade){
    return grade >= 20;
}; console.log(isPass(2));
//
let canPass = point => {
    return point >= 100;
}; console.log(canPass(110));
//
function canIvote (age){
    return age >= 18;
}; console.log(canIvote(19));
// AARAYS
const array = [21, 23, 89, 100];
console.log(array.length);
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
console.log(clothing[2]);
//
const grades = [10, 8, 9, 12, 14];
const actionwithgrades = grades.push(20);
console.log(grades);
//
const animals = ['pigs', 'goats', 'sheep'];
const count1 = animals.push('cows');
console.log(count1);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
console.log(animals.length);
//
const getNumberOfElements = elements => {
    return elements.length;
}; console.log(getNumberOfElements([3, 4, 5]));
//
const useCalculator = apps => {
    apps.push('Calculator');
    return apps;
}; console.log(useCalculator([]));
//
const useApps = (apps, app) => {
    apps.push(app);
    return apps;
}; console.log(useApps(['Firefox', 'Google'], 'Apple'));
//
const apps1 = ['apple', 'sumsung', 'tesla'];
const getTheFirstApp = () => {
    return apps1[0];
}; console.log(getTheFirstApp(apps1));
//
const newApps = ['Amazon', 'Twitter', 'Facebook', 'Tesla'];
const getTheLastElement = () => {
    return newApps[newApps.length - 1];
}; console.log(getTheLastElement(newApps));
//
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
//
const numbers = [10, 20, 30];
const num_ = numbers.forEach(number => console.log(number + 100));
//
const strings = [' one ', ' two ', ' three '];
const str = strings.forEach(string => console.log(string.trim()));
//
const loopThroughElements = elements => {
    elements.forEach(element => console.log(element));
}; loopThroughElements(['Eldar', 'Neumann']);
//
const loopThroughNumbers = number_s => {
    number_s.forEach(number => console.log(number));
}; loopThroughNumbers([12, 34, 45, 89]);
//
const loopAndGetValue = (elements) => {
    const value = 100;
    elements.forEach(function(element){
        console.log(element);
    }); return value;
}; console.log(loopAndGetValue(['Champion', 'God', 'Jesus']));
//
const loopandget = $numbers => {
    const myNumber = 55;
    $numbers.forEach(function(number){
        console.log(number);
    }); return myNumber;
}; console.log(loopandget([12, 90, 100]));
//
const sumGrades = $grades => {
    let sum = 0;
    $grades.forEach(function(grade){
        sum += grade;
    }); return sum;
}; console.log(sumGrades([100, 400]));
//
const sumNum = [122, 345, 987];
const letSumAll = () => {
    let sum = 0;
    sumNum.forEach(function (num4){// pay atention to number 211
        sum += num4;
    }); return sum;
}; console.log(letSumAll());
//
const myNumbers = [1000, 1000, 1000];
const sumFunction = () => {
    let sum = 0;
    myNumbers.forEach(n => sum += n);// pay atention  to number 203
    return sum;
}; console.log(sumFunction());
//
const myarray = ['city', 'best', 'minneapolis', 'Eldar Neumann'];
const listFunction = () => {
    myarray.forEach(word => console.log(word));
}; listFunction();
//
const first_name = 'ELDAR';
const last_name = 'NEUMANN';
const fullNameFunction = () => {
    return `${first_name} ${last_name}`;
}; console.log(fullNameFunction());
//SUM POSITIVE NUMBERS
function SumPosNum (numberss) {
    let sum = 0;
    numberss.forEach(function(number){
        if(number > 0) {
            return sum += number;
        }
    }); return sum;
}; console.log(SumPosNum([10, -10, 10, -12, 10]));
//SUM NEGATIVE NUMBERS(STYLED DIFFERENTLY)
const sumNegativeNumbers = (counters) => {
    let sum = 0;
    counters.forEach(counter => {
        if (counter < 0) {return sum += counter;}
    }); return sum;
}; console.log(sumNegativeNumbers([-10, -10, -10, 50, 200]));
//
const sumOfOddNumbers = numbers1 => {
    let sum = 0;
    numbers1.forEach(number => {
        if (number % 2 !==0) {
            return sum += number;
        }
    }); return sum;
}; console.log(sumOfOddNumbers([5, 7, 21, 8]));
//
const sumEvenNumbers = numbers2 => {
    let sum = 0;
    numbers2.forEach(number => {
        if(number % 2 === 0) {return sum += number;}
    }); return sum;
}; console.log(sumEvenNumbers([8, 6, 9, 3]));
//
function sum(a = 0, b = 1){
    return a + b;
}; console.log(sum(30, 30));
console.log(sum());
//
const dividedNumbers = (a = 10, b = 2) => {
    return a / b;
}; console.log(dividedNumbers(100, 2));
console.log(dividedNumbers());
//
function multiply (a, b = 1){
    return a * b;
}; console.log(multiply(2, 2));
console.log(multiply(34));
//
const HelloUserFunction = (name = `User`) => {
    return `Hello ${name}`;
};console.log(HelloUserFunction(`Jason`));
console.log(HelloUserFunction());
//
function double (x = 0){
    return x * 2;
}; console.log(double(10));
console.log(double());
//
const Sum = function(a, b){
    return a + b;
}; console.log(Sum(1, 1));
//
let list = ['Bycicle', 'Lopedo', 'New', "Boston"];
let act = list.map(item => item.length);
console.log(act);
//
let act2 = list.map(function(item){
    return item.length;
}); console.log(act2);
//
let act3 = list.map(item => item.toUpperCase());
console.log(act3);
console.log(list);
let act4 = list.map(item => item[item.length - 1]);
console.log(act4);
act5 = list.map(item => item.toString());
console.log(act5);
//
const sumsum = function (a, b) {
    return a * b;
}; console.log(sumsum(90, 90));
//
const loop = (values) => {
    values.forEach(value => console.log(value));
}; loop(['Jessica', 'Abrom', 'Eldar']);