const button = document.querySelector("#toggle-theme");
button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

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
        tweet: "Your tweet here...",
    }),
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
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

const saveGrade = grade => {
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

console.log(saveGrade(12));

const saveGrade = grade => {
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

console.log(saveGrade(15));

const updateUserProfile = (firstName, lastName, id) => {
    fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
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
console.log(updateUserProfile("Eldar", "Neumann", 2378274234));

fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

const updateUserProfile = (firstName, lastName) => {
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
console.log(updateUserProfile("Eldar", "Semenov"));
