function displayCompletedChapters(chapters){
    console.log('Received', chapters);
}
const getChapters = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => 
            chapter.isCompleted);
        displayCompletedChapters(completedChapters);    
    })
    .catch(error => {
        console.log(error);
    });
}
getChapters();
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
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
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://example.com/api/tweets", {
    method: 'POST',
    body: JSON.stringify({
        tweet: "Your tweet here..."
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
const saveGrade = grade => {
    fetch('https://api.learnjavascript.online/demo/grades.json', {
        method: 'PUT',
        body: JSON.stringify({
            grade: grade
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}
saveGrade(19);
//
const updateUserProfile = (firstName, lastName) => {
    fetch('https://api.learnjavascript.online/demo/user.json', {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}
updateUserProfile('Eldar', 'Neumann');
//
fetch(URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
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
import {Helper} from './exportFile158.js';

const name = new Helper('eldar');
console.log(name);
//
import {settings, votingAge} from './exportFile158.js';

console.log(settings);
console.log(votingAge);
//
import {votingAge, getWelcomeMessage} from './exportFile158.js';

console.log(getWelcomeMessage());
console.log(`The voting age starts from ${votingAge} years old.`)
//
import {Helpers} from './exportFile158.js';

const capitalizeName = name => {
    const helpers = new Helpers(name);
    return helpers.capitalize();
}
console.log(capitalizeName('aleX'));
console.log(capitalizeName('eLDAR'));
//
import NumericHelper from './exportFile158.js';

const isEvenNumber = number => {
    const helper = new NumericHelper(number);
    return helper.isEven();
}
console.log(isEvenNumber(2));
console.log(isEvenNumber(11));
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
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
fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
        grade: 18
    })
})
.then(response => response.json())
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
            method: 'GET',
            headers: {"Content-Type": "application/json"}
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
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json());
    }
}
try{
   const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
   API.get("/notifications/new.json")
   .then(data => {
       console.log(data);
   })
}catch(error) {}
//
import FetchWrapper from './exportFile158.js';

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}

const checkForNewNotifications = () => {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");
    API.get("notifications/new.json")
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}
checkForNewNotifications();
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json')
.then(response => response.json())
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
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
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
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
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

const item = document.querySelector('.item');

const item = document.querySelector('#banner .item');

const link = document.querySelector('a.menu-link');

document.querySelector('[disabled]');