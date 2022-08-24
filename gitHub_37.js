const apps = ["Phone", "List", "Apple", "Car", "Lamp"];

const list = document.querySelector("#list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});

const itemsToBuy = ["Apple", "Pear", "Fish", "Lam", "Maches"];

const list = document.querySelector("#super-list");

itemsToBuy.forEach(item =>
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
);

const apps = ["Calculator", "Phone", "Messages"];

const list = document.querySelector("#apps-list");

apps.forEach(app => list.insertAdjacentHTML("beforeend", `<li>${app}</li>`));

const arrayList = ["Banana", "Apples", "Oranges", "Carrots", "Grapes"];
const arrayTech = ["Watches", "TV", "Internet", "Phone", "Practise"];

const renderShoppingLIst = items => {
    const list = document.querySelector("#shopping-list");
    items.forEach(item =>
        list.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    );
};
renderShoppingLIst(arrayList);
renderShoppingLIst(arrayTech);

function addItemToShoppingList(item) {
    const list = document.querySelector("#shopping-list");
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
}
addItemToShoppingList("Apples");
addItemToShoppingList("Pears");
addItemToShoppingList("Grapes");
addItemToShoppingList("Fish");
addItemToShoppingList("Meat");
addItemToShoppingList("Banana");

const addItemToShopingList = item => {
    const list = document.querySelector("#shopping-list");
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};
addItemToShopingList("Tesla Model 3");
addItemToShopingList("BMW M3");
addItemToShopingList("Reno");
addItemToShopingList("Ford Mustang");
addItemToShopingList("Mercedes-Benz");

const init = () => {
    const shoppingList = document.querySelector("#shopping-list");
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(item => {
                shoppingList.insertAdjacentHTML(
                    "beforeend",
                    `<li>${item.item}</li>`
                );
            });
        });
};

init();

const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World";
console.log(paragraph);
document.body.appendChild(paragraph);

const h1 = document.createElement("h1");
h1.classList.add("header");
h1.textContent = "Hello World!";
document.body.appendChild(h1);
console.log(h1);

const main = document.createElement("main");
document.body.appendChild(main);

const h2 = document.createElement("h2");
h2.classList.add("header");
h2.textContent = "Shopping-list";
document.body.appendChild(h2);
console.log(h2);

const ul = document.createElement("ul");
ul.classList.add("shopping-list");
document.body.appendChild(ul);

const list = ["Banana", "Apple", "Grapes"];
const shopList = document.querySelector(".shopping-list");

const putItem = () => {
    list.forEach(item =>
        shopList.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    );
};
putItem();

const div = document.createElement("div");

if (isDarkMode()) {
    div.classList.add("dark-mode");
} else {
    div.classList.add("light-mode");
}
div.textContent = "Hello World!";
document.body.appendChild(div);

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    console.log("Button Clicked");
});

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log("You clicked this button, awesome!");
});

const alertButton = document.querySelector("#alert-button");

alertButton.addEventListener("click", () => {
    alert("THERE IS A MESSAGE FOR YOU!");
});

const button = document.querySelector("#button");

console.log("A");

button.addEventListener("click", () => {
    console.log("B");
});

console.log("C");

const initClickGreeting = () => {
    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
        console.log("Welcome to my WEBSITE!");
    });
};
initClickGreeting();

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    console.log("You can press the button only once!");
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loading... Message has been sent!";
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    button.textContent = "LOADING...";
    console.log("You can press only once!");
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        button.setAttribute("disabled", "disabled");
        button.textContent = "Loading...";
        console.log("You press the button seccessfully");
    }, 3000);
});

const button = document.querySelector("#word-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        alert("The word word implies when you wnat to describe something!");
        button.textContent = "button";
        console.log("You changed this word for button");
    }, 500);
});

const button = document.querySelector("#my-button");

button.addEventListener("click", () => {
    button.textContent = "Loading...";
});
