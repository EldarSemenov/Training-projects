let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");
val = listItem;
val = list;
//GET CHILD NOTE

val = list.childNodes;

//GET CHILDREN ELEMENTS NODES

val = list.children[3].textContent = "Hello World. This is new content";

//CHILDREN OF CHILDREN
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild.style.color = "red";
val = list.lastElementChild.style.color = "green";

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

const li = document.createElement("li");
li.className = "collection-item";
li.id = "new-item";
li.setAttribute("title", "New Item");
li.appendChild(document.createTextNode("Hello Hello"));
document.querySelector("ul.collection").appendChild(li);
const link = document.createElement("a");

console.log(li);

const newHeading = document.createElement("h1");
newHeading.id = "task-title";
// newHeading.appendChild(document.createTextNode("Task List"));
// newHeading.textContent = "TASK LIST";
newHeading.appendChild(document.createTextNode("TASK LIST"));
// document.body.appendChild(newHeading);
const oldHeading = document.querySelector("h1");

const cardAction = document.querySelector("body");
cardAction.replaceChild(newHeading, oldHeading);
console.log(oldHeading);
console.log(newHeading);

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
console.log(lis);
console.log(list);

lis[0].remove();

list.removeChild(lis[3]);

const firstChild = document.querySelector("li:first-child");
// console.log(firstChild);
console.log(firstChild.children[0]);
const link = firstChild.children[0];
let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "title");
val = link.hasAttribute("title");
val = link;

console.log(val);

const clear = document.querySelector(".clear-tasks");
console.log(clear);
clear.addEventListener("click", function (e) {
    // console.log("Hello World");
    e.preventDefault();
});
clear.addEventListener("click", onClick);

function onClick(e) {
    e.preventDefault();
    // console.log("Clicked");
    let val;
    val = e;
    val = e.target;
    val = e.target.classList;
    // e.target.textContent = "Hello";
    val = e.type;
    val = e.clientY;
    val = e.clientX;

    val = e.offsetX;

    console.log(val);
}

const items = ["Pen", "Paper", "Staples"];
console.log(items);
const deleteItem = items.splice(0, 1);
console.log(deleteItem);
console.log(items);

const dimensions = [100, 200];

const [width, height] = dimensions;
console.log(width);
console.log(height);

const getFullName = user => {
    const [firstName, lastName] = user;
    return `${firstName} ${lastName}`;
};
console.log(getFullName(["Alex", "Kelson"]));

const lat = [5.2342];
const lng = [3.24];
const point = [...lat, ...lng];
console.log(point);

const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];
console.log(otherItems);
