function createUser(name, age) {
  return { name: name, age: age };
}
const user = createUser("Eldar", 25);
console.log(user);

const date = new Date();
console.log(date.getMonth());

function User(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
const user1 = new User("Eldar", 37);
console.log(user1);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  printName() {
    console.log(`Hello ${this.name}`);
  }
}
const user = new User("Eldar", 37);
const user2 = new User("Katty", 33);
console.log(user);
user.printName();
user2.printName();
console.log(user2);

console.log(window);
window.console.log("Hello");
window.alert("Hi!");

const alert = "Message";
window.alert(alert);

window.addEventListener("resize", () => {
  console.log("Resized!");
});

console.log(document.documentElement);

const element = document.createElement("div");
element.innerText = "Hello World";
document.body.appendChild(element);

const header = document.createElement("h1");
header.innerText = "God";
document.body.appendChild(header);

const son = document.createElement("h2");
son.innerText = "Jesus";
document.body.appendChild(son);
//
const divWithId = document.getElementById("div-id");
divWithId.style.color = "blue";

const divWithClass = document.getElementsByClassName("div-class");
console.log(divWithClass);

// divWithClass.forEach(div => (div.style.color = "red"));
const divs = Array.from(divWithClass);

divs.forEach(div => (div.style.color = "green"));

const elements = document.getElementsByClassName("div-class");

const convertedElements = Array.from(elements);

convertedElements.forEach(div => (div.style.color = "red"));

elements[0].style.color = "blue";

const ele = document.getElementById("div-id");
ele.style.color = "orange";
console.log(ele.style);
