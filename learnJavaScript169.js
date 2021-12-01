const fab = document.querySelector('#fab');
const attendee = document.querySelector('#attendee-name');
const modal = document.querySelector('#modal');
const form = document.querySelector('#attendee-form');
const list = document.querySelector('#list');

const toggleModal = () => {
    modal.classList.toggle('show');
    fab.classList.toggle('rotate');
    if(modal.classList.contains('show')) {
        attendee.focus()
    } else {
        attendee.blur();
    }
};


const init = () => {
    fab.addEventListener('click', toggleModal);

form.addEventListener('submit', event => {
    event.preventDefault();
    toggleModal();
    attendee.blur();
    list.insertAdjacentHTML('afterbegin', `<li tabindex="0" class="deletable">${attendee.value}</li>`);
    attendee.value = '';
   });
};

init();

document.addEventListener('keyup', event => {
    const key = event.key;
    if (key === 'n' && !modal.classList.contains('show')) {
        toggleModal();
    }
    if (key === 'Escape' && modal.classList.contains('show')) {
        toggleModal();
    }
});
//
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json`)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
}) 
.catch(error => {
    console.error(error);
});
//
fetch(URL)
.then(response => {
    if(!response.ok) {
        throw new Error('API issues.');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
fetch(URL, {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(`https://example.com/api/tweets`, {
    method: 'POST',
    body: JSON.stringify({
        tweet: 'Your tweet here...'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json());
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
}

const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');
API.get('/notifications/new.json')
.then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
*/
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }).then(response => response.json())
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
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
const button = document.querySelector('#button');
const result = document.querySelector('#result');

const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

button.addEventListener('click', () => {
    API.get('/notifications/new.json')
    .then(data => {
        console.log(data);
        result.textContent = data.message;
    });
});
//
const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

    API.get('/notifications/new.json')
    .then(data => {
        console.log(data);
        result.textContent = data.message;
    });
});
//
const myButton = document.querySelector('#my-button');
const myResult = document.querySelector('#my-result');

myButton.addEventListener('click', () => {
    const newAPI = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

    newAPI.get('/notifications/new.json')
    .then(data => {
        console.log(data);
        myResult.textContent = data.count;
    });
});
//
const newButton = document.querySelector('#new-button');
const newResult = document.querySelector('#new-result');

const getMessage = count => {
    return `You've just received ${count} new messages,
    would you like to read them?`;
}

newButton.addEventListener('click', () => {
    const api = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');

    api.get('/notifications/new.json')
    .then(data => {
        console.log(data);
        newResult.textContent = getMessage(data.count);
    });
});
//
const form = document.querySelector('#form');
const input = document.querySelector('#input');

const API3 = new FetchWrapper('https://api.learnjavascript.online');

form.addEventListener('submit', event => {
    API3.put('/demo/grades.json', {
        grade: input.value
    }).then(data => {
        console.log(data);
    });
});