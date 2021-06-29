const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const userID = form.dataset.userId;
console.log(userID);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43;
navbar.dataset.rememberMe = false;
console.log(navbar.dataset);
//
const rememberMe = navbar.dataset.rememberMe === true;
console.log(navbar.dataset);
//
const getUserIdFormCard = () => {
    const card = document.querySelector("#user-card");
    const userId = card.dataset.userId;
    console.log(userId);
    return Number.parseInt(userId, 10);
};
console.log(getUserIdFormCard());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector("#user-card");
    const isActive = card.dataset.isActive;
    console.log(isActive);
    return isActive === "true";
};
console.log(getIsActiveFromCard());
//
const h1 = document.querySelector("h1");
console.log(h1.parentElement);
//
const h1 = document.querySelector("h1");
h1.closest(".main");
console.log(h1);
//
const getParentOfElement = element => {
    return element.parentElement;
};
console.log(getParentOfElement(document.querySelector("h1")));
console.log(getParentOfElement(document.querySelector("p")));
//
const getUserIdFromElement = element => {
    const card = element.closest(".user-card");
    return Number.parseInt(card.dataset.userId, 10)
};
console.log(getUserIdFromElement(document.querySelector("#name")));
console.log(getUserIdFromElement(document.querySelector("#description")));
//
const div = document.querySelector("#container");
div.innerHTML += `<p>Another paragraph</p>`;
div.innerHTML += `<h1>Good afternoon</h1>`;
//
const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("beforeend", `<div class="position">2015-2020</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2021-2023</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2024-2025</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2026-2027</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2028-2029</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2030-2031</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2032-2033</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2007-2008</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2005-2006</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2003-2004</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2001-2002</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">1998-1999</div>`);
//
element.insertAdjacentHTML("beforeend", `
<p>An example of a ... ....very long paragraph</p>`);
*/
const list = document.querySelector("#apps-list");
const apps = ["Calculator", "Phone", "Messages"];

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});