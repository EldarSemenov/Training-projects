class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
} catch(error){};
//
class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content_Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try{
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
}catch(error){};
//
class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try{
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
}catch(error){};
//
class FetchWrapper {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try{
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
}catch(error){};
//
class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint){
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
    }
};
try{
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
    });
} catch(error){};
//
import FetchWrapper from "./export";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const checkForNewNotifications = () => {
    API.get("/notifications/new.json")
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    });
};
function showNewNotifications(count){
    console.log(`You have ${count} new notifications.
    Would you like to read them?`)
}
checkForNewNotifications();
//
import FetchWrapper from "./export.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const getChapters = () => {
    API.get("/chapters/all.json")
    .then(data => {
        console.log(data);
        const chapters = data.filter(chapter => chapter.isCompleted == true);
        displayCompletedChapters(chapters)
    })
}
function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
}
getChapters();
//
const API = new FetchWrapper("https://api.learnjavascript.online");
API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then(response => response.json());
    }
};
//EXPORT FILES//////////////////////////////////////////////////////////////
export default class NumericHelper {
    constructor(number){
        this.number = number;
    }
    isEven(){
        return this.number % 2 === 0;
    }
    isOdd(){
        return this.number % 2 === 1;
    }
}
//
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
}
//
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    } 
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json());
    }
};