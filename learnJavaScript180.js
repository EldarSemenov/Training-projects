class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
}
try{
   const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

   API.get('/notifications/new.json')
   .then(data => {
       console.log(data);
   });
}catch(error) {}
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
const API = new FetchWrapper('https://api.learnjavascript.online');

API.put('/demo/grades.json', {
    grade: 18
}).then(data => {
    console.log(data);
});
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
        }).then(response => response.json())
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json())
    }
    put(endpoint, body) {
        return this._send('PUT', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('POST', endpoint, body);
    }
    delete(endpoint, body) {
        return this._send('DELETE', endpoint, body);
    }
}
//
const title = document.querySelector('h1');
const navbar = document.querySelector('#navbar');
const item = document.querySelector(".item");
const otherItem = document.querySelector('#banner .item');
const correct = document.querySelector('a.menu-link');
const doc = document.querySelector('[disabled]');
//
const getFooterElement = () => {
    return document.querySelector('#footer-wrapper');
}
console.log(getFooterElement());
//
const div = document.querySelector('div');
console.log(div.textContent);

const paragraph = document.querySelector('p');

if(paragraph) {
    console.log(paragraph.textContent);
}
console.log(paragraph?.textContent);
//
const pp = document.querySelectorAll('p');
console.log(pp);
//
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
//
const items = [...document.querySelectorAll('p')];
//
const links = document.querySelectorAll('a');

const loginLinks = [...links].filter(link => link.textContent === 'Login');
console.log(loginLinks);

//const lLinks = [...document.querySelectorAll('a').filter(link => link.textContent === 'Register')];
//console.log(lLinks);
//
const lessThan10 = () => {
    return [...document.querySelectorAll('p')]
    .filter(text => text.textContent.length < 10);
}
console.log(lessThan10());