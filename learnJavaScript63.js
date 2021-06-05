class User {
    constructor(age){
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        return this._age = Number.parseInt(value, 10);
    }
}
const user = new User("19");
console.log(user.age);
user.age = "21";
console.log(user.age);
//
class Currency {
    constructor(amount){
        this.amount = amount;
    }
    get amount(){
        return this._amount;
    }
    set amount(value){
        return this._amount = Number.parseInt(value * 100, 10);
    }
};
const currency = new Currency("10");
console.log(currency.amount);
currency.amount = "2";
console.log(currency.amount);
//
class EuroDollarCurrency {
    constructor (amount) {
        this.amount = amount;
    }
    set amount(value){
        return this._amount = Number.parseInt(value * 1.21, 10);
    }
    get amount(){
        return this._amount;
    }
}
const getAmountOfDollars = new EuroDollarCurrency("12");
console.log(getAmountOfDollars.amount);
getAmountOfDollars.amount = "100";
console.log(getAmountOfDollars.amount);
//
class DollarEuroCurrency {
    constructor(amount){
        this.amount = amount;
    }
    set amount(value){
    return this._amount =`$ ${Number.parseInt(value / 1.21, 10)} USD`;
}
    get amount(){
    return this._amount;
}
};
const getAmountOfEuro = new DollarEuroCurrency("100");
console.log(getAmountOfEuro.amount);
getAmountOfEuro.amount = "11";
console.log(getAmountOfEuro.amount);
getAmountOfEuro.amount = "1000";
console.log(getAmountOfEuro.amount);
//
class Tasks{
    constructor(to$do){
        this._to$do = to$do;
    }
    get to$do(){
        return this._to$do.join(", ");
    }
}
const tasks = new Tasks(["Learn Java Script", "Learn React", "Learn Node JS"]);
console.log(tasks.to$do);
//
class Payment {
    constructor(amount){
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount(value){
        return this._cents = value * 100; 
    }
};
const payment = new Payment("10");
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
//
class Config {
    static getYear(){
        const date = new Date();
        return date.getFullYear();
    }
};
console.log(Config.getYear());
class Amount {
    static recieveBill(){
        const bill = `You have to make a payment in the amount of 20$.`;
        return bill.recieveBill();
    }
};
console.log(Amount.recieveBill());
class Course {
    constructor(name, isCompleted, userName){
        this.name = name;
        this.isCompleted = isCompleted;
        this.userName = userName;
    }
    getName(){
        this.name = "Java Script";
        return this;
    }
    markAsCompleted(){
        this.isCompleted = true;
        return this;
    }
    setGrade(grade){
        this.grade = grade;
        return this;
    }
    requestCertificate(){
        this.askedForCertificate = true;
        return this;
    }
    getUserName(){
        this.userName = "Eldar Neumann";
        return this;
    }
};
const course = new Course();
course.getName("Java Script").markAsCompleted().setGrade(18).
requestCertificate().getUserName();
console.log(course);
//
class Discount {
    constructor(){
        this.amount = 1000;
    }
    applyDiscount(){
        if(Discount.isValid()){
            this.amount = 500;
        }
    }
    static isValid(){
        return Math.random() <= 0.5;
    }
};
//console.log(Discount,isValid());
const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount);
//
class BookSale {
    constructor(){
        this.amount = 1000;
        this.currency = currency;
        this.isStudent = false;
    }
    applyStudentDiscount(){
        this.isStudent = true;
        this.amount = 800;
        return this;
    }
    setCurrency(currency){
        this.currency = currency;
        return this;
    }
    applyPercentageDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
};
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(5);
console.log(bookSale);
//
class CarOnSale {
    constructor(product){
        this.product = product;
        this.amount = 35000;
        this.eligable = false;
    }
    WhatIsTheProduct(product){
        this.product = product;
        return this;
    }
    isEligableForDiscount(){
        this.eligable = true;
        return this;
    }
    applyAmount(amount){
        this.amount = amount;
        return this;
    }
    applyDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
};
const car = new CarOnSale;
car.WhatIsTheProduct("Tesla Model S").isEligableForDiscount()
.applyAmount(40000).applyDiscount(5);
console.log(car);
//CLASS INHERITANCE
class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
};
const employee = new Employee("Jason", "Noier");
employee.getFullName();
console.log(employee.getInitials());
console.log(employee);
//
class Manager {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter`);
    }
};
const manager = new Manager("Alfred", "Miller");
console.log(manager.getFullName());
console.log(manager.getInitials());
console.log(manager.sendPerformanceReview());
console.log(manager);
class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
};
class Manager extends Employee {
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter`);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} (manager)`;
    }
};
const manager = new Manager("Robert", "Miller");
console.log(manager.sendPerformanceReview());
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    canVote(){
        return this.age >= 18;
    }
    getFullName(){
       return `${this.firstName} ${this.lastName}`;
    }
};
class Admin extends User {
    updateConfig(){
        return `Config updated`;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} [admin]`;
    }
};
const user = new User("Sam", "Green", 17);
console.log(user.canVote());
console.log(user.getFullName());
//
const admin = new Admin("Jason", "Mariotty", 29);
console.log(admin.canVote());
console.log(admin.getFullName());
console.log(admin.updateConfig());
//
class MobilePhone {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getDescription(){
        return `The ${this.name} costs ${this.price}`;
    }
};
class Android extends MobilePhone {
    getVersion(){
        return 12;
    }
};
class iOs extends MobilePhone {
    getVersion(){
        return 15;
    }
};
const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription());
console.log(galaxy.getVersion());
//
const iphone = new iOs("iPhone", 500);
console.log(iphone.getDescription());
console.log(iphone.getVersion());