function showNewNotification(count) {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotification(data.count);
    });
}
checkForNewNotifications();
//
const checkForTemperature = () => {
return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json`)
.then(response => response.json())
.then(data => {
    console.log(data);
    showTemperature(data.current.temperature);
});
}

const showTemperature = temperature => {
    console.log(`It's currently ${temperature} C degrees in Amsterdam.`);
}

checkForTemperature();
//
function showAuthorName(fullName) {
    console.log(fullName);
}

const getTweetDetails = () => {
    return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data.author.details);
        showAuthorName(`${data.author.details.firstName} ${data.author.details.lastName}`);
    });
}
getTweetDetails();
//
function displayCompleted(chapters) {
    console.log('Received', chapters);
}
const getChapters = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompleted(completedChapters);
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
    console.log('This is an error!');
});
//
fetch(URL)
.then(response => {
    if(!response.ok) {
        throw new Error("API issues.");
    }
    return response.json();
})
.then(data => {
    console.log(data)
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
//
const showNewNotifications = count => {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
}
const checkForNewNotifications = () => {
    return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    })
    .catch(error => {
        console.error(error);
    });
}
checkForNewNotifications();
//
function displayCompletedChapters(chapters) {
    console.log(`Received`, chapters);
}
const getChapters = () => {
    return fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    })
    .catch(error => {
        console.error(error);
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
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
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
        tweet: 'Your tweet here...'
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
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        food: 'Tomatos'
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
fetch(`https://api.learnjavascript.online/demo/user.json`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
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
//
fetch(URL, {
    method: `POST`,
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
fetch(URL, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
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
//
fetch(URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
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
//
fetch(URL, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
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