class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}

function displayCompletedChapters(chapters) {
    console.log("Completed chapters:", chapters);
}

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
);

const getChapters = () => {
    API.get("/chapters/all.json").then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    });
};

getChapters();

const API = new FetchWrapper("https://api.learnjavascript.online");

API.put("/demo/grades.json", {
    grade: 18,
}).then(data => {
    console.log(data);
});

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}

// try {
//     const API = new FetchWrapper("https://api.learnjavascript.online");

//     API.put("/demo/grades.json", {
//         grade: 18,
//     }).then(data => {
//         console.log(data);
//     });
// } catch (error) {
//     console.error(error);
// }

try {
    const API = new FetchWrapper("https://api.learnjavascript.online");

    API.put("/demo/grades.json", {
        grade: 18,
    }).then(data => {
        console.log(data);
    });
} catch (error) {
    console.error(error);
}

class FetchWrapper {
    _send(method, endpoint, body) {
        return fetch();
    }
}

//FINAL VERSION OF FETCHWRAPPER

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
    put(endpoint, body) {
        return this._send("PUT", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("POST", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("DELETE", endpoint, body);
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
    put(endpoint, body) {
        return this._send("PUT", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("POST", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("ELETE", endpoint, body);
    }
}

const title = document.querySelector("h1");

const navbar = document.querySelector("#navbar");

// const item = document.querySelector(".item");

const item = document.querySelector("#banner .item");

const correct = document.querySelector("a.menu-link");

const name = document.querySelector("[disabled]");

const getHeader = () => {
    return document.querySelector("h1#header");
};
console.log(getHeader());

const div = document.querySelector("div");
console.log(div.textContent);

const h1 = document.querySelector("h1");
console.log(h1.textContent);

const paragraph = document.querySelector("p");
console.log(paragraph?.textContent);

const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector);
    return element?.textContent ?? "....";
};
console.log(getTextFromSelector("h2"));

const getNonExistingText = selector => {
    const element = document.querySelector(selector);
    return element?.textContent ?? "NoN";
};
console.log(getNonExistingText("h6"));

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
const action = paragraphs.forEach(p => {
    console.log(p.textContent);
});

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
