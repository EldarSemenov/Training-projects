fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "POST"
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://example.com/api", {
    method: "POST",
    body: JSON.stringify({tweet: "Your tweet here..."})
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch("https://example.com/api", {
    method: "POST",
    body: JSON.stringify({
        tweet: "Your tweet here..."
    })
})
.then(response => response.json())
.then(data => {
    console.loga(data);
});
//
fetch("https://example.com/api", {
    method: 'POST',
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "Oats"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json")
.then(response => response.json())
.then(data => {
    console.log(data);

})
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: 'Apples'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: 'meat'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "I conssumed oranges"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "pears"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/grades.json", {
    method: "PUT",
    body: JSON.stringify({
        grade: grade
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const updateUserProfile = () => {
    fetch("https://api.learnjavascript.online/demo/user.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: ({
            firstName: firstName,
            lastName: lastName
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
updateUserProfile();
//
fetch(URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2' 
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
export class Helper {
    capitalize(word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}