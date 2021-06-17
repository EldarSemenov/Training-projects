import NumericHelper from "./helper.js";
const isEvenNumber = number => {
    const numericHelper = new NumericHelper(number);
    return numericHelper.isEven();
};
console.log(isEvenNumber(2));
console.log(isEvenNumber(3));
//
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json`)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
API.get("/chapters/all.json")
.then(data => {
    console.log(data);
});
///
fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        grade: 18
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const API = new FetchWrapper("https://api.learnjavascript.online");
API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint, {
            method: "get",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "get",
            headers: {"Content-Type": "application/json"},
        })
        .then(response => response.json())
    }
};
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        .then(response => response.json())
    }
};
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
API.get("/notifications/new.json")
.then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
} catch(error){};