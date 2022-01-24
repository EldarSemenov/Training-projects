/*
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

form.addEventListener("submit", event => {
  event.preventDefault();
  const item = document.createElement("div");
  item.classList.add("list-item");
  item.innerText = input.value;
  list.appendChild(item);
  input.value = "";

  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

form.addEventListener("submit", event => {
  event.preventDefault();

  const element = document.createElement("h1");
  element.innerText = input.value;
  element.classList.add("list-item");
  list.appendChild(element);
  input.value = "";

  list.addEventListener("click", () => {
    element.remove();
  });
});

const test = document.querySelector("[data-test]");
test.dataset.test = "5555";

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const currentClicks = Number.parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.dataset.clicks = "0";

  button.addEventListener("click", () => {
    const number = Number.parseInt(button.dataset.clicks);
    button.dataset.clicks = number + 1;
  });
});

const grandParent = document.querySelector("#grand-parent");

//grandParent.style.color = "red";
//grandParent.children[0].style.color = "green";
const parentOne = grandParent.children[0];
const parentTwo = parentOne.nextElementSibling;
const firstChild = parentOne.children[0];
const secondChild = firstChild.nextElementSibling;
parentOne.style.color = "red";
parentTwo.style.color = "green";
firstChild.style.color = "yellow";
secondChild.style.color = "orange";

const childOne = document.querySelector("#child-one");
childOne.style.color = "red";
const parentOne = childOne.parentElement;
const grandParent = parentOne.parentElement;
const childTwo = childOne.nextElementSibling;
const parentTwo = parentOne.nextElementSibling;
parentOne.style.color = "green";
grandParent.style.color = "blue";
childTwo.style.color = "orange";
parentTwo.style.color = "skyblue";

const childOne = document.querySelector("#child-one");
const grandParent = childOne.closest(".grand-parent");
grandParent.style.color = "red";
*/
const grandParent = document.querySelector("#grand-parent");
const children = grandParent.querySelectorAll(".child");
children.forEach(child => (child.style.color = "red"));
