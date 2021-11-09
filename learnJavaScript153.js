/*
fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        grade: 18
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
    constructor(api) {
        this.api = api;
    }
}
const API = new FetchWrapper("https://api.learnjavascript.online");

API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: 'PUT',
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
})
.catch(error => {
    console.error(error);
});
//
const API = new FetchWrapper("https://api.learnjavascript.online");

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
}
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return this.baseURL + endpoint, { //WRONG
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }
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
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json());
    }
}
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json());
    }
}

try {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
        console.log(data.count);
        console.log(data.message);
    });
} catch(error) {
    console.error(error);
}
//
import FetchWrapper from './fetchWrapper.js'

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}
const checkForNewNotifications = () => {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}
checkForNewNotifications();
//
import FetchWrapper from './fetchWrapper.js';

function showAuthorName(fullName) {
    console.log(fullName);
}

const getTweetDetails = () => {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/tweet/1080777336298049537.json")
    .then(data => {
        console.log(data.author.details);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    })
}
getTweetDetails();
*/
import FetchWrapper from './fetchWrapper.js';

function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
}

const getChapters = () => {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/chapters/all.json")
    .then(data => {
        console.log(data)
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    })
}
getChapters();



