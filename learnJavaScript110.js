class User {
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
}
//
class User{
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}
//
class User {
    set age (value) {
        this._age = Number.parseInt(value, 10);
        console.log('age setter');
    }
}
const user = new User();
user.age = '18';
console.log(user);
//
class User {
    get age() {
        console.log('age getter');
        return this._age;
    }
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '20';
console.log(user.age);
//
class User {
    constructor(age){
        this.age = age;
    }
    get age(){
        console.log('age getter');
        return this._age;
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
        console.log('age setter');
    }
}
const user = new User('30');
console.log(user.age);
user.age = '31';
console.log(user.age);
//
class User {
    constructor(age) {
        this.age = age;
    }
    get age(){
        console.log('age getter');
        return this._age;
    }
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User('40');
console.log(user.age);
user.age = '50';
console.log(user.age);
//
//MY OWN PROGRAMM
class User{
    constructor(prefix, firstName, lastName, age){
        this.prefix = prefix;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        console.log('age getter');
        return this._age;
    }
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
    getMessage(){
        return `${this.prefix}. ${this.firstName} ${this.lastName} registered. Your age is ${this._age}.`;
    }
}
const user = new User('Mr', 'Jason', 'Polensky', '33');
console.log(user.age);
user.age = '42';
console.log(user.age);
const message = user.getMessage();
console.log(message);
//
class Tasks {
    constructor(todos){
        this._todos = todos;
    }
    get todos(){
        console.log('todos getter');
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Laundry', 'Clean kitchen']);
console.log(tasks.todos);
//
class Payment{
    constructor(amount){
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount(value){
        this._cents = value * 100;
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
//
class Payment{
    constructor(amount){
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount (value){
        this._cents = Number.parseInt(value, 10) * 100;
    }
}
const payment = new Payment('12');
console.log(payment);
console.log(payment.amount);
payment.amount = '15';
console.log(payment.amount);
//
class Config{
    static getYear(){
        const date = new Date();
        return date.getFullYear();
    }
}
//
const course = new Course('Learn JavaScript', false);
course.markAsCompleted().setGrade(18).requestCertificate();
//
class Course {
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted(){
        this.isCompleted = true;
        return this;
    }
    setGrade(grade) {
        this.grade = grade;
        return this;
    }
    requestCertificate(){
        this.askedForCertificate = true;
        return this;
    }
}
const course = new Course('JavaScript');
console.log(course.markAsCompleted().setGrade(10).requestCertificate());
const info = course.isCompleted = false;
console.log(info);
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
}
console.log(Discount.isValid());
const dicount = new Discount;
dicount.applyDiscount();
console.log(dicount.amount);
//
class BookSale{
    constructor(){
        this.amount = 1000;
        this.currency = 'usd';
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
}
const bookSale = new BookSale;
console.log(bookSale.applyStudentDiscount().setCurrency('eur').applyPercentageDiscount(5));
//
class House{
    constructor(color){
        this.color = color;
    }
    getFurniture(){
        return 'sofa';
    }
}
const houseObject = new House('red');
const houseObject2 = new House('blue');

console.log(houseObject.color);
console.log(houseObject.getFurniture());

console.log(houseObject2.color);
console.log(houseObject2.getFurniture());
//
class User{
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '12';
console.log(user);
//
class User {
    get age(){
        console.log('age getter');
        return this._age;
    }
    set age(value){
        console.log('age setter');
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '20';
console.log(user.age);
//
class User {
    constructor(age){
        this.age = age;
    }
    get age(){
        console.log('Age getter');
        return this._age;
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User('33');
console.log(user.age);
user.age = '34';
console.log(user.age);
//
class Tasks {
    constructor(todos){
        this._todos = todos;
    }
    get todos(){
        return this._todos.join('---');
    }
}
const tasks = new Tasks(['Drill', 'Learn JavaScript']);
console.log(tasks.todos);
//
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount(value){
        this._cents = value * 100;
    }
}
const payment = new Payment(100);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
//
class Payment {
    constructor(total) {
        this.total = total;
    }
    get total() {
        return this._cents;
    }
    set total(value) {
        this._cents = value * 100;
    }
}
const payment = new Payment(5);
console.log(payment.total);
payment.total = 2;
console.log(payment.total);
//
class Currency {
    constructor(canadianDollar, auDollar) {
        this.canadianDollar = canadianDollar;
        this.auDollar = auDollar;
    }
    get canadianDollar() {
        return this._canadianDollar;
    }
    set canadianDollar(usaDollar) {
        this._canadianDollar = usaDollar * 1.30;
    }
    get auDollar(){
        return this._auDollar;
    }
    set auDollar(usDollar){
        this._auDollar = usDollar * 1.40;
    }
}
const getCanadianDollars = new Currency(20);
console.log(getCanadianDollars.canadianDollar);
getCanadianDollars.canadianDollar = 1;
console.log(getCanadianDollars.canadianDollar);
const getAuDollar = new Currency(20);
console.log(getAuDollar.auDollar);