const results = [
    {
        date: "2018-12-12",
        grade: 23
    },
    {
        date: "2018-12-30",
        grade: 17
    }
];
const getSumOfGrades = results => {
    let sum = 0;
    results.forEach(result => sum += result.grade);
    return sum;
}; console.log(getSumOfGrades(results));
//
const users = [
    {
        joined_on: "2018-01-14",
        age: 17
    },
    {
        joined_on: "2018-02-14",
        age: 32
    }
];
const getAverageAge = users => {
    let sum = 0;
    users.forEach(user => sum += user.age);
    return sum / users.length;
}; console.log(getAverageAge(users));
//
const items = ["Pen", "Paper"];
items.length = 0;
console.log(items);
const items1 = ["Pen", "Paper", "Staples"];
const delet = items1.splice(0, 1);
console.log(items1);
const apps1 = ["phone", "calculator", "codetodo", "clock"];
apps1.splice(2, 1);
console.log(apps1);
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
//
const apps = ['Calculator', 'WhatsUp', 'Firefox', 'Mozilla'];
const RemoveFirstApp = apps => {
    apps.splice(0, 1);
    return apps;
}; console.log(RemoveFirstApp(apps));
const getEmptyArray = apps => {
    apps.length = 0;
    return apps;
}; console.log(getEmptyArray(apps));
//
const firstname = 'Eldar';
const characters = [...firstname];
console.log(characters);
//
/*const dimentions = [20, 5];
const width = dimentions[0];
const height = dimentions[1];
console.log(width);
console.log(height);
*/
const dimentions = [20, 5];
const [width, height] = dimentions;
console.log(width);
console.log(height);
//
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
//
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);
console.log(a + b);
//
/*const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point);
*/
const [lat, lng] = [52.82244, 3.87234];
console.log(lat, lng);
//
const winners = ['Jane', 'Bob'];
const losers = ['Samir', 'Jamina'];
const players = [...winners, ...losers];
console.log(players);
//
const concatTwoArrays = (first_half, second_half) => {
    return [...first_half, ...second_half];
}; console.log(concatTwoArrays(['Mobile', 'Shell'], ['Me', 'You']));
//
const splitStringIntoCharacters = string => {
    return [...string];
}; console.log(splitStringIntoCharacters("Hello World!"));
//
const locat = [98.3434, 983.244];
const destractLocation = () => {
    let [lat, lng] = locat;
    return `Your spot is the next: 
    ${lat} and ${lng}`;
}; console.log(destractLocation());
//
const grades = [12, 12,7];
const getAverageValue = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return Math.round(sum / grades.length);
}; console.log(getAverageValue(grades));
//
const grades1 = [12, 10, 9, 29, 45];
const getSmallestValue = grades1 => {
    return Math.min(...grades1);
}; console.log(getSmallestValue(grades1));
const getHighestValue = grades1 => {
    return Math.max(...grades1);
}; console.log(getHighestValue(grades1));
//
const getPassingGrades = grades1 => {
    return grades1.filter(grade => grade >= 10).join(", ");
}; console.log(getPassingGrades(grades1));
//
const getFailureGrades = grades1 => {
    return grades1.filter(grade => grade < 10).join(", ");
}; console.log(getFailureGrades(grades1));
//return all grades that increased by 2, shouldn't ecxeed 20
const Grades = [18, 19, 19.5, 17, 10, 23];
const increasedByTwo = Grades => {
    return Grades.map(grade => {
        const newValue = grade + 2;
        if(newValue >= 20) {return 20;};
        return newValue;
    }).join(", ");
}; console.log(increasedByTwo(Grades));
//
try{
    getDataFromAPI();
}catch(error){
    console.log(error);
};
try{
    nnExistentFunction();
}catch(error){
    console.log(error);
};
try{
    potentialFail();
}catch(error){
    console.log(error);
};
const isNumberZero = number => {
    return number === 0;
}; console.log(isNumberZero(12));
console.log(isNumberZero(0));
console.log(isNumberZero("Yes"));
//
const voter = {
    name: "Antony Classton",
    age: 18
};
const canYouVote = voter => {
    if (voter.age < 18) {return `You can not vote yet`;}
    else if (voter.age === 18) {return `That is your first vote`;}
    else {return `You have already voted`;}
}; console.log(canYouVote(voter));
//
const doestBreak = () => {
    try{
        invalidFanction();
    }catch (error) {
        console.log(error);
    }
}; 
doestBreak();
//
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}; console.log(Rectangle.name);
//
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    } 
}
const car = new Car("Ford Mustang", 2021);
const car1 = new Car("Tesla", 2022);
console.log(car);
console.log(car1);
//
class rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};
const makeSquare = () => {
    return new rectangle(100, 200);
}; console.log(makeSquare());
//
class user {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
}
const getUserNameAndAge = () => {
    return new user (`Jennifer`, `Doe`, 23);
}; console.log(getUserNameAndAge());
//
/*class myRectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    } 
    isitsquare(){
        return this.width === this.height;
    }
}
const shape = new myRectangle(10, 10);
console.log(shape.isitsquare());
*/
class Rec{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    isSquare(){
        return this.height === this.width;
    }
};
const picture = new Rec(100, 100);
console.log(picture.isSquare());