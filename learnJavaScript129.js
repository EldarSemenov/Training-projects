const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = 'Hello World!';
document.body.appendChild(paragraph);
console.log(paragraph);
//
const head = document.createElement("h1");
head.classList.add("heading");
head.textContent = 'Star Treack';
document.body.appendChild(head);
console.log(head);
//
const h2 = document.createElement("h2");
h2.classList.add("heading_h2");
h2.textContent = 'Text content of H2';
document.body.appendChild(h2);
console.log(h2);
//
const h3 = document.createElement("h3");
h3.classList.add("heading_h3");
h3.textContent = "This is the heading for h3";
document.body.appendChild(h3);
console.log(h3);
//
const h4 = document.createElement("h4");
h4.classList.add('heading_h4');
h4.textContent = 'This is the heading for h4';
document.body.appendChild(h4);
console.log(h4);
//
const h5 = document.createElement('h5');
h5.classList.add('heading_h5');
h5.textContent = 'This is the heading for H5';
document.body.appendChild(h5);
console.log(h5);
//
const h6 = document.createElement("h6");
h6.classList.add("heading_h6");
h6.textContent = 'This is the heading for H6';
document.body.appendChild(h6);
console.log(h6);
//
const pr = document.createElement('p');
pr.classList.add("text-area");
pr.textContent = 'This text for H6 heading. The text content is null';
document.body.appendChild(pr);
console.log(pr);
//
const div = document.createElement("div");
if(isDarkMode()) {
    div.classList.add('dark-mode');
} else {
    div.classList.add('light-mode');
}
div.textContent = 'Hello WORLD!';
document.body.appendChild(div);
console.log(div);
//
const button = document.querySelector("#app-button");
button.addEventListener("click", () => {
    console.log('Button clicked');
    console.log("This button is clicked");
});
//
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
});
const second = document.querySelector("#second");
second.addEventListener("click", () => {
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
});
//
const clickGreeting = () => {
    const button = document.querySelector("#my-button");
    button.addEventListener("click", () => {
        console.log('Welcome!');
    });
}
clickGreeting();
//
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    console.log('Clicked')
    button.setAttribute("disabled", "disabled");
});
//
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log('CLIKCED');
    button.setAttribute("disabled", "disabled");
});
//
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log('clicked');
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loading...";
});
//
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    console.log('One');
    console.log("Two");
    console.log("Three");
    button.setAttribute("disabled", "disabled");
    button.textContent = 'The process is loading...';
});
//
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    console.log('One');
    console.log("Two");
    console.log("Three");
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'The process has launched....';
});
//
const button = document.querySelector("#my-button");
button.addEventListener("click", () => {
    setTimeout(() => {
    console.log('One');
    console.log('Two');
    console.log('Three');
    alert('Your file is in the process...');
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'The process has launched...';
    }, 1000);
});
//
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    setTimeout(() => {
    //alert('It is processing your application...🚀 🚀 🚀 🚀 🚀 🚀');
    console.log('One 🛩');
    console.log('Two 🚤');
    console.log('Three 🛬');
    button.setAttribute('disabled', 'disabled');
    button.textContent = 'In the process...📱 📲 💻 🖥 🖱 ♥️';
    }, 1500);
    getTheText();
});
const getTheText = () => {
    const text = document.querySelector("#text")
    return text.textContent = 'Congratulations 💥 The text has created! 🏜'
}
//
const initGetWeather = () => {
    const button = document.querySelector("#my-button");
    button.addEventListener('click', () => {
        button.textContent = 'Loading...';
    });
}
initGetWeather();
//
const button = document.querySelector("#menu-sidebar");
const appSidebar = document.querySelector("#app-sidebar");
button.addEventListener("click", () => {
    appSidebar.classList.toggle('show');
});