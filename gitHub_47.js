const fruits = ["apple", "grape", "pear", "banana"];

const list = document.querySelector("#list");

fruits.forEach(fruit =>
    list.insertAdjacentHTML("beforeend", `<li>${fruit}</li>`)
);

const cars = ["Tesla", "BMW", "Audi", "Mercedes", "Ford"];

const list = document.querySelector("#list");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    setTimeout(() => {
        cars.forEach(car => {
            list.insertAdjacentHTML("beforeend", `<li>${car}</li>`);
        });
    }, 2000);
});

const products = ["one", "Tesla", "Hello", "Kitty", "eggs"];

const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    setTimeout(() => {
        products.forEach(item => {
            list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
        });
    }, 500);
});

const addItemToList = item => {
    const list = document.querySelector("#list");
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};

addItemToList("Tesla Model 3");
addItemToList("Avatar 4");
addItemToList("Ford Mustang");

const addItemToShoppingList = item => {
    const list = document.querySelector("#list");
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};

const form = document.querySelector("#shopping-form");
const input = document.querySelector("#item-name");

form.addEventListener("submit", event => {
    event.preventDefault();
    addItemToShoppingList(input.value);
});

const init = () => {
    const list = document.querySelector("#shopping-list");

    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json"
    )
        .then(response => response.json())
        .then(data => {
            data.forEach(d => {
                list.insertAdjacentHTML("beforeend", `<li>${d.item}</li>`);
            });
        });
};

init();

const p = document.createElement("p");
p.classList.add("text-center");
p.textContent = "Hello World!";
p.setAttribute("id", "super-text");
document.body.appendChild(p);
console.log(p);

const div = document.querySelector("#conteiner");
div.insertAdjacentHTML("beforeend", `<h1>Hello World!</h1>`);
const h1 = document.querySelector("h1");
h1.dataset.userId = 2873;
h1.dataset.lightMode = true;
h1.setAttribute("id", "main-text");
