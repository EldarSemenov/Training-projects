const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject(`Failed. That's the only thing I can do.`);
    });
};
alwaysFail()
    .then(() => {})
    .catch(data => {
        console.error(data);
    });

const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "Person Details") {
            reject("These Data that you input are inappropriate. Try again.");
        }
        setTimeout(() => {
            resolve({
                firstName: "Eldar",
                lastName: "Semenov",
                age: 38,
            });
        }, 2000);
    });
};
fakeFetch("Person Details")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fakeFetch("My Data")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person = JSON.parse(string);
console.log(person);
console.log(person.firstName);

const person = {
    firstName: "Eldar",
    lastName: "Semenov",
    age: 25,
};
const string = JSON.stringify(person);
console.log(string);

const willItRain = weatherAPIresponse => {
    const data = JSON.parse(weatherAPIresponse);
    return data.now.rainExpected;
};

console.log(
    willItRain(
        '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'
    )
);
console.log(
    willItRain(
        '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":false}}'
    )
);

const prepareStatus = (status, location) => {
    const userId = 23;
    const car = "Tesla Model Three";
    const data = {
        userId,
        car,
        status,
        location,
    };
    return JSON.stringify(data);
};
console.log(prepareStatus("My first post!", "My city is Dededo"));

const sendStringfiedAPI = (firstName, lastName) => {
    const carModel = "Tesla Model 3";
    const age = 39;
    const idNumber = 43048;
    const data = {
        carModel,
        age,
        idNumber,
        firstName,
        lastName,
        job: "Java Script Developer",
    };
    return JSON.stringify(data);
};

console.log(sendStringfiedAPI("Eldar", "Semenov"));

console.log(
    fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
);

fetch(URL).then(response => {
    connsole.log(response);
});

fetch(URL).then(response => {
    return response.josn();
});
const double = x => x * 2;

fetch(URL).then(response => response.json());

fetch(URL).then(response => response.json());

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
        console.log(data.count);
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
        });
};
checkForNewNotifications();

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL)
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

function showNewNotifications(count) {
    console.log(
        `You have ${count} new notifications. Would you like to read them?`
    );
}
function checkForNewNotifications() {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    )
        .then(response => response.json())
        .then(data => {
            showNewNotifications(data.count);
        });
}
checkForNewNotifications();

const getFullName = fullName => {
    console.log(fullName);
};

const getTweetDetails = () => {
    return fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json"
    )
        .then(response => response.json())
        .then(data => {
            console.log(data.author.details);
            const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
            getFullName(fullName);
        });
};
getTweetDetails();
