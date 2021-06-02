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
            return `You have completed the ${this.name} course.`;
        }
        else{
            return `You are currently studying the ${this.name} course.`
        }
    }
};
const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription());
const course2 = new Course("Learn Programming", true);
console.log(course2.getDescription());
//
class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName(){
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
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
const user1 = new User("Jhon", "Doe", "Mr", 20);
console.log(user1.getFullName());
console.log(user1.canVote());
const user2 = new User("Linda", "Amerson", "Ms", 17);
console.log(user2.getFullName());
console.log(user2.canVote());
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getGteeting(){
        const fullName = this.getFullName();
        return `Hello ${fullName}`;
    }
}
class User {
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = "18";
console.log(user);
//
class User1 {
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user1 = new User1();
user1.age = "100";
console.log(user1);
//
class User2{
    set year(value){
        console.log("year setter");
        this._year = Number.parseInt(value, 10);
    }
}
const user2 = new User2();
user2.year = "2022";
console.log(user2);
//
class User3{
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user3 = new User3();
user3.age = "20";
console.log(user3);
//
class User4{
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user4 = new User4();
user4.age = "212";
console.log(user4);
//
class User5{
    set year(value){
        console.log("setting year");
        this._year = Number.parseInt(value, 10);
    }
}
const user5 = new User5();
user5.year = "300";
console.log(user5);
//
class User6 {
    set age(value){
        console.log("setting age");
        this._age = Number.parseInt(value, 10);
    }
}
const user6 = new User6();
user6.age = "1000";
console.log(user6);
//
class User7{
    set age(value){
        console.log("setting age");
        this._age = Number.parseInt(value, 10);
    }
};
const user7 = new User7();
user7.age = "2000";
console.log(user7);
//
class User8 {
    set year(value){
        console.log("setting year");
        this._year = Number.parseInt(value, 10);
    }
};
const user8 = new User8();
user8.year = "1789";
console.log(user8);
class User {
    get age(){
        console.log("age getter");
        return this._age;
    }
    set age(value){
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
};
const user = new User();
user.age = "20";
console.log(user.age);
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
user.age = 31;
console.log(user.age);
//
class User{
    constructor(age){
        this.age = age; // calls set age(value)
    }
    get age(){
        console.log("age getter");
        return this._age;
    }
    set age(value){
        console.log("age setting");
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User("30");
console.log(user.age);
user.age = "31";
console.log(user.age);
//
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
};
const user = new User("33");
console.log(user.age);
user.age = "35";
console.log(user.age);
//
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
};
const user = new User("45");
console.log(user.age);
user.age = "89";
console.log(user.age +1)
//
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
const user = new User("12");
console.log(user.age);
user.age = "33";
console.log(user.age);
//
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
};
const user = new User("1225");
console.log(user.age);
user.age = "2000";
console.log(user.age);
//
class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos(){
        return this._todos.join(", ");
    }
};
const tasks = new Tasks(["Laundry", "Celan kitchen"]);
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
        return this._cents = value * 100;
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 7;
console.log(payment.amount);
//
class Payment1 {
    constructor(amount) {
        this.amount = amount;
    }
    get amount(){
        return this._cents;
    }
    set amount(value){
        return this._cents = value * 100;
    }
}
const payment1 = new Payment1(20);
console.log(payment1.amount);
payment1.amount = 50;
console.log(payment1.amount);