getWeatherIn("Amsterdam")
.then(data => {
    console.log(data);
    console.log("Done fetching weather")
})
.catch(error => {
    console.log(error);
    console.log("Done fetching weather");
});
//
getWeatherIn("Amsterdam")
.then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("Done fetching weather");
});
//
getWeatherIn("Amsterdam")
.then(data => {
    throw new Error("Stopped");
    console.log(data);
    console.log("Doen fetching weather");
}).catch(error => {
    console.log(error);
    console.log("Done fetching weather");
});
//
startLoader();
getWeatherIn("Amsterdam")
.then(data => {
    stopLoader();
    console.log(data);
}).catch(error => {
    stopLoader();
    console.log(error);
});
//
startLoader();
getWeatherIn("Amsterdam")
.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
}).finally(() => {
    stopLoader();
});
//
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
};
waitOneSecond().then(() => {
    console.log("Waited one second");
});
//
const MathFunction = () => {
    return new Promise((resolve, reject) => {
        const a = 1 + 40;
        if(a == 42){
            setTimeout(() => {
                resolve("Success")
            }, 3000)
            
        }else{
            setTimeout(() => {
                reject("Failure")
            }, 3000)
        }
    })
};
MathFunction().then((message) => {
    console.log("Answer means " + message)
}).catch((error) => {
    console.error(error)
});
//
const MathFunction = () => {
    return new Promise((resolve, reject) => {
        const b = 45 + 45;
        if(b == 91) {
            setTimeout(() => {
               resolve("You are right!")
            }, 2000)
        }else {
            setTimeout(() => {
                reject("The wrong answer")
            },5000)
        }
    })
};
MathFunction()
.then((message) => {
    console.log("Right! " + message)
})
.catch((error) => {
    console.log("Wrong! " + error)
});
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve();
        }, milliseconds)
    })
};
wait(2000).then(() => {
    console.log("I was waiting for 2 seconds")
});