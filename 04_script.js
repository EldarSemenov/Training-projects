const dataAttributeElement = document.querySelector("[data-test]");
const divsWithClasses = document.querySelectorAll(".div-class");
const input = document.querySelector("body > input[type='text']");
dataAttributeElement.style.color = "green";
Array.from(divsWithClasses);
divsWithClasses.forEach(div => (div.style.color = "red"));
console.log(dataAttributeElement);
console.log(divsWithClasses);
console.log(input);

const btn = document.querySelector("body > [data-btn]");
const input = document.querySelector("[data-input-text]");
console.log(input);

input.addEventListener("input", e => {
  console.log(e.target.value === "");
});

const form = document.querySelector("[data-form]");
console.log(form);

form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("Submitted form");
  console.log(input.currentTarget.value);
});

 btn.addEventListener("click", e => {
   console.log(e);
 });

 function printClick() {
   console.log("clicked");
 }

 btn.addEventListener("click", printClick);
 btn.removeEventListener("click", printClick);

 btn.addEventListener("click", () => {
   console.log("Clicked 2");
 });
 btn.removeEventListener("click", () => {
   console.log("clicked");
 });
*/

const link = document.querySelector("a");

link.addEventListener("blur", event => {
  event.preventDefault();
  console.log("Prevented Default");
});

window.addEventListener("resize", () => console.log("resized"));
