
console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll('p').textContent);
//
const getAllLinks = () => {
    return document.querySelectorAll('a');
}
console.log(getAllLinks());
//
const getDivElements = () => {
    //return all the div elemnts
    return document.querySelectorAll('div');
}
//
const getFooterLinks = () => {
    //return all the links that are in the footer-wrapper
    return document.querySelectorAll('#footer-wrapper a');
}
//
const getAboutLinks = () => {
    //return all the links that point to the Abouts Us page
    return document.querySelectorAll('.about');
}
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());
//
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
//
paragraphs.forEach(paragraph => {
    console.log(paragraph);
});
//
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
//
const getNumberOfLinks = () => {
    return document.querySelectorAll('a').length;
}
console.log(getNumberOfLinks());
//
const getTextLinks = () => {
    const elements = document.querySelectorAll('a');
    elements.forEach(element => {
        console.log(element.textContent);
    })
}
console.log(getTextLinks());
//
const logLinksText = () => {
    document.querySelectorAll('a').forEach(item => {
        console.log(item.textContent);
    });
}
console.log(logLinksText());
//
const divs = document.querySelectorAll('div');
const items = [...divs];
//
const items = [...document.querySelectorAll('div')];
//
const links = document.querySelectorAll('a');
const loginLinks = [...links].filter(link => link.textContent === 'Login');
console.log(loginLinks);
//
const getSelectedCurrences = () => {
    return [...document.querySelectorAll('.cards .card.active')]
    .map(card => card.textContent);
}
const getSelectedCurrences = () => {
    return [...document.querySelectorAll('.cards .card.active')]
    .map(card => card.textContent);
}
//
const getShortTextParagraphs = () => {
const paragraphs = document.querySelectorAll('p');
return [...paragraphs].filter(paragraph => paragraph.textContent.length < 10);
}
console.log(getShortTextParagraphs());
//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector('#rest');
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector('#test');
//element.textContent = "<strong>This will NOT be bold</strong>";
element.innerHTML = "This text: <strong>This will be the bold text</strong>"
//
const banner = document.querySelector('#banner');
banner.innerHTML = ""
//
const getFormattedWelcomeMessage = () => {
    return document.querySelector('#welcome-message')
    .innerHTML;
}
console.log(getFormattedWelcomeMessage());
//
const setWelcomeMessage = (name) => {
    return document.querySelector(`#welcome-message`)
    .innerHTML = `Hello <strong>${name}</strong>`;
}
console.log(setWelcomeMessage('Tomas!'));
//
const emptyShoppingList = () => {
    document.querySelector("#shopping-list")
    .innerHTML = "";
}
console.log(emptyShoppingList());
//
const setWelcomeMessage = name => {
    document.querySelector('#name')
    .textContent = name;
}
console.log(setWelcomeMessage('Alex!'));
console.log(setWelcomeMessage('<h1>You have been hacked</h1>'));