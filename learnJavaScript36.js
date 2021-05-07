const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
wait(2000).then(() => {
    console.log("One - Two");
});
//
const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
wait(3000).then(() => {
    console.log("One");
});
wait(4000).then(() => {
    console.log("Two");
});
wait(5000).then(() => {
    console.log("Three");
});
//
let promise = new Promise((resolve, reject) => {
    let a = 100 + 900;
    if(a === 1000) {
        resolve("Success")
    } else {
        reject("Failed")
    }
});
promise.then((message) => {
    console.log('The result of the test is ' + message)
}).catch((message) => {
    console.log('The result of the test is ' + message)
})
//
const promise = new Promise((positive, negative) => {
    let a = 1000 % 3;
    if (a !== 0) {
        positive('Correct')
    } else {
        negative('Error')
    }
});
promise.then((information) => {
    console.log('The answer is ' + information);
}).catch((information) => {
    console.log("It's an " + information);
});
//
let promise = new Promise((success, failure) => {
    let x = 500 + 500;
    let s = x % 5;
    if (s !== 0) {
        success("Yes")
    } else {
        failure("No")
    }
});
promise.then((answer) => {
    console.log("The answer is " + answer);
}).catch((error) => {
    console.log("The answer is " + error);
});
//
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.race([
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then((message)=> {
    console.log(message)
})
//
const canVote = age => {
    return new Promise((resolve) => {
        resolve(age >= 18);
    });
};
canVote(20).then(result => {
    console.log(result);
});
//
const votingAge = age => {
    return new Promise((resolve) => {
        resolve(age >= 18);
    });
};
votingAge(17).then(message => {
    console.log(message);
});
//
const canVote = (age) => {
    return new Promise((resolve) => {
        resolve(age >= 21);
    });
};
canVote(24).then(information => {
    console.log(information);
});
//
const isYoung = age => {
    return new Promise((resolve) => {
        resolve(age <= 20);
    });
};
isYoung(21).then(message => {
    console.log(message);
});
//
const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
}
console.log("C");
wait(2000).then(() => {
    console.log("B")
});
console.log("A");
//
const getWeatherInfo = () => {
    const weatherInfo = {
        rainExpected: false,
        degree: 18
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(weatherInfo);
        }, 3000);
    });
};
getWeatherInfo().then(response => {
    console.log(response)
});
//
const getStudentInfo = () => {
    const studentData = {
        first_name: "Eldar",
        last_name: "Neumann",
        age: 39,
        id_number: 93424
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(studentData.age + 10);
        }, 5000);
    });
};
getStudentInfo().then(information => {
    console.log(information);
});
//
const getWorkerAge = () => {
    const worker = {
        first_name: "Jason",
        last_name: "Riverson",
        age: 46
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(worker.age)
        }, 6000);
    });
};
getWorkerAge().then(message => {
    console.log(message);
});
//
const getPerLastName = () => {
    const per = {
        first_name: "Jessica",
        parents_last_name: "Western"
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(per.parents_last_name)
        }, 7000)
    });
};
getPerLastName().then(information => {
    console.log(information);
});
//
const getTrueOrFalse = new Promise((resolve, failure) => {
    const a = 1000 - 500 / 2;
    const x = a % 6;
    if(x === 0 ){
        resolve("True")
    } else {
        failure("False")
    }
});
getTrueOrFalse.then(info => {
    console.log(info);
}).catch(info => {
    console.log(info);
});