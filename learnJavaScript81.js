const div = document.querySelector("#container");
div.innerHTML = `<p>That's another paragraph</p>`;
//
const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("beforeend", `<div class="position">2002</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2003</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2004</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2005</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2006</div>`);
//
positions.insertAdjacentHTML("afterbegin", `<div class="position">1999</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">1998</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">1997</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">1996</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">1995</div>`);
//
const lists = document.querySelector("#apps-list");
const apps = ['calculator', 'phone', 'messages', 'cell', 'car'];

apps.forEach(app => {
    lists.insertAdjacentHTML("beforebegin", `<li>${app}</li>`);
});
//
const data = document.querySelector("#data");
const dates = [1999, 2000, 2001, 2002, 2003];

dates.forEach(date => {
    data.insertAdjacentHTML("beforeend", `<li>${date}</li>`);
});
//
const renderShoppingList = items => {
    const shoppingList = document.querySelector("#shopping-list");
    return items.forEach(item => {
        shoppingList.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    });
};
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
console.log(renderShoppingList(sampleList));