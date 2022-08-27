const disableButton = document.querySelector("#btn-disable");
const enableButton = document.querySelector("#btn-enable");
const startButton = document.querySelector("#btn-start");

disableButton.addEventListener("click", () => {
    startButton.setAttribute("disabled", "disabled");
    startButton.classList.remove("design");
});

enableButton.addEventListener("click", () => {
    startButton.removeAttribute("disabled");
    startButton.classList.add("design");
});

startButton.addEventListener("click", () => {
    console.log("The START button is working");
});

button.addEventListener("click", event => {
    console.log(event);
});

const button = document.querySelector("#my-button");

button.addEventListener("click", event => {
    console.log(event);
});

const button = document.querySelector("#my-button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});
button.addEventListener("click", event => {
    const clickedButton = event.currentTarget;
    console.log(clickedButton.textContent);
});
button.addEventListener("click", event => {
    console.log(event);
    debugger;
});

const btn = document.querySelector("#button");

btn.addEventListener("click", event => {
    console.log(event.currentTarget);
});

const button = document.querySelector("#button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});

const btn = document.querySelector("#button");

btn.addEventListener("click", event => {
    console.log(event.currentTarget.classList.toggle(".active"));
});
btn.addEventListener("click", () => {
    btn.classList.toggle(".active");
});

const button = document.querySelector("button");

button.addEventListener("click", event => {
    console.log(event.currentTarget);
});

const buttons = document.querySelectorAll("button");

buttons.addEventListener("click", event => {
    console.log(event.currentTarget);
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget);
    });
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});

const handleButtonClick = event => {
    console.log(event.currentTarget.textContent);
};

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget);
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

const button = document.querySelector("button");

button.addEventListener("click", event => {
    console.log(event.target);
});
