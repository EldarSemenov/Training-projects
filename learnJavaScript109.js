class Translation {
    constructor(word){
        this.word = word;
    }
    isEnglishWord(){

    }
    isSpanishWord(){

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
    return new Rectangle(10, 10);
}
console.log(makeSquare());
//
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
const makeRectagle = () => {
    return new Rectangle (100, 80);
}
console.log(makeRectagle());
//
const makeRectagle1 = () => {
    return new Rectangle (113, 89);
}
console.log(makeRectagle1());
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person (fName, lName);
}
console.log(createPerson('Sam', "Tompson"));
//
class Person{
    constructor(){
        console.log('I was automatically called');
    }
}
const person = new Person;
const person1 = new Person;
//
class Person {
    constructor(firstName, lastName) {
        console.log(firstName + ' ' + lastName);
    }
}
const person = new Person('Sam', 'Green');
//
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person = new Person('Sam', 'Green');
console.log(person);
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = 18;
    }
}
//
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
console.log(new User('Eldar', 'Semenov', 37));
//
class Course{
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
}
console.log(new Course('JavaScript', false));
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
const person = new Person('Sam', 'Green');
console.log(person.getFullName());
//
class Course {
    constructor(name, isCompleted){
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription(){
        if(this.isCompleted) {
            return `You have completed the ${this.name} course`;
        }else{
            return `You are currently studying the ${this.name} course.`;
        }
    }
}
const course1 = new Course('Learn JavaScript', false);
console.log(course1.getDescription());
const course2 = new Course('Learn Programming', true);
console.log(course2.getDescription());
//
class User{
    constructor(prefix, firstName, lastName, age){
        this.prefix = prefix;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }
    canVote(){
        return this.age >= 18;
    }
}
const user1 = new User('Ms', 'Linda', 'Tompson', 17);
console.log(user1.getFullName());
console.log(user1.canVote());

const user2 = new User('Mr', 'Jhon', 'Pitersky', 44);
console.log(user2.getFullName());
console.log(user2.canVote());
//
class User {
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