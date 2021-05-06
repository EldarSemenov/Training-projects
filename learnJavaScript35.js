//
let es = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2) {
        resolve('Success')
    } else{
        reject('Failed')
    }
});
es.then((message)=> {
    console.log('This is in then - ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
});
//
const promise = new Promise((positive, negative) => {
    let number = 200;
    if(number !== 200) {
        positive(false)
    }else {
        negative(true)
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
//
const ourYear = new Promise ((yes, no) => {
    let year = 2022;
    if(year === 2021) {yes("Today is 2021 year!");}
    else(no("It is not 2021 year now!"));
});
ourYear.then((information) => {
    console.log(information);
}).catch((information) => {
    console.log(information);
});
//
const decision = new Promise((answer1, answer2) => {
    const interprise = 5;
    if(interprise === 5) {answer1('Positive');}
    else{answer2('Negative');}
});
decision.then((reply) => {
    console.log('Our decision is ' + reply);
}).catch((reply) => {
    console.log('Our decision is ' + reply);
});
//
const startMessage = new Promise((positive, negative) => {
    const answer = 500 + 600;
    if(answer === 1000){positive('correct');}
    else{negative('incorrect');}
});
startMessage.then((information) => {
    console.log('You gave ' + information + ' answer');
}).catch((reject) => {
    console.log('You gave ' + reject + ' answer');
});
//
const math = new Promise((positive, negative)=> {
    let answer = 2 + 2;
    if(answer === 4) {positive('correct!')}
    else{negative('wrong')}
});
math.then((information) => {
    console.log("Congratulations! The answer is " + information);
}).catch((rejection) => {
    console.log("Sorry, your answer is " + rejection);
});
//
let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
    if(x === 0){myResolve("OK");}
    else{myReject("Error");}
});
myPromise.then((value)=> {
    console.log(value);
}).catch((reject)=> {
    console.log(reject);
});
//
setTimeout(()=> {
    myFunction("I LOVE YOU!")
}, 2000);
function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}
//
let myPromise = new Promise((myResolve, myReject)=> {
    setTimeout(()=>{
        myResolve("I love you!")
    }, 3000)
});
myPromise.then((value)=> {
    console.log(value);
})
//
const recordVideoOne = new Promise((resolve, reject )=> {
    resolve('Video 1 Recorded');
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});
const resordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.race([
    recordVideoOne, 
    recordVideoTwo, 
    resordVideoThree
]).then((message) => {
    console.log(message);
});//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};
wait(3000).then(() => {
    console.log("This will be delayed 3 seconds!")
});
//
const canVote = age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
};
canVote(20).then(result => {
    console.log(result);
});
canVote(15).then(result => {
    console.log(result);
});
//
const wait = (delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay)
    });
}
wait(3000).then(() => {
    console.log('This will be delayed 3 seconds!');
});
//
const wait = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay)
    });
};
wait(2000).then(()=> {
   console.log("one two"); 
});
//
let wait = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay)
    });
};
wait(3000).then(() => {
    console.log("Me and you")
});
//
const await = (delay) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
await(2000).then(() => {
    console.log("Number 2");
});
//
const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
wait(2000).then(() => {
    console.log("Wait 2 sec.");
});
//
const wait = delay => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
};
wait(2000).then(() => {
    console.log("1-2-3");
});