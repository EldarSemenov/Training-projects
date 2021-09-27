const email = document.querySelector('#email');
console.log(email.textContent);
console.log(email.value);
//
const getUserName = () => {
    return document.querySelector('#user-name').value;
}
console.log(getUserName());
//
const emptyUserName = () => {
    return document.querySelector('#user-name').value = "";
}
console.log(emptyUserName());
//
const getSelectedCountry = () => {
    return document.querySelector("#countries-dropdown").value;
}
console.log(getSelectedCountry());
//
const getUserComment = () => {
    return document.querySelector('#user-comment').value;
}
console.log(getUserComment());
//
const getFullName = () => {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    return `${firstName.value} ${lastName.value}`;
}
console.log(getFullName());
//
const element = document.querySelector("#first-item");
element.classList.add("highlighted");
console.log(document.querySelector('#first-item').innerHTML);
//
let ol = document.querySelector('ol');
let classes = ol.classList.add('d');
console.log(classes.innerHTML);
//
const element = document.querySelector('#first-item');
element.classList.remove("highlighted");
console.log(document.querySelector('#first-item').innerHTML);
//
const openSidebar = () => {
    return document.querySelector("#app-sidebar").classList.add('show');
}

const closeSidebar = () => {
    return document.querySelector('#app-sidebar').classList.remove('show');
}
//
const box = document.querySelector('#box');
console.log(box.classList.contains('activated'));
console.log(box.classList.contains('highlighted'));
box.classList.remove('activated');
console.log(box.classList.contains('activated'));
box.classList.add('odd');
console.log(box.classList.contains('odd'));
//
const box = document.querySelector('#box');
box.classList.toggle('activated');
console.log(box.classList.contains('activated'));
box.classList.toggle('activated');
console.log(box.classList.contains('activated'));
box.classList.toggle('activated');
console.log(box.classList.contains('activated'));
//
box.classList.remove('activated');
box.classList.add('ball');
console.log(box.classList.contains('ball'));
box.classList.replace('ball', 'smart');
console.log(box.classList.contains('smart'));
//
box.classList.add('active', 'highlighted', 'dark');
box.classList.remove('active', 'highlighted', 'dark');
//
const openCloseSidebar = () => {
    document.querySelector('#app-sidebar').classList.toggle('show');
}
//
const handleItemClick = li => {
    console.log(li.classList.toggle('highlighted'));
}
//
const banner = document.querySelector("#banner");
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));
//console.log(document,querySelector('button').getAttribute('login'));
const login = document.querySelector("#login");;
console.log(login.getAttribute('disabled'));
console.log(login.getAttribute('id'));
//
const apple = document.querySelector("#apple");
console.log(apple.getAttribute('id'));
apple.removeAttribute('id');
console.log(apple.getAttribute('id'));
apple.setAttribute('id', 'pear');
console.log(apple.getAttribute('id'));
//
let button = document.querySelector('button');
button.setAttribute('id', 'start');
button.setAttribute('name', 'helloButton');
button.setAttribute('disabled', '');
console.log(button.getAttribute('id'));
console.log(button.getAttribute('name'));
console.log(button.getAttribute('disabled'));
console.log(button.hasAttribute('disabled'));
console.log(button.hasAttribute('nickname'));
//
const isDisabled = button => {
    return button.hasAttribute('disabled');
}
//
const enableButton = button => {
    return button.removeAttribute('disabled');
}
//
const disableButton = button => {
    return button.setAttribute('disabled', 'disabled');
}
const enableButton = button => {
    return button.removeAttribute('disabled');
}
//
const banner = document.querySelector("#banner");
banner.style.backgroundColor = "yellow";
banner.style.display = 'none';
banner.style.display = "";
//
const banner = document.querySelector('#banner');
banner.style.backgroundColor = 'green';
banner.style.display = "none";
banner.style.display = '';