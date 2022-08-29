const form = document.querySelector("#address-form");

form.addEventListener("submit", event => {
    event.preventDefault();
});

const form = document.querySelector("#weather-form");

form.addEventListener("submit", event => {
    event.preventDefault();
});

const form = document.querySelector("#weather-form");
const city = document.querySelector("#city");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(city.value);
    getWeatherInfo(city.value);
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button Clicked");
});

const button = document.querySelector("button");

const handleClick = () => {
    console.log("Button clicked");
};

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);

const button = document.querySelector("button");

button.addEventListener(
    "click",
    () => {
        console.log("Button Clicked");
    },
    {
        once: true,
    }
);

const button = document.querySelector("button");

button.addEventListener(
    "click",
    () => {
        console.log("Button was clicked");
    },
    {
        once: true,
    }
);

const button = document.querySelector("button");

const handleClick = event => {
    console.log(event.currentTarget.textContent);
};

button.addEventListener("click", handleClick);

setTimeout(() => {
    button.removeEventListener("click", handleClick);
}, 2000);

const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("User focused inside the name");
});

name.addEventListener("blur", () => {
    console.log("User removed focus from the name");
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
});

window.addEventListener("scroll", () => {
    console.log("Page scrolled");
});

const countries = document.querySelector("#countries");

countries.addEventListener("change", () => {
    console.log(countries.value);
});

document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});

const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");

email.addEventListener("focus", () => {
    console.log("email: focus inside (cursor in)");
});
email.addEventListener("blur", () => {
    console.log("email: blur(cursor out)");
});

password.addEventListener("focus", () => {
    console.log("password: focus inside(cursor in)");
});
password.addEventListener("blur", () => {
    console.log("password: blur(cursor out)");
});

window.addEventListener("scroll", event => {
    console.log("User scrolled");
});

const select = document.querySelector("#countries-dropdown");

select.addEventListener("change", event => {
    console.log(event.currentTarget.value);
});

const name = document.querySelector("#user-name");

name.addEventListener("keyup", event => {
    console.log(event.key);
});

const username = document.querySelector("#user-name");

username.addEventListener("blur", () => {
    if (username.value.length >= 6) {
        username.classList.remove("error");
        username.classList.add("success");
    } else {
        username.classList.remove("success");
        username.classList.add("error");
    }
});

const translations = {
    welcome: {
        dutch: "Welkom",
        french: "Bienvenue",
        english: "Welcome",
    },
};

const getTranslation = language => {
    return translations.welcome[language] ?? "Welcome";
};

const dropdown = document.querySelector("#languages-list");
const output = document.querySelector("#output-text");

dropdown.addEventListener("change", () => {
    output.textContent = getTranslation(dropdown.value);
});

const title = document.querySelector("h1");

const navbar = document.querySelector("#navbar");
console.log(navbar);

const item = document.querySelector(".item");
console.log(item);

const item = document.querySelector("#banner .item");
console.log(item);

const link = document.querySelector("a.menu-link");
console.log(link);

const input = document.querySelector("[disabled]");
console.log(input);

const getFooterElement = () => {
    return document.querySelector("#footer-wrapper");
};
console.log(getFooterElement());

const div = document.querySelector("div");
console.log(div.textContent);

const paragraph = document.querySelector("p");

console.log(paragraph?.textContent);

const getTextFromCssSelector = cssSelector => {
    return document.querySelector(cssSelector)?.textContent ?? "Error";
};
console.log(getTextFromCssSelector("h1"));
console.log(getTextFromCssSelector("h2"));

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

paragraphs.forEach(p => {
    console.log(p);
});

paragraphs.forEach(p => {
    console.log(p.textContent);
});

const divs = document.querySelectorAll("div");
const items = [...divs];

const items = [...document.querySelectorAll("div")];

const links = document.querySelectorAll("a");

const loginLinks = [...links]
    .filter(link => link.textContent === "Login")
    .map(link => link.textContent);

const headers = document.querySelectorAll("h1");

const filterHeadings = [...headers].filter(
    header => header.textContent === "Yes"
);
console.log(filterHeadings);

const bigParagraphs = () => {
    return [...document.querySelectorAll("p")]
        .filter(p => p.textContent.length > 10)
        .map(p => p.textContent)
        .join(", ");
};
console.log(bigParagraphs());

const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);

const element = document.querySelector("#test");
element.textContent = "THIS IS THE NEW TEXT";
element.textContent = "<strong>This will NOT be bold</strong>";
element.innerHTML = "<strong>This will be bold!</strong>";

const banner = document.querySelector("#banner");

banner.innerHTML = "";

const setWelcomeMessage = name => {
    document.querySelector(
        "#message"
    ).innerHTML = `Welcome <strong>${name}</strong>`;
};

setWelcomeMessage("Eldar");
setWelcomeMessage("Alex");
setWelcomeMessage("Eldar!");

const getWelcomeMessage = name => {
    const element = document.querySelector("#welcome-message");
    element.innerHTML = `Welcome <strong>${name}</strong>!`;
};

getWelcomeMessage("Eldar Semenov");
