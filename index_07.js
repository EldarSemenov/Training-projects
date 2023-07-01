const input = document.querySelector("#input-description");
const output = document.querySelector("#output-description");
const outputContainer = document.querySelector(".output-container");

const getDescription = text => {
    return text.substring(0, 10) + "...";
};

input.addEventListener("input", event => {
    output.textContent = getDescription(event.currentTarget.value);
    outputContainer.classList.add("active");
});
