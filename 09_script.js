const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

const userLoggedIn = false;
console.log("User logged in");
console.log("Please login");
//
const userLoggedIn = false;
if (userLoggedIn) {
  console.log("User logged");
} else {
  console.log("please log in");
}

const userLoggedIn = true;
const isOnDashboard = false;

if (userLoggedIn && isOnDashboard) {
  console.log("User logged in");
}

if (0) {
  console.log("true");
} else {
  console.log("false");
}

const totalPrice = 0;
if (totalPrice != null) {
  console.log("true");
} else {
  console.log("false");
}

const totalPrice = 49;

if (totalPrice == null) {
  console.log("there is no total price");
} else if (totalPrice < 10) {
  console.log("this is pretty cheap");
} else if (totalPrice < 50) {
  console.log("this is not too bad");
} else {
  console.log("This is expensive");
}

const array = [
  "2",
  "we",
  "da",
  "sf",
  "dddd",
  "3",
  "1",
  "23",
  "3e",
  "3",
  "wsd",
  "dw",
  "w",
];
if (array.length === 0) {
  console.log("empty");
} else if (array.length < 5) {
  console.log("small");
} else if (array.length < 10) {
  console.log("medium");
} else {
  console.log("large");
}

const isUserLoggedIn = false;
if (isUserLoggedIn) {
  console.log("User is logged In");
  console.log("Hello");
} else {
  console.log("Not logged in");
}

const isUserLoggedIn = true;
isUserLoggedIn ? console.log("Logged In") : console.log("Not Logged In");

const isUserLoggedIn = false;
let wlecomeMessage = "";
if (isUserLoggedIn) {
  console.log((wlecomeMessage = "Welcome!"));
} else {
  console.log((wlecomeMessage = "Please Log In"));
}

const isUserLoggedIn = true;

let welcomeMessage = "";

if (isUserLoggedIn) {
  welcomeMessage = "Welcome!";
} else {
  welcomeMessage = "Please Log In";
}
console.log(welcomeMessage);
isUserLoggedIn
  ? (welcomeMessage = "Welcome User")
  : (welcomeMessage = "Please Log In");
console.log(welcomeMessage);

const isOnStock = false;
let message = "";

isOnStock ? (message = "Yes") : (message = "No");
console.log(message);

const isUserLoggedIn = true;

const welcomeMessage = isUserLoggedIn ? "welcome!" : "Please Log In!";
console.log(welcomeMessage);

const isPriceExpensive = false;
const message = isPriceExpensive
  ? "It is too expensive"
  : "This is not expensive price";
console.log(message);

const price = 999;
const message = price <= 100 ? "It's a good price" : "It is too expensive";
console.log(message);
