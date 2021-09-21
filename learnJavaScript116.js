const getChapters = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const chapters = data.filter(chapter => chapter.isCompleted === true);
        displayCompletedChapters(chapters);
    });
}
const displayCompletedChapters = chapters => {
    console.log("Received", chapters);
}
getChapters();
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('This is Error');
});
//
fetch(URL)
.then(response => {
    console.log(response);
});
//
fetch(URL)
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
//
const checkNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
}
const showNewNotifications = count => {
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}
checkNewNotifications();
*/
const getChapters = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => {
        if(!response.ok) {
            throw new Error('API issues.')
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        displayCompletedChapters(completedChapters);
    })
    .catch(error => {
        console.error(error);
    });
}
const displayCompletedChapters = chapters => {
    console.log('Received', chapters);
}
getChapters();