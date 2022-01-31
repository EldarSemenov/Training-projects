
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ol = document.querySelector("#organised-list");

form.addEventListener("submit", event => {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = input.value;
  item.classList.add("item");
  ol.appendChild(item);
  input.value = "";
  item.addEventListener("click", () => {
    ol.removeChild(item);
  });
});

const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModal.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
*/
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
}
function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

const oddOrEvenNumber = number => {
  if (number % 2 === 0) {
    return "This is Even Number";
  } else {
    return "This is Odd Number";
  }
};
console.log(oddOrEvenNumber(10));
console.log(oddOrEvenNumber(987123));
