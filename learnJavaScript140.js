class User {
    set age(value) {
       console.log('age setter');
       this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '18';
console.log(user);
//
class Person {
    set age(value) {
        console.log('Age setter');
        this._age = Number.parseInt(value, 10);
    }
}
const person = new Person();
person.age = '19';
console.log(person);
//
class Car {
    set price(value) {
        console.log('Price setter');
        this._price = Number.parseInt(value, 10);
    }
}
const car = new Car();
car.price = '34000';
console.log(car);
//
class House {
    set price(value) {
        this._price = Number.parseInt(value, 10);
    }
    set squareFeet(value) {
        this._squareFeet = Number.parseInt(value, 10);
    }
}
const house = new House();
house.price = '340000';
house.squareFeet = '3000';
console.log(house);
//
class Flight {
    set price(value) {
        console.log('This is the standard price');
        this._price = Number.parseInt(value, 10);
    }
    set distance(value) {
        this._distance = Number.parseInt(value, 10);
    }
    set amountOfPassangers(value) {
        this._amountOfPassangers = Number.parseInt(value, 10);
    }
}
const flight = new Flight();
flight.price = '2000';
flight.distance = 8000;
flight.amountOfPassangers = '188';
console.log(flight);
//
class User {
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
    get age() {
        console.log('Age getter');
        return this._age;
    }
}
const user = new User();
user.age = '20';
console.log(user.age);
console.log(user);
//
class Car {
    set price(value) {
        this._price = Number.parseInt(value, 10);
    }
    get price() {
        return this._price;
    }
}
const car = new Car();
car.price = '20000';
console.log(car);
console.log(car.price);
//
class User {
    constructor(age) {
        this.age = age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
    get age() {
        return this._age;
    }
}
const user = new User('30');
console.log(user.age);
console.log(user);
//
class Person {
    constructor(age) {
        this.age = age;
    }
    get age() {
        console.log('Age getter')
        return this._age;
    }
    set age(value) {
        console.log('Age setter')
        this._age = Number.parseInt(value, 10);
    }
}
const person = new Person('30');
console.log(person.age);
person.age = '40';
console.log(person);
console.log(person.age);
//
class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Learn English', 'Learn JavaScript']);
console.log(tasks.todos);
console.log(tasks);
//
class Tasks {
    constructor(todo) {
        this._todo = todo;
    }
    get todo() {
        return this._todo.join(', ');
    }
}
const tasks = new Tasks(['JavaScript', 'React']);
console.log(tasks.todo);
//
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    get amount() {
        return this._cents;
    }
    set amount(value) {
        this._cents = value * 100;
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
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
const payment = new Payment(20);
console.log(payment.amount);
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
payment.amount = 7;
console.log(payment.amount);
//
class Config {
    static getYear() {
        //const date = new Date()
        //return date.getFullYear();
        return new Date().getFullYear();
    }
}
console.log(Config.getYear());
//
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
const course = new Course('Learn JavaScript', false);
console.log(course);

course.markAsCompleted().setGrade(20).requestCertificate();
console.log(course);
//
class Education {
    constructor(courseName, isCompleted) {
        this.courseName = courseName;
        this.isCompleted = isCompleted;
    }
    setGrade(grade) {
        this.grade = grade;
        return this;
    }
    getAsCompleted() {
        this.isCompleted = true;
        return this;
    }
    requestCertificate() {
        this.receivedCertificate = true;
        return this;
    }
}
const education = new Education('JavaScript', false);
console.log(education);

education.setGrade(120).getAsCompleted().requestCertificate();
console.log(education);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
    }
    static getDate() {
        return new Date();
    }
}
console.log(Config.getYear());
console.log(Config.getDate());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getGrade(grade) {
        this.grade = grade;
        return this;
    }
    getAsCompleted() {
        this.isCompleted = true;
        return this;
    }
    requestCertificate() {
        this.receivedCertificate = true;
        return this;
    }
}
const course = new Course('JavaScript', false);
console.log(course);

course.getGrade(120).getAsCompleted().requestCertificate();
console.log(course);
//
class Discount {
    constructor() {
        this.amount = 1000;
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
    applyDiscount() {
        if (Discount.isValid()) {
            this.amount = 500;
        }
    }
}
console.log(Discount.isValid());

const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount);
//
class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = 'usd';
        this.isStudent = false;
    }
    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 800;
        return this;
    }
    setCurrency(currency) {
        this.currency = currency;
        return this;
    }
    applyPercentageDiscount(percent) {
        this.amount = this.amount - this.amount * percent / 100; // 800 - (800 * 5 / 100) 4850 630.50
        return this;
    }
}
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency('eur').applyPercentageDiscount(5);
console.log(bookSale);
//
class Time {
    static getTime() {
        return new Date().getHours();
    }
    static getYear() {
        return new Date().getFullYear();
    }
}
console.log(Time.getTime());
console.log(Time.getYear());
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
//
class Manager extends Employee {
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter.`);
    }
}
const manager = new Manager('Sam', 'Green');
console.log(manager);
manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class Manager extends Employee {
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
}
const employee = new Employee('Alex', 'Klarston');
console.log(employee);
console.log(employee.getFullName());
console.log(employee.getInitials());

const manager = new Manager('Jason', 'Neumann');
console.log(manager);
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    canVote() {
        return this.age >= 18;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Admin extends User {
    updateConfig() {
        return 'Config updated.';
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} [admin]`;
    }
}

const user = new User('Jason', 'Mustoreston', 17);
console.log(user);
console.log(user.getFullName());
console.log(user.canVote());
console.log(user.getInitials());

const admin = new Admin('Eldar', 'Neumann', 40);
console.log(admin);
console.log(admin.getFullName());
console.log(admin.canVote());
console.log(admin.updateConfig());
console.log(admin.getInitials());
//
class MobilePhone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `The ${this.name} costs ${this.price}`;
    }
}
class Android extends MobilePhone {
    getVersion() {
        return 12;
    }
}
class Iphone extends MobilePhone {
    getVersion() {
        return 15;
    }
}
const android = new Android('Samsung', 400);
console.log(android);
console.log(android.getDescription());
console.log(android.getVersion());

const apple = new Iphone('Apple', 900);
console.log(apple);
console.log(apple.getDescription());
console.log(apple.getVersion());