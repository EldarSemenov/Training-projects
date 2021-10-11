const button = document.querySelector("#theme-btn");
button.addEventListener("click", () => {
    document.documentElement.classList.toggle('dark');
});
//
const start = document.querySelector("#start");
const disable = document.querySelector("#disable");
const enable = document.querySelector("#enable");

disable.addEventListener("click", () => {
    start.setAttribute('disabled', 'disabled');
});
enable.addEventListener("click", () => {
    start.removeAttribute('disabled');
});
start.addEventListener("click", () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    const clickedElement = event.currentTarget;
    console.log(clickedElement.textContent);
    console.log(event);

});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event);
    //debugger;
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event.currentTarget);
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});
//
const button = document.querySelector("#button");
button.addEventListener("click", event => {
    console.log(event.currentTarget.classList.toggle('active'));
});
//
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget);
    });
});
//
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll("button");

const handleButtonClick = event => {
    console.log(event.currentTarget.textContent);
}
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
//
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.classList.toggle('active'));
    });
});
//
const buttons = document.querySelectorAll(".card");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.classList.toggle('active'));
    });
});
//
const cards = document.querySelectorAll(".cards .card");

cards.forEach(card => {
    card.addEventListener("click", event => {
        document.querySelector(".cards .card.active")?.classList.remove('active');
        event.currentTarget.classList.toggle("active");
    });
});