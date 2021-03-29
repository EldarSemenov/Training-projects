let grades = [5, 5, 5, 5, 5, 5];
function sumGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
        sum += grade;
    }); 
    return sum;
}
document.getElementById("grades").innerHTML = sumGrades([5, 5, 5, 5, 5, 5]);

let points = [1, 1, 1];
function getSumPoints (points){
    let sum = 0;
    points.forEach(function(point){
        sum += point;
    });
    return sum;
}
document.getElementById("id01").innerHTML = getSumPoints(points);

let numbers = [-2, 2, -2, 2];
function allPosNumbers (numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number >= 0) {
            sum += number;
        }
    }); return sum;
};
document.getElementById("id02").innerHTML = allPosNumbers(numbers);

let negNumbers = [-1, -100, 20, 10];
function sumOfNegNumbers(negNumbers){
    let negSum = 0;
    negNumbers.forEach(function(number){
        if(negSum <= 0){
            negSum += number;
        }
    }); return negSum;
};
document.getElementById("id03").innerHTML = "This is a negative number - " +
sumOfNegNumbers(negNumbers); 


let numbers = [-10, 2, -10, 2];
function allNegNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number <= 0){
            sum += number;
        }
    }); return sum;
};
document.getElementById("id03").innerHTML = allNegNumbers(numbers);*/

let numbers = [-15, 5, -10];
function sumOfOddNumbers (numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !==0){
            sum += number;
        }
    }); return sum;
}
document.getElementById("id04").innerHTML = sumOfOddNumbers(numbers); */

const number = function(a, b){
    return a + b;
}
document.getElementById("id05").innerHTML = number(2, 2);

const sum = (a, b) => {
    return a + b;
}
document.getElementById("id06").innerHTML = sum(100, 100);

const SunSum = (a, b, c) => {
    return a + b + c;
}
document.getElementById("id07").innerHTML = SunSum(100, 100, 100);

const SumSum = (a, b) => {return a / b;}
document.getElementById("id08").innerHTML = SumSum(100, 2);

const NumNum = (a, b) => {return a * b;}
document.getElementById("id09").innerHTML = NumNum(2, 25);

const dum = function(a, b){
    return a - b;
}
document.getElementById("id10").innerHTML = dum(100, 50);

const utah = (a, b) => {return a + b;}
document.getElementById("id11").innerHTML = utah(25, 25);

const double = (x) => {
    return x + x;
}
document.getElementById("id12").innerHTML = double(25);


function loopThroughElements(elements){
    elements.forEach(element => {
        return element;
    });
}
document.getElementById("id13").innerHTM = loopThroughElements(["Eldar", "Tom", "Noi"]);

function sumGrades (grades){
    let sum = 0;
    grades.forEach(grade => {
        sum += grade;
    });
    return sum;
} console.log(sumGrades([12, 8, 10]));

function thisSum (sums){
    let it = 0;
    sums.forEach(sum => {
        it += sum;
    }); return it;
} console.log(thisSum ([100, 100, 100]));
