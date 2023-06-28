import { data } from "./data.js";

const results = document.querySelector("#results-list");
const search = document.querySelector("#app-search");

const render = (queryItem = "") => {
    const cleanedupQuery = queryItem.trim().toLowerCase();
    const filtered = data.filter(item =>
        item.auto.toLowerCase().includes(cleanedupQuery)
    );

    results.innerHTML = "";
    filtered.forEach(item => {
        results.insertAdjacentHTML("beforeend", `<li>${item.auto}</li>`);
    });

    search.addEventListener("keyup", () => {
        render(search.value);
    });
};

render();
