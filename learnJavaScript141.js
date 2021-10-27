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
class Manager {
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName + this.lastName;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
}
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
class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
    getFullName() {
        return super.getFullName() + '[manager]';
    }
}
const manager = new Manager('Sam', 'Green', 'Marketing');
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
}
class Admin extends User {
    constructor(firstName, lastName, age, userType) {
        super(firstName, lastName, age);
        this.userType = userType;
    }
    getFullName() {
        return `${super.getFullName()} [${this.userType}]`;
    }
    updateConfig(){
        return 'Config updated';
    }
}
const user = new User('Sam', 'Green', 16);
console.log(user);
console.log(user.getFullName());
console.log(user.canVote());

const admin = new Admin('Eldar', 'Neumann', 40, 'senior administer');
console.log(admin);
console.log(admin.getFullName());
console.log(admin.canVote());
console.log(admin.updateConfig());
//
// HOW TO USE CLASS IN OTHER FUNCTION
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const createSquare = () => {
    return new Rectangle(10, 10); //USING PARAMETRS FROM CLASS Rectangle
}
console.log(createSquare());
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
}
console.log(createPerson('Tomas', 'Eddison'));
//
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}
const buyCar = () => {
    return new Car('Tesla Model 3', 45000);
}
console.log(buyCar());