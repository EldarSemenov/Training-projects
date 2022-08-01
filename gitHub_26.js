console.log("a");
wait(1000).then(() => {
    console.log("b");
});
console.log("c");

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
wait(2000).then(() => {
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
wait(2000).then(() => {
    console.log("Waited for 2 seconds");
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
        console.log("Waited 1 second after start");
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
const result = wait(1000);
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
    console.log("Waited 1 second");
    console.log(waitPromise);
});
console.log(waitPromise);

const getWeatherDescription = city => {
    return new Promise((resolve, reject) => {
        if (!city || typeof city !== "string") {
            reject("City must be a string");
        }
        if (!["amsterdam", "tokyo"].includes(city.toLowerCase())) {
            reject("City must be Amsterdan or Tokyo");
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
logWeatherDescription("Tokyo");
logWeatherDescription("New York");
logWeatherDescription(123);
