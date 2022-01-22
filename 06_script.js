const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.dataset.clicks = "0";
  button.addEventListener("click", () => {
    const convertClickedData = Number.parseInt(button.dataset.clicks);
    button.dataset.clicks = convertClickedData + 1;
  });
});

const click = document.querySelector("#btn");
click.dataset.clicks = "0";
click.addEventListener("click", () => {
  const convertedNumber = Number.parseInt(click.dataset.clicks);
  click.dataset.clicks = convertedNumber + 1;
});

function printVariable(variable) {
  console.log(variable);
}

function func(x) {
  x("Hello World!");
}
func(printVariable);

function sumCallback(a, b, callback) {
  callback(a + b);
}
function handleSum(sum) {
  console.log(sum);
}
sumCallback(2, 3, handleSum);

function printVariable(variable) {
  console.log(variable);
}
function printHelloName(name, callback) {
  callback("Hello " + name);
}
printHelloName("Eldar!", printVariable);

function PrintSum(sum) {
  console.log(sum);
}
function mathSum(a, b, c, callback) {
  callback(a + b + c);
}
mathSum(2, 2, 8, PrintSum);

function printName(name, callback) {
  callback("Hello " + name);
}
printName("Eldar", function (variable) {
  console.log(variable);
});

function getSum(a, b, callback) {
  callback(a + b);
}
getSum(2, 2, function (sum) {
  console.log(sum);
});

const grandParent = document.querySelector("#grand-parent");
grandParent.style.color = "red";

const parentOne = grandParent.children[0];
parentOne.style.color = "red";

const parentTwo = parentOne.nextElementSibling;
parentTwo.style.color = "blue";

const childOne = parentOne.children[0];
childOne.style.color = "orange";
const childTwo = parentOne.children[1];
childTwo.style.color = "green";

const childOne = document.querySelector("#child-one");
childOne.style.color = "red";
const parentOne = childOne.parentElement;
parentOne.style.color = "green";
const grandParent = parentOne.parentElement;
grandParent.style.color = "Yellow";

const childOne = document.querySelector("#child-one");
const grandParent = childOne.closest(".grand-parent");
grandParent.style.color = "green";

const grandParent = document.querySelector("#grand-parent");
const children = grandParent.querySelectorAll(".child");
children.forEach(child => (child.style.color = "red"));

//1.SELECT ALL ELEMENTS
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", event => {
  event.preventDefault();
  //CREATE A NEW ITEM
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");
  list.appendChild(item);
  input.value = "";

  item.addEventListener("click", () => {
    list.removeChild(item); // or item.remove()
  });
});
