const us = `{"count":3,"message":"You've got 3 new notifications"}`;
const data = JSON.parse(us);
console.log(data);
//
const checkForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
}
const result = checkForNewNotifications();
console.log(result);
//
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
.then(response => {
    console.log(response);
});
//
fetch(URL)
.then(response => {
    return response.json();
});
//
fetch(URL)
.then(response => response.json());
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
console.log("A");
fetch('some-url')
.then(response => response.json())
.then(data => {
    console.log("B");
});
console.log("C");
//
const init = () => {
    console.log("A");
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log('B');
        console.log(data.count);
    })
    console.log("C");
}
init();
//
const chekForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    });
}
chekForNewNotifications();
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const getArrayOfObjects = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
getArrayOfObjects();
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        console.log(user.email);
    });
});
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        console.log(user.name);
    });
});
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        console.log(user.id);
    });
});
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        console.log(user.id === 2);
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
const showNewNotifications = count => {
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
const showMessage = message => {
    console.log(`You have the message: --- ${message} --- . Would you like to read it?`);
}
const checkForNewMessage = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showMessage(data.message);
    });
}
checkForNewMessage();
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.current.temperature);
});
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const showAuthorName = fullName => {
    console.log(fullName);
}
const getTweetDetails = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.author.details)
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    });
}
getTweetDetails();
//
const displayCompletedChapters = chapters => {
    console.log("Received", chapters);
}
const getChapters = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    })
}
getChapters();