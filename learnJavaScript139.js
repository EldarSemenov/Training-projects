const users = [
    {
        id: 1,
        name: 'Roman',
        isVerified: false
    },
    {
        id: 2,
        name: 'Alex',
        isVerified: false
    },
    {
        id: 3,
        name: 'Jason',
        isVerified: false
    }
];
const getVerofiedUsers = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
}
getVerofiedUsers(users, 2);
console.log(users);
//
const grades = [10, 20];
const grdaesCopy = [...grades];
console.log(grdaesCopy);
//
const grades = [10, 20];
const updated = [...grades, 15];
console.log(updated);
//
const grades = [10, 20, 15];
const updated = grades.filter(grade => grade !== 20);
console.log(updated);
//
const originalApps = ['Calculator', 'Phone'];

const addApp = (apps, app) => {
    return [...apps, app];
}
console.log(addApp(originalApps, 'Smart lights'));
//
const user = {
    id: 1,
    age: 23
};
const cloned = {...user};
console.log(cloned);
//
const user = {
    id: 1, 
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 1
};
console.log(clonedUser);
//
const book = {
    id: 1,
    title: 'Harry Potter',
    year: 2017,
    rating: 4.5
};
const {year, ...rest} = book;
console.log(rest);
//
const person = {
    id: 2938293,
    firstName: 'Eldar',
    lastName: 'Semenov',
    reason: true
};
const {reason, ...rest} = person;
console.log(rest);
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
//
const makeSquare = () => {
    return new Rectangle (10, 10);
}
console.log(makeSquare());
//
const makeRectangle = () => {
    return new Rectangle(200, 100);
}
console.log(makeRectangle());
//
class SquareForRoom {
    constructor(width, height, elevation) {
        this.width = width;
        this.height = height;
        this.elevation = elevation;
    }
}
const createRoom = () => {
    return new SquareForRoom(400, 700, 350);
}
console.log(createRoom());
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person (fName, lName);
}
console.log(createPerson('Eldar', 'Neumann'));
//
class Person {
    constructor(firstName, lastName) {
        console.log(firstName + ' ' + lastName);
    }
}
const person = new Person('Sam', 'Green');
const second_person = new Person('Eldar', 'Neumann');
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person = new Person('Eldar', 'Neumann');
console.log(person);
//
class Person {
    constructor(firstName, lastName) {
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
console.log(new User('Eldar', 'Neumann', 40));
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}
console.log(new Course('JavaScript', false));
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person('Eldar', 'Neumann');
console.log(person.getFullName());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if(this.isCompleted) {
            return `You have completed the ${this.name} course.`;
        } else {
            return `You are currently studying the ${this.name} course.`
        }
    }
}
const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription());
const course2 = new Course("Intriduction to Programming", true);
console.log(course2.getDescription());
//
class User{
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }
    canVote() {
        return this.age >= 18;
    }
}
const user1 = new User("Eldar", "Neumann", "Mr", 200);
console.log(user1.getFullName());
console.log(user1.canVote());

const user2 = new User('Jasica', 'Muro', 'Ms', 17);
console.log(user2.getFullName());
console.log(user2.canVote());
//
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting() {
        const fullName = this.getFullName();
        return `Hello ${fullName}`;
    }
}
const user1 = new User('Eldar', 'Neumann');
console.log(user1.getFullName());
console.log(user1.getGreeting());