import FetchWrapper from "./exportFile119.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const getTweetDetails = () => {
    API.get("/tweet/1080777336298049537.json")
    .then(data => {
        console.log(data);
        console.log(data.author.details);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
        Greeting(fullName);
        changeToUpperCase(fullName);
    });
}

const showAuthorName = fullName => {
    console.log(fullName);
}
const Greeting = (fullName) => {
    console.log(`Hello ${fullName}!`);
}
const changeToUpperCase = fullName => {
    console.log(fullName.toUpperCase());
}
getTweetDetails();
//
import FetchWrapper from "./exportFile119.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const getChapters = () => {
   API.get("/chapters/all.json")
   .then(data => {
       console.log(data);
       
       const chapters = data.filter(chapter => chapter.isCompleted);
       displayCompletedChapters(chapters);

       const IncompletedChapters = data.filter(chapter => chapter.isCompleted === false);
       showIncompletedChapters(IncompletedChapters);
   });
}
const displayCompletedChapters = chapters => {
    console.log('Received chapters:', chapters);
}
const showIncompletedChapters = chapters => {
    console.log('Received Incompleted Chapters:', chapters);
}
getChapters();
//
import FetchWrapper from "./exportFile119.js";

const API = new FetchWrapper('https://api.learnjavascript.online');

API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
    put(endopint, body) {
        return fetch(this.baseURL + endopint, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then(response => response.json());
    }
}
try{
    const API = new FetchWrapper("https://api.learnjavascript.online");
    API.put("/demo/grades.json", {
        grade: 11
    }).then(data => {
        console.log(data);
    })
}catch(error) {}
//
try {
    const API = new FetchWrapper("https://api.learnjavascript.online");
    API.get("/demo/grades.json")
    .then(data => {
        console.log(data);
    });
}catch(error){}
//
class FetchWrapper {
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class FetchWrapper {
    put(endpoint, body) {
        return this._send('put', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('post', endpoint, body);
    }
    delete(endpoint, body) {
        return this._send('delete', endpoint, body);
    }
}
// 
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
    put(endpoint, body) {
        return this._send('PUT', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('POST', endpoint, body)
    }
    delete(endpoint, body) {
        return this._send('DELETE', endpoint, body);
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
const title = document.querySelector("h1");
const navbar = document.querySelector("#navbar");
const item = document.querySelector("#banner.item");
//
//const incorrect = document.querySelector("a. menu-link");
const correct = document.querySelector("a.menu-link");
//
const doc = document.querySelector("[disabled]");
//
const getFooterElement = () => {
    return document.querySelector("#footer-wrapper");
}
console.log(getFooterElement());
//
const div = document.querySelector("div");
console.log(div.textContent);
//
const div = document.querySelector("#hello");
console.log(div.textContent);
const h1 = document.querySelector("#ball");
console.log(h1.textContent);
const h = document.querySelector("#ball1");
console.log(h.textContent);
//
const hello = document.querySelector("hello");
console.log(hello.textContent);
//
const hello = document.querySelector("hello");
if(hello) {
    console.log(hello.textContent);
}
//
const hello = document.querySelector("#helloWorld");
console.log(hello?.textContent);
//
const getArticleTitle = () => {
    return document.querySelector("#headline").textContent;
}
console.log(getArticleTitle());
//
const getTheTitleOfTheFunction = () => {
    return document.querySelector("#id").textContent;
}
console.log(getTheTitleOfTheFunction());