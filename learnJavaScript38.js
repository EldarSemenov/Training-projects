const canVote = age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
};
canVote(20).then(information => {
    console.log(information);
});
canVote(17).then(result => {
    console.log(result);
});
//
const ableToVote = (age) => {
    return new Promise(resolve => {
        resolve(age >= 17);
    });
};
ableToVote(15).then(result => {
    console.log(result);
});
ableToVote(19).then(info => {
    console.log(info);
});
//
const canVote = age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
};
canVote(18).then(result => {
    console.log(result);
});
canVote(12).then(result => {
    console.log(result);
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay);
    });
};
console.log("A");
wait(2000).then(() => {
    console.log("B");
});
console.log("C");
//
const getWeatherInfo = () => {
    const weatherInfo = {
        rainExpected: false,
        degree: 18
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(weatherInfo);
        }, 2000);
    });
};
getWeatherInfo().then(information => {
    console.log(information);
});
//
const getStudentInfo = () => {
    student1 = {
        first_name: "Eldar",
        last_name: "Neumann",
        age: 41,
        id_number: 29347
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(student1);
        }, 3000);
    });
};
getStudentInfo().then((info) => {
    console.log(info);
});
//
const wait = () => {
    return new Promise(resolve => {
        invalidFunction();
    });
};
wait().then(() => {
    console.log("Wait was successful");
}).catch(() => {
    console.log("Something went wrong");
});
//
const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
});
promise1.catch((err) => {
    console.log(err);
});
//
const wait = (delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
const delayGreeting = () => {
    wait(1000).then(() => {
        console.log('This is delayed');
    }).catch(error => {
        console.log(error);
    });
};
delayGreeting();
//FETCH
const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/new.json");
};
checkForNewNotifications();
//
fetch(URL).then(response => {
    return response.json();
});
//
fetch(URL).then(answer => {
    return answer.json();
});
//
fetch(URL).then(response => {
    return response();
});
//
const double = x => {
    return x * 2;
};
//
const double = x => x * 2;
//
fetch(URL).then(response => {
    return response.json();
});
fetch(URL).then(response => response.json());