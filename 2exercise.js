var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1(){
    points.sort();
    document.getElementById("demo").innerHTML = points;
}
function myFunction2(){
    points.sort(function(a, b){return(a - b)});
    document.getElementById("demo").innerHTML = points;
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
document.getElementById("demo1").innerHTML = num;
function randomFunction(){
    num.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("demo1").innerHTML = num;
}
var points = [40, 3232, 33, 90, 1, 44, 22];
document.getElementById("demo2").innerHTML = myArrayMax(points);
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
var lownum = [2, 1, 44, 55, 66];
document.getElementById("demo3").innerHTML = LowFunction(lownum);
function LowFunction(value) {
    return Math.min.apply(null, value);
}
var cars = [
    {type:"Tesla", year:1998},
    {type:"BMW", year:2020},
    {type:"Jeep", year:2015}
];
displayCars();
function myFunction(){
    cars.sort(function(a, b){return (a.year - b.year)});
    displayCars();
}
function displayCars(){
    document.getElementById("demo3").innerHTML = 
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
}
var txt = "";
var numbers = [23, 44, 78, 9, 11, 39, 26];
numbers.forEach(myEachFunction);
document.getElementById("demo5").innerHTML = txt;
function myEachFunction(value, index, array){
    txt = txt + value + "<br>";
}
var text = "";
var num1 = [1, 3, 9, 45, 56];
num1.forEach(myForEachFunction);
document.getElementById("demo6").innerHTML = text;
function myForEachFunction(value){
    text = text + value + "<br>";
}
var numbers1 = [2, 2, 2, 2, 2, 2];
var numbers2 = numbers1.map(myMapFunction);
document.getElementById("demo7").innerHTML = numbers2;
function myMapFunction(value, index, array){
    return value * 2;
}
var num1 = [4, 4, 4, 4, 4];
var num2 = num1.map(mySecFunction);
document.getElementById("demo8").innerHTML = num2;
function mySecFunction(value) {
    return value * 2;
}
var Numbers = [12, 45, 33, 55, 2, 5, 6, 8, 9];
var over10 = Numbers.filter(myFilterFunction);
document.getElementById("demo9").innerHTML = over10;
function myFilterFunction(value) {
    return value > 10;
}
var reduceNumbers = [2, 2, 2, 2, 2];
var sum = reduceNumbers.reduce(reduceFunction);
document.getElementById("demo10").innerHTML = sum;
function reduceFunction(total, value){
    return total + value;
}
var reNumbers = [50, 50];
var summ = reNumbers.reduce(reFunction, 100);
document.getElementById("demo11").innerHTML = summ;
function reFunction (total, value) {
    return total + value;
}
var numb = [20, 20, 20, 20, 20];
var reduceRightNum = numb.reduceRight(reducerightFunction);
document.getElementById("demo11").innerHTML = "The total number is " + reduceRightNum;
function reducerightFunction(total, value) {
    return total + value;
}
var num01 = [23, 455, 5, 67, 8, 9, 1];
var  num02 = num01.every(myEveryFunction);
document.getElementById("demo12").innerHTML = num02;
function myEveryFunction(value) {
    return value > 400;
}
var numnum = [45, 23, 55, 4, 6, 9, 20, 44, 33];
var someOver18 = numnum.some(mySomeFunction);
document.getElementById("demo13").innerHTML = someOver18;
function mySomeFunction (value) {
    return value > 18;
}
var num03 = [12, 23, 34, 45, 56, 67, 78];
var findNum = num03.find(findFunction);
document.getElementById("demo14").innerHTML = findNum;
function findFunction (value) {
    return value > 67;
}
var num04 = [23, 225, 89, 66, 445, 777, 1000, 12, 45, 34, 55, 6667];
var findIndexOf = num04.findIndex(findIndexFunction);
document.getElementById("demo15").innerHTML = 
"The index that is more than 100 is " + " " + findIndexOf + "!" + "Am I right?";
function findIndexFunction (value, index, array) {
    return value > 100;
}
var d = new Date();
document.getElementById("demo16").innerHTML = d;
var dateMili = new Date(0);
document.getElementById("demo17").innerHTML = dateMili;
var date01 = new Date("2015-03-25");
document.getElementById("demo18").innerHTML = date01;
var date02 = new Date("2015-03-25T12:00:00Z");
document.getElementById("demo19").innerHTML = date02;
document.getElementById("demo20").innerHTML = 
new Date("2015-03-25T12:00:00-06:00");
var USAdate = new Date("03/25/2015");
document.getElementById("demo21").innerHTML = USAdate;
var msec = Date.parse("March 20, 2021");
document.getElementById("demo22").innerHTML = msec;
var d = new Date(msec);
document.getElementById("demo22").innerHTML = d;
var $date = new Date();
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
document.getElementById("demo23").innerHTML = months[$date.getMonth()];
var _date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
document.getElementById("demo24").innerHTML = days[_date.getDay()];
var date$ = new Date();
date$.setFullYear(2020);
document.getElementById("demo25").innerHTML = date$;
var $d = new Date();
$d.setDate($d.getDate() + 50);
document.getElementById("demo26").innerHTML = $d;

var today, someday, text;
someday = new Date();
someday.setFullYear(2100, 0, 14);
if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo27").innerHTML = text;

var futureYear, today, txt;
var futureYear = new Date();
futureYear.setFullYear(2022);
if (futureYear > today) {txt = "Today is not that year";}
else {txt = "Today is after 2022"}
document.getElementById("demo27").innerHTML = txt;
function randomFunction(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
    
}document.getElementById("demo29").innerHTML = randomFunction();

function getRandomNumber(min, max){
return Math.floor(Math.random() * (min - max + 1)) + min;
}
function booleanFunction(){
    document.getElementById("demo31").innerHTML = Boolean (10 > 9);
}
var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);

document.getElementById("demo32").innerHTML = 
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;

function voteFunction(){
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young" : "Old eniugh";
    document.getElementById("demo33").innerHTML = 
    voteable + " to vote.";
}
function buyFunction(){
    var age, ableBuy;
    age = document.getElementById("buy").value;
    ableBuy = (age < 22) ? "Too young" : "Able";
    document.getElementById("demo34").innerHTML = ableBuy + " to buy"
}


