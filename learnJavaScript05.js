let canVote = age => {
    return age >= 18;
}; console.log(canVote(22));
//...........................
const apps = ["Phone"];
const useCalculator = apps =>{
    apps.push("Calculator");
    return apps;
}; console.log(useCalculator(apps));
//.................................
let loopThroughElements = elements => {
    elements.forEach(function(element){
        console.log(element);
    })
    }
loopThroughElements(["John", "Jennifer", "Alex"]);
//...............................
function loopAndGetValue(elements){
    const value = 42;
    elements.forEach(function(element){
        console.log(element);
    }); return value;
}; console.log(loopAndGetValue(["Alex", "Jennifer", "Arson"]));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function sumGrades (grades) {
    let sum = 0;
    grades.forEach(function(grade){
        sum = sum + grade;
    }); return sum;}
//..............................
let sumPositiveNumbers = numbers => {
    let sum = 0;
    numbers.forEach(function(number){
        if (number >= 0) {sum += number};
    }); return sum;
}; console.log(sumPositiveNumbers([-12, 20, -5, 10]));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let sumNegativeNumbers = numbers => {
    let sum = 0;
    numbers.forEach(function(number){
        if (number < 0) {sum += number};
    }); return sum;
}; console.log(sumNegativeNumbers([-10, -15, -5, -50, 23, 45, 567]));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let sumOddNumbers = numbers => {
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !== 0){sum += number};
    }); return sum;
}; console.log(sumOddNumbers([-1, 23, 90, 12, -46, 33, 21, 78, 66]));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function sayHello(name = "user"){
    return "Hello " + name;
}; console.log(sayHello("Eldar"));
//><><><><><><><><><><><<<
function double(x = 0){
    return x * 2;
}; console.log(double(100));
//00000000000000000000000000
let sum = (a, b) => {
    return a + b;
}; console.log(sum(12,12));
//<><><><><><><><><><><><><><><>
function loopThrough_elements(elements){
    elements.forEach(element => {
        console.log(element);
    });
}; console.log(loopThrough_elements(["Piter", "Jason", "Sergey"]));
//<><><<><><><><><<<><<><<><><><><
let sum_Grades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    }); return sum;
}; console.log(sum_Grades([12, 8, 10]));
//><><><><><><><><><><><><><<><><><
