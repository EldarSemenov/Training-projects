const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("user focused inside the name");
});
name.addEventListener("blur", () => {
    console.log('user removed focus from the name');
});
//
const button = document.querySelector("#button");

button.addEventListener("focus", () => {
    console.log('User focused');
});

button.addEventListener("blur", () => {
    console.log("User left");
});
//
const text = document.querySelector("#focus");

text.addEventListener("focus", () => {
    console.log('User has focused');
});
text.addEventListener('blur', () => {
    console.log('User has left the text');
});
//
document.addEventListener("DOCContentLoaded", () => {
    console.log("Dom is ready");
});
//
window.addEventListener("scroll", () => {
    console.log('Page is scrolled');
});
//
const countries = document.querySelector("#countries");

countries.addEventListener("change", () => {
    console.log(countries.value);
});
//
document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});
//
const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log('User focused inside the name');
});
name.addEventListener("blur", () => {
    console.log("User left the name");
});
//
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
});
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM is ready');
});
document.querySelector("DOMContentLoaded", () => {
    console.log('DOM is ready');
});
name.addEventListener("focus", () => {
    console.log("This user focused");
});
name.addEventListener("blur", () => {
    console.log('This user left');
});
//
const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("The USER focused");
});
name.addEventListener("blur", () => {
    console.log("USER left");
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is loaded");
});
window.addEventListener("scroll", () => {
    console.log("Page scrolled");
});
//
const countries = document.querySelector("#countries");
countries.addEventListener("change", () => {
    console.log(countries.value);
});
//
document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});
//
document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});
//
const name = document.querySelector("#name");

name.addEventListener('focus', () => {
    console.log('User is focused');
});
name.addEventListener('blur', () => {
    console.log('User is left');
});
//
const countries = document.querySelector("#countries");

countries.addEventListener('change', () => {
    console.log(countries.value);
});
//
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready');
});
//
window.addEventListener('scroll', () => {
    console.log('page scrolled');
});
//
document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});
//
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready!");
});
//
const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log('User is focused');
});
name.addEventListener("blur", () => {
    console.log('User left this area');
});
//
window.addEventListener("scroll", () => {
    console.log('page is scrolled');
});
//
const countries = document.querySelector("#countries");

countries.addEventListener("change", () => {
    console.log(countries.value);
});
//
document.addEventListener("keydown", event => {
    console.log(event.key);
});
document.addEventListener("keyup", event => {
    console.log(event.key);
});
*/
const username = document.querySelector("#user-name");

username.addEventListener("blur", () => {
    if(username.nodeValue.length >= 6){
        username.classList.remove("error")
        username.classList.add("success")
    } else {
        username.classList.remove("success");
        username.classList.add("error");
    }
});