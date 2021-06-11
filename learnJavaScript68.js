// Java Script Object Notation - JSON
const person = 
{
    "firstName": "Sam",
    "lastName": "Green",
    "age": 24
};
const person = {
    firstName: "Sam",
    lastName: "Green",
    age: 24
};
const user = 
{
    firtsName: "Sam",
    lastName: "Green",
    getFullName: function(){
        return `${this.firtsName} ${this.lastName}`
    }
};
//
'{"firstName":"Sam","lastName":"Green"}'
//
const data = {
    firstName: "Sam",
    lastName:"Green"
};
//
const string = '{"firstName":"Sam","lastName":"Green", age: 32}';
const person = JSON.parse('{"firstName":"Sam","lastName":"Green", age: 32}');
console.log(person);
/
const string = '{"firstName":"Sam","lastName":"Green", "age": 32}';
const person = JSON.parse(string); 
console.log(person.firstName);
console.log(person);
//
const json = '{"result":true, "count": 42}';
const obj = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);
//
const persona = 
{
    firstName: "Sam",
    lastName: "Green",
    age: 32
};
const str = JSON.stringify(persona);
console.log(str);
//
console.log(JSON.stringify({x: 5, y: 6}));
//
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
//
console.log(JSON.stringify(new Date));
//
const willItRain = weatherApiResponce => {
    const data = JSON.parse(weatherApiResponce);
    return data.now.rainExpected;
}
console.log(willItRain('{"now":{"temperature":18, "humidity":"30%", "uvIndex":0, "rainExpected":true}}'));
console.log(willItRain('{"now":{"temperature":25, "humidity":"90%", "uvIndex":0,"rainExpected":false}}'));

const getTemperature = weather => {
    const data = JSON.parse(weather);
    return data.now.temperature;
};
console.log(willItRain('{"now":{"temperature":18, "humidity":"30%", "uvIndex":0, "rainExpected":true}}'));
console.log(willItRain('{"now":{"temperature":25, "humidity":"90%", "uvIndex":0,"rainExpected":false}}'));
//
const prepareStatus = (status, location) => {
    const userId = 42,
    data = {
        userId,
        status,
        location
    };
    return JSON.stringify(data);
};
console.log(prepareStatus("My first post!", "Amsterdam"));
console.log(prepareStatus("Hello World!", "Berlin"));
//
const getLocation = (country, state, city) => {
    const location = {
        country,
        state,
        city
    };
    return JSON.stringify(location);
};
console.log(getLocation("USA", "Utah", "Logan"));
//
console.log(fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"))
/
fetch('https://reqres.in/api/users/',{
}
   .then(res => {
       if(res.ok) {
           console.log('SUCCESS')
       }else{
           console.log("Not Successful")
       }
   })
   .then(data => console.log(data))
    .then(error => console.log('Error'))
//
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(res => {
    return res.json()
}).then(data => console.log(data))
   .then(error => console.log('ERROR'))
//
console.log(fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"));