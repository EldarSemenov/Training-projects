for (let i = 0; i <= 10; i++) {
    // console.log(`Number  is ${i}`);
    if (i === 2) {
        console.log(`2 is my favorite number`);
        continue;
    }
    if (i === 5) {
        console.log(`Stop the loop`);
        break;
    }
    console.log(`Number ${i}`);
}

let i = 0;
while (i < 10) {
    console.log(`Number is ${i}`);
    i++;
}

let i = 0;
do {
    console.log(`Number ${i}`);
    i++;
} while (i <= 10);

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
cars.forEach(function (car) {
    console.log(car);
});
const users = [
    { id: 1, name: "Jhon" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Karen" },
    { id: 4, name: "Steve" },
];
const ids = users.map(function (user) {
    return user.id;
});
console.log(ids);

const names = users.map(user => user.name);
console.log(names);

const autos = ["BMW", "Tesla", "Toyota"];

autos.forEach(function (auto, num, array) {
    console.log(`${num} : ${auto}`);
    console.log(array);
});

const user = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 40,
};
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}

//window methods / objects / properties

console.log(123);
window.alert("Hello World!");

const input = prompt();
alert(input);

if (confirm("Are you sure")) {
    console.log("YES");
} else {
    console.log("NO");
}

let val;
// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
val = window.innerWidth;
val = window.scrollY;
val = window.scrollX;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// window.location.href = "http://google.com";
// window.location.reload();
// window.history.go();
val = window.history.length;
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope ", a, b, c);
}
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("If Scope: ", a, b, c);
}

for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}
console.log("Global Scope", a, b, c);
// test();

let val;
val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.body.h1;
console.log(val);

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "10px";
// document.getElementById("task-title").style.display = "none";

document.getElementById("task-title").textContent = "TASK LIST";
document.getElementById("task-title").innerText = "My TASKS";

document.getElementById(
    "task-title"
).innerHTML = `<span style="color:red">MY TASKS LIST</span>`;

const title = document.getElementById("task-title");
title.style.color = "red";

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".test"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "green";
document.querySelector("li:last-child").style.color = "orange";
document.querySelector("li:nth-child(2)").style.color = "red";
document.querySelector("li:nth-child(3)").textContent = "Number 3";

document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";

const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0].textContent);
items[0].style.color = "red";
items[3].textContent = "Hello World!";

let listItems = document.getElementsByTagName("li");
// console.log(listItems[0]);

listItems = Array.from(listItems);
listItems.reverse();
listItems.forEach(function (item, index) {
    console.log(item.textContent);
    item.textContent = `${index}: Hello`;
});

const items = document.querySelectorAll(".collection-item");
items.forEach(function (item, index) {
    item.textContent = `${index}: Hello Eldar!`;
});
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li) {
    li.style.background = "#ccc";
});

liEven.forEach(li => {
    li.style.background = "#f4f4f4";
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "red";
}
for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "green";
}
console.log(items);
