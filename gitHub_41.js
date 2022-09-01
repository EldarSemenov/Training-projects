const banner = document.querySelector("#banner");
banner.style.backgroundColor = "lightgreen";
banner.style.display = "none";
banner.style.display = "";

const headline = document.querySelector("#headline");
headline.remove();
console.log(document.body);
console.log(document.documentElement);

const turnDarkModeHTML = () => {
    document.documentElement.classList.toggle("dark");
};

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    turnDarkModeHTML();
});

const head = document.querySelector("#head");
const btnColor = document.querySelector("#btn-h1");

const changeColor = element => {
    element.classList.toggle("yellow");
};
btnColor.addEventListener("click", () => {
    changeColor(head);
});

const form = document.querySelector("#payment-form");
console.log(form.dataset);
console.log(form.dataset.currency);

const form = document.querySelector("#payment-form");

console.log(form.dataset);

const navbar = document.querySelector("#navbar");
console.log(navbar.dataset);
navbar.dataset.userId = 1000;
navbar.dataset.rememberMe = false;
const rememberMe = navbar.dataset.rememberMe === "false";
console.log(navbar);
console.log(rememberMe);

const h1 = document.querySelector("h1");
console.log(h1.parentElement);

const h1 = document.querySelector("h1");
console.log(h1.closest(".main"));

const div = document.querySelector("#container");
div.innerHTML += `<p>Another paragraph</p>`;

const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("beforeend", `<div class="position">Third</div>`);
positions.insertAdjacentHTML(
    "afterbegin",
    `<div class="position">Zero(first)</div>`
);

const h1 = document.querySelector("h1");
h1.insertAdjacentHTML("beforeend", `<h2>Hello World</h2>`);

const apps = ["Calculator", "Phone", "Messages"];
const list = document.querySelector("#apps-list");

apps.forEach(app => list.insertAdjacentHTML("beforeend", `<li>${app}</li>`));

const list = document.querySelector(".list");

const apps = ["BMW", "Mersedes", "Audi"];

apps.forEach(app => list.insertAdjacentHTML("beforeend", `<li>${app}</li>`));

const renderShoppingList = items => {
    const shoppingList = document.querySelector("#shopping-list");

    return items.forEach(item =>
        shoppingList.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    );
};

const sampleList = ["Carrot", "Apples", "Fish"];

renderShoppingList(sampleList);

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    renderShoppingList(sampleList);
});

const addItemToShoppingList = item => {
    const list = document.querySelector("#list");

    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};
addItemToShoppingList("Carrot");
addItemToShoppingList("BMW");
addItemToShoppingList("My Car");

const addItemToShoppingList = item => {
    const shoppingList = document.querySelector("#shopping-list");
    shoppingList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};
const form = document.querySelector("#shopping-form");
const input = document.querySelector("#item-name");

form.addEventListener("submit", event => {
    event.preventDefault();
    addItemToShoppingList(input.value);
});

const cleanItem = item => {
    item.textContent = "none";
};
const button = document.querySelector("#button");

button.addEventListener("click", event => {
    event.preventDefault();
    cleanItem(input.value);
});

const addItemToShoppingList = item => {
    const shopList = document.querySelector("#shopping-list");
    shopList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", event => {
    event.preventDefault();
    addItemToShoppingList(input.value);
});
