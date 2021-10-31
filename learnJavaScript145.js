class Person {
    constructor(firstNmae, lastName) {
        this.firstNmae = firstNmae;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstNmae} ${this.lastName}`;
    }
}
const person = new Person('Jason', 'Peterson');
console.log(person.getFullName());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if(this.isCompleted) {
            return `You have completed the ${this.name} course.`;
        }
        else {
           return `You are currently studying the ${this.name} course.`;
        }
    }
}
const course1 = new Course('HTML', true);
const course2 = new Course('JavaScript',  false);
console.log(course1.getDescription());
console.log(course2.getDescription());
//
class Study {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getInfo() {
        if(this.grade >= 120) {
            return `You have completed ${this.name} course.`
        }
        else {
           return `Keep going to study ${this.name} course.`
        }
    }
}
const study1 = new Study('React', 122);
const study2 = new Study('Angular', 119);
console.log(study1.getInfo());
console.log(study2.getInfo());
//
class User {
    constructor(firstName, lastName, prefix, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}.`;
    }
    canVote() {
        return this.age >= 18;
    }
}
const user1 = new User('Eldar', 'Neumann', 'Mr', 44);
console.log(user1.getFullName());
console.log(user1.canVote());

const user2 = new User('Michael', 'Shommer', 'Mr', 17);
console.log(user2.getFullName());
console.log(user2.canVote());
//
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting() {
        return `Hello ${this.getFullName()}`;
    }
}
const user = new User('Alex', 'Green');
console.log(user.getFullName());
console.log(user.getGreeting());
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
const user = new User('18');
//user.age = '18';
console.log(user.age);
user.age = '23';
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
const tasks = new Tasks(['Learn React', 'Learn JavaScript']);
console.log(tasks.todos); //no use paranthesys.
//
class Payment{
    constructor(amount) {
        this.amount = amount;
    }
    set amount(value) {
        this._cents = Number.parseInt(value, 10) * 100;
    }
    get amount() {
        return this._cents;
    }
}
const payment = new Payment('10');
console.log(payment.amount);

const pay = new Payment('11');
console.log(pay.amount);
pay.amount = '33';
console.log(pay.amount);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
    }
}
console.log(Config.getYear());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted() {
        this.isCompleted = true;
        return this;
    }
    setGtrade(grade) {
        this.grade = grade;
        return this;
    }
    requestCertificate() {
        this.aaskedForCertificate = true;
        return this;
    }
}
const course = new Course('CSS', false);
console.log(course.markAsCompleted().setGtrade(122).requestCertificate());
//
console.log(Math.random() <= 0.5);
//
class Discount {
    constructor() {
        this.amount = 1000;
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
    applyDiscount() {
        if(Discount.isValid()) {
            return this.amount = 850;
        }
    }
}
const discount = new Discount;
console.log(discount.applyDiscount());
console.log(discount.amount);
//
class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = 'eur';
        this.isStudent = false;
    }
    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 1000;
        return this;
    }
    setCurrency(currency) {
        this.currency = currency;
        return this;
    }
    applyPercentageDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}
const book = new BookSale();
console.log(book);
console.log(book.applyStudentDiscount().setCurrency('USD').applyPercentageDiscount(5));
//
class RentRoom {
    constructor() {
        this.isStudent = false;
        this.isResident = false;
        this.currency = 'EUR';
        this.amount = 1250;
    }
    setCurrency(currency) {
        this.currency = currency;
        return this;
    }
    applyStudentDiscount() {
        this.isResident = true;
        this.isStudent = true;
        return this;
    }
    percentageDiscountRoom(percent) {
        this.amount = this.amount - this.amount * percent / 100;
    }
}
const rentByForeinStudent = new RentRoom();
rentByForeinStudent.isStudent = true;
rentByForeinStudent.isResident = 'Green Card';
console.log(rentByForeinStudent);

const rentStudent = new RentRoom();
rentStudent.setCurrency('USD').applyStudentDiscount().percentageDiscountRoom(34);
console.log(rentStudent);