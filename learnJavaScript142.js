class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user = new Person('Sam', 'Green');
console.log(user.getFullName());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if (this.isCompleted) {
            return `You have completed the ${this.name} course.`;
        } else {
            return `Ypu are currently studying the ${this.name} course.`;
        }
    }
}
const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription());

const course2 = new Course('HTML', true);
console.log(course2.getDescription());
//
class User {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting() {
        return `Hello ${this.getFullName()}`;
        // or: const fullName = this.getFullName();
        // return `Hello ${fullName}`;
    }
}
const user =  new User('Sam', 'Green');
console.log(user.getFullName());
console.log(user.getGreeting());
//
class User {
    set age(value) {
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
    get age() {
        return this._age;
    }
}
const user = new User();
user.age = '23';
console.log(user);
console.log(user.age); // undefined - set GET method
//
class User {
    constructor(age) {
        this.age = age;
    }
    set age(value) {
        return this._age = Number.parseInt(value, 10);
    }
    get age() {
        return this._age;
    }
}
const user = new User('90');
console.log(user);
console.log(user.age);

user.age = '32';
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
const tasks = new Tasks(['Code', 'Learn JavaScript']);
console.log(tasks.todos);
//
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    set amount(value) {
        return this._cents = Number.parseInt(value, 10) * 100;
    }
    get amount() {
        return this._cents;
    }
}
const payment = new Payment('10');
console.log(payment.amount);

payment.amount = '7';
console.log(payment.amount);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
        // or: const date = new Date();
        //     return date.getFullYear();
    }
    static getTime() {
        return `The time is: ${new Date().getHours()} o'clock`;
    }
    static getMonth() {
        return `The month is: ${new Date().getMonth()}, September`;
    }
}
console.log(Config.getYear()); //method called directly on the class.
console.log(Config.getMonth());
console.log(Config.getTime());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted() {
        this.isCompleted = true;
        return this; //always write this. or CHAINING method won't work
    }
    setGrade(grade) {
        this.grade = grade;
        return this;
    }
    requestCertificate() {
        this.askedForCertificate = true;
        return this;
    }
    static getDate() {
        return new Date();
    }
}
const course = new Course('JavaScript', false);
console.log(course.markAsCompleted().setGrade(18).requestCertificate());
console.log(Course.getDate());
//
class Discount {
    constructor() {
        this.amount = 1000;//constructor is empty.
    }
    static isValid() {
        return Math.random() <= 0.5; //learn on 3wSchool how to use Math.random.
    }
    applyDiscount() {
        if(Discount.isValid()) {
            return this.amount = 500;
        }
    }
}
console.log(Discount.isValid());
const discount = new Discount;//no paranthesis on Discount
discount.applyDiscount();
console.log(discount.amount);
//
class BookSale {
    constructor() {
        this.amount = 1000; //US cents
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
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}
const booSale = new BookSale;
console.log(booSale.applyStudentDiscount().setCurrency('eur').applyPercentageDiscount(5));