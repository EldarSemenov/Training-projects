const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject(`Failed. That's the only thing I do.`);
    });
}
alwaysFail()
.then(() => {
})
.catch(data => {
    console.error(data);
});
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== 'flight-status') {
        setTimeout(() => {
            reject('This endpoint is not supported.');
        }, 3000);
        }
        setTimeout(() => {
            resolve({
                departed: false,
                delayed: true
            });
        }, 4000);
    });
}
fakeFetch('carso').then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

fakeFetch('flight-status').then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
//
const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You asked me to fail after ${milliseconds}ms and I did so!`);
        }, milliseconds);
    });
}

failAfter(1500).catch(error => {
    console.error(error);
});
//
const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person = JSON.parse(string);
console.log(person);
//
const person = {
    firstName: 'Sam',
    lastName: 'Green',
    age: 32
};
const string = JSON.stringify(person);
console.log(string);
//
const willItRain = weatherAPIresponse => {
    const object = JSON.parse(weatherAPIresponse);
    return object.now.rainExpected;
}
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'));
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'));
//
const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    }
    const string = JSON.stringify(data);
    return string;
}
console.log(prepareStatus('My first post!', 'Amsterdam'));
//
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json());
}
console.log(checkForNewNotifications());
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const init = () => {
    console.log('A');
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log('B');
        console.log(data.count);
    });
    console.log('C');
}
console.log(init());
//
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
checkForNewNotifications();
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        console.log(user.email);
    data.forEach(user => {
        console.log(user.id);
    });
    });
});
//
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.title);
});
//
function showNewNotifications(count) {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}

const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}
checkForNewNotifications();
//
function showAuthorName(fullName) {
    console.log(fullName);
}
const getTweetDetails = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.author.details);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    });
}
getTweetDetails();
//
function displayCompletedChapters(chapters){
    console.log('Received', chapters);
}
const getChapters = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const chapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(chapters);
    });
}
getChapters();
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
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
.then(response => {
    console.log(response);
})
//
fetch('https://jsdemo-3f387-defaulteurope-west1.firebasedatabase.app/chapters/all.json')
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
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});