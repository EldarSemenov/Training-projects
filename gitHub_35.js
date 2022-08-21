const banner = document.querySelector("#banner");
console.log(banner.getAttribute("id"));
console.log(banner.getAttribute("disabled"));

const button = document.querySelector("#login");
console.log(button);
console.log(button.getAttribute("disabled"));
console.log(button.getAttribute("id"));
console.log(button.getAttribute("login"));
button.removeAttribute("disabled");
button.setAttribute("disabled", "disabled");
banner.setAttribute("id", "navbar");
console.log(banner);
console.log(button.hasAttribute("disabled"));
console.log(button);

const isDisabled = button => {
    return button.hasAttribute("disabled");
};

console.log(isDisabled(document.querySelector("#button1")));

console.log(isDisabled(document.querySelector("#button2")));

console.log(isDisabled(document.querySelector("#button3")));

const banner = document.querySelector("#banner");
banner.style.backgroundColor = "blue";
banner.style.display = "none";
banner.style.display = "";

const customerOne = {
    name: "Alex",
    id: 1,
    isEU: false,
};

const customerTwo = {
    name: "Eldar",
    id: 1,
    isEU: true,
};

const showOrHideConsent = user => {
    const element = document.querySelector("#eu-consent");
    if (user.isEu) {
        element.style.display = "";
    } else element.style.display = "none";
};

showOrHideConsent({
    id: 1,
    isEU: true,
});

const headline = document.querySelector("#headline");
// headline.remove();
// headline.innerHTML = "";
document.body;
document.documentElement;
document.documentElement.classList.add("dark-mode");

const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);

const form = document.querySelector("#payment-form");
console.log(form.dataset);

const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43;
navbar.dataset.rememberMe = false;
console.log(navbar.dataset);
