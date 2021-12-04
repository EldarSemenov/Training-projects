async function getValue() {
    return 42;
}
const init = () => {
    getValue().then(result => {
        console.log(result);
    });
}
init();
//
async function getNumber() {
    return 8347;
}
const init1 = () => {
    getNumber().then(result => {
        console.log(result);
    });
}
init1();
//
async function getValue() {
    return 23;
}
const init = async () => {
    console.log(await getValue());
}
init();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}
const init = async () => {
    console.log('A');
    await wait(1000);
    console.log('B');
}
console.log('C');
init();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
const init = async () => {
    console.log('A');
    await wait(1000);
    console.log('B');
    await wait(1000);
    console.log('C');
}
init();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
const init = async () => {
    console.log('Hello world!');
    await wait(1000);
    console.log('Hello after 1 second.');
}
init();
//
const getNewNotificationsCount = () => {
    return new Promise(resolve => {
        fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resolve(data.count);
        });
    });
}
getNewNotificationsCount().then(data => {
    console.log(data);
});
//
const getNewNotificationsCount = () => {
    return new Promise(resolve => {
        fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resolve(data.count);
        });
    });
}
getNewNotificationsCount().then(result => {
    console.log(result);
});
//
const getNewNotificationsCount = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
    const data = await response.json();
    console.log(data);
    return data.count;
}
getNewNotificationsCount().then(data => {
    console.log(data);
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
const init = () => {
    wait(1000).then(() => {
        console.log('Waited 1 second');
    });
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
init();
//
function showNewNotifications(count) {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}
const checkForNewNotifications = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
    const data = await response.json();
    console.log(data);
    showNewNotifications(data.count);
}
checkForNewNotifications();
//
function showAuthorName(fullName){
    console.log(fullName);
}
const getTweetDetails = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json');
    const data = await response.json();
    console.log(data.author.details);
    showAuthorName(`${data.author.details.firstName} ${data.author.details.lastName}`);
}
getTweetDetails();
//
const saveGrade = async grade => {
    const response = await fetch('https://api.learnjavascript.online/demo/grades.json', {
        method: 'PUT',
        body: JSON.stringify({
            grade: grade
        })
    });
    const data = await response.json();
    console.log(data);
};
const form = document.querySelector('#grades-form');
const userGrade = document.querySelector('#user-grade');

form.addEventListener('submit', event => {
    event.preventDefault();
    saveGrade(userGrade.value);
});
//
const getUnreadCount = async () => {
    const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
    const data = await response.json();
    return data.count;
}
//
const init = async () => {
    console.log(await getUnreadCount());
}
init();
//
const init = async () => {
    try{
        const result = await getUnreadCount()
        console.log(result);
    }catch(error) {
        console.error(error);
    }
}
init();
//
const getUnreadCount = async () => {
    try{
        const response = await fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
        const data = await response.json();
        return data.count;
    }catch(error) {
        throw 'An error has occurred';
    }
}
getUnreadCount();
//
const failedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Something went wrong');
        }, 500);
    });
}
const init = async () => {
    try{
        const result = await failedPromise();
        console.log('You will never see me');
    }catch(error) {
        console.log('There was an error');
        console.log(error);
    }
}
init();
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get(endpoint){
        const response = await fetch(this.baseURL + endpoint);
        return response.json();
    }
}
try{
    const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app');
    API.get('/notifications/new.json').then(data => {
        console.log(data.message);
    });
}catch(error){}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async get(endpoint) {
        const response = await fetch(this.baseURL + endpoint);
        return response.json();
    }
}

function showNewNotifications(count) {
    if(!count){
        console.log('We could not load your notifications. Try again later.');
        return;
    } console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}

const checkForNewNotifications = async () => {
    const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/');
    try{
        const data = await API.get('notifications/new.json');
        console.log(data);
        showNewNotifications(data.count);

    }catch(error){
        showNewNotifications();
    }
}
checkForNewNotifications();
//
class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    async get(endpoint){
        const response = await fetch(this.baseURL + endpoint);
        return response.json();
    }
}

function showNewNotifications(count) {
    if(!count){
        console.log(`We can not load your notifications. Try it later on.`);
        return;
    } console.log(`You have ${count} new notifications.
    WOULD YOU LIKE TO READ THE?`);
}

const checkForNewNotifications = async () => {
   const API = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/');
   try{
       const data = await API.get('notifications/new.json');
       console.log(data);
       showNewNotifications(data.count);
   }catch(error){
       showNewNotifications();
   }
} 
checkForNewNotifications();
//
const init = async () => {
    try {
        await wait(1000);
        return 42;
    }catch(error){
        console.log('An error has occurred.');
        console.error(error);
        return 42;
    }
}
init();
//
const init = async () => {
    try{
        await wait(1000);
    }catch(error) {
        console.log('Error has happned.');
        console.error(error);
    }finally{
        return 42;
    }
}
init();