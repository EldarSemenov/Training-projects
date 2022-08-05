const completedChapters = chapters => {
    console.log("These are completed chapters :", chapters);
};

const getCompletedChapters = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const compChapters = data.filter(
                chapter => chapter.isCompleted === true
            );
            completedChapters(compChapters);
        });
};

getCompletedChapters();

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fetch(URL).then(response => {
    console.log(response);
});

fetch(
    "https://jsdemo-3f38-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
)
    .then(response => {
        if (!response.ok) {
            throw new Error("API isuue");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
)
    .then(response => {
        if (!response.ok) {
            throw new Error("You have issues with API!");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

function showNewNotifications(count) {
    console.log(
        `You have ${count} new notifications. Would you like to read them?`
    );
}
const checkForNewNotifications = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showNewNotifications(data.count);
        })
        .catch(error => {
            console.error(error);
        });
};

checkForNewNotifications();

function displayCompletedChapters(chapters) {
    console.log("Complted chapters:", chapters);
}

const getChapters = () => {
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
                chapter => chapter.isCompleted === true
            );
            displayCompletedChapters(completedChapters);
        })
        .catch(error => console.error(error));
};

getChapters();
