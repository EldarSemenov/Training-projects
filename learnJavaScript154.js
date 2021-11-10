class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class FetchWrapper{
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    put(endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

try{
    const API = new FetchWrapper("https://api.learnjavascript.online");
    API.put("/demo/grades.json", {
        grade: 18
    }).then(data => {
        console.log(data);
    });

}catch(error) {
    console.error(error);
}

try{
const API = new FetchWrapper("https://api.learnjavascript.online");
API.put("/demo/grades.json", {
    grade: 18
}).then(data => {
    console.log(data);
});
}catch(error) {
    console.error(error);
}
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json())
    }
    put(endpoint, body) {
        return this._send('PUT', endpoint, body);
    }
    post(endpoint, body) {
        return this._send('POST', endpoint, body);
    }
    delete(endpoint, body) {
        return this._send('DELETE', endpoint, body);
    }
    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(200, 200);
}
console.log(makeSquare());
//
class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
}
console.log(createPerson('Sam', 'Green'));
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if(this.isCompleted) {
            return `You have completed the ${this.name} course`;
        }
        else{
            return `You are currently studying the ${this.name} course.`;
        }
    }
}
const course1 = new Course('JavaScript', false);
console.log(course1.getDescription());

const course2 = new Course('HTML', true);
console.log(course2.getDescription());
//
class User {
    constructor(age) {
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User('30');
console.log(user.age);
user.age = '43';
console.log(user);
console.log(user.age);
//
class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Do', 'Did', 'Done']);
console.log(tasks);
console.log(tasks.todos);
//
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    set amount(value) {
        this._cents = value * 100;
    }
    get amount() {
        return this._cents;
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 11;
console.log(payment);
console.log(payment.amount);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
    }
}
const getYear = () => {
    return Config.getYear();
}
console.log(getYear());
*/
class Course {
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted() {
        this.isCompleted = true;
        return this;
    }
    setGrade(grade) {
        this.grade = grade;
        return this;
    }
    requestCertificate() {
        this.askedForCertificate = true;
        return this;
    }
}

const course = new Course('JavaScript', false);
console.log(course);
course.markAsCompleted().setGrade(100).requestCertificate();
console.log(course);