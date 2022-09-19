const showConscentUser = user => {
    const element = document.querySelector("#eu-consent");
    if (user.isEu) {
        element.style.display = "";
    } else {
        element.style.display = "none";
    }
};

showConscentUser({
    isEu: true,
    id: 12,
});

const hideEUconsent = () => {
    const element = document.querySelector("#eu-consent");
    element.style.display = "none";
};
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    hideEUconsent();
});

const hideWelcomeMessage = () => {
    const element = document.querySelector("#welcome-message");
    element.innerHTML = "";
};

const showWelcomeMessage = () => {
    const element = document.querySelector("#welcome-message");
    return (element.textContent = "");
};

const button = document.querySelector("#button");

const buttonShow = document.querySelector("#show");

button.addEventListener("click", () => {
    try {
        hideWelcomeMessage();
    } catch (error) {
        console.log(error);
    }
});

buttonShow.addEventListener("click", () => {
    try {
        showWelcomeMessage();
    } catch (error) {
        console.log(error);
    }
});

const toggleDarkTheme = () => {
    document.documentElement.classList.toggle("dark");
};
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    toggleDarkTheme();
});

const grayButton = document.querySelector("#button-gray");

const toggleGrayTheme = () => {
    document.documentElement.classList.toggle("gray");
};

grayButton.addEventListener("click", () => toggleGrayTheme());

const div = document.querySelector("#div");
div.dataset.userId = "23";
div.dataset.currency = "USD";
div.dataset.id = 29384;
console.log(div);

const getUserIdFromElement = element => {
    const card = element.closest(".user-card");
    return Number.parseInt(card.dataset.userId, 10);
};
console.log(getUserIdFromElement(document.querySelector("#name")));

const products = ["apples", "grapes", "oranges"];

const list = document.querySelector("#list");

products.forEach(product => {
    list.insertAdjacentHTML("beforeend", `<li>${product}</li>`);
});

const cars = ["Tesla", "BMW", "Audi"];

const listTwo = document.querySelector("#list-two");

cars.forEach(car => listTwo.insertAdjacentHTML("beforeend", `<li>${car}</li>`));
