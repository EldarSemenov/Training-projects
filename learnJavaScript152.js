import {settings} from './exportFile152.js';

console.log(settings);
//
import {getWelcomeMessage, votingAge} from './exportFile152.js';

console.log(getWelcomeMessage());
console.log(`The voting age is ${votingAge}`);
//
import {Helpers} from './exportFile152.js';

const capitalizeName = name => {
    return new Helpers(name).capitalize();
}
console.log(capitalizeName('ALex'));
console.log(capitalizeName('chaRLEY'));

const upperCasedName = name => {
    return new Helpers(name).upperCase();
}
console.log(upperCasedName('eldar'));

const lowerCasedName = name => {
    return new Helpers(name).lowerCase();
}
console.log(lowerCasedName('JHON'));
//
import Helper from './exportFile152.js';

import StringHelper from './exportFile152.js';

const helper = new StringHelper('alex');
console.log(helper.capitalize('alex'));
//
import NumericHelper from './exportFile152.js';

const isEvenNumber = number => {
    return new NumericHelper(number).isEven();
}
console.log(isEvenNumber(2));
console.log(isEvenNumber(3));

const isOddNumber = number => {
    return new NumericHelper(number).isOdd();
}
console.log(isOddNumber(10));
console.log(isOddNumber(9));
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

API.get("/chapters/all.json")
.then(data => {
    console.log(data);
});
//
fetch('https://api.learnjavascript.online/demo/grades.json', {
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
const API = new FetchWrapper("https://api.learnjavascript.online");

API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
fetch('https://api.learnjavascript.online/demo/grades.json', {
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
const API = new FetchWrapper('https://api.learnjavascript.online');

API.put('/demo/grades.json', {
    grade: 18
}).then(data => {
    console.log(data);
});
//
fetch('https://api.learnjavascript.online/demo/grades.json', {
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

const API = new FetchWrapper('https://api.learnjavascript.online');
API.put('/demo/grades.json', {
    grade: 18
}).then(data => {
    console.log(data);
});