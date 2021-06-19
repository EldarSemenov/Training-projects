class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(reposnse => response.json());
    }
    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }
    post(endpoint, body){
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("delete", endpoint, body)
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then(response => response.json());
    }
};
//
const title = document.querySelector("h1");
//
const navbar = document.querySelector("#navbar");
//
//const item = document.querySelector(".item");
//
const item = document.querySelector("#banner .item");
//
//const incorrect = document.querySelector("a .menu-link")
const correct = document.querySelector("a.menu-link")

document.querySelector("[disabled]");
console.log("#h1");
//
const getFooterElement = () => {
    return document.querySelector("#fotter-wrapper");
};
console.log(getFooterElement());
//
const div = document.querySelector("div");
console.log(div.textContent);
//
const peter = document.querySelector("h6");
console.log(peter.textContent);
const katty = document.querySelector("h5");
console.log(katty.textContent);
const hello = document.querySelector("h4");
console.log(hello.textContent);
const name = document.querySelector("h3");
console.log(name.textContent);
const letter = document.querySelector("h2");
console.log(letter.textContent);
const abc = document.querySelector("h1");
console.log(abc.textContent);
//
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);
//
const paragraph = document.querySelector("p");
if (paragraph) {
    console.log(paragraph.textContent);
};
//
const paragraph = document.querySelector("p");
console.log(paragraph?.textContent);
//
const getArticleTitle = () => {
    return document.querySelector("#headline").textContent;
}; console.log(getArticleTitle());
//
const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent?? "";
};
console.log(getTextFromSelector("h1"));
console.log(getTextFromSelector("h2"));
//
const navbar = document.querySelector("#navbar");
const nav = document.getElementById("navbar");
//
const title = document.querySelector("h1").textContent;
console.log(title);
//
const navbar = document.querySelector("#navbar");
console.log(navbar);
//
const item = document.querySelector(".item");
//
const item = document.querySelector("#banner .item");
//
const correct = document.querySelector("a.menu-link");