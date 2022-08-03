getWeather("Amsterdam")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "flight-status") {
            reject("Invalid endpoint. Only flight-status is supported.");
        }
        const dataToResolve = {
            departed: false,
            delayed: true,
        };
        setTimeout(() => {
            resolve(dataToResolve);
        }, 4000);
    });
};

const logUserDetails = () => {
    fakeFetch("flight-status")
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
};

logUserDetails();

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
        throw new Error("Stopped");
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
        stopLoader();
        console.log(data);
    })
    .catch(error => {
        stopLoader();
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

waitOneSecond.then(() => {
    console.log("Waited one second");
});

const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
waitOneSecond().then(() => {
    console.log("Waited One Second!");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
wait(1000).then(() => {
    console.log("Done waiting!");
});

const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
};
wait(3000).then(data => {
    console.log(`I was waiting ${data} seconds for you!`);
});

const fakeFetch = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = {
                departed: false,
                delayed: true,
            };
            resolve(data);
        }, 1000);
    });
};

fakeFetch().then(data => {
    console.log(`This is my ${data.delayed}`);
});
