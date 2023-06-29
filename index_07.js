const form = document.querySelector("#form-text");
const textInput = document.querySelector(".input-text");
const outputText = document.querySelector(".text");
const container = document.querySelector(".text-result");
const paragraph = document.querySelector(".text-result p");
const clean = document.querySelector("#clean");

const getDescription = text => {
    return text.substring(0, 10);
};

form.addEventListener("submit", event => {
    event.preventDefault();
    outputText.textContent = getDescription(textInput.value);
    container.classList.add("active");
    paragraph.classList.add("show");
});
clean.addEventListener("click", () => {
    container.classList.remove("active");
    paragraph.classList.remove("show");
    textInput.value = "";
    textInput.focus();
    outputText.textContent = "";
});
