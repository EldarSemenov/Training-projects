class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
    put(endpoint,body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }
};
try {
    const API = new FetchWrapper("https://api.learnjavascript.online");
    API.put("/demo/grades.json", {
        grade: 17
    }).then(data => {
        console.log(data)
    })
}catch(error){};
//
try{
    const API = new FetchWrapper("https://api.learnjavascript.online");
    API.put("/demo/is_passing.json", {
        is_passing: false
    }).then(data => {
        console.log(data);
    })
}catch(error){};
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body){
        return fetch(this.baseURL + endpoint, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
};
//
class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    put(endpoint, body){
        return this._send("put", endpoint, body);
    }
    post(endpoint, body){
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body){
        return this._send("delete", endpoint, body);
    }
    _send(method, endpoint, body){
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
};
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json())
    }
    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
};
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json())
    }
    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("delete", endpoint, body)
    }
    _send(method, enpoint, body) {
    return fetch(this.baseURL + endpoint, {
        method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    .then(response => response.json());
}
};