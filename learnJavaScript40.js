setTimeout(() => {
    console.log("That was delayed for 3 seconds")
}, 3000);
//
const greetInTwoSeconds = () => {
    setTimeout(() => {
        console.log("Hello World!")
    }, 2000);
};
greetInTwoSeconds();
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay);
    });
};
wait(2000).then(() => {
    console.log("This will be delayed 2 seconds!")
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
wait(2000).then(() => {
    console.log("This gets delayed 2 seconds");
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
const delayGreeting = () => {
    wait(1000).then(() => {
        console.log("This is delayed");
    });
};
delayGreeting();
//
const canVote = age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
};
canVote(20).then(result => {
    console.log(result);
});
canVote(15).then(result => {
    console.log(result);
});
//
const canVote = age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
};
canVote(22).then(information => {
    setTimeout(() => {
        console.log(information);
    }, 3000)
});
canVote(12).then(info => {
    setTimeout(() => {
        console.log(info);
    }, 4000);
});
//
const canVote = age => {
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve("You can vote!");
        }
        else{
            reject("You can not vote.");
        }
    });
};
canVote(21).then((information) => {
    console.log(resolve(information));
}).catch((information) => {
    console.log(reject(information));
});
//
let p = new Promise((resolve, reject) => {
    let a = 100 % 3;
    if(a !== 0) {
        resolve('Success')
    } else {
        reject('Failed')
    }
});
p.then((message) => {
    console.log('This is ' + message);
}).catch((message) => {
    console.log('This is ' + message);
});
//
let p = Promise.resolve([1, 2, 3]);
p.then((v) => {
   console.log(v[0]);
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
console.log("A");
wait(2000).then(() => {
    console.log("B")
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
}
getWeatherInfo().then(information => {
    console.log(information);
});
//
const getStudentData = () => {
    student = {
        first_name: "Eldar",
        last_name: "Neumann",
        age: 36,
        id_number: 937482349
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(student.id_number);
        }, 2000)
    });
};
getStudentData().then((information) => {
    console.log(information);
});
//
const wait = () => {
    return new Promise(resolve => {
        invalidFunction();
    });
}
wait()
.then(() => {
    console.log("Wait was successful");
})
.catch(() => {
    console.log("Something went wrong");
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay)
    });
};
const delayGreeting = () => {
    wait(1000).then(() => {
        console.log("This is delayed");
    }).catch((err) => {
        console.log(err)
    });
};
delayGreeting();