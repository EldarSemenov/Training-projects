const element = document.querySelector("#first-item");
element.classList.add("highlighted");
//
const element = document.querySelector("#first-item");
element.classList.remove("highlighted");
//
export const openSidebar = () => {
    const element = document.querySelector("#app-sidebar");
    return element.classList.add("show");
};
//
export const closeSidebar = () => {
    document.querySelector("#app-sidebar").classList.remove("show");
};
//
export const deactivateAllTabs = () => {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
};
export const activateClickedTab = tab => {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.add("active");
    });
};
//
const box = document.querySelector("#box");
console.log(box.classList.contains("activated"));
console.log(box.classList.contains("highlighted"));
//
const box = document.querySelector("#box");
box.classList.toggle("activated");
console.log(box.classList.contains("activated"));
box.classList.toggle("activated");
console.log(box.classList.contains("activated"));
box.classList.toggle("activated");
console.log(box.classList.contains("activated"));
//
element.classList.replace("hidden", "show");
element.classList.add("active", "higlighted", "dark");
element.classList.remove("active", "highlighted", "dark");
//
export const openCloseSidebar = () => {
    document.querySelector("#app-sidebar").classList.toggle("show");
}
//
export const handleItemClick = li => {
    li.classList.toggle("highlighted");
};
//
const banner = document.querySelector("#banner");
console.log(banner.getAttribute("id"));
console.log(banner.getAttribute("disabaled"));
//
const button = document.querySelector("#login");
console.log(button.getAttribute("disabled"));
console.log(button.removeAttribute("disabled"));
console.log(button.getAttribute("disabled"));
//
button.setAttribute("disabled", "disabled");
console.log(button.getAttribute("disabled"));
//
const ogList = document.querySelector("ol");
ogList.setAttribute("id", "list");
console.log(ogList.getAttribute("id"));
console.log(ogList.hasAttribute("honor"));
console.log(ogList.hasAttribute("id"));
//
const isDisabled = button => {
    return button.hasAttribute("disabled");
};
//
const enableButton = button => {
    button.removeAttribute("disabled");
};
//
const disabledButton = button => {
    button.setAttribute("disabled", "disabled");
};
const enableButton = button => {
    button.removeAttribute("disabled");
};
//
const banner = document.querySelector("#banner");
banner.style.backgroundColor = "red";
//
const banner = document.querySelector("#banner");
banner.style.display = "none";
banner.style.display = "";
//
const hideEUConstent = () => {
    const element = document.querySelector("#eu-consent");
    element.style.display = "none";
};
//
const headline = document.querySelector("#headline");
headline.remove();
document.doccumentElement.classList.add("dark-mode")
//
document.body.style.backgroundColor = "blue";
//
const toggleDarkTheme = () => {
    document.documentElement.classList.toggle("dark");
};
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const currency = form.dataset.currency;
console.log(currency);
//
const form = document.querySelector("#payment-form");
console.log(form.dataset);
const id = form.dataset.userId;
console.log(id);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 43;
console.log(navbar);
navbar.dataset.rememberMe === "true";
console.log(navbar);