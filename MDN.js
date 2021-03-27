let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name. ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozillan is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
// Strings methods. Project in Learn JavaScript
funcction getNumberOfChars(name){
    return name.length;
}
function getFirstChar(name){
    return name[0];
}
function getLastChar(name){
    return name[name.length - 1];
}
function getLower (name) {
    return name.toLowerCase();
}
function getUpper(name){
    return name.toUpperCase();
}
function getCapitalized(name){
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}
function getClean(name){
    return name.trim();
}