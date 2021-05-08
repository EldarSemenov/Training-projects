/*
const wait = () => {
    return new Promise(resolve => {
        invalidFunction();
    });
};
wait()
    .then(() => {
        console.log("Wait was successful");
    })
    .catch(() => {
        console.log("Something went wrong");
    });
//
const promis1 = new Promise((resolve, reject) => {
    throw 'Uh - oh!';
});
promis1.catch((error) => {
    console.log(error);
});
//
const wait = () => {
    return new Promise(resolve => {
        invalidFunction();
    });
}
wait().
    then(() => {
    console.log("Wait was successful");
}).catch(() => {
    console.log("Something went wrong");
});
//
const wait = () => {
    return new Promise(resolve => {
        invalidFunction();
    });
};
wait().then(() => {
    console.log("The function is working")
}).catch(() => {
    console.log(("The function is not working, something went wrong"))
});
//
const wait = (delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay);
    });
};
const delayFunction = () => {
    wait(3000).then(() => {
        console.log("This is delay for 3 seconds")
    }).catch((error) => {
        console.log(error)
    });
};
delayFunction();
//
const wait = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
const delayFunction = () => {
    wait(3000).then(() => {
        console.log("This delay function with 3 sec.")
    }).catch((err) => {
        console.log(err);
    });
};
delayFunction();
//
setTimeout(() => {
    console.log(10);
}, 1000);
setTimeout(() => {
    console.log(9);
}, 2000);
setTimeout(() => {
    console.log(8);
}, 3000);
setTimeout(() => {
    console.log(7);
}, 4000);
setTimeout(() => {
    console.log(6);
}, 5000);
setTimeout(() => {
    console.log(5);
}, 6000);
setTimeout(() => {
    console.log(4);
}, 7000);
setTimeout(() => {
    console.log(3);
}, 8000);
setTimeout(() => {
    console.log(2);
}, 9000);
setTimeout(() => {
    console.log(1);
}, 10000);
setTimeout(() => {
    console.log(`Lanche`);
}, 11000);
//
let timeoutID;
const delayedAlert = () => {
    timeoutID = window.setTimeout(
        window.alert, 2000, 'That was really slow!'
    );
};
//
const greetInTwoSeconds = () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 2000);
}; greetInTwoSeconds();
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
wait(3000).then(() => {
    console.log('This will be delayed for 3 seconds!')
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
    console.log("2 seconds");
});
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
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
let promise = new Promise((resolve, reject) => {
    let a = 1000 % 3;
    if (a !== 0) {
        resolve('Success');
    } else{
        reject('Error');
    }
});
promise.then((information) => {
    setTimeout(() => {
        console.log('After 3 seconds - ' + information);
    }, 3000);
}).catch((information) => {
    setTimeout(() => {
        console.log("It's an " + information);
    }, 3000);
});
*/
const promise = new Promise((resolve, reject) => {
    const x = 100 / 2 % 2;
    if(x !== 0){
        resolve("Success!")
    }else{
        reject('Error')
    }
});
promise.then((information) => {
    setTimeout(() =>{
        console.log(3)
    }, 1000);
    setTimeout(() => {
        console.log(2)
    }, 2000);
    setTimeout(() => {
        console.log(1)
    }, 3000);
    setTimeout(() => {
        console.log(information)
    }, 4000);
}).catch((information) => {
    setTimeout(() => {
        console.log(3)
    }, 1000);
    setTimeout(() => {
        console.log(2)
    }, 2000);
    setTimeout(() => {
        console.log(1)
    }, 3000);
    setTimeout(() => {
        console.log(information);
    }, 4000);
});