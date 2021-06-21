document.querySelector('[disabled]');
//
const div = document.querySelector("div");
//console.log(div.textContent);
//
const paragraph = document.querySelector("p");
//console.log(paragraph.textContent);
if (paragraph) {
    console.log(paragraph.textContent);
};
console.log(paragraph?.textContent);
//
document.querySelectorAll("p");
//
const getAllLinks = () => {
    return document.querySelectorAll("a");
};
console.log(getAllLinks());
//
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
//
paragraphs.forEach(paragraph => {
    console.log(paragraph);
});
//
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
//
const getNumberOfLinks = () => {
    return document.querySelectorAll("a").length;
};
console.log(getNumberOfLinks());
//
const logLinksTexts = () => {
    document.querySelectorAll("a").forEach(item => {
        console.log(item.textContent);
    });
};
logLinksTexts();
//
const divs = document.querySelectorAll("div");
const items = [...divs];
const items = [...document.querySelectorAll("div")];
const items = [...document.querySelectorAll("a")];
//
const links = document.querySelectorAll("a");
const loginLinks = [...links].filter(link => link.textContent === "Login");
console.log(loginLinks);
//
const getSelectedCurrencies = () => {
    return [...document.querySelectorAll(".cards .card.active")].map(card => card.textContent);
};
//
const getShortParagraphs = () => {
    return [...document.querySelectorAll("a")]
    .filter(item => item.textContent.length < 10);
};
console.log(getShortParagraphs());
//
const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector("#test");
element.innerHTML = "<strong>This is the new text</strong>";
//
const banner = document.querySelector("#banner");
banner.innerHTML = "1";
//
const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector("#test");
element.innerHTML = "This the <strong>new</strong>text!";
//
const banner = document.querySelector("#banner");
banner.innerHTML = "";
//
const getFormattedWelcomeMessage = () => {
    return document.querySelector("#welcome-message").innerHTML;
};
console.log(getFormattedWelcomeMessage());
//
const setWelcomeMessage = name => {
    document.querySelector("#welcome-message")
    .innerHTML = `Hello <strong>${name}</strong>`;
};
setWelcomeMessage("Sam");
//
const emptyShoppingList = () => {
    document.querySelector("#shopping-list").innerHTML = "";
};
emptyShoppingList();
//
const setWelcomeMessage = name => {
    document.querySelector("#name").textContent = name;
};
setWelcomeMessage("<h2>You have been hacked</h2>");