function MyFunction() {
    var year, eligible;
    year = document.getElementById("year").value;
    eligible = (year < 2000) ? " Not eligible":" You are eligible";
    document.getElementById("id1").innerHTML = "Your licence demonstrates that you are" + eligible + " to drive";
}
function sumFunction() {
    var summ, reaction;
    summ = document.getElementById("summ").value;
    reaction = (summ < 20) ? "Thank you":"You are lavish";
    document.getElementById("id2").innerHTML = reaction;
}
function _myFunction() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    }else{
        voteable = (age < 18) ? "Too young":"Old enough";
    }
    document.getElementById("id3").innerHTML = voteable;
}
if (new Date().getHours() < 18){
    document.getElementById("$").innerHTML = "Good Day!";
}
function hourFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Good Day!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("id4").innerHTML = greeting;
};
function H_Function() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning!";
    } else if (time < 20) {
        greeting = "Good day!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("id5").innerHTML = greeting;
}

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";                        
}
document.getElementById("id5").innerHTML = "Today is " + day;

var txt;
switch (new Date().getDay()) {
    case 6:
        txt = "Today is Saturday";
        break;
    case 0:
        txt = "Today is Ssunday";
        break;
    default:
        txt = "We are looking forward to the Weekend";        
}
document.getElementById("id7").innerHTML = txt;

function switchFunction() {
    var text;
    switch (new Date().getDay()) {
        default:
            text = "We are waiting for the Weekend";
            break;
        case 6:
            text = "Today is Saturday";
            break;
        case 0: 
            text = "Today is Sunday";        
    }
    document.getElementById("id8").innerHTML = text;
}
var text;
switch (new Date().getDay()) {
    case 4:
    case 5: 
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";               
}
document.getElementById("id9").innerHTML = text;
var x = "0";
switch (x) {
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "No value found";        
}
document.getElementById("id10").innerHTML = text;

var cars = ["BMW", "Tesla", "Volvo", "Ford", "Jeep"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
};
document.getElementById("id11").innerHTML = text;

var fruits = ["Banana", "Apple", "Pear", "Grape", "Orange", "Lime", "Strawberry"];
var txt = "";
var i;
for (i = 0; i < fruits.length; i++) {
    txt += fruits[i] + "<br>";
};
document.getElementById("id12").innerHTML = txt;
var str = '';
var i;
for (i = 0; i <= 10; i++) {
    str = str + i;
}
document.getElementById("id13").innerHTML = str;

var string = '';
var i;
for (i = 0; i <= 20; i++) {
    string = string + i + "<br>";
}
document.getElementById("id14").innerHTML = string;

var car = ["mers", "subaru", "audi"];
var i;
for (i = 0; i < car; i++) {
    car += car + i + "<br>";
};
document.getElementById("id15").innerHTML = car;

var items = ["matches", "hammer", "rope", "bagpack", "bag", "lighter"];
var i;
var txt = "";
for (i = 0; i < items.length; i++) {
    txt += items[i] + "<br>";
}
document.getElementById("id16").innerHTML = txt;

var fruits = ["Lime", "Lemon", "Orange", "Grapefruit", "Grape", "Tangerin"];
var text = "";
var i;
for (i = 0; i < fruits.length; i++) {
    text += fruits[i] + "<br>" + "<br>";
};
document.getElementById("id17").innerHTML = text;

var str = '';
for (var i = 0; i <= 10; i++) {
    str += i;
};
document.getElementById("id18").innerHTML = str;

var string = "";
for (var i = 0; i <= 20; i++) {
    string += i + "<br>";
}
document.getElementById("id19").innerHTML = string;

for (var i = 0; i < 10; i++) {
    document.getElementById("id20").innerHTML = i;
}
var txt = '';
var i;
for (i = 0; i < 5; i++) {
    txt += 'The number is ' + i + '<br>';
}
document.getElementById("id21").innerHTML = txt;

var persons = ["John", "Mike", "Linda", "Linkoln", "Tommy", "Well"];
var i;
var text = "";
var len = persons.length
for (i = 0; i < len; i++) {
    text += persons[i] + "<br>";
};
document.getElementById("id22").innerHTML = text;

var list = ["ListNumber 1", "ListNumber 2", "ListNumber 3", "ListNumber 4"];
var i;
var txt = "";
len = list.length;
for (i = 0; i < len; i++) {
    txt += list[i] + "<br>";
}
document.getElementById("id23").innerHTML = txt;

var i;
var txt = "";
for (i = 0; i <= 10; i++) {
    txt += i + 1 + "<br>";
}
document.getElementById("id24").innerHTML = txt;

var index;
var st = "";
for (index = 0; index <= 20 + 1; index++) {
    st += index + "i" + "<br>";
}
document.getElementById("id24").innerHTML = st;

var txt = "";
var person = {fname: "Eldar", lname: "Semenov", age: 36};
var x;
for (x in person) {
    txt += person[x] + "    ";
}
document.getElementById("id25").innerHTML = txt;

var text = "";
var car = {type:"sedan", model:"Tesla", weight:"3200kg"};
var x;
for (x in car) {
    text += car[x] + "<br>";
}
document.getElementById("id26").innerHTML = text;

var txt = "";
var fruit = {type:"citrus", kind:"orange", weight:"0.2lb"};
var x;
for (x in fruit) {
    txt += fruit[x] + "<br>";
} 
document.getElementById("id27").innerHTML = txt;

var text = "";
var x;
var person = {FirstName:"David", LastName:"Mooray", age:40};
for (x in person) {
    text += person[x] + " ";
}
document.getElementById("id28").innerHTML = text;

var txt = "";
var numbers = [23, 1, 45, 66, 89, 90, 34];
var x;
for (x in numbers) {
    txt += numbers[x] + "<br>";
}
document.getElementById("id29").innerHTML = txt;

var str = "";
var num = [12, 234, 55, 89, 84, 34, 444];
var x;
for (x in num) {
    str += "number " + num[x] + "<br/>";
}
document.getElementById("id30").innerHTML = str;

var txt = "";
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(myNumFunction);
document.getElementById("id31").innerHTML = txt;
function myNumFunction(value, index, array) {
    txt += value + "<br/>";
};
var text = "";
var num = [1, 2, 3];
num.forEach(function_2);
document.getElementById("id32").innerHTML = text;
function function_2 (value, index, array) {
    text = text + "number " + value + "<br/>";
};

var txt = "";
var num = [1, 3, 6, 90, 67, 6, 45];
num.forEach(thisFunction);
document.getElementById("id33").innerHTML = txt;
function thisFunction (value, index, array) {
    txt = txt + value + "<br/>";
};
let cars_ = ["BMW", "Volvo", "Mini"];
let text_ = "";
for (let x of cars_) {
    text_ += x + "<br/>";
};
document.getElementById("id34").innerHTML = text_;

let myCars = ["Tesla Rodster", "Tesla model 3", "Tesla model x"];
let myText = '';
for (let x of myCars) {
    myText += x + "<br>";
};
document.getElementById("id35").innerHTML = myText;

let myString = ["Tesla model Y", "Tesla model x", "Tesla Cyber Track", "Tesla mpodel 3"];
let myTxt = '';
for (let x of myString) {
    myTxt += x + "<br/>";
};
document.getElementById("id36").innerHTML = myTxt;

let MyName = "ELDARSEMENOV";
let superText = '';
for (let x of MyName) {
    superText += x + "<br/>";
};
document.getElementById("id37").innerHTML = superText;

let $txt = '';
let $name = "ELDARSEMENOV";
for (let x of $name) {
    $txt += x + " " + " "; 
};
document.getElementById("id38").innerHTML = $txt;

var texxt = "";
var i = 0;
while (i < 10) {
    texxt += "<br>This number is " + i; i++;
};
document.getElementById("id39").innerHTML = texxt;

var t_t = "";
var i = 0;
while (i < 100 + 1) {
    t_t += "<br>is this number " + i + " ?"; i++
};
document.getElementById("id40").innerHTML = t_t;

var thisText = "";
var s = 0;
while (s < 20) {
    thisText += "<br>The number of the sighn is " + s; s++;
};
document.getElementById("id41").innerHTML = thisText;

var this_txt = "";
var i = 0;
do {
    this_txt += "<br>This is num " + i; i++;
}
while (i < 10);
document.getElementById("id42").innerHTML = this_txt;

var $text = "";
var i = 0;
do {
    $text += "<br>NUMBER: " + i; i++;
}
while(i <= 20);
document.getElementById("id43").innerHTML = $text;

var E_Cars = ["Audi", "BMW", "Mini", "Tesla", "Lucid"];
var i = 0;
var text = "";
for (;E_Cars[i];) {
    text += E_Cars[i] + "<br>"; i++;}
    document.getElementById("id44").innerHTML = text; 

var electroCars = ["Lucid", "Audi", "Tesla"];
var i;
var txt = "";
for (i = 0; i < electroCars.length; i++) {
    txt += electroCars[i] + "<br/>";
}    
document.getElementById("id45").innerHTML = txt;

var map = ["Caffe", "School", "Station", "Gym"];
var txt = "";
var i;
for (i = 0; i < map.length; i++) {
    txt += map[i] + "<br/>";
}
document.getElementById("id46").innerHTML = txt;

var cars = ["BMW", "Ziguli", "Tesla"];
var text = "";
var i = 0;
for (;cars[i];) {
    text += cars[i] + "<br>"; i++;
}
document.getElementById("id47").innerHTML = text;

var auto = ["Tesla Model 3", "Tesla Model X", "Tesla Rodster"];
var i = 0;
var text = "";
while (auto[i]) {
    text += auto[i] + "<br>"; i++
}
document.getElementById("id48").innerHTML = text;

var orderList = ["Food", "Car", "Ticket"];
var i = 0;
var txt = "";
while (orderList[i]) {
    txt += orderList[i] + "<br/>"; i++
}
document.getElementById("id49").innerHTML = txt;

var i = 0; 
while (i < 20) {
    document.getElementById("id50").innerHTML = i;
    i = i + 2; i++;
}

var txt = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {break;}
    txt += "The number is " + i + "<br/>";
}
document.getElementById("id51").innerHTML = txt;

var text = "";
var i;
for (i = 0; i < 20; i++) {
    if (i === 10) {break;}
    text += "the number " + i + "<br/>"
}
document.getElementById("id52").innerHTML = text;

var $_txt = "";
for (i = 0; i < 50; i++) {
    if (i === 25){break;}
    $_txt += "it is number " + i + "<br/>";
}
document.getElementById("id53").innerHTML = $_txt;

var text = "";
var i;
for (i = 0; i < 20; i++) {
    if (i === 13) {continue;}
    text += "The my num is " + i + "<br/>";
}
document.getElementById("id53").innerHTML = text;

var mytext = "";
var i;
for (i = 0; i < 10; i++){
    if (i === 6) {continue;}
    mytext += "It's my number " + i + "<br/>";
}
document.getElementById("id55").innerHTML = mytext;

var cars = ["Saab", "Tesla", "BMW", "Ford", "Volvo"];
var text = "";
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
}
document.getElementById("id56").innerHTML = text;



