fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch(URL, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch(URL, {
    method: "PUT"
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch("https://example.com/api/tweets", {
    method: "PUT",
    body: JSON.stringify({
        tweet: "Youe name tweet here..."
    })
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch(URL, {
    method: "PUT",
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
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
        food: "Pizza"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data)
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
fetch("https://api.learnjavascript.online/demo/user.json", {
    method: "POST",
    body: JSON.stringify({
        firstName: "Jason",
        lastName: "Green"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
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
fetch(URL, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        key1: "value1",
        key2: "value2"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        value1: "key1",
        value2: "key2"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch(URL, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "Pizza"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch(URL, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "Pizza"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    return res.json()

})
.then(data => console.log(data))
.catch(error => console.log("ERROR"));
//
import {Helper} from "./helper.js";
new Helper();
//
import {settings, votingAge} from "./helper.js";
console.log(votingAge);
console.log(settings);
import {list} from "./helper.js";
console.log(list);
//import {plus()} from "./helper.js";
//console.log(plus(2, 1));
//
import User, { printName as printUserName, printAge} from "./helper";
const user = new User('Bob', 11);
console.log(user);
//printUserName(user)
printAge(user);
//
import {getWelcomeMessage, votingAge} from "./helper.js";

console.log(getWelcomeMessage());
console.log(`The voting age is ${votingAge}`);
//
import {Helpers} from "./helper.js"
const capitalizeName = name => {
    const helpers = new Helpers(name);
    return helpers.capitalize();
};
console.log(capitalizeName("aLeX"));
console.log(capitalizeName("chArLEy"));
//
import Helper from "./helper.js";
const helper = new Helper();
import StringHelper from "./helper.js";
const helper = new StringHelper();
//
import Helper from "./helper.js";
import {votingAge} from "./helper.js";
import Helper, {votingAge} from "./helper.js";