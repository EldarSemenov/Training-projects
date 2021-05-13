const checkForNewNotifications = () => {
    fetch('https://api.learnjavascript.online/demo/notifications/new.json');
};
checkForNewNotifications();
//
fetch('https://api.learnjavascript.online/demo/notifications/new.json')
.then(response => {
    return response.json();
});
//
fetch('https://api.learnjavascript.online/demo/notifications/new.json')
.then(response => response.json());
//
const checkForNewNotifications = () => {
    fetch('https://api.learnjavascript.online/demo/notifications/new.json')
    .then(response => response());
}; checkForNewNotifications();
//
fetch('https://api.learnjavascript.online/demo/notifications/new.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const checkForNewNotifications = () => {
    fetch('https://api.learnjavascript.online/demo/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayNewNotifications(data.count);
    });
};
function displayNewNotifications(count){
}
checkForNewNotifications();
//
const willItRain = (city) => {
    fetch(`https://api.learnjavascript.online/demo/weather/${city}.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data.raining);
    })
};
function showRainDrops(is_raining){
}
willItRain("berlin");
//
const getChapters = () => {
    fetch('https://api.learnjavascript.online/demo/chapters/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completed = data.is_completed(chapter => 
            chapter.is_completed);
            displayCompletedChapters(completed);
    });
};
function displayCompletedChapters(chapters){
}
getChapters();
//
const getChapters = () => {
    fetch('https://api.learnjavascript.online/demo/chapters/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completed = data.filter(chapter => chapter.is_completed);
        displayCompletedChapters(completed);
    });
};
displayCompletedChapters = (completed) => {
} 
getChapters();
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        food: "Jem"
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
        food: "Plov"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
const logFood = (food) => {
    fetch("https://api.learnjavascript.online/demo/food.json",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            food: food
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
};
logFood("Pizza");
logFood("Peach");
//
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
});
//
const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/fail.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        showError(err);
    });
};
function showError(err) {
}
checkForNewNotifications();
//
class Helper{
    capitalize(word){
        return word[0].toUpperCase() +
        word.substring(1).toLowerCase();
    }
};
new Helper();
//
export class Helper{
    capitalize(word){
        return word[0].toUpperCase() + 
        word.substring(1).toLowerCase();
    }
};
import {Helper} from "./helper.js";
new Helper();
//
const capitalize = word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const double = x => x * 2;
export {capitalize, double};
import {double} from "learnJavaScript41";