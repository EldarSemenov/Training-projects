//Early return
const worker1 = {
    first_name: "AS",
    last_name: "Western",
    id: 239
};
const worker2 = {
    first_name: "Poll",
    last_name: "Anderson",
};
const worker3 = {
    first_name: "Julia",
    last_name: "Roberson",
    id: 830
};
const checkIDworker = (worker) => {
    if(!worker.id) return `${worker.first_name} you've fogortten your id,
    you need to bring it over right now`;
    return `Hi ${worker.first_name}! Thank you for coming`;
};
console.log(checkIDworker(worker1));
console.log(checkIDworker(worker2));
console.log(checkIDworker(worker3));
//Refactoring if conditions
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
        "pending": `Hey ${user}, we're awaiting confirmation from ${host}`,
        "confirmed": `Hey ${user}, ${host} is excited to be hosting you!`,
        "canceled": `Unfortunately ${user}, ${host} has camceled your booking
        request`,
        "done": `${host} hopes you had a great stay!`
    }
    return message[booking.status];
};
console.log(getStatus("Markus", "John", booking1));
console.log(getStatus("Markus", "Jason", booking2));
console.log(getStatus("Marcus", "Linda", booking3));
console.log(getStatus("Markus", "Linda", booking4));
//
const user1 = {
    name: "Olivia Peterson",
    status: "enroled"
};
const user2 = {
    name: "Frank Molpi",
    status: "not enroled"
};
const getMessage = (User) => {
    const inform = {
        "enroled": `Thank you! Your name is confirmed.`,
        "not enroled": `${User.name}. You need to come to our office.`
    }
    return inform[User.status];
}; 
console.log(getMessage(user1));
console.log(getMessage(user2));
//
const game = {
    count: 0
};
console.log(game.count || "Game not started yet");
//
const getMessageError = (statusCode) => {
    const message = {
        401: "Unauthorized",
        404: "Not found"
    }
    return message[statusCode] || "Unexpected error has occured";
};
console.log(getMessageError(401));
console.log(getMessageError(404));
console.log(getMessageError(892));
//JSON
const person = {
    first_name: "Eldar",
    last_name: "Neumann"
};
const me = '{"first_name":"Eldar", "last_name":"Neumann"}';
console.log(person);
console.log(me);
//
const string = '{"firstName":"Eldar", "lastName": "Neumann"}';
const Person = JSON.parse(string);
console.log(Person.firstName);
//
const str = '{"id": 123, "name": "Eldar Neiman"}';
const access = JSON.parse(str);
console.log(access);
console.log(access.name);
console.log(access.id);
//
const json = '{"result": true, "count": 34}';
const obj = JSON.parse(json);
console.log(obj.result);
console.log(obj.count);
//
const data = '{"first_name": "Frederico", "last_name": "Quindoros", "age": 34}';
const convertation = JSON.parse(data);
console.log(convertation);
console.log(convertation.first_name);
console.log(convertation.last_name);
console.log(convertation.age);
//
const person1 = '{"first_name": "Uni", "last_name": "Tu", "id_number": 12876354}';
const per1 = JSON.parse(person1);
console.log(per1.first_name);
console.log(per1.last_name);
console.log(per1.id_number);
//
const per2 = {
    first_name: "El",
    last_name: "Homer"
};
const getstring = JSON.stringify(per2);
console.log(getstring);
//
const object = {
    id: 1,
    name: "Loren Gums"
};
console.log(JSON.stringify(object));
//
console.log(JSON.stringify({x: 5, y: 5}));
console.log(JSON.stringify([new Number(3), new String('false'),
new Boolean(false)]));
//Will it rain?
const willItRain = weather_api_result => {
    const data = JSON.parse(weather_api_result);
    return data.now.rainExpected;
};
console.log(willItRain('{"now":{"temperature": 18, "humidity": "90%", "uvIndex": 0, "rainExpected": true}}'));
//
const returnStudentName = stu => {
    const data = JSON.parse(stu);
    return data.stu.first_name;
};
console.log(returnStudentName('{"stu":{"first_name": "Tommmy", "last_name": "Lee"}}'))
//
const prepareStatus = (status, location) => {
    const userID = 42;
    const data = {
        userID,
        status,
        location
    }; 
    return JSON.stringify(data);
};
console.log(prepareStatus("That's my first post!", "New-York"));
console.log(prepareStatus("Hello World!", "Minneapolis"));
//
const prepareStudent = (first_name, last_name, age, location, logo) => {
    const our_student = {
        first_name, 
        last_name,
        age,
        location,
        logo 
    };
    return JSON.stringify(our_student);
};
console.log(prepareStudent("Jason", "Homerton", 33, "New-Jersy", "Hello Everyone!"));
//SetTimeout
setTimeout(() => {
    console.log("This will show after 3 seconds");
}, 10000);
//
let timeoutID;
function delayAlert(){
    timeoutID = window.setTimeout(window.alert, 2 * 1000, "That was slow!")
};
//
setTimeout(() => {
    console.log("That will appear in 2 seconds");
},
1 * 2000);
//
setTimeout(() => {
    console.log("Appear in 3 seconds");
}, 3000);
//
setTimeout(() => {
    console.log("In 5 seconds");
},2 * 2500);
setTimeout(()=>{
    console.log("In six sec.!");
}, 6000);
setTimeout(()=>{
    console.log("In 7");
}, 7000);
setTimeout(()=> {
    console.log(alert("Hello World!"));
}, 8000);