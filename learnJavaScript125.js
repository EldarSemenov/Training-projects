const job = document.querySelector("#job");
job.insertAdjacentHTML("beforeend",
`<div class="position">2001</div>`);
job.insertAdjacentHTML("beforeend", `<div class="position">2002</div>`);
job.insertAdjacentHTML("afterbegin",`<div class="position">1999</div>`);
job.insertAdjacentHTML("afterbegin",`<div class="position">1998</div>`);
job.insertAdjacentHTML("beforeend", `<div class="position">2003</div>`);
//
const apps = ['Calculator', 'Phone', 'Messages', 'Tesla Model 3', 'Seseron'];
const list = document.querySelector("#apps-list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
//
const listToBuy = ["Apples", "Grapes", "Oranges", "Bananas", "Lemons", "Watermelon"];
const shoppingList = document.querySelector("#shopping-list");

listToBuy.forEach(item => {
    shoppingList.insertAdjacentHTML("beforeend",
    `<li>${item}</li>`);
});
const add = listToBuy.push("Watermelon");
console.log(add);
console.log(listToBuy);
//
const addItemToShopList = item => {
    const shopList = document.querySelector("#shopping-list");
    shopList.insertAdjacentHTML("beforeend",
    `<li>${item}</li>`);
}
addItemToShopList("Paper");
addItemToShopList("Car");
console.log(addItemToShopList("Tesla 3"));
//
const init = () => {
    const shopList = document.querySelector("#shopping-list");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            shopList.insertAdjacentHTML("beforeend",
            `<li>${item.item}</li>`);
        });
    });
}
init();
//
const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World!";
console.log(paragraph);
document.body.appendChild(paragraph);
//
const h1 = document.createElement("h1");
h1.classList.add("heading");
h1.textContent = "Planet";
document.body.appendChild(h1);
console.log(h1);
//
const h2 = document.createElement("h2");
h2.classList.add("small");
h2.textContent = 'Small';
document.body.appendChild(h2);
console.log(h2);
//
const h3 = document.createElement("h3");
h3.classList.add("additional");
h3.textContent = "Additional";
document.body.appendChild(h3);
console.log(h3);
//
const h4 = document.createElement("h4");
h4.classList.add("indipandence");
h4.textContent = "indipandence";
document.body.appendChild(h4);
console.log(h4);
//
const h5 = document.createElement("h5");
h5.classList.add("atribute");
h5.textContent = 'Small Heading';
document.body.appendChild(h5);
console.log(h5);
//
const h6 = document.createElement("h6");
h6.classList.add("coding");
h6.textContent = 'Hello World again!';
document.body.appendChild(h6);
console.log(h6);
//
const div = document.createElement("div");
if(isDarkMode()){
    div.classList.add("dark-mode");
}else {
    div.classList.add("light-mode");
}
div.textContent = 'Hello world!';
document.body.appendChild(div);
//
const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    console.log("The launch has started!");
});
//
const but = document.querySelector("#button");
but.addEventListener("click", () => {
    console.log('Button is working');
});
//
const button = document.querySelector("#button");
console.log("A");
button.addEventListener("click", () => {
    console.log('B');
});
console.log("C");
//
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const picture = document.querySelector("#picture")

first.addEventListener("click", () => {
    h1.insertAdjacentHTML("beforeend", `🌿`);
});

second.addEventListener("click", () => {
    h2.insertAdjacentHTML("beforeend", `🍀`);
});

third.addEventListener("click", () => {
    picture.insertAdjacentHTML("beforeend", `☘️`);
});
//
const button = document.querySelector("#app-button");

console.log("A");
button.addEventListener("click", () => {
    console.log("B");
});
console.log("C");
//
const clickGreeting = () => {
    const button = document.querySelector("#my-button");
    button.addEventListener("click", () => {
        console.log("Welcome!");
    });
}
clickGreeting();