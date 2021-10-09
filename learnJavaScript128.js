const positions = document.querySelector("#job-position");
positions.insertAdjacentHTML("beforeend", 
`<div class="position">2001</div>`);
positions.insertAdjacentHTML("beforeend", 
`<div class="position">2002</div>`);
positions.insertAdjacentHTML("beforeend", 
`<div class="position">2003</div>`);
positions.insertAdjacentHTML("beforeend", 
`<div class="position">2004</div>`);
positions.insertAdjacentHTML("beforeend",
`<div class="position">2005</div>`);
//
positions.insertAdjacentHTML("afterbegin", 
`<div class="position">1999</diiv>`);
positions.insertAdjacentHTML("afterbegin",
`<div class="position">1998</div>`);
positions.insertAdjacentHTML("afterbegin",
`<div class="position">1997</div>`);
//
const list = document.querySelector("#list");
list.insertAdjacentHTML("beforeend", `<li>Potato</li>`);
list.insertAdjacentHTML("beforeend", `<li>Grapes</li>`);
list.insertAdjacentHTML("beforeend", `<li>Lime</li>`);
list.insertAdjacentHTML("beforeend", `<li>Apples</li>`);
//
const apps = ["Calculator", "Phone", "Messages"];
const list = document.querySelector("#apps-list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
//
const cars = ['Tesla 3', 'Rivion', 'Lusied', 'BMW e3', 'ES'];
const list = document.querySelector("#car-list");

cars.forEach(car => {
    list.insertAdjacentHTML("beforeend", `<li>${car}</li>`);
});
//
const products = ['Grapes', 'Avocado', 'Apples', 'Lemon', 'Pears'];
const shopList = document.querySelector("#shopping-list");

products.forEach(product => {
    shopList.insertAdjacentHTML("beforeend", 
    `<li>${product}</li>`);
});
//
const renderShoppingList = items => {
    const shoppingList = document.querySelector("#shopping-list");
    items.forEach(item => {
       shoppingList.insertAdjacentHTML("beforeend",
       `<li>${item}</li>`);
    });
}
const sampleList = ['Grapes', 'Watermelon', 'Lemon', 'Avocado', 'Apples'];
console.log(renderShoppingList(sampleList));
//
const addItemToShoppingList = item => {
    const list = document.querySelector("#shopping-list");
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
}
console.log(addItemToShoppingList("Plam"));
addItemToShoppingList("Avocado");
addItemToShoppingList("Apple");
//
const init = () => {
    const list = document.querySelector("#shopping-list");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {
            list.insertAdjacentHTML("beforeend",
            `<li>${item.item}</li>`);
        });
    });
}
init();
//
const init = () => {
    const list = document.querySelector("#shopping-list");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {
            list.insertAdjacentHTML("beforeend",
            `<li>${item.item}</li>`);
        });
    });
}
init();
*/
const paragraph = document.createElement("h1");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World!";
console.log(paragraph);
document.body.appendChild(paragraph);
//
const text = document.createElement("p");
text.classList.add("text");
text.textContent = `There are so many books 
in the world that nobody is able to read them
all. It will take more than one life.`;
document.body.appendChild(text);
console.log(text);