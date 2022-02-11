const clearBtn = document.querySelector(".clear-tasks");

const card = document.querySelector(".card");
const heading = document.querySelector("h5");

clearBtn.addEventListener("click", runEvent);
clearBtn.addEventListener("dbclick", runEvent);
clearBtn.addEventListener("mousedown", runEvent);
clearBtn.addEventListener("mouseup", runEvent);
card.addEventListener("mouseenter", runEvent);
card.addEventListener("mouseleave", runEvent);
card.addEventListener("mouseover", runEvent);
card.addEventListener("mouseout", runEvent);
card.addEventListener("mousemove", runEvent);
//EVENT HANDLER

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
form.addEventListener("submit", runEvent);
taskInput.addEventListener("keydown", runEvent);
taskInput.addEventListener("keyup", runEvent);
taskInput.addEventListener("keypress", runEvent);
taskInput.addEventListener("focus", runEvent);
taskInput.addEventListener("blur", runEvent);
taskInput.addEventListener("cut", runEvent);
taskInput.addEventListener("paste", runEvent);
taskInput.addEventListener("input", runEvent);
select.addEventListener("change", runEvent);

function runEvent(event) {
    event.preventDefault();
    console.log(`EVENT TYPE: ${event.type}`);
    console.log(event.target.value);
    heading.innerText = event.target.value;
    console.log(taskInput.value);
}

document.querySelector(".card-title").addEventListener("click", function () {
    console.log("card title");
});
document.querySelector(".card-content").addEventListener("click", function () {
    console.log("card content");
});
document.querySelector(".main").addEventListener("click", function () {
    console.log("main");
});
document.querySelector(".call").addEventListener("click", function () {
    console.log("call");
});

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const key = "id";
console.log(user[key]);
const key2 = "name";
console.log(user[key2]);
const key3 = "age";
console.log(user[key3]);

const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({ id: 2, name: "Sam" }), "name");
console.log(getValue({ id: 2, name: "Sam" }), "id");

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const keys = Object.keys(user);
console.log(keys);
const entries = Object.entries(user);
console.log(entries);

const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false,
};
const keys = Object.keys(settings);
console.log(keys);
keys.forEach(key => {
    console.log(settings[key]);
});

const datas = {
    firstName: "Falle",
    lastName: "Ut",
};

const das = Object.keys(datas);
console.log(das);
das.forEach(da => {
    console.log(datas[da]);
});

const cars = {
    first: "Tesla",
    second: "BMW",
    third: "Reno",
    forth: "Toyota",
};

const keys = Object.keys(cars);
console.log(keys);

keys.forEach(key => console.log(cars[key]));

for (let i = 0; i < cars.length; i++) {
    console.log(cars[key]);
}
