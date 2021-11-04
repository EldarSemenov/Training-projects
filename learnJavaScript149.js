class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}
class Manager extends Employee {
    sendPerformanceReview() {
        console.log(`Sent performance review for current quaarter.`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }
}
const manager = new Manager('Sam', 'Green');

manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}
class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformance() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
    getFullName() {
        return super.getFullName() + ' [manager]';
    }
}

const manager = new Manager('Sam', 'Green', 'Marketing');
console.log(manager.department);
console.log(manager.getFullName());
manager.sendPerformance();
//
//JSON
//
{
    "firstName": "Sam",
    "lastName": "Green",
    "age": 24
}
//
const string = '{"firstName": "Sam", "lastName": "Green", "age": 32}';

const person = JSON.parse(string);
console.log(person);
console.log(person.firstName);

const car = {
    name: 'Tesla',
    model: 3,
    idNumber: 28742783,
    owner: 'Eldar Semenov'
}
const string2 = JSON.stringify(car);
console.log(string2);
//
const willItRain = weatherAPIresponce => {
    let data = JSON.parse(weatherAPIresponce);
    return data.now.rainExpected;
}

console.log(willItRain('{"now":{"temperature":18, "humidity":"30%", "uvIndex":0, "rainExpected": true}}'));
console.log(willItRain('{"now":{"temperature":25, "humidity": "90%", "uvIndex": 4, "rainExpected": false}}'));
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
console.log(prepareStatus('Hello World!', 'Berlin'));
console.log(prepareStatus('My first post!', 'Amsterdam'));
//
const sendJSONstring = () => {
    const data = {
        model: 'Tesla 3',
        price: 45000,
        idNumber: 29838473
    }
    return JSON.stringify(data);
}
console.log(sendJSONstring());
//
const sendJsonData = (location, status, price) => {
    const idNumber = 39384394;
    const data = {
        idNumber,
        location,
        status,
        price,
        name: 'NeverLand'
    }
    return JSON.stringify(data);
}
console.log(sendJsonData('Colorado Springs', 'Not Sold', 340000));
//
const getAPIaddress = API => {
    const data = JSON.parse(API);
    return data.status.sold;
}
const api = '{"name": "NeverLand", "price": 34000, "status":{"sold": true}}';
console.log(getAPIaddress('{"name": "NeverLand", "price": 34000, "status":{"sold": false}}'));
console.log(getAPIaddress(api));
//
const API = '{"datas": {"firstName": "Sam", "lastName": "Peterson", "paymentDetails": {"isCompleted": true}}}';

const receiveAPI = API => {
    const data = JSON.parse(API);
    return data.datas.paymentDetails.isCompleted;
}
console.log(receiveAPI(API));