const button = document.querySelector(".button");

button.addEventListener("click", e => {
  console.log("Arrow This");
  console.log(this);
});

button.addEventListener("click", function (e) {
  console.log("Function this");
  console.log(this);
});

const test = document.querySelector("[data-test]");
console.log(test.dataset.testTwo);
test.dataset.test = "5555";
console.log(test.dataset);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});

const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("clcik", () => {
    parseInt(btn.dataset.clicks) + 1;
  });
});

const btn = document.querySelector("#bt");
btn.addEventListener("click", () => {
  const result = parseInt(btn.dataset.clicks);
  result + 1;
});

const buttons = document.querySelectorAll(".btn");
const idButton = document.querySelector("#one");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const numberResult = parseInt(button.dataset.clicks);
    button.dataset.clicks = numberResult + 1;
  });
});

idButton.addEventListener("click", () => {
  const resultButton = parseInt(idButton.dataset.clicks);
  idButton.dataset.clicks = resultButton + 1;
});

const btn = document.querySelector("#btn");
btn.dataset.clicks = "0";
btn.addEventListener("click", () => {
  const convertNumber = Number.parseInt(btn.dataset.clicks);
  btn.dataset.clicks = convertNumber + 1;
});

const btns = document.querySelectorAll(".btns");

btns.forEach(btn => {
  btn.dataset.clicks = "0";
  btn.addEventListener("click", () => {
    const convert = parseInt(btn.dataset.clicks);
    btn.dataset.clicks = convert + 1;
  });
});

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.classList.add = "red";

  btn.dataset.clicks = "0";
  btn.addEventListener("click", () => {
    const convertedNumber = Number.parseInt(btn.dataset.clicks);
    btn.dataset.clicks = convertedNumber + 1;
  });
});
