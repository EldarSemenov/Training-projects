fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
console.log("A");
fetch("some-url")
.then(response => response.json())
.then(data => {
    console.log("B");
});
console.log("C");
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data.message);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data.count);
});
//
 const init = () => {
   console.log('A');
   fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
   .then(response => response.json())
   .then(data => {
       console.log("B");
       console.log(data);
   })
   console.log("C");   
}
init();
//
const checkForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => console.log(data));
}
checkForNewNotifications();
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const arrayOfObjects = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user.email);
        });
        data.forEach(user => {
            console.log(user.id);
        });
        data.forEach(user => {
            console.log(user.username);
        });
    });
}
arrayOfObjects();
//
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.title);
});
//
const checkForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}
const showNewNotifications = count => {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}
checkForNewNotifications();
//
const getWeather = () => {
    return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json`)
.then(response => response.json())
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
const getTweetDetails = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.author);
        console.log(data.author.details);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    });
}
const showAuthorName = (fullName) => {
    console.log(fullName);
} 
getTweetDetails();