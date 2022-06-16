import { FetchWrapper } from "./helper.js";

const getNewNotifications = () => {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );

    API.get("/notifications/new.json").then(data => {
        console.log(data);
        console.log(showNewNotification(data.count));
    });
};

function showNewNotification(count) {
    return `You have ${count} new messages! Would you like to read them?`;
}

getNewNotifications();

import { FetchWrapper } from "./helper.js";

const getNotifications = () => {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );

    API.get("/notifications/new.json").then(data => {
        console.log(data);
        console.log(showNewNotification(data.count));
        console.log(getMessage(data.message));
    });
};

const showNewNotification = count => {
    return `You have ${count} new messages. Would you like to read them?`;
};

const getMessage = message => {
    return message;
};

getNotifications();

import { FetchWrapper } from "./helper.js";

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
);

const getWeatherCity = city => {
    API.get(`/weatherstack/${city}.json`).then(data => {
        console.log(data);
        showTemperature(data.current.temperature);
    });
};

const showTemperature = temperature => {
    return `It's ${temperature} degrees celsius`;
};

getWeatherCity();

import { FetchWrapper } from "./helper.js";

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/"
);

const getTweetDetails = () => {
    API.get("tweet/1080777336298049537.json").then(data => {
        console.log(data);
        const fullName = `${data.author.details.firstName} ${data.author.details.lastName}`;
        console.log(showAuthorName(fullName));
        console.log(getLink(data.link));
    });
};

const showAuthorName = fullName => {
    return fullName;
};

const getLink = link => {
    return link;
};

getTweetDetails();

import { FetchWrapper } from "./helper.js";

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/"
);

const getChapters = () => {
    API.get("chapters/all.json").then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => chapter.isCompleted);
        console.log(showCompletedChapters(completedChapters));

        const notCompletedChapters = data.filter(
            chapter => chapter.isCompleted === false
        );
        console.log(showNotCompletedChapters(notCompletedChapters));

        const unfinishedTitles = data.filter(
            chapter => chapter.isCompleted === false
        );

        const unf = unfinishedTitles.title;
        console.log(showUnfinishedTitles(unf));
    });
};

const showCompletedChapters = chapters => {
    return "Rceived", chapters;
};

const showNotCompletedChapters = chapters => {
    return "Not Received", chapters;
};

const showUnfinishedTitles = titles => {
    return titles;
};

getChapters();

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
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
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}

try {
    const API = new FetchWrapper("https://api.learnjavascript.online");

    API.put("/demo/grades.json", {
        grade: 18,
    }).then(data => {
        console.log(data);
    });
} catch (error) {}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }
    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }
    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
}
