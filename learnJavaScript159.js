//
const getFooterElement = () => {
    return document.querySelector('#footer-wrapper');
}
console.log(getFooterElement());
//
const div = document.querySelector('div');
console.log(div.textContent);

const paragraph = document.querySelector('p');

//console.log(paragraph.textContent);
if(paragraph) {
    console.log(paragraph.textContent);
}
console.log(paragraph?.textContent);
//
const getArticleTitle = () => {
    const headline = document.querySelector('#headline');
    return headline.textContent;
}
console.log(getArticleTitle());
//
const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? "No result!";
}
console.log(getTextFromSelector('#headline'));
console.log(getTextFromSelector('h2'));
//
console.log(document.querySelectorAll('p'));
//
const getAllLinks = () => {
    return document.querySelectorAll('a');
}
console.log(getAllLinks());
//
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
//
const logLinksTexts = () => {
    document.querySelectorAll('a').forEach(link => {
        console.log(link.textContent);
    });
}
logLinksTexts();
//
const paragraphs = document.querySelectorAll('p');
const items = [...paragraphs];
console.log(items);
items.forEach(item => {
    console.log(item);
});
items.map(item => {
    console.log(item.length);
});
//
const links = document.querySelectorAll('a');
const loginLinks = [...links].filter(link => link.textContent === 'Login');
console.log(loginLinks);

const paragraphs = document.querySelectorAll('p');
const p_links = [...paragraphs].filter(paragraph => paragraph.textContent === 'Text');
console.log(p_links);
//
const getShortTextParagraphs = () => {
    const paragraphs = document.querySelectorAll('p');
    return [...paragraphs].filter(p => p.textContent.length <= 5);
}
console.log(getShortTextParagraphs());
//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
//
const element = document.querySelector('#test');
element.textContent = 'This is the new text!';
//
const banner = document.querySelector('#banner');
banner.textContent = '';
//
const getFormatedWelcomeMessage = () => {
    return document.querySelector('#welcome-message').innerHTML;
}
console.log(getFormatedWelcomeMessage());

const getStandardTextContent = () => {
    return document.querySelector('#welcome-message').textContent;
}
console.log(getStandardTextContent());
console.log(document.querySelector('#welcome-message'));
//
const setWelcomeMessage = name => {
    document.querySelector('#welcome-message').innerHTML = 
    `Hello <strong>${name}!</strong>`;
}
console.log(setWelcomeMessage('Sam Green'));
console.log(setWelcomeMessage('Eldar'));
//
const setWelcomeMessage = name => {
    return document.querySelector('#name').textContent = name;
}
console.log(setWelcomeMessage('Sam!'));
console.log(document.querySelector('#name'));
console.log(document.querySelector('#welcome-message'));
//
const setName = (prefix, name) => {
    document.querySelector('#mr').textContent = prefix;
    document.querySelector('#head').textContent = name;
} 
console.log(setName('Mr', 'Semenov'));
//
const email = document.querySelector('#email');
console.log(email.textContent);
console.log(email.value);
//
const getUserName = () => {
    return document.querySelector('#user-name').value;
}
console.log(getUserName());

const emptyUserName = () => {
    return document.querySelector('#user-name').value = '';
}
console.log(emptyUserName());
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
    put(endpoint, body) {
        return this._send('PUT', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('POST', endpoint, body);
    }
    delete(endpoint, body){
        return this._send('DELETE', endpoint, body);
    }
}
//
function sum(a, b) {
    console.log(a);
    console.log(b);
    console.log(a + b);
    return a + b;
}
sum(1, 3);
//
let name = 'Sam';
name += ' Green';
console.log(name);