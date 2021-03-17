function myFunction(){
    document.getElementById("demo1").innerHTML = "Hello Dolly";
    document.getElementById("demo2").innerHTML = "How are you?";
}
document.getElementById("ar").innerHTML = 10.50;
document.getElementById("ros").innerHTML = 5 + 5;

console.log(11+11);
document.getElementById("dolly").innerHTML = 
"Hello Dolly!";
var x; var y; x = "John"; y = "Doe"; 
document.getElementById("json").innerHTML = x + " " + y; // first code
// x = 5; I will be not executed
/* the code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
document.getElementById("doe").innerHTML = 
pi + "<br/>" + person + "<br/>" + answer;

var num = 500;
var name = "Eldar";
var lastName = "Semenov";
document.getElementById("r").innerHTML = 
name + " " + lastName + " " + "paid" + " " + num + "$";

var carName = "Volvo";
document.getElementById("car").innerHTML = carName;

var name = "John Doe", carName = "Tesla", price = 30000;
document.getElementById("myCar").innerHTML = carName;

var person = "Dandy",
carName = "Jeep",
price = "20000"
document.getElementById("Jeep").innerHTML = 
person + " bought " + carName + " for " + price; 
 
var nickName;
document.getElementById("un").innerHTML = nickName;

var $ = 20;
var $myMoney = 40;
var $$$ = $ + $myMoney;
document.getElementById("sum").innerHTML = $$$;

var _x = 2, _100 = 10;
document.getElementById("number").innerHTML = _x + _100;

var carName = "Volvo";
myFunction();
function myFunction(){
    document.getElementById("me").innerHTML = 
    "I can display " + carName;
}

myFunction();
function myFunction(){
    var carName = "Volvo";
    document.getElementById("demo1").innerHTML = 
    typeof carName + " " + carName;
}
document.getElementById("demo2").innerHTML = typeof carName;

var f = 15;
{var f = 10;}
document.getElementById("dd").innerHTML = f;

var x = 10;
{let x = 12;}
document.getElementById("single").innerHTML = x;

var i = 5;
for (var i = 0; i <= 20; i++){
    document.getElementById("dim").innerHTML = i * 2;
}
let p = 0;
for (let p = 0; p < 10; p++) {
}
document.getElementById("ls").innerHTML = p;

var carName = "Lada";
document.getElementById("pc").innerHTML = 
"I can display " + window.carName;

let carKind = "Dog";
document.getElementById("small").innerHTML =
"I can display " + window.carKind;

vehicleName = "Mersedes";
document.getElementById("h").innerHTML = vehicleName;
var vehicleName;

mySuperfunction();
function mySuperfunction(){
    var carSort = "Tesla";
    document.getElementById("er1").innerHTML = 
    typeof carSort + " " + carSort;
}
document.getElementById("er2").innerHTML = typeof carSort;
var tr = 4;
for (var tr = 0; tr < 10; tr++){
    // some statements
}
document.getElementById("momo").innerHTML = tr;
let ed = 5;
for (let ed = 0; ed < 10; ed++){/*some statements*/}
document.getElementById("ss").innerHTML = ed;
var _car = "automobile";
document.getElementById("tds").innerHTML = "I acn display " + window._car;
let _yourCar = "stringCar";
document.getElementById("bbs").innerHTML = "I can display " + window._yourCar;
carFunction = "Volvo"
document.getElementById("nn").innerHTML = carFunction;
var carFunction;

const car = {type: "BMW", model:"500", color:"black"};
car.color = "red";//the property has changed
car.owner = "Semenov";//the property has added
document.getElementById("carCar").innerHTML =
"Car owner is " + car.owner;

//Create an array:
const cars = [" Saab", " Volvo", " Bmw"];
//Change an element:
cars[0] = " Toyota";
cars[2] = " Mersedes";
cars.push(" Audi");//Add an element
//Now, display an array:
document.getElementById("cars").innerHTML = cars;

carName = "tesla model x";
document.getElementById("caca").innerHTML = carName;
var carName;

var x = 5 + 5;
var y = "5" + 5;
var z = "Hello " + 5;
document.getElementById("gg").innerHTML = 
x + "<br>" + y + "<br>" + z;

function myFirstFunction (num1, num2){
    return num1 * num2;
}
document.getElementById("js").innerHTML = myFirstFunction(2, 2);

function secondFunction (number1, number2){
    return number1 * number2 + 15;
}
document.getElementById("js2").innerHTML = secondFunction(10, 2);

function thirdFunction (n1, n2, n3, n4){
    return n1 + n2 + n3 - n4;
}
document.getElementById("jsfunction").innerHTML = 
thirdFunction(10, 10, 10, 10);

var x = "Jhon";
var y = " knows";
var z = " my name";
function nameFunction (x, y, z) {
    return x + y + z;
}
document.getElementById("_qw").innerHTML = nameFunction (x, y, z);

var x = myFunction(5, 5);
document.getElementById("eee").innerHTML = x;
function myFunction(a, b){
    return a * b;
}

var y = myBatFunction("I got", " you!");
document.getElementById("batman").innerHTML = y;
function myBatFunction(a, b){
    return a + b;
}

var a = "Jhon knows your name.";
var b = " You need to be carefull.";
var c = " But I think that the batman will help you!"
var bat = myFunnyFunction (a, b, c);
document.getElementById("cnn").innerHTML = bat;
function myFunnyFunction (a, b, c){
    return a + b + c;
}

document.getElementById("bbc").innerHTML = bat;

function toCelsius(f) {
    return (5/9) * (f - 32);
}
document.getElementById("temperature").innerHTML = toCelsius(60);

function toFahrenheit (c){
    return (c * 1.8) + 32;
}
document.getElementById("reverse").innerHTML = toFahrenheit(40);

function toCel (f) {
    return (5/9) * (f - 32);
}
document.getElementById("demo22").innerHTML = toCel(120);

document.getElementById("demo22").innerHTML = 
"The temperature is " + toCelsius(105) + " Celsious";
function toCelsious (fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
var text = "The temperature is " + toCelsius(105) + " Celsious";

document.getElementById("dds").innerHTML = text;

function myFunction() {
    var carName = "Acura";
    document.getElementById("poi").innerHTML = 
    typeof carName + " " + carName;
} 
var cargo = "Fiat";
document.getElementById("fiat").innerHTML = cargo;

var superCar = {type:"Fiat", model:"500", color:"blue"};
document.getElementById("expert").innerHTML = 
"The car type is " + superCar.type;

var malePerson = {
    firstName:"John", 
    lastName:"Johnson", 
    age:80, 
    eyeColor:"dark blue"
};
document.getElementById("dingo").innerHTML = 
malePerson.firstName + " is " + malePerson.age + " years old.";

var femalePerson = {
   firstName:"Ray",
   lastName:"Johnson",
   id: 5566
};
document.getElementById("_ray").innerHTML = 
femalePerson.firstName +  " " + femalePerson.lastName;

var persona = {
    firstName:"Maikle",
    lastName:"Daygon",
    id: 2332
};
document.getElementById("hhh").innerHTML =
persona["firstName"] + " " + persona["lastName"];
//Object methods
var realPerson = {
    firstName: "Jack",
    lastName: "Fill",
    id: 2233,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("$code").innerHTML = realPerson.fullName();

var herSon = {
    firstName: "Edison",
    lastName: "Liberty",
    id: 89128763,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("herSon").innerHTML = 
herSon.fullName() + ": " + herSon.id;
//JavaScript Events
function displayDate(){
    document.getElementById("newTime").innerHTML = Date();
}

function showDate(){
    document.getElementById("attribute").innerHTML = Date();
}
var carName = "Volvo XC60";
var carName2 = 'Volvo XC 60';
document.getElementById("vol").innerHTML = 
carName + " " + carName2;

var txt = "AKJDFJHFWIIUWEYRBDKSJBBCVNXSKJDFH";
var sln = txt.length;
document.getElementById("string.lenght").innerHTML = sln;
document.getElementById("hhhh").innerHTML = "Hello " +
"Dolly!";
var x = "John";
var y = new String("Sally");
document.getElementById("qp").innerHTML = 
typeof x + "<br/>" + typeof y;
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("method").innerHTML = pos;
var string2 = "Please locate where 'locate' occurs!";
var pos = string2.indexOf("locate", 15);
document.getElementById("angel").innerHTML = pos;

function semenovFunction(){
    var str5 = document.getElementById("semenovFunction").innerHTML;
    var txt = str5.replace("Microsoft", "W3School");
    document.getElementById("semenovFunction").innerHTML = txt;
}
function ElFunction(){
    var t = document.getElementById("El").innerHTML;
    var dos = t.replace("TRAVELING", "FUTURE");
    document.getElementById("El").innerHTML = dos;
}
function priceFunction(){
    var list = document.getElementById("list").innerHTML;
    var $price = list.replace("Prices for: 1lb apples, 3lb banana, 5lbpear", "33$");
    document.getElementById("list").innerHTML = $price;
}
function ElisFunction(){
    var Elis = document.getElementById("Elis").innerHTML;
    var funEl = Elis.replace("Iron, gold, silver", "House, car, bank");
    document.getElementById("Elis").innerHTML = funEl;
}
function appleFunction(){
    var san1 = document.getElementById("san1").innerHTML;
    var san2 = san1.replace("apple", "banana");
    document.getElementById("san1").innerHTML = san2;
}
function tableFunction(){
    var oldtable = document.getElementById("old").innerHTML;
    var newtable = documen.getElementById("new").innerHTML;
    var newaction = oldtable.replace("old", "new");
}
function marchFunction(){
    var march14 = document.getElementById("march14").innerHTML;
    var marchAct = march14.replace("word", "WORLD!");
    document.getElementById("march14").innerHTML = marchAct;
}
function h2Function(){
    var d = document.getElementById("h2").innerHTML;
    var w = d.replace("visit", "see");
    document.getElementById("h2").innerHTML = w;
}
function $Function(){
    var microsoft = document.getElementById("microsoft").innerHTML;
    var replace = microsoft.replace(/MICROSOFT/i, "W3School");
    document.getElementById("microsoft").innerHTML = replace;
}
function globalFunction(){
    var global = document.getElementById("global").innerHTML;
    var action = global.replace(/Microsoft/g, "W3School");
    document.getElementById("global").innerHTML = action;
}
function hellowFunction(){
    var hw = document.getElementById("hw").innerHTML;
    document.getElementById("hw").innerHTML = hw.toUpperCase();
}
function lowerFunction(){
    var lower = document.getElementById("lower").innerHTML;
    document.getElementById("lower").innerHTML = lower.toLowerCase();
}
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ",text2);
document.getElementById("concat").innerHTML = text3;
function alertFunction() {
    var textNumber = "      Hello World!       ";
    alert(textNumber.trim());
}
let string = "44";
let actPadEnd = string.padEnd(5, "0");
document.getElementById("padEnd").innerHTML = actPadEnd;
let stChar = "This is the charAt method string";
let actCharAt = stChar.charAt(16);
document.getElementById("charAt").innerHTML = actCharAt;
var sttt = "Hello World!";
console.log(sttt);
var st = "HELLO WORLD";
st[0] = "A";
document.getElementById("dem").innerHTML = st[0];

function myConvertFunction(){
    var ddstr = "a,b,c,d,e,f,g";
    var arr = ddstr.split(",");
    document.getElementById("arr").innerHTML = arr[3];
}
var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
   text += arr[i] + "<br>"
}
document.getElementById("$_i").innerHTML = text;
function sixFunction(){
    var strSix = document.getElementById("stSixteen").innerHTML;
    var actSix = strSix.replace("word", "world");
    document.getElementById("stSixteen").innerHTML = actSix;
}
function MacFunction(){
    var present = document.getElementById("present").innerHTML;
    var actH2 = present.replace("Microsoft", "Apple");
    document.getElementById("present").innerHTML = actH2;
}
function longTextFunction(){
    var longText = document.getElementById("longText").innerHTML;
    document.getElementById("longText").innerHTML = longText.toUpperCase();
}
function shortTextFunction(){
    var Ltext = document.getElementById("longText").innerHTML;
    var actSS = Ltext.toLocaleLowerCase();
    document.getElementById("longText").innerHTML = actSS;
}
var x = 999999999999999;
var y = 9999999999999999;
document.getElementById("numbers").innerHTML = 
x + "<br>" + y;
var ert = 100 / "apple";
document.getElementById("isNaN").innerHTML = isNaN(ert);
var x = NaN; 
document.getElementById("isNaN").innerHTML = typeof x;

var myNumber = 2;
var txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>";
}
document.getElementById("Infinity").innerHTML = txt;
var x = new Date("2015-09-30");
document.getElementById("NumberMethod").innerHTML = Number(x);
var x = ["Tesla", "Jeep", "Ford Mustang"];
document.getElementById("array").innerHTML = x[2];
var y = ["Tesla", "Jeep", "Ford Focus", "Rodster"];
y[0] = "Tesla model three";
document.getElementById("array1").innerHTML = y[0];
var z = [" Model 3", " Model x", " Model y"];
document.getElementById("array2").innerHTML = z;

var cars12 = [" Tesla", " Ford", " Shevrolet", " BMW", " Toyota"];
document.getElementById("array3").innerHTML = cars12;
var person$1 = ["John", " Doe", 56];
document.getElementById("array4").innerHTML = person$1[1];
var fruits = ["banana", "apples", "strawberry", "pears", "kiwi"];
document.getElementById("fruits").innerHTML = fruits.length;
var newFruits = ["orange", "apple", "banana"];
var first = newFruits[0];
document.getElementById("newFruits").innerHTML = first;
var $Fruits = ["banana", "kiwi", "mango"];
var last = $Fruits[$Fruits.length-1];
document.getElementById("$Fruits").innerHTML = last;

var loopFruits, text, fLen, i;
var loopFruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = loopFruits.length;
text = "<ul>";
for (i = 0; i <= fLen; i++){
    text += "<li>" + loopFruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("loopFruits").innerHTML = text;

var listi, text, listLength, i;
var listi = ["one", "two", "three"];
listLength = listi.length;
text = "<ol>";
for (i = 0; i <= listLength[i]; i++);{
    text += "<li>" + list + "</li>";
}
text += "</ol>";
document.getElementById("listi").innerHTML = text;

var mokoFruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("moko").innerHTML = mokoFruits;
function mokoFunction(){
    mokoFruits.push("Lemon");
    document.getElementById("moko").innerHTML = mokoFruits;
}
var moloFruits = ["Banana ", "Oranges ", "Grapes ", "Kiwi " ];
document.getElementById("molo").innerHTML = moloFruits;
function moloFunction(){
    moloFruits.push("Lemon and Lime!");
    document.getElementById("molo").innerHTML = moloFruits;
}
var mopoFruits = ["molo", " polo", " roso", " qolo"];
document.getElementById("mopo").innerHTML = mopoFruits;
function mopoFunction() {
    mopoFruits.push(" goso", " asu", " bsbs", " aka");
    document.getElementById("mopo").innerHTML = mopoFruits;
}
var things = ["clean", " buy"];
document.getElementById("things").innerHTML = things;
function thingsFunction(){
    things[things.length] = " order through amazon"; " get the car"; " buy house";
    document.getElementById("things").innerHTML = things;
}
var fruits, text, fLen, i;
fruits = ["Banana", " Orange", " Apple", " Mango"];
fruits[6] = " Lemon";
fLen = fruits.length;
text = "";
for (i = 0; i < fLen; i++) {
    text += fruits[i] + "<br>";
}
document.getElementById("demmo").innerHTML = text;