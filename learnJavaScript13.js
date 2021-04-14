function callName (name = `user`) {
    return `Hello ${name}`;
};console.log(callName(`Alexsandr`));
console.log(callName());
//
const UserName = (name = `User`) => {
    return `How are you ${name}`;
}; console.log(UserName(`John`));
console.log(UserName());
//
function double (x = 0) {
    return x * 2;
}; console.log(double(4));
console.log(double());
//
let Double = (i = 100) => {
    return i * 100;
}; console.log(Double(200));
console.log(Double());
//
let a = [`log`, `nog`, `dog`];
let a2 = a.map(function(s){
    return s.length;
}); console.log(a2);
//
const loopThroughElement = (elements) => {
    return elements.forEach(element => console.log(element));
}; loopThroughElement([`solve`, `dive`, `west`]);
//
const sumGrades = (grades) => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum;
}; console.log(sumGrades([12, 12, 12]));
//




