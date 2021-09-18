setTimeout(() => {
    console.log("Hi!")
}, 250);
setTimeout(() => {
    console.log('...');
}, 500);
setTimeout(() => {
    console.log('One second has elapsed');
}, 1000);
setTimeout(() => {
    console.log('Two seconds has elapsed.');
}, 2000);
setTimeout(() => {
    console.log('Three seconds has elapsed.');
}, 3000);
setTimeout(() => {
    console.log('Hello World! Delayed');
}, 4000);
//
const delayedwelcome = name => {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, 500);
}
console.log(delayedwelcome('Tommy!'));
console.log(delayedwelcome("Dennis!"));
console.log(delayedwelcome('Jason!'));
console.log(delayedwelcome("El!"));
console.log(delayedwelcome('John!'));
//
console.log('a');
setTimeout(() => {
    console.log('b')
}, 1000);
console.log('c');
//
setTimeout(() => {
    console.log(1);
}, 250);
setTimeout(() => {
    console.log(2);
}, 300);
setTimeout(() => {
    console.log(3);
}, 400);
setTimeout(() => {
    console.log(4);
}, 500);
setTimeout(() => {
    console.log(5);
}, 600);
setTimeout(() => {
    console.log(6);
}, 700);
setTimeout(() => {
    console.log(7);
}, 800);
setTimeout(() => {
    console.log(8);
}, 900);
setTimeout(() => {
    console.log(9);
}, 1000);
setTimeout(() => {
    console.log(10);
}, 1100);
//
welcomeUser('Sam', () => {
    console.log('Done welcoming user');
});
//
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback();
    }, 1000);
}
//
const sayHello = name => {
    welcomeUser(name, () => {
        console.log('Done!');
    });
}
sayHello("Sam");
//
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}!`);
        if(callback) {
            callback();
        }
    }, 1000);
}
const sayHello = name => {
    welcomeUser(name, () => {
        console.log('Done!');
    });
}
sayHello('Sam');
//
const temperatures = [10, 5, 3];
sumTemperatures(temperatures, value => {
    console.log(value);
});
//
const temperatures = [10, 10, 10];
const sumTemperatures = (temperatures, callback) => {
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => total + current, 0); 
        callback(sum); 
    }, 1000);
}
//
sumTemperatures(temperatures, value => {
    console.log(value);
}, reason => {
    console.error(reason);
});
//
const temperatures = [10, 3, 5];
sumTemperatures(temperatures).then(value => {
    console.log(value);
});
//
sumTemperatures(temperatures)
.then(value => {
    console.log(value);
})
.catch(reason => {
    console.error(reason);
});
//
console.log('A');
wait(1000).then(() => {
    console.log('B');
});
console.log('C');
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
wait(1000).then(() => {
    console.log('waited 1 second!');
});
//
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});
promise1.then((value) => {
    console.log(value);
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
const init = () => {
    console.log('Program started');
    wait(100).then((value) => {
        console.log('Waited 1 second');
    });
}
init();
//
const result = wait(1000);
console.log(result);
result.then(() => {
    console.log(result);
});
console.log(result);
//
const temperatures = [10, 5, 3];
sumTemperatures(temperatures, value => {
    console.log(value);
});
sumTemperatures(temperatures).then((value) => {
    console.log(value);
});
sumTemperatures(temperatures).then((data) => {
    console.log(data);
});
const sumPromise = sumTemperatures(temperatures);
console.log(temperatures);
sumPromise.then(data => {
    console.log(sumPromise);
    console.log(data);
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
const promise1 = new Promise((resolve, reject) => {
    throw 'Up-ahead!';
});
promise1.catch((error) => {
    console.error(error);
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
    console.log('Done fetching weather');
}).catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log('Done fetching weather');
});
//
getWeatherIn('Amsterdam')
.then(data => {
    throw new Error('Stopped');
    console.log(data);
    console.log('Done fetching weather');
}).catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
startLoader();
getWeatherIn('Amsterdam')
.then(data => {
    stopLoader();
    console.log(data);
}).catch(error => {
    stopLoader();
    console.error(error);
});
//
startLoader();
getWeather('Amsterdam')
.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
}).finally(() => {
    stopLoader();
});
//
const checkMail = () => {
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5) {
            resolve('Mail has arrived');
        }else {
            reject(new Error('Failed to arrive'));
        }
    });
}
checkMail().then((mail => {
    console.log(mail);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log('Experiment completed');
}))
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
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}
waitOneSecond().then(() => {
    console.log('Done waiting!');
});
//
const waitFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
waitFunction().then(() => {
    console.log('Awaited already');
});
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
wait(3000).then(() => {
    console.log(`I waited 3 second!`);
});
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve();
        }, milliseconds);
    });
}
wait(2000).then(data => {
    console.log(data);
});
wait(2000).then(seconds => {
    console.log(seconds);
});
//
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve({model: 'Tesla model 3', price: 44000})
        }, 500);
    })
}
fakeFetch().then(data => {
    console.log(data);
});
//
const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject(`Failed. That's the only thing I do.`)
    });
}
alwaysFail().then(() => {

}).catch(data => {
    console.error(data);
});
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== `flight status`) {
            reject(`endpoint not supported`)
        }
        setTimeout(() => {
            resolve({
                departed: false,
                delayed: true
            });
        }, 1000);
    });
}
fakeFetch(`flight status`).then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

fakeFetch(`user-details`).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
//
const message = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== `Message from Tesla`){
            reject(`The Error happened! We are sorry!`);
        }
        setTimeout(() => {
           resolve(`Your Tesla Model 3 has dilivered to your home!`);
        }, 3000);
    });
}
message(`Message from Tesla`).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});

message(`Tesla`).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
//
const detailsMessage = message => {
    return new Promise((resolve, reject) => {
        if(message !== `Tesla 3 Data.`) {
            reject(`ERROR`);
        }
        setTimeout(() => {
            resolve({
                model_data: {
                    year: 2022,
                    model: `Tesla Model 3`,
                    price: 44000,
                    owner_name: `Eldar Semenov`
                } 
            });
        }, 1000);
    });
}
detailsMessage(`message`).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});

detailsMessage(`Tesla 3 Data.`).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
//
const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You asked me to fail after ${milliseconds}ms and I did!`);
        }, milliseconds);
    });
}
failAfter(1500).catch(error => {
    console.error(error);
});