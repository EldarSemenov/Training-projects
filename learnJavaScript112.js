class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    isSquare() {
        if (this.width === this.height){
            return true;
        }
    }
}
const rectangle = new Rectangle(10, 10);
console.log(rectangle.isSquare());
console.log(typeof(Rectangle));
//
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.isSquare = function() {
    return this.width === this.height;
}
//
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
User.prototype.canVote = function() {
    return this.age >= 18;
}
const user = new User('Sam', "Blue", 20);
console.log(user.getFullName());
console.log(user.canVote());
//
class Welcome {
    sayHello() {
        return 'Hello World!';
    }
}
const welcome = new Welcome();
console.log(Object.getPrototypeOf(welcome));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(welcome)));
//
class Parent {
    parentMethod(){

    }
}
class Child extends Parent {
    childMethod() {

    }
}
const child = new Child();
console.log(Object.getPrototypeOf(child));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))));
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
    getFullName() {
        return `${this.firstName} ${this.lastName} [admin]`;
    }
    updateConfig() {
        return 'Config updated';
    }
}
const admin = new Admin('Alex', 'Green', 20);
console.log(admin);
console.log(Object.getPrototypeOf(admin));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(admin)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(admin))));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(admin)))));
/*
class User {
    constructor() {
        #votingAge = 18;
    }
}
const user = new User;
console.log(user#votingAge);
*/
class User {
    #votingAge = 18;
    get votingAge() {
        return this.#votingAge;
    }
    set votingAge(age) {
        if (age >= 18) {
            this.#votingAge = age;
        }
    }
}
const user = new User();
console.log(user.votingAge);
user.votingAge = 10;
console.log(user.votingAge);
user.votingAge = 20;
console.log(user.votingAge);