const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}

const waitPromise = wait(1000);
console.log(waitPromise);

waitPromise.then(() => {
    console.log('Waited one second!');
    console.log(waitPromise);
});
console.log(waitPromise);
//
const logWeatherDescription = cityName => {
    getWeatherDescription(cityName).then(data => {
        console.log(data);
    });
}
//
const logFlightStatus = () => {
    fakeFetch('flight-status').then(data => {
        console.log(data);
    });
}
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
getWeatherIn('Boston')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
const logUserdetails = () => {
    fakeFetch('user-details').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });
}
//
waitForCompleteClick().then(() => {
    console.log('Complete clicked');
}).catch(() => {
    console.error('Fail clicked');
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
    console.log('Done fetching weather');
})
.catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    console.log('Done fetching weather.')
});
//
getWeatherIn('Amsterdam')
.then(data => {
    throw new Error('Stopped.');
    console.log(data);
    console.log('Done fetching weather');
})
.catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
startLoader();

getWeatherIn("Amsterdam")
.then(data => {
    stopLoader();
    console.log(data);
})
.catch(error => {
    stopLoader();
    console.error(error);
});
//
startLoader();
getWeatherIn('New York')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    stopLoader();
});
//
const logWeatherDescription  = cityName => {
    startLoader();
    getWeatherDescription(cityName)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        stopLoader();
    });
}
//
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
waitOneSecond().then(() => {
    console.log('Waited one second');
});
//
const threeSecondsFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve();
        }, 1000);
    });
}
threeSecondsFunction().then(() => {
    console.log('I have been waiting for you for three seconds');
});
//
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
wait(3000).then(() => {
    console.log('Waited for 3 seconds');
});
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seconds = milliseconds - 1000;
            resolve(seconds);
        }, milliseconds);
    });
}
wait(2000).then(seconds => {
    console.log(seconds);
});
//
const SecondsPlusNumber = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = milliseconds + 12;
            resolve(result);
        }, milliseconds);
    });
}
SecondsPlusNumber(2000).then((result) => {
    console.log(result);
});
//
const millisecondsMinus = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const action = `You won ${milliseconds - 1} (thouthands) dollars!`;
            resolve(action);
        }, milliseconds);
    });
}
millisecondsMinus(1200).then((action) => {
    console.log(action);
});
//
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve({
               name: 'Tesla model 3',
               price: 45000
           });
        }, 2000);
    });
}
fakeFetch().then((data) => {
    console.log(data);
});
//
const getFetchTeslaModelThree = milliseconds => {
    return new Promise((res) => {
        setTimeout(() => {
           res({model: 'Tesla Model 3', price: 44000});
        }, milliseconds);
    });
}
getFetchTeslaModelThree(3000).then((data) => {
    console.log(data);
});