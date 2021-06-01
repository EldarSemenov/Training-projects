class Translation {
    constructor(word){
        this.word = word;
    }
    isEnglishWord(){

    }
    iaSpanishWord(){

    }
};
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(10, 10);
};
console.log(makeSquare());
//
class Triangle {
    constructor(point1, point2, point3){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
};
const makeTriangle = () => {
    return new Triangle(12, 12, 12);
};
console.log(makeTriangle())
//
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
};
console.log(createPerson("James", "Doe"));
console.log(createPerson("Alex", "Muro"));
//
class House {
    constructor(color){
        this.color = color;
    }
    getFurniture(){
        return 'sofa'
    }
};
const houseObject = new House('red')
const houseObject2 = new House('blue')

console.log(houseObject.color);
console.log(houseObject.getFurniture());
console.log(houseObject2.color);
console.log(houseObject2.getFurniture());
//
class Person1 {
    constructor(){
        console.log("I was automatically called");
    }
}
const person = new Person1;
console.log(person);
//
class Person2 {
    constructor(firstName, lastName) {
        console.log(`${firstName} ${lastName}`);
    }
};
const per = new Person2("Sam", "Green");
console.log(per);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
const person = new Person("Sam", "Doe");
console.log(person);
//
class Person1 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = 18;
    }
}
const votePerson = new Person1("Kale", "Tompson", 12);
console.log(votePerson);
//
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
console.log(new User("Sam", "Blue", 19));
console.log(new User("Alex", "Green", 25));
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
};
console.log(new Course("Learn JavaScript", false));
console.log(new Course("Learn Programming", true));
class Person {
    constructor (firstName, lastName) {
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
//console.log(getFullName("Jason", "Stetam"));
console.log(person);