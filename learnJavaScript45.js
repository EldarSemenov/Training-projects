function getDescription(text){
    if(text.length > 10){
        return text.substring(0, 10) + "...";
    }
    return text;
};
console.log(getDescription('Hello World!'));
console.log(getDescription('This is the text that made uo of more than 2 paragraphs'));
console.log(getDescription('Hello!'));
//
const getTheOther = txt => {
    if(txt.length <= 2){
        return txt.substring(0, 2) + "..../small code/";
    }
    return txt;
};
console.log(getTheOther("h"));
console.log(getTheOther("He"));
console.log(getTheOther("I fulfilled my santence"));
console.log(getTheOther(""))
//
const NoMore = password => {
    if(password.length >= 6){
        return `Error`;
    }
    return password;
};
console.log(NoMore("akdhwe"));
console.log(NoMore("Hello"));
console.log(NoMore("ksdjkjdshf"));
console.log(NoMore("Yes!"));
//
function isPassing(grade){
    return grade >= 10;
};
console.log(isPassing(10));
console.log(isPassing(6));
//
function canVote(age){
    return age >= 18;
};
console.log(canVote(18));
console.log(canVote(12));
//
function EvenOdd(number){
    if(number % 2 === 0){return "Even";}
    else if(number % 2 !== 0) {return "Odd";}
    else{return "negative"}
};
console.log(EvenOdd(10));
console.log(EvenOdd(5));
console.log(EvenOdd(-11));
//
const g = [10, 11, 13];
console.log(g.length);
//
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
//
const u_s = ["Sam", "Alex", "Charley"];
console.log(u_s[2]);
//
const num = [10, 3, 5, 6, 8];
num.push(20);
console.log(num);
//
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(animals);
console.log(count);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
//
const n = [];
n.push(10);
console.log(n);
n.push(111);
console.log(n);
//
const getEmptyArray = () => {
    return [];
};
console.log(getEmptyArray());
//
const getNumberOfElements = elements => {
    return elements.length;
};
console.log(getNumberOfElements([]));
console.log(getNumberOfElements(['Me', "You"]));
//
const useCalculator = (apps) => {
    apps.push("Calculator");
    return apps;
};
console.log(useCalculator(['Clock', 'Twitter']));
console.log(useCalculator(['Weather']));
//
function useApp(apps, app){
    apps.push(app);
    return apps;
};
console.log(useApp(["Clock", "Twitter"], "Firefox"));
console.log(useApp([], "Safari"));
//
function getFirstApp(apps){
    return apps[0];
};
console.log(getFirstApp(["Chrome", "Clock", "Twitter"]));
//
function getLastApp(apps){
    return apps[apps.length - 1];
};
console.log(getLastApp(["Twitter", "Clock", "Chrome"]));
//
const grades = [10, 19, 39];

grades.forEach(function(grade){
    console.log(grade);
});
//
const gr = [100, 200, 300];
gr.forEach(grade => {
    console.log(grade);
});
//
const list = ['one', 'two', 'three', 'four', 'five'];
list.forEach(item => {
    console.log(item);
});
//
let Num = [12, 14, 57, 20, 44, 56];
Num.forEach(nu => {
    console.log(nu);
});
//
const array1 = ['a', 'b', 'c'];
array1.forEach(element => {
    console.log(element);
});
//
const loopThroughElements = elements => {
    return elements.forEach(element => {
        console.log(element);
    });
}; loopThroughElements(['Sam', 'Charlie', 'Alex']);
//
const logUserId = usersIds => {
    return usersIds.forEach(id => {
        console.log(id);
    });
}; logUserId([12, 24, 57]);
//
const people = ["Sam", "Alex"];
people.forEach(person => {
    console.log(person);
});
//
const checking = usersID => {
    usersID.forEach(ID => {
        console.log(ID);
    });
    return true;
}; checking([23, 34, '']);
//
const sumGrades = Grades => {
    let sum = 0;
    Grades.forEach(grade => {
        sum += grade;
    });
    return sum;
};
console.log(sumGrades([100, 100, 100]));
console.log(sumGrades([250, 250]));
//
const sumPositiveNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => {
        if(number > 0){
            sum += number;
        };
    });
    return sum;
};
console.log(sumPositiveNumbers([20, -12, 2, -20]));
console.log(sumPositiveNumbers([-1, -56, -23, 100, 100]));
//
const sumOddNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => {
        if(number % 2 !== 0){
            sum += number;
        }
    });
    return sum;
};
console.log(sumOddNumbers([1, 3, 5, 20, 100]));
console.log(sumOddNumbers([12, 33, 44, 90, 23]));