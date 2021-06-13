const checkForNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json'); 
};
const result = checkForNotifications();
console.log(result);
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => {
    console.log(response);
});
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => {
    return response.json();
});
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => response.json());
//
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
    .then(response => response.json());
};
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data));
//
console.log("A");
fetch("some-url")
.then(response => response.json())
.then(data => {
    console.log("B");
});
console.log("C")
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => response.json())
.then(data => {
    console.log(data.count);

});
//
const checkForNewNotifications = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
checkForNewNotifications();
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch('https://jsonplaceholder.typicode.com/users')
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
        console.log(user.name);
    });
});
//
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.title);
    console.log(data.userId);
    console.log(data.completed);
    console.log(data.id);
});
//
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const showNewNotifications = count => {
    console.log(`You have ${count} new notifications.
    Would you like to read them?`);
};
const checkForNewNotifications = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(showNewNotifications(data.count))
    })
}
checkForNewNotifications();
//
const showMeTheMessage = message => {
    console.log(`This is the message: "${message}" that you have.`)
}
const checkingTheMesage = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(showMeTheMessage(data.message));
    });
};
checkingTheMesage();
//
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const getTweetDetails = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.author);
        console.log(data.author.details);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    })
};
function showAuthorName(fullName) {
    console.log(fullName);
};
getTweetDetails();
//
const getChapters = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(
            chapter => chapter.isCompleted);
            displayCompletedChapters(completedChapters);
    })
}
const displayCompletedChapters = chapters => {
    console.log("Received", chapters);
};
getChapters();