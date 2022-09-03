const init = () => {
    const shopList = document.querySelector("#shopping-list");

    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                shopList.insertAdjacentHTML(
                    "beforeend",
                    `<li>${element.item}</li>`
                );
            });
        });
};

init();

const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World!";
console.log(paragraph);

const h1 = document.createElement("h1");
h1.classList.add("header");
h1.setAttribute("id", "header");
h1.textContent = "This is my Text";
console.log(h1);
document.body.appendChild(h1);
document.body.appendChild(paragraph);

const div = document.createElement("div");
if (isDarkMode()) {
    div.classList.add("dark-mode");
} else {
    div.classList.add("light-mode");
}
div.textContent = "Hello World";
document.body.appendChild(div);

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    console.log("Button is clicked");
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loading......";
});

const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Hello World!...");
    }, 2000);
});

const button = addEventListener("click", event => {
    console.log(event);
    debugger;
});

const button = document.querySelector("#my-button");

button.addEventListener("click", event => {
    console.log(event.currentTarget.textContent);
});

const button = document.querySelector("button");

button.addEventListener("click", event => {
    console.log(event.currentTarget);
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});

const buttons = document.querySelectorAll("button");

const handleClick = event => {
    console.log(event.currentTarget);
};

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget);
    });
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active");
    });
});
