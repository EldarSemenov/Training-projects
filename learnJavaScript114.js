{
    "firstName": 'Sam',
    "lastName": "Green",
    "age": 24
}
//
const person = {
    firstName: 'Sam',
    lastName: 'Green',
    age: 24
};
//
const user = {
    firstName: 'Sam',
    lastName: 'Green',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
//
'{"firstName":"Sam","lastName":"Green"}'
const data = {
    firstName: 'Sam',
    lastName: 'Green'
};
const string = '{"firstName":"Sam","lastName":"Green","age":32}';
const person = JSON.parse(string);
console.log(person);
console.log(person.firstName);
//
const json = '{"result": true,"count": 42}';
const object = JSON.parse(json);
console.log(object.count);
console.log(object.result);
//
const person = {
    firstName: 'Sam',
    lastName: 'Green',
    age: 32
};
const string = JSON.stringify(person);
console.log(string);
//
console.log(JSON.stringify({x: 5, y: 6}));
//
const willItRain = weatherApiResponse => {
   const data = JSON.parse(weatherApiResponse);
   return data.now.rainExpected;
}
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'));
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'))
//
const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    };
    return JSON.stringify(data);
}
console.log(prepareStatus('My first post!', 'Amsterdam'));
console.log(prepareStatus('Hello World!', 'Berlin'));
//
const sendData = (idNumber, firstName, lastName) => {
    const data = {
        idNumber,
        firstName,
        lastName
    };
    return JSON.stringify(data);
} 
console.log(sendData(43, 'Jrobi', 'Milos'));
//
console.log(fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"));
//
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json');
}
const result = checkForNewNotifications();
console.log(result);
console.log(checkForNewNotifications());
//
console.log(fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json ')
.then(response => {
    console.log(response);
}));
//
console.log(fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
.then(response => {
    return response.json();
}));
//
const double = x => {
    return x * 2;
};
//
const double = x => x * 2;
//
console.log(fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
.then(response => response.json()));
//
const checkForNewNotifications = () => {
    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json());
}
console.log(checkForNewNotifications());