const items = [...document.querySelectorAll("div")];

const links = document.querySelectorAll("a");

const loginLinks = [...links]
    .filter(link => link.textContent === "Login")
    .map(link => link.textContent)
    .join(", ");
console.log(loginLinks); //Login, Login

const getShortParagraphs = () => {
    return [...document.querySelectorAll("p")]
        .filter(p => p.textContent.length < 60)
        .map(p => p.textContent.length)
        .forEach(p => console.log(p));
};
getShortParagraphs();

const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
element.textContent = "This is the new text";
element.innerHTML = "This is the <strong>new</strong> UPDATE!";

const banner = document.querySelector("#banner");

banner.innerHTML = "";

const setWelcomeMessage = name => {
    return (document.querySelector(
        "#welcome"
    ).innerHTML = `Welcome <strong>${name}</strong>`);
};
setWelcomeMessage("Alex");

const email = document.querySelector("#email");
console.log(email.value);

const element = document.querySelector("#first-item");
element.classList.add("highlighted");

const element = document.querySelector("#first-item");
element.classList.add("highlighted");
console.log(element);

const secondItem = document.querySelector("#second-item");
secondItem.classList.add("highlighted");
console.log(secondItem);

const element = document.querySelector("#first-item");
element.classList.remove("highlighted");
console.log(element);

const elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.classList.remove("highlighted");
    console.log(element);
    console.log(element.textContent);
});

const list = document.querySelector("#shopping-list");
console.log("Shopping List:", list);

const box = document.querySelector("#box");
console.log(box.classList.contains("activated"));
console.log(box.classList.contains("highlighted"));
box.classList.toggle("activated");
console.log(box);
box.classList.toggle("activated");
box.classList.toggle("activated");
box.classList.toggle("activated");
box.classList.replace("activated", "show");
