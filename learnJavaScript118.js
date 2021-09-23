export class Helper {
    capitalize(word){
        return word[0].toUpperCase() + 
        word.substring(1).toLowerCase();
    }
}
//
export const votingAge = 28;

export const settings = {
    theme: 'light',
    admin: false
};
//
import {getWelcomeMessage, votingAge, sum} from "./exportFile118.js";

console.log(getWelcomeMessage());
console.log(`The voting age is ${votingAge}`);
console.log(sum(5, 5));
//
import {Helpers} from "./exportFile118.js";

const capitalizeName = name => {
    const helpers = new Helpers(name);
    return helpers.capitalize();
}
console.log(capitalizeName('aLEX'));
console.log(capitalizeName('jaSoN'));
//
import {Voting} from "./exportFile118.js";

const canPersonVote = () => {
    const voting = new Voting(21);
    return voting.canVote(21);
}
console.log(canPersonVote(21));

const getFullNameOfVoter = () => {
    const voting = new Voting('Jason', 'Dinson');
    return voting.fullName();
}
console.log(getFullNameOfVoter());
//
import Helper from  "./exportFile118.js";

const helper = new Helper();
console.log(helper.capitalize('toMa'));

import StringHelper from "./exportFile118.js";

const name = new StringHelper();
console.log(name.capitalize('jassica'));
//
import Helper from "./exportFile118.js";

import {votingAge} from "./exportFile118.js";

import Helper, {votingAge} from "./exportFile118.js";
//
import NumericHelper from "./exportFile118.js";

const isVenNumber = number => {
    const numeric = new NumericHelper(number);
    return numeric.isEven();
}
console.log(isVenNumber(2));
console.log(isVenNumber(3));
//
const isOddNumber = number => {
    const odd = new NumericHelper(number);
    return odd.isOdd();
}
console.log(isOddNumber(3));
console.log(isOddNumber(5));
console.log(isOddNumber(7));
console.log(isOddNumber(10));
//
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`)
.then(res => res.json())
.then(data => {
    console.log(data);
});
//
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json`)
.then(res => res.json())
.then(data => {
    console.log(data);
});
//
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);
//
const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`);

API.get(`/notifications/new.json`).then(data => {
    console.log(data);
});
//
API.get(`/chapters/all.json`).then(data => {
    console.log(data);
});
//
fetch('https://api.learnjavascript.online/demo/grades.json', {
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        grade: 18
    })
}).then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch('https://api.learnjavascript.online/demo/grades.json', {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        grade: 18
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
});
//
const API = new FetchWrapper('https://api.learnjavascript.online');
API.put('/demo/grades.json', {
    grade: 18
}).then(data => {
    console.log(data);
});
//
const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');
API.get('/notifications/new.json').then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        //todo
    }
}
API.get('/notifications/new.json').then(data => {
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
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {"Content-Type": "application/json" }
        }).then(response => response.json());
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
            headers: {"Content-type": "application/json"}
        })
        .then(res => res.json());
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
            headers: {"Content-Type": "application/jaon"}
        })
        .then(response => response.json());
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
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());
    }
}
try {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
} catch(error){}
//
import FetchWrapper from "./exportFile118.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

const checkForNewNotifications = () => {
    API.get("notifications/new.json")
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}

const showNewNotifications = count => {
    console.log(`You have ${count} new notifications. Would you like to read them`);
}

checkForNewNotifications();
//
import FetchWrapper from "./exportFile118.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

const checkForNewNotifications = () => {
    API.get("notifications/new.json")
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}

const showNewNotifications = count => {
    console.log(`You have ${count} nitifications. Would you like to read them?`);
}

checkForNewNotifications();
//
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
import FetchWrapper from "./exportFile118.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const getWeather = city => {
    API.get(`/weatherstack/${city}.json`)
    .then(data => {
        console.log(data);
        showTemperature(data.current.temperature);
    });
}
const showTemperature = temperature => {
    console.log(`It's ${temperature} degrees celsius.`)
}
getWeather();
//
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});