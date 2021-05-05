//PROMISES
/*
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, delay);
    });
}
wait(5000).then(()=>{
    console.log("5");
});
wait(4000).then(() =>{
    console.log("4");
});
wait(3000).then(()=>{
    console.log("3");
});
wait(2000).then(()=> {
    console.log("2");
});
wait(1000).then(()=>{
    console.log("1");
});
/*
 myPromise = new Promise = (myResolve) => {
    setTimeout(()=> {
        myResolve("I LOVE YOU!");
    }, 3000);
}
myPromise.then((value)=> {
document.getElementById("demo").innerHTML = value;
});
*/
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve()
        }, delay);
    });
};
wait(2000).then(()=>{
    console.log('This gets delayed 2 seconds.')
});