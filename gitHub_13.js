fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("This is an error");
    });

fetch(URL).then(response => {
    console.log(response);
});

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("API issue");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const showNewNotificatins = count => {
    console.log(`You have ${count} new messages. Would you like to read them?`);
};

const checkNewNotifications = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            showNewNotificatins(data.count);
        })
        .catch(error => console.error(error));
};

checkNewNotifications();

function showCompletedChapters(chapters) {
    console.log("Received", chapters);
}

const getCompletedChapters = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
    )
        .then(response => {
            if (!response.ok) {
                throw new Error("API issues.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const completedChapters = data.filter(
                chapter => chapter.isCompleted
            );
            showCompletedChapters(completedChapters);
        })
        .catch(error => console.error(error));
};
getCompletedChapters();

//EXERCISE ONE MORE TIME
const showCompletedChapters = chapters => {
    console.log("This is completed chapters:", chapters);
};

const getCompletedChapters = () => {
    fetch(
        `https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error("<API problems!>");
            }
            return response.json();
        })
        .then(data => {
            const completedChapters = data.filter(
                chapter => chapter.isCompleted
            );
            showCompletedChapters(completedChapters);
        })
        .catch(error => console.error(error));
};

getCompletedChapters();
