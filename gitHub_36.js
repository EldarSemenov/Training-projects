const form = document.querySelector("#payment-form");

console.log(form.dataset.currency);
const currency = form.dataset.currency;
console.log(currency);
console.log(form.dataset);

const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43;
navbar.dataset.rememberMe = false;
console.log(navbar.dataset);
console.log(navbar);
console.log(navbar.dataset.rememberMe);

console.log(navbar.dataset.rememberMe === "true");

const getUserIdFromCard = () => {
    return Number.parseInt(
        document.querySelector("#user-card").dataset.userId,
        10
    );
};
console.log(getUserIdFromCard());

const getUserIdFromCard = () => {
    console.log(
        Number.parseInt(document.querySelector("#user-card").dataset.userId, 10)
    );
};
getUserIdFromCard();

const getIsActiveFromCard = () => {
    console.log(
        document.querySelector("#user-card").dataset.isActive === "true"
    );
};
getIsActiveFromCard();

const h1 = document.querySelector("h1");
console.log(h1.parentElement);

const h1 = document.querySelector("h1");
console.log(h1.closest(".banner"));

const el = document.querySelector("#div-03");

console.log(el.closest("#div-02"));

const div = document.querySelector("#container");
div.innerHTML += `<p>Another paragraph</p>`;

const positions = document.querySelector("#job-position");
positions.insertAdjacentHTML(
    "beforeend",
    `<div class="position">2002-2003</div>`
);

const jobs = document.querySelector("#jobs");
jobs.insertAdjacentHTML("beforeend", `<p>Third</p>`);
jobs.insertAdjacentHTML("beforeend", `<p>Forth</p>`);
jobs.insertAdjacentHTML("beforeend", `<p>Fifth</p>`);
jobs.insertAdjacentHTML("afterbegin", `<p>Zero</p>`);

const apps = ["Calculator", "Phone", "Messages"];

const list = document.querySelector("#apps-list");

apps.forEach(app => {
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});

const list = document.querySelector("#list");

const apps = ["Phone", "Hammer", "Cross", "Lamp", "House"];

apps.forEach(app => list.insertAdjacentHTML("beforeend", `<li>${app}</li>`));

const apps = ["One", "Two", "Three", "Four", "Five"];

const list = document.querySelector(".list-apps");

apps.forEach(app => list.insertAdjacentHTML("beforeend", `<li>${app}</li>`));
