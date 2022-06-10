fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL, {
    method: "POST",
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("https://example.com/api/tweets", {
    method: "POST",
    body: JSON.stringify({
        tweet: "Your tweet here...",
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch("https://example.com/api/tweets", {
    method: "POST",
    body: JSON.stringify({
        tweet: "Your tweet goes here...",
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("This is an error");
    });

fetch(URL, {
    method: "POST",
    body: JSON.stringify({
        key1: "value1",
        key2: "value2",
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const saveGrade = () => {
    fetch("https://api.learnjavascript.online/demo/grades.json", {
        method: "PUT",
        body: JSON.stringify({
            grade: grade,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
};
saveGrade();

const updateUserProfile = (firstName, lastName) => {
    fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
};
updateUserProfile("Eldar", "Semenov");

const updateUser = (firstName, lastName, id) => {
    fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            id: id,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
};
updateUser("Eldar", "Semenov", 82437824);

const updateUserName = (firstName, lastName) => {
    fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
};
updateUserName("Eldar", "Semenov");

class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}

export class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}
export const votingAge = 18;
export const settings = {
    theme: "light",
    admin: false,
};

import { getName } from "./index.js";
import { settings } from "./index.js";
import { string } from "./index.js";
console.log(getName("Eldar", "Semenov"));
console.log(settings);
console.log(string);

import { votingAge } from "./index.js";
import { getWelcomeMessage } from "./index.js";

console.log(votingAge);

console.log(getWelcomeMessage());

import { Helpers } from "./index.js";

const capitaliseName = name => {
    return new Helpers(name).capitalize();
};

console.log(capitaliseName("eLdAr"));
console.log(capitaliseName("semenov"));
console.log(capitaliseName("ksdksd"));

const getUpperCasedName = name => {
    return new Helpers(name).upperCase();
};
console.log(getUpperCasedName("eldar"));
console.log(getUpperCasedName("semenov"));

const getLowerCasedName = name => {
    const helper = new Helpers(name);
    return helper.lowerCase();
};

console.log(getLowerCasedName("KJSFDKLSJDF"));
