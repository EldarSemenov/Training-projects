class User {
    constructor(age){
        this.age = age;
    }
    get age(){
        console.log("age getter");
        return this._age;
    }
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User("30");
console.log(user.age);
user.age = "311";
console.log(user.age);
//
class Tasks {
    constructor(todos){
        this._todos = todos;
    }
    get todos(){
        return this._todos.join(", ");
    }
}
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
console.log(tasks.todos);
//
class Payment {
    constructor(amount){
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount(value){
        return this._cents = value * 100
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
//
class Config {
    static getYear() {
        const date = new Date();
        return date.getFullYear();
    }
}
//
const course = new Course("Learn JavaScript", false);
course.markAsCompleted().setGrade(18).requestCertificate();
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted(){
        this.isCompleted = true;
        return this;
    }
    setGrade(){
        this.grade = grade;
        return this;
    }
    requestCertificate(){
        this.askedForCertificate = true;
        return this;
    }
}
class Discount {
    constructor(){
        this.amount = 1000;
    }
    apllyDiscount(){
        if(Discount.isValid()){
            this.amount = 500;
        }
    }
    static isValid(){
        return Math.random() <= 0.5;
    }
}
console.log(Discount.isValid());
const discount = new Discount;
console.log(discount.amount);
//
class BookSale {
    constructor(){
        this.amount = 1000;
        this.currency = "usd";
        this.isStudent = false;
    }
    applyStudentDiscount(){
        this.isStudent = true;
        this.amount = 800;
        return true;
    }
    setCurrency(currency){
        this.currency = currency;
        return this;
    }
    applyPercentageDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(5);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person("Sam", "Green");
console.log(person.getFullName());
//
class Course {
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription(){
        if(this.isCompleted){
            return `You have completed the ${this.name} course`;
        }
        else {
            return `You are currently studying the ${this.name} course.`;
        }
    }
};
const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription());
const course2 = new Course("Learn Programming", true);
console.log(course2.getDescription());
class User {
    constructor(firstName, lastName, prefix, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName(){
        return `${this.prefix} ${this.firstName} ${this.lastName}`;
    }
    canVote(){
        if(this.age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
};
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName());
console.log(user1.canVote());
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName());
console.log(user2.canVote());
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting(){
        const fullName = this.getFullName();
        return `Hello ${fullName}`;
    }
}
const user = new User("James", "Van-Delan");
console.log(user.getFullName());
console.log(user.getGreeting());