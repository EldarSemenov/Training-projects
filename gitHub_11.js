console.log("A");
wait(1000).then(() => {
    console.log("B");
});
console.log("C");

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

console.log("A");
wait(1000).then(() => {
    console.log("B");
});
console.log("C");

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

console.log("A");

wait(1000).then(() => {
    console.log("C");
});

console.log("B");

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

console.log("A");

wait(1000).then(() => {
    console.log("B");
});

wait(2000).then(() => {
    console.log("C");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
wait(1000).then(() => {
    console.log("Waited 1 second");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

const init = () => {
    console.log("Program started");
    wait(1000).then(() => {
        console.log("Wiated 1 second");
    });
    wait(2000).then(() => {
        console.log("Program is finished");
    });
};

init();

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
console.log(wait(1000));

wait(2000).then(() => {
    console.log("Fulfiled");
});

const result = wait(3000);
console.log(result);
result.then(() => {
    console.log(result);
});
console.log(result);

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

const waitPromise = wait(1000);
console.log(waitPromise);

waitPromise.then(() => {
    console.log("waited 1 second");
    console.log(waitPromise);
});
console.log(waitPromise);

const waitForCompleteClick = () => {
    return new Promise(resolve => {
        document
            .querySelector("#complete-btn")
            .addEventListener("click", () => {
                resolve();
            });
    });
};
waitForCompleteClick().then(() => {
    console.log("Complete clicked");
});
console.log("Complete clicked");

const getWeatherDescription = city => {
    return new Promise((resolve, reject) => {
        if (!city || typeof city !== "string") {
            reject("City must be a string");
        }
        if (!["amsterdam", "tokyo"].includes(city.toLowerCase())) {
            reject("City must be Amsterdam or Tokyo");
        }
        setTimeout(() => {
            if (city.toLowerCase() === "amsterdam") {
                resolve("Cloudy");
            }
            if (city.toLowerCase() === "tokyo") {
                resolve("Sunny");
            }
        }, 1000);
    });
};

const logWeatherDescription = cityName => {
    getWeatherDescription(cityName).then(data => {
        console.log(data);
    });
};

logWeatherDescription("Amsterdam");
logWeatherDescription("tokyo");

const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "flight-status") {
            reject("Invalid endpoint. Only flight-status is supported.");
        }

        const min = 1;
        const max = 2;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;

        const dataToResolve = {
            departed: false,
            delayed: true,
        };
        setTimeout(() => {
            resolve(dataToResolve);
        }, rand * 1000);
    });
};

const logFlightStatus = () => {
    fakeFetch("flight-status").then(data => {
        console.log(data);
    });
};

logFlightStatus();

getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done fetching weather");
    });

getWeatherIn("Amsterdam")
    .then(data => {
        throw new Error("Stopped.");
        console.log(data);
        console.log("Done fetching weather");
    })
    .catch(error => {
        console.error(error);
        console.log("Done fetching weather");
    });

startLoader();
getWeatherIn("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        stopLoader();
    });

const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
waitOneSecond().then(() => {
    console.log("Waited one second");
});

const getInOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};

getInOneSecond().then(() => {
    console.log("Waited One Second");
});

const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
waitOneSecond().then(() => {
    console.log("One second is waited");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
wait(2000).then(() => {
    console.log("Waiting is done. 2 seconds");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
};
wait(5000).then(data => {
    console.log(data);
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(milliseconds / 1000);
        }, milliseconds);
    });
};
wait(5000).then(data => {
    console.log(data);
});

const fakseFetch = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = {
                decision: "positive",
                citizenship: "USA",
            };
            resolve(data);
        }, 2000);
    });
};
fakseFetch().then(data => {
    console.log(data);
});

const fakeFunction = () => {
    return new Promise((resolve, reject) => {
        resolve();
        reject();
    });
};

const always = () => {
    return new Promise((resolve, reject) => {
        reject("Failed. That's the only thing I do");
    });
};
always()
    .then(() => {})
    .catch(data => {
        console.error(data);
    });

const rejectedFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("This is one thing I can do for you!");
        }, 3000);
    });
};
rejectedFunction()
    .then(() => {})
    .catch(error => {
        console.error(error);
    });

const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "Flight-status") {
                resolve({
                    departure: false,
                    delay: true,
                });
            } else {
                reject("This information is not supported");
            }
        }, 2000);
    });
};

fakeFetch("Flight-status")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

fakeFetch("User-details")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const failedAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(
                `You asked me to fail after ${
                    milliseconds / 1000
                } seconds and I did so!`
            );
        }, milliseconds);
    });
};

failedAfter(3000).catch(error => {
    console.error(error);
});

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const user = {
    firstName: "Sam",
    lastName: "Green",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(user.getFullName());

const string = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person = JSON.parse(string);
console.log(person);
console.log(person.firstName);

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);

const person = {
    firstName: "Eldar",
    lastName: "Semenov",
    age: 37,
};

const string = JSON.stringify(person);
console.log(string);

const willItRain = weatherApiResponse => {
    const result = JSON.parse(weatherApiResponse);
    return result.now.rainExpected;
};

// Sample usage - do not modify
console.log(
    willItRain(
        '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'
    )
); // true
console.log(
    willItRain(
        '{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'
    )
); // false

const weatherAPI = API => {
    const data = JSON.parse(API);
    return data.now.rainExpected;
};
console.log(
    weatherAPI(
        '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'
    )
); // true
console.log(
    weatherAPI(
        '{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'
    )
); // false

const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location,
    };
    return JSON.stringify(data);
};
console.log(prepareStatus("This is my first post!", "Salt Lake City"));
console.log(prepareStatus("Hello World!", "Eagle Mountain"));

const getPersonalData = (status, location, firstName, lastName, age) => {
    const data = {
        status,
        location,
        firstName,
        lastName,
        age,
    };
    return JSON.stringify(data);
};
console.log(
    getPersonalData("Student", "Salt Lake City", "Eldar", "Semenov", 38)
);
