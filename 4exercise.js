var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("01").innerHTML = isArray(fruits);
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("02").innerHTML = isArray(fruits);
function isArray(myArray) {
    return myArray.constructor === Array;
}
var myDate = new Date();
document.getElementById("03").innerHTML = isDate(myDate);
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}
var myDate = new Date();
document.getElementById("04").innerHTML = isDate(myDate);
function isDate(myDate) {
    return myDate.constructor === Date;
}
function myFunction(){
    var y = "5";
    var x = + y;
    document.getElementById("05").innerHTML = 
    typeof y + "<br>" + typeof x;
}
function secFunction() {
    var y = "Jhon";
    var x = + y;
    document.getElementById("06").innerHTML = 
    typeof y + "<br>" + typeof x;
}
var str = "Visit this best programming scholl - W3School!";
var n = str.search("W3School");
document.getElementById("07").innerHTML = n;

var string = "Visit me!";
var t = string.search(/me/i);
document.getElementById("08").innerHTML = t;

function my_Function(){
    var str = document.getElementById("09").innerHTML;
    var txt = str.replace("Microsoft", "W3School");
    document.getElementById("09").innerHTML = txt;
}
function myNewFunction() {
    var txt = document.getElementById("09").innerHTML;
    var change = txt.replace("W3School", "Apple");
    document.getElementById("09").innerHTML = change;
}
function _Function() {
    var str = document.getElementById("10").innerHTML;
    var text = str.replace(/Microsoft/i, "W3School");
    document.getElementById("10").innerHTML = text;
}
function qFunction() {
    var str = "Visit W3School";
    var pattl = /w3School/i;
    var result = str.match(pattl);
    document.getElementById("11").innerHTML = result;
}
function wFunction() {
    var string = "Is this all there is? and here is also is!";
    var pattl = /is/g;
    var result = string.match(pattl);
    document.getElementById("12").innerHTML = result;
}
function eFunction () {
    var str1 = "\nIs th\nis it?";
    var pattl = /^is/m;
    var result = str1.match(pattl);
    document.getElementById("13").innerHTML = result;
}
function rFunction () {
    var str = "Give 100%!";
    var patll = /\d/g;
    var result = str.match(patll);
    document.getElementById("14").innerHTML = result;
}
function tFunction() {
    var str = "Is this all there is?";
    var pattl = /\s/g;
    var result = str.match(pattl);
    document.getElementById("15").innerHTML = result;
}
function yFunction() {
    var str = "HELLO, LOOK AT YOU!";
    var pattl = /\bLO/;
    var result = str.match(pattl);
    document.getElementById("16").innerHTML = result;
}
var str = "HELLO, LOOK AT YOU!";
var pattl = /LO\b/;
var result = str.match(pattl);
document.getElementById("17").innerHTML = result;

function uFunction() {
    var str = "Hellooo World! Hello W3Schooooool!";
    var action = /o+/g;
    var result = str.match(action);
    document.getElementById("18").innerHTML = result;
}
function iFunction() {
    var str = "Helooo World! Helloooo W3School!";
    var action = /lo*/g;
    var result = str.match(action);
    document.getElementById("19").innerHTML = result;
}
function oFunction() {
    var str = "1, 100 or 1000?";
    var action = /10?/g;
    var result = str.match(action);
    document.getElementById("20").innerHTML = result;
}
txt = document.getElementById("21").innerHTML;
document.getElementById("22").innerHTML = /e/.test(txt);

function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").nodeValue;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high"
        }
        catch (err) {
            message.innerHTML = "Input is " + err;
        }
}
/*funcvtion my__function() {
    var message, x;
    message = document.getElementById("p02");
    nessage.innerHTML = "";
    x = document.getElementById("demo1").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x >10) throw "is empty";
        if (x < 5) throw "is too low";
    }
    catch (err) {
        message.innerHTML = "input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}*/
thisFunction();
function thisFunction() {
    var carName = "Tesla";
    document.getElementById("id23").innerHTML = typeof carName + " " + carName;
}
document.getElementById("id24").innerHTML = typeof carName;

var carname = "Volvo";
itFunction();
function itFunction() {
    document.getElementById("id25").innerHTML = 
    "I can display " + carname;
}
ltFunction();
document.getElementById("id26").innerHTML = "I can show " + CARname;
function ltFunction () {
    CARname = "Tesla";
}
var car_name = "Jeep";
document.getElementById("id27").innerHTML = "I can demonstrate " + window.car_name;

x = 5;
elem = document.getElementById("id28");
elem.innerHTML = x;
var x;
var y;
y = 10;
elem = document.getElementById("id29");
elem.innerHTML = y;

var x = 5;
var y = 7;
elem = document.getElementById("id30");
elem.innerHTML = x + " " + y;

var x = 10;
elem = document.getElementById("id31");
elem.innerHTML = "x is" + x + " and z is " + z;
var z = 33;

var x = 5;
var u;
elem = document.getElementById("id32");
elem.innerHTML = x + " " + u;
u = 7;