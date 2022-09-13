const cards = document.querySelectorAll(".cards .card");

cards.forEach(card => {
    card.addEventListener("click", event => {
        document
            .querySelector(".cards .card.active")
            ?.classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});
const form = document.querySelector("#address-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Form is submitted");
});

const form = document.querySelector("#weather-form");

form.addEventListener("submit", event => {
    event.preventDefault();
});

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const logDataFunction = (email, password) => {
    console.log(email, password);
};

form.addEventListener("click", event => {
    event.preventDefault();
    logDataFunction(email.value, password.value);
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("button clicked");
});

const button = document.querySelector("button");

const handleClick = () => {
    console.log("button clicked");
};
button.addEventListener("click", handleClick);

const button = document.querySelector("button");

button.addEventListener(
    "click",
    () => {
        console.log("button clicked");
    },
    {
        once: true,
    }
);

const button = document.querySelector("#button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});

const button = document.querySelector("#button");

const handleClick = event => {
    console.log(event.currentTarget.textContent);
};

button.addEventListener("click", handleClick);

setTimeout(() => {
    button.removeEventListener("click", handleClick);
}, 2000);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
});

const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("User focused inside the name");
});
name.addEventListener("blur", () => {
    console.log("User is OUT");
});

window.addEventListener("scroll", () => {
    console.log("Page scrolled");
});

const countries = document.querySelector("#countries");

countries.addEventListener("change", () => {
    console.log(countries.value);
});

document.addEventListener("keyup", event => {
    console.log(event.key);
});

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach(p => console.log(p.textContent));
