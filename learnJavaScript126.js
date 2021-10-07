const button = document.querySelector("#my-button");
button.addEventListener("click", () => {
    console.log("Button is clicked");
});
//
const button = document.querySelector("#app-button");
button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loding...";
});
//
const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 2000);
});
//
const button = document.querySelector("#app-button");
button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    console.log("clicked");
    button.textContent = 'Loding...';
});
//
const button = document.querySelector("#app-button");
button.addEventListener("click", () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 2000);
});
//
const initGetWeather = () => {
    const button = document.querySelector("#my-button");
    button.addEventListener("click", () => {
        button.textContent = 'Loading...'
        console.log('Getting weather.....');
    });
}
initGetWeather();
//
const menuSidebar = document.querySelector("#menu-sidebar");
const appSidebar = document.querySelector("#app-sidebar");

menuSidebar.addEventListener("click", () => {
    appSidebar.classList.toggle("show");
});
//
const button = document.querySelector("#theme-btn");
button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
//
const button = document.querySelector("#my-button");
button.addEventListener("click", event => {
    console.log(event);
});
//
button.addEventListener("click", event => {
    console.log(event);
});
//
button.addEventListener("click", event => {
    console.log(event);
});
//
const item = document.querySelector("#banner .item");
const link = document.querySelector("a.menu-link")
const input = document.querySelector("[disabled]");
//
const div = document.querySelector("div");
console.log(div.textContent);
//
const paragraph = document.querySelector("p");
//console.log(paragraph.textContent);
//if(paragraph) {
//    console.log(paragraph.textContent)
//}
console.log(paragraph?.textContent);
//
const getTextFromSelector = cssSelector => {
    const text = document.querySelector(cssSelector);
    return text?.textContent ?? "There is no DATA.";
}
console.log(getTextFromSelector("#headline"));
console.log(getTextFromSelector("h2"));
//
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
//
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
//
const headlines = document.querySelectorAll("h1");
headlines.forEach(headline => {
    console.log(headline.textContent);
    console.log(headlines.length);
});
//
const logLinksText = () => {
    document.querySelectorAll("a").forEach(item => {
        console.log(item.textContent);
    });
}
logLinksText();
//
const links = document.querySelectorAll("a");
const loginLinks = [...links].filter(link => link.textContent === 'Login');
console.log(loginLinks);
//
const getShortTextParagraphs = () => {
    return [...document.querySelectorAll('p')].filter(p => 
        p.textContent.length < 10);
}
console.log(getShortTextParagraphs());
//
const getLongTexts = () => {
    return [...document.querySelectorAll('p')]
    .filter(p => p.textContent.length > 20);
}
console.log(getLongTexts());
//
const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
element.textContent = 'That is the new text <strong>CONTENT</strong>';
element.innerHTML = "<strong>This will be bold</strong>";
//
const element = document.querySelector("#banner");
element.textContent = "";
//
const getFormmatedWelcomeMessage = () => {
    return document.querySelector("#welcome-message")
    .innerHTML;
}
console.log(getFormmatedWelcomeMessage());
//
const setWelcomeMessage = name => {
    document.querySelector("#welcome-message")
    .innerHTML = `Hello <strong>${name}!</strong>`;
}
setWelcomeMessage("Alex");
//
const emptyShoppingList = () => {
    return document.querySelector("#shopping-list")
    .innerHTML = "";
}
emptyShoppingList();
//
const setWelcomeMessage = name => {
    document.querySelector("#name").textContent = name;
}
setWelcomeMessage("Jason");
setWelcomeMessage("<h2>You have been hacked</h2>");
//
const setMessage = name => {
    document.querySelector("#bold").textContent = name;
}
setMessage("Arthur");
//
const email = document.querySelector("#email");
console.log(email.textContent);
console.log(email.value);
//
const getUserName = () => {
    return document.querySelector("#user-name").value;
}
console.log(getUserName());
*/
const emptyUserName = () => {
    return document.querySelector("#user-name").value = "";
}
console.log(emptyUserName());