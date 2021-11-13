const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
console.log('A');
wait(2000).then(() => {
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
wait(2000).then(() => {
    console.log('waited 2 seconds');
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
    console.log('Program launched.');
    wait(4000).then(() => {
        console.log('Will be the last.');
    });
    console.log('This will be the second.');
}
init();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
const waitPromise = wait(2000);
console.log(waitPromise);

waitPromise.then(() => {
    console.log('waited 2 seconds');
    console.log(waitPromise);
});

console.log(waitPromise);
console.log(wait(3000));
//
getWeatherIn("Amsterdam")
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    console.log('Done fetching weather.');
});
//
getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
    throw new Error('Stopped');
    console.log('Done fetching weather');
})
.catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
startLoader();

getWeatherIn('Amsterdam')
.then(data => {
    stopLoader();
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
startLoader();
getWeatherIn('Amsterdam')
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
//
const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
waitOneSecond().then(() => {
    console.log('Waited one second.');
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
wait(3000).then(() => {
    console.log('Three seconds elapsed');
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
}
wait(2000).then(seconds => {
    console.log(seconds);
});
//
const fakeFetch = () => {
    return new Promise(resolve => {
        resolve({
            departed: false,
            delayed: true
        });
    });
}
fakeFetch().then((data) => {
    console.log(data);
});