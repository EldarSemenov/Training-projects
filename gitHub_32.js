fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        grade: 18,
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}

const getNotitfications = count => {
    return `You have ${count} new notifications. Would you like to read them?`;
};
const getMessage = message => {
    return message;
};

try {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );
    API.get("/notifications/new.json").then(data => {
        console.log(data);
        console.log(getNotitfications(data.count));
        console.log(getMessage(data.message));
    });
} catch (error) {
    console.error(error);
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}

function showAuthorName(fullName) {
    console.log(fullName);
}

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/"
);

const getTweet = () => {
    API.get("tweet/1080777336298049537.json").then(data => {
        console.log(data.author.details);

        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        showAuthorName(fullName);
    });
};

getTweet();
