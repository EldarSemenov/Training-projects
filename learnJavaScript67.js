const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
};
wait(2000).then(data => {
    console.log(data);
});
wait(2000).then(seconds => {
    console.log(seconds);
});
wait(2000).then(milliseconds => {
    console.log(milliseconds);
});
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                departed: false,
                delayed: true
            }, 3000)
        })
    })
};
fakeFetch().then((data) => {
    console.log(data);
});
new Promise ((resolve, reject) => {
    resolve();
    reject();
});
//
const alwaysFail = () => {
    return new Promise((resolve,  reject) => {
        reject("Failed. That's the only thing I do.")
    });
};
alwaysFail().then(() => {

}).catch(data => {
    console.error(data);
});
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== "flight-status"){
            reject("endpoint not supported");
        }
        setTimeout(() => {
            resolve({
                departed: false,
                delayed: true
            })
        }, 2000)
    })
};
fakeFetch("flight-status")
.then((data)=> {
    console.log(data);
}).catch(error => {
    console.error(error);
});

fakeFetch("user-details")
.then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
//
const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You aske dme to fail afyer ${milliseconds}s!`);
        }, milliseconds)
    })
};
failAfter(2000).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
console.log(fetch('https://requres.in/api/users'))