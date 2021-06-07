console.log("A");
setTimeout(() => {
    console.log("B")
}, 1000);
console.log("C");
//
let numbers = [9, 5, 14, 3, 11];
let numberAboveTen = numbers.filter(num => {
    return num >= 10;
});
console.log(numberAboveTen);
//
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback();
    }, 1000);
};
//
const sumTemperatures = (temperatures, callback) => {
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => 
        total + current, 0);
    }, 1000);
};
value => {console.log(value)};
//
const temperatures = [10, 5, 3];
sumTemperatures(temperatures, value => {
    console.log(value);
});
//
const temperatures = [10, 5, 3];
sumTemperatures(temperatures).then(value => {
    console.log(value);
});
console.log(sumTemperatures(value));
//
sumTemperatures(temperatures)
.then(value => {
    console.log(value);
}).catch(reason => {
    console.error(reason);
});
//
let p = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if(a == 2){
       resolve('Success')
    }else {
        reject('Failed')
    }
});
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
//
let decision = new Promise((resolve, reject) => {
    let name = "Alex";
    if(name === "Eldar"){
        resolve(`Eldar`)
    }
    else{
        reject(`Eldar`)
    }
});
decision.then((message) => {
    console.log("The name is " + message);
}).catch((message) => {
    console.log("The name is not " + message);
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
wait(2000).then(() => {
    console.log("waited 2 seconds");
});
//
const promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
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
};
wait(2000).then((value) => {
   console.log(value);
});
console.log(wait(2000));
const result = wait(2000);
console.log(result);
//
getWeather("Amsterdam")
.then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
});
*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw "Yes!";
    }, 2000);
});
promise1.catch((error) => {
    console.log(error);
});