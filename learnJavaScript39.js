const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/new.json");
};
checkForNewNotifications();
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    return response.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    response.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    response.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    response.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(answer => {
    answer.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    response.json();
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    response.json();
});
//
const double = x => x * 2;
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => {
    return response.json();
});
//refactoring
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json());
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json());
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json());
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json());
//
const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/new.json")
    .then(response => response.json());
};
checkForNewNotifications();
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/notifications/new.json")
.then(response => response.json())
.then(data => {
    console.log(data.message);
});
//
const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayNewNotifications(data.count);
    });
};
function displayNewNotifications(count) {
}
checkForNewNotifications();
//
const willItRain = (city) => {
    fetch(`https://api.learnjavascript.online/demo.weather/${city}.json`)
    .then(response => response.json())
    .then(data => {
        showRainDrops(data.raining);
    });
};
function showRainDrops(is_raining){

}
willItRain("berlin");
//
const getChapters = () => {
    fetch(`https://api.learnjavascript.online/demo/chapter/all.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const completed = data.filter(chapter => chapter.is_completed);
        displayCompletedChapters(completed);
    });
};
function displayCompletedChapters(chapters){
}
getChapters();
//
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
//
const ages = [32, 33, 16, 40];
const checkAdult = (age) => age >= 18;
const myFunction = () => ages.filter(checkAdult);
console.log(myFunction());
//
const numbers = [10, 20, 30, 40, 50, 60, 100, 120, 1000, 29];
const action = numbers.filter(number => number >= 100);
console.log(action);
//
let students = [
    {
        id: 1,
        name: "Alex",
        class: "First Grade",
        age: 5
    },
    {
        id: 2,
        name: "Bill",
        class: "First Grade",
        age: 5
    },
    {
        id: 3,
        name: "Connor",
        class: "Second Grade",
        age: 6
    }
];
let firstGradeStudents = students.filter(student => student.class === "First Grade");
console.log(firstGradeStudents);
let findSudent = students.filter(student => student.id === 3);
console.log(findSudent);
//
let purchases = [2.50, 2.70, 10.50, 12.30, 9.60, 2.30, 3.40];
let big_purchases = purchases.filter(purchase => purchase > 10);
console.log(big_purchases);
//
let cars = [
    {
        model: "Ford",
        price: 23000
    },
    {
        model: "Tesla",
        price: 39000
    },
    {
        model: "Toyota",
        price: 33000
    },
    {
        model: "Chevrolet",
        price: 50000
    },
    {
        model: "Audi",
        price: 90000
    },
    {
        model: "Mitsubishi",
        price: 12.000
    }
];
let costly_car = cars.filter(car => car.price >= 50000);
console.log(costly_car);
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        food: "Pizza"
    })
}).then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json",{
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
    console.log(data);
});
//
fetch(url,{
    method: "POST"
})
//
fetch(url, {
    method: "POST"
})
//
fetch(url, {
    method: "POST"
})
//
fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"}
})
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
    console.log(data);
})
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {
        "Content_Type": "application/json"
    },
    body: JSON.stringify({
        food: "Pizza"
    })
})
.then(res => res.json())
.then(data => {
    console.log(data)
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
    headers: {"Content-Type": "appliocation/json"},
    body: JSON.stringify({
        food: "Pizza"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data)
});
//
fetch("https://api.learnjavascript.online/demo/food.json", {
    method: "POST",
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
const logFood = (food) => {
    fetch("https://api.learnjavascript.online/demo/food.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            food: "Peach"
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}
logFood("Pizza");
logFood("Peach");
//
fetch("https://api.learnjavascript.online/demo/food.json")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
//
const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/fail.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => showError(err));
}
function showError(error){
}
checkForNewNotifications();