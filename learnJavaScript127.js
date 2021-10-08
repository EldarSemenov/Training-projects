const ul = document.querySelector("#shopping-list");
ul.classList.add("main");
console.log(ul);

const element = document.querySelector("#first-item");
element.classList.add("highlighted");
console.log(element);

const secondElement = document.querySelector("#second-item");
secondElement.classList.add("doubleHighlighted");
console.log(secondElement);
//
const ol = document.querySelector("#list");
ol.classList.add("fruits");
console.log(ol);

const firstList = document.querySelector("#first");
firstList.classList.add("first");
console.log(firstList);

const secondList = document.querySelector("#second");
secondList.classList.add("second");
console.log(secondList);

const thirdList = document.querySelector("#third");
thirdList.classList.add("third");
console.log(thirdList);
//
const element = document.querySelector("#first-item");
element.classList.remove("highlighted");
console.log(element);

const ul = document.querySelector("#shopping-list");
ul.classList.remove("special");
console.log(ul);
ul.classList.replace("form", 'work');
console.log(ul);
//
const openSidebar = () => {
    document.querySelector("#app-sidebar")
    .classList.add("show");
}
openSidebar();
console.log(openSidebar());
const element = document.querySelector("#app-sidebar");
console.log(element);
//
const box = document.querySelector("#box");
console.log(box.classList.contains("activated"));
console.log(box.classList.contains("highlighted"));
//
const box = document.querySelector("#box");
console.log(box.classList.toggle("activated"));
console.log(box);
box.classList.toggle("activated");
console.log(box);
box.classList.toggle("activated");
console.log(box);
//
const ol = document.querySelector("#list");
ol.classList.replace("hidden", "show_it");
console.log(ol);
ol.classList.add("York", "city");
console.log(ol);
ol.classList.remove("York", "city");
console.log(ol);
//
const openSidebar = () => {
    document.querySelector("#app-sidebar")
    .classList.toggle("show");
}
openSidebar();
//
const handleItemClick = li => {
    li.classList.toggle("highlighted");
}
handleItemClick();
//
const banner = document.querySelector("#banner");
console.log(banner.getAttribute("id"));
console.log(banner.getAttribute("disabled"));
//
const botton = document.querySelector("#login");
console.log(botton.getAttribute("disabled"));
console.log(botton.getAttribute("id"));
botton.removeAttribute("disabled");
console.log(botton);
botton.setAttribute("disabled", "disabled");
console.log(botton);
botton.setAttribute("id", "navbar");
console.log(botton);
console.log(botton.hasAttribute("disabled"));
//
const h1 = document.querySelector("#word");
console.log(h1.getAttribute("id"));
console.log(h1);
h1.removeAttribute("class");
console.log(h1);
h1.setAttribute("disabled", "disabled");
console.log(h1);
h1.setAttribute("class", "first_word");
console.log(h1);
h1.classList.replace("first_word", "this_word");
console.log(h1);
//
const isDisabled = button => {
    return button.hasAttribute("disabled");
}
//
const enableButton = button => {
    button.removeAttribute("disabled");
}
//
const disableButton = button => {
    button.setAttribute("disabled", "disabled");
}
const enableButton = button => {
    button.removeAttribute("disabled");
}
//
const banner = document.querySelector("#banner");
banner.style.backgroundColor = 'red';
banner.style.display = 'none';
banner.style.display = "";
console.log(banner);
banner.style.color = 'yellow';
//
const headline = document.querySelector("#headline");
headline.remove();
console.log(headline);
document.body.style.backgroundColor = 'gray';
document.body.style.backgroundColor = 'yellow';
document.body.style.backgroundColor = 'purple';
document.body.style.backgroundColor = 'black';
document.body.style.backgroundColor = 'yellow';
//
const words = document.querySelector("#color");
words.style.color = 'yellow';
document.body.style.backgroundColor = 'black';
//
document.documentElement.classList.add("dark-mode");
//setting the welcome-message with a style
const p = document.querySelector("#welcome-message");
p.style.color = 'yellow';
//establishing the button
const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", () => {
    try{
        removeWelcomeMessage();
    }catch(error) {
        console.log("Stop doing so!");
    }
});
//establishing the function for the removeButton
const removeWelcomeMessage = () => {
    const element = document.querySelector("#welcome-message");
    element.remove();
}
//
const toggleDarkTheme = () => {
    document.documentElement.classList.toggle("dark");
}
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
console.log(form.dataset);
console.log(form.dataset.userId);
console.log(form.dataset.currency);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 1400;
navbar.dataset.rememberMe = false;
console.log(navbar);
navbar.dataset.rememberMe === 'true';
console.log(navbar);
//
const getUserIdFromCard = () => {
    const card = document.querySelector("#user-card");
    const userId = card.dataset.userId;
    return Number.parseInt(userId, 10);
}
console.log(getUserIdFromCard());
//
const getIsActiveFromCard = () => {
    const card = document.querySelector("#user-card");
    const isActive = card.dataset.isActive;
    return isActive === 'true';
}
console.log(getIsActiveFromCard());
//
const h1 = document.querySelector("h1");
console.log(h1.parentElement);
const p = document.querySelector("p");
console.log(p.parentElement);
//
const h1 = document.querySelector('h1');
h1.closest('.main');
console.log(h1);
//
const getUserIdFromElement = element => {
    const card = element.closest(".user-card");
    return Number.parseInt(card.dataset.userId, 10);
}
console.log(getUserIdFromElement(document.querySelector("#name")));
console.log(getUserIdFromElement(document.querySelector("#description")));