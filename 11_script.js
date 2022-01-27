for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function printNumber(number) {
  if (number > 10) return;
  console.log(number);
  printNumber(number + 1);
}
printNumber(1);

function sumNumbersBelow(number) {
  if (number <= 0) return 0;
  return number + sumNumbersBelow(number - 1);
}
console.log(sumNumbersBelow(20));

console.log(true || true);

function printTrue() {
  console.log("TRUE");
  return true;
}
function printFalse() {
  console.log("FALSE");
  return false;
}
printTrue() || printFalse();

function printName(name) {
  console.log(name || "You did not write your name");
}
printName("Eldar");
printName();

const person = {};
console.log(person && person.address && person.address.street);

function printVariable(variable) {
  console.log(variable);
}
function MyFunction(name, callback) {
  callback("Hello " + name);
}
MyFunction("Eldar", printVariable);

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.dataset.clicks = 0;

  button.addEventListener("click", () => {
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});
