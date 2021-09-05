class Translation {
    constructor(word){
        this.word = word;
    }
    isEnglishWord(){

    }
    isSpanishWord(){

    }
}
const person1 = new Person('Sam Doe');
const person2 = new Person('Charlie Bron');
//
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(10, 10);
};
console.log(makeSquare());
//
class Square{
    constructor(side1, side2){
        this.side1 = side1;
        this.side2 = side2;
    }
}
//
const makeSquare1 = () => {
    return new Square(10, 10);
};
console.log(makeSquare1());
//
const makeSquare2 = () => {
    return new Square(20, 20);
};
console.log(makeSquare2());
//
class Triangle{
    constructor(firstSide, secondSide, thirdSide){
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
};
const makeFirstTriangle = () => {
    return new Triangle(20, 10, 5);
};
console.log(makeFirstTriangle());

const makeSecondTriangle = () => {
    return new Triangle(100, 90, 70);
};
console.log(makeSecondTriangle());
//
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
};
console.log(createPerson('Samuel', 'Jackson'));
//
class Person {
    constructor(){
        console.log('I was automatically called');
    }
}
const person = new Person;
//
class Person {
    constructor(firstName, lastName) {
        console.log(firstName + ' ' + lastName);
    }
}
const person = new Person('Sam', 'Green');
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person  = new Person('Sam', 'Green');
console.log(person);
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = this.votingAge;
    }
};
//
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
};
console.log(new User('Sam', 'Green', 25));
console.log(new User('Eldar', 'Neumann', 42));
//
class Course{
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
};
console.log(new Course('Learn JavaScript', false));
console.log(new Course('Python', true));
console.log(new User('Tommy', 'Catty', 3));
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person('Sam', "Green");
console.log(person.getFullName());
//
class Course {
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription(){
        if(this.isCompleted){
            return `You have completed the ${this.name} course.`;
        }
        else {
            return `You are currently studying the ${this.name} course.`;
        }
    }
} 
const course1 = new Course('Learn JavaScirpt', false);
console.log(course1.getDescription());
const course2 = new Course('React', true);
console.log(course2.getDescription());
//
class User {
    constructor(firstName, lastName, prefix, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName(){
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }
    canVote(){
        return this.age >= 18;
    }
}
const user1 = new User('Sam', 'Doe', 'Mrs', 20);
console.log(user1.getFullName());
console.log(user1.canVote());
const user2 = new User('John', 'Connor', 'Mr', 17);
console.log(user2.getFullName());
console.log(user2.canVote());
//
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
        return `Hello ${fullName}!`;
    }
}
const user1 = new User('Tom', 'Green');
console.log(user1.getFullName());
console.log(user1.getGreeting());
//
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
class Dimension {
    set height(value) {
        this._height = Number.parseInt(value, 10);
    }
}
const dimension = new Dimension();
dimension.height = "200";
console.log(dimension);
//
class User {
    get age() {
        return this._age;
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '20';
console.log(user.age);
//
class Height{
    get height(){
        return this._height;
    }
    set height(value) {
        this._height = Number.parseInt(value, 10);
    }
}
const height = new Height();
height.height = '100';
console.log(height.height);
//
class User {
    constructor(age){
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User("40");
console.log(user.age);
user.age = '32';
console.log(user.age);
//
class Tasks {
    constructor(todos){
        this._todos = todos;
    }
    get todos(){
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Laundry', 'Clean kitchen']);
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
const payment = new Payment(10);
console.log(payment.amount);

payment.amount = 7;
console.log(payment.amount);
//
class Config {
    static getYear() {
        const date  = new Date();
        return date.getFullYear();
    }
}
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
    setGrade(grade){
        this.grade = grade;
        return this;
    }
    requestCertificate(){
        this.askedForCertificate = true;
        return this;
    }
    receivedCertificate(){
        this.received = true;
        return this;
    }
    job(){
        this.startedToWork = true;
        return this;
    }
}
const course = new Course('Learn JavaScript', false);
console.log(course.markAsCompleted().setGrade(18).requestCertificate().receivedCertificate().job());
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
const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount);
//
class BookSale {
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
    apllyPercentageDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}
const bookSale = new BookSale;
console.log(bookSale.applyStudentDiscount().setCurrency('eur').apllyPercentageDiscount(5));