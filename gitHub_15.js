import Helper from "./index.js";
import StringHelper from "./index.js";
const helper = new Helper();
const helper = new StringHelper();

import NumericHelper from "./index.js";

const isEvenNumber = number => {
    return new NumericHelper(number).isEven();
};

console.log(isEvenNumber(2));
console.log(isEvenNumber(35));

fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json"
)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
);

API.get("/notifications/new/json").then(data => {
    console.log(data);
});

API.get("/chapters/all/json").then(data => {
    console.log(data);
});

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

const API = new FetchWrapper("https://api.learnjavascript.online");

API.put("/demo/grades/json", {
    grade: 18,
}).then(data => {
    console.log(data);
});

const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
);

API.get("/notifications/new.json").then(data => {
    console.log(data);
});

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        //todo
    }
}

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(response => response.json());
    }
}

class fetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return (
            this.baseURL + endpoint,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

class fetchWrapper {
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

class fetchWrapper {
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

try {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );

    API.get(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    ).then(data => {
        console.log(data);
    });
} catch (error) {}

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

try {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );

    API.get("/notifications/new.json").then(data => {
        console.log(data);
        console.log(getMessage(data.count));
    });
} catch (error) {}

const getMessage = count => {
    return `You have ${count} new messages. Would you like to read them?`;
};

import { FetchWrapper } from "./index.js";

const checkForNewNotifications = () => {
    const API = new FetchWrapper(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
    );

    API.get("/notifications/new.json").then(data => {
        console.log(data);
        console.log(showNewNotifications(data.count));
    });
};
const showNewNotifications = count => {
    return `You have ${count} new notifications. Would you llike to read them?`;
};

checkForNewNotifications();
