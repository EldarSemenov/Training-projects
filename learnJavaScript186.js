/*
const select = document.querySelector("#countries-dropdown");

select.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
});

const name = document.querySelector("#user-name");

name.addEventListener("keyup", (event) => {
  console.log(event.key);
});

const username = document.querySelector("#user-name");

username.addEventListener("blur", () => {
  if (username.nodeValue.length >= 6) {
    username.classList.remove("error");
    username.classList.add("success");
  } else {
    username.classList.add("error");
    username.classList.remove("success");
  }
});
console.log(username.classList);
*/
const button = document.querySelector("#button");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const head = document.querySelector("#head");

button.addEventListener("click", () => {
  head.classList.add("blue");
});

btn.addEventListener("click", () => {
  head.classList.add("orange");
});

btn2.addEventListener("click", () => {
  head.classList.add("green");
  head.classList.add("con");
});

const myButton = document.querySelector("#my-button");
const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box4 = document.querySelector("#box-4");
const box5 = document.querySelector("#box-5");
const box6 = document.querySelector("#box-6");
const box7 = document.querySelector("#box-7");
const box8 = document.querySelector("#box-8");
const box9 = document.querySelector("#box-9");

myButton.addEventListener("click", () => {
  setTimeout(() => {
    box1.classList.add("box-1");
  }, 1000);
  setTimeout(() => {
    box2.classList.add("box-2");
  }, 1200);
  setTimeout(() => {
    box3.classList.add("box-3");
  }, 1300);
  setTimeout(() => {
    box4.classList.add("box-4");
  }, 1400);
  setTimeout(() => {
    box5.classList.add("box-5");
  }, 1500);
  setTimeout(() => {
    box6.classList.add("box-6");
  }, 1600);
  setTimeout(() => {
    box7.classList.add("box-7");
  }, 1700);
  setTimeout(() => {
    box8.classList.add("box-8");
  }, 1800);
  setTimeout(() => {
    box9.classList.add("box-9");
  }, 1900);

  setTimeout(() => {
    box1.classList.add("box-11");
  }, 2000);
  setTimeout(() => {
    box2.classList.add("box-22");
  }, 2100);
  setTimeout(() => {
    box3.classList.add("box-33");
  }, 2200);
  setTimeout(() => {
    box4.classList.add("box-44");
  }, 2300);
  setTimeout(() => {
    box5.classList.add("box-55");
  }, 2400);
  setTimeout(() => {
    box6.classList.add("box-66");
  }, 2500);
  setTimeout(() => {
    box7.classList.add("box-77");
  }, 2600);
  setTimeout(() => {
    box8.classList.add("box-88");
  }, 2700);
  setTimeout(() => {
    box9.classList.add("box-99");
  }, 2800);
});
