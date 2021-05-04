const john = { 
    name: "John"
};
const getVotingMessage = person => {
    if (!person.name) return "-----";
    return `Hey ${person.name}! That will be your first vote!`;
};
console.log(getVotingMessage(john));
console.log(getVotingMessage({}));
//
const booking1 = {
    status: "pending"
};
const booking2 = {
    status: "confirmed"
};
const booking3 = {
    status: "canceled"
};
const booking4 = { 
    status: "done"
};
const getStatus = (host, user, booking) => {
    const message = {
        "pending": `Hey ${user}, we're waiting conformation from ${host}`,
        "confirmed": `Hey ${user}, ${host} is excited to be hosting you!`,
        "canceled": `Unfortunately ${user}, ${host} has canceled your booking request`,
        "done": `${host} hopes you had a great stay!`
    }; return message[booking.status];
}; 
console.log(getStatus("Marcus", "Olivia", booking1));
console.log(getStatus("Marcus", "Antony", booking2));
console.log(getStatus("Marcus", "John", booking3));
console.log(getStatus("Marcus", "Jason", booking4));
//
const getErrorMessage = codeMessage => {
    const messages = {
        401: "Unauthorised",
        402: "Not found",
        405: "Iligal access",
        500: "Visit later"
    }
    return messages[codeMessage];
};
console.log(getErrorMessage(401));
console.log(getErrorMessage(402));
console.log(getErrorMessage(405));
console.log(getErrorMessage(500));
//
const string = '{"firstName":"Jad","lastName":"Jourdan"}';
const person = JSON.parse(string);
console.log(person);
//
const person1 = {
    first_name: "Eldar",
    last_name: "Neumann"
};
const str = JSON.stringify(person1);
console.log(str);
//
const willItRain = weather_api_result => {
    const data = JSON.parse(weather_api_result);
    return data.now.rainExpected;
};
console.log(willItRain('{"now":{"temperature": 18,"humidity":"90%","rainExpected":true}}'));
//
const getTemperature = result => {
    const data = JSON.parse(result);
    return data.now.temperature;
};
console.log(getTemperature('{"now":{"temperature": 18,"humidity":"90%","rainExpected":true}}'));
//
const getHumidity = outcome => {
    const data = JSON.parse(outcome);
    return data.now.humidity;
};
console.log(getHumidity('{"now":{"temperature": 18,"humidity":"90%","rainExpected":true}}'));
//
const prepareStatus = (status, location) => {
    const userID = 98;
    const data = {
        userID,
        status,
        location
    }; return JSON.stringify(data);
};
console.log(prepareStatus("Account", "Denver"));
console.log(prepareStatus("Gold Account", "Minneapolis"));
/*
setTimeout(()=>{
    console.log("Six");
},2000);
setTimeout(()=>{
    console.log("Five");
},3000);
setTimeout(()=>{
    console.log("Four");
}, 4000);
setTimeout(()=>{
    console.log("Three");
}, 5000);
setTimeout(()=>{
    console.log("Two");
},6000);
setTimeout(()=>{
    console.log("One");
},7000);
setTimeout(()=>{
    console.log("Launch!!!!!!!!");
},8000);
*/
const greetInTwoSeconds = () => {
    setTimeout(()=>{
        console.log("Hello World!");
    },3000);
}; greetInTwoSeconds();
//
const wait = delay => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, delay);
    });
}