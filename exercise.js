var cars = ["Saab", " Volvo", " BMW", " Jeep", " Tesla"];
document.getElementById("one").innerHTML = cars;
var fruits = ["Banana", " Orange", " Apple", " Mango"];
document.getElementById("2").innerHTML = fruits.length;
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("3").innerHTML = text;
var fruits = ["Banana", " Apple", " Mango", " Oarange", " Lemon"];
document.getElementById("4").innerHTML = fruits.toString();
var fruits = ["Mango", " Kiwi", " Lemon", " Grape"];
document.getElementById("5").innerHTML = fruits;
function myFunction(){
    fruits[fruits.length] = " Apple and Pineapple";
    document.getElementById("5").innerHTML = fruits;
}
var fruits = ['apple', ' banana', ' grape'];
document.getElementById("6").innerHTML = 
"Original Array:<br/>" + fruits;
function myFunction(){
    fruits.splice(3, 0, " Lemon", " Watermelon", " Lime");
    document.getElementById("7").innerHTML = "New Array:<br/>"
    + fruits;
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("8").innerHTML = fruits;
function fruitFunction(){
    fruits.splice(0, 1);
    document.getElementById("8").innerHTML = fruits;
}
var fruitsSort = ["Orange", " Mango", " Strawberry", " Apple", " Bluberry"];
document.getElementById("9").innerHTML = fruitsSort;
function sortFunction (){
    fruitsSort.sort();
    document.getElementById("9").innerHTML = fruitsSort;
}
var num = [11, 22, 56, 1022, 4, 66, 1, 44, 445, 444, 2, 90, 78];
document.getElementById("10").innerHTML = num;
function numFunction(){
   var newNum = num.sort(function(a, b){return (a - b)});
   document.getElementById("10").innerHTML = newNum;
}
var ranNumbers = [40, 100, 1, 5, 25, 10];
document.getElementById("11").innerHTML = ranNumbers;
function randomFunction(){
    ranNumbers.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("11").innerHTML = ranNumbers;
}
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("12").innerHTML = myArrayMax(points);
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("13").innerHTML = points;
function myArrayminMax(arr){
    return Math.min.apply(null, arr);
};
var number = [33, 454, 12, 1902, 444, 34];
document.getElementById("14").innerHTML = myarrayFunction(number);
function myarrayFunction(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--){
        if (arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}
var point = [40, 100, 1, 5, 25, 10];
document.getElementById("15").innerHTML = MyMinArrayFunction(point);
function MyMinArrayFunction(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--){
        if (arr[len] < min){
            min = arr[len];
        }
    }
    return min;
}
var car = [
    {type:"Tesla", year:2017},
    {type:"Jeep", year:2010},
    {type:"Shevrolett", year:2011},
    {type:"Bmw", year:2015},
    {type:"Mersedes", year:1998}
];
disaplayCars();
function sortCarFunction(){
    car.sort(function (a, b){return a.year - b.year});
    disaplayCars();
}
function disaplayCars(){
    document.getElementById("16").innerHTML =
    car[0].type + " " + car[0].year + "<br>" +
    car[1].type + " " + car[1].year + "<br>" +
    car[2].type + " " + car[2].year;
}
var cars = [
    {type:"Volovo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010},
];
disaplayMyCars();
function carsFunction() {
    cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
disaplayMyCars();
}
function disaplayMyCars(){
    document.getElementById("17").innerHTML = 
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
 }