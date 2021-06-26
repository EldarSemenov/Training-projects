const setWelcomeMessage = name => {
    document.querySelector("#name").textContent = name;
};
setWelcomeMessage("Sam");
//
const email = document.querySelector("#email");
console.log(email.textContent);
console.log(email.value);
//
const getUserName = () => {
    return document.querySelector("#user-name").value;
};
//
const element = document.querySelector("#test");
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector("#test");
element.textContent = 'This is the new text!';
//
const banner = document.querySelector("#banner");
banner.innerHTML = 'Yes';
//
const getFormattedWelcomeMessage = () => {
    return document.querySelector("#welcome-message").innerHTML;
};
console.log(getFormattedWelcomeMessage());
//
const setWelcomeMessage = name => {
    return document.querySelector("#welcome-message").innerHTML =
    `Hello <strong>${name}</strong>`;
};
setWelcomeMessage("Sam");
setWelcomeMessage("Jack");
//
const emptyShoppingList = () => {
    return document.querySelector("#shopping-list").innerHTML = "";
};
emptyShoppingList();
//
const setWelcomeMessage = name => {
    document.querySelector('#name').textContent = name;
}
//setWelcomeMessage("SAM!");
//
const email = document.querySelector("#email");
console.log(email.textContent);
console.log(email.value);
//
export const getSelectedCpintry = () => {
    const dropdown = document.querySelector("#countries-dropdown");
    return dropdown.nodeValue;
};
//
export const getUserComment = () => {
    const textarea = document.querySelector("#user-comment");
    return textarea.value;
};
//
export const getFullName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
};