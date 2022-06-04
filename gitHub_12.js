console.log(
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
);

const checkForNewNotifications = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    );
};
const result = checkForNewNotifications();
console.log(result);

fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
).then(response => {
    console.log(response);
});
fetch(URL).then(response => {
    console.log(response);
});
fetch(URL).then(response => {
    console.log(response);
});

const result = fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
).then(response => {
    return response.json();
});
console.log(result);

fetch(URL).then(response => {
    return response.json();
});

fetch(URL).then(response => {
    return response.json();
});

fetch(URL).then(response => {
    return response.json();
});

const double = x => x * 2;

const plus = (a, b) => a + b;
console.log(plus(2, 2));

fetch(URL).then(response => response.json());
fetch(URL).then(response => response.json());
fetch(URL).then(response => response.json());

const checkForNewNotifications = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    ).then(response => response.json());
};
console.log(checkForNewNotifications());

const checkForNewNotifications = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    ).then(response => response.json());
};

console.log(checkForNewNotifications());

fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const init = () => {
    console.log("A");
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log("B");
            console.log(data);
        });
    console.log("C");
};

init();

const checkForNewNotifications = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.count);
            console.log(data.message);
        });
};
checkForNewNotifications();

console.log("A");
const checkForNewNotifications = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log("B");
            console.log(data);
            console.log("E");
        });
};
checkForNewNotifications();
console.log("C");

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user.email);
            console.log(user.address.city);
        });
    });

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.title);
    });

const checkForNewNotifications = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showNewNotifications(data.count);
        });
};

function showNewNotifications(count) {
    console.log(
        `You have ${count} new notifications. Would you like to read them?`
    );
}

checkForNewNotifications();

const checkForNewNotifications = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showNewNotifications(data.count);
        });
};

function showNewNotifications(count) {
    console.log(
        `You have ${count} new messages. Would you like to read them my friend?`
    );
}

checkForNewNotifications();

const getTweetDetails = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data.author.details);
            const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
            showAuthorName(fullName);
        });
};
function showAuthorName(fullName) {
    console.log(fullName);
}

getTweetDetails();

const getChapters = () => {
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const completedChapters = data.filter(
                chapter => chapter.isCompleted
            );
            getCompletedChapters(completedChapters);
        });
};

const getCompletedChapters = chapters => {
    console.log("Received", chapters);
};

getChapters();
