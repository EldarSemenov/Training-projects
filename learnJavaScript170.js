class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
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
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
const citiesDropdown = document.querySelector('#cities-dropdown');
const result = document.querySelector('#result');

const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/');

citiesDropdown.addEventListener('change', () => {
    API.get(`weatherstack/${citiesDropdown.value}.json`)
    .then(data => {
        console.log(data);
        const temperature = data.current.temperature;
        result.textContent = `Now, it's ${temperature} degrees celsius in 
        ${citiesDropdown.value[0].toUpperCase() + citiesDropdown.value.substring(1).toLowerCase()}` ?? `Select a country`;
    });
});
//
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

const api = new FetchWrapper('https://api.learnjavascript.online/demo/');

form.addEventListener('submit', event => {
    event.preventDefault();
    api.put('grades.json', {
        grade: userGrade.value
    }).then(data => {
        console.log(data);
    });
});
//
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

const newAPI = new FetchWrapper('https://api.learnjavascript.online/demo/');

form.addEventListener('submit', event => {
   event.preventDefault();
   newAPI.put('grades.json', {
       grade: userGrade.value
   }).then(data => {
       console.log(data);
   });
});
//
const FORM = document.querySelector('#user-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

const userAPI = new FetchWrapper('https://api.learnjavascript.online/demo/');

FORM.addEventListener('submit', event => {
    event.preventDefault();
    userAPI.post('user.json', {
        firstName: firstName.value,
        lastName: lastName.value
    }).then(data => {
        console.log(data);
    });
});
//
fetch('https://api.learnjavascript.online/demo/todos')
.then(response => response.json())
.then(data => {
    console.log(data);
});