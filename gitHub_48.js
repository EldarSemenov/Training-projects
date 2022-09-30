const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loading...";
    console.log("Button is disabled");
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Hello World!");
    }, 2000);
});

const button = document.querySelector("#button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});

const cards = document.querySelectorAll(".cards .card");

cards.forEach(card => {
    card.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active");
    });
});

const cards = document.querySelectorAll(".cards .card");

cards.forEach(card => {
    card.addEventListener("click", event => {
        document
            .querySelector(".cards .card.active")
            ?.classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});
