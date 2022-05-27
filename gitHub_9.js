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
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager).`;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
}
const manager = new Manager("Sam", "Green");
manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return `${this.firstName[0]} ${this.lastName[0]}`;
    }
    canVote() {
        return this.age >= 18;
    }
    getMessage() {
        if (this.age >= 18) {
            return `Welcome! Thank you for coming!`;
        } else {
            return `Thank you for coming! Unfortunately, your age is not allows you to vote.`;
        }
    }
}

class Admin extends User {
    getFullName() {
        return `${this.firstName} ${this.lastName} [Admin]`;
    }
    getUpdatedConfig() {
        return `Config is updated successfully!`;
    }
}

const user = new User("Jason", "Nikolson", 17);
console.log(user.getFullName());
console.log(user.getInitials());
console.log(user.canVote());
console.log(user.getMessage());

const admin = new Admin("Eldar", "Semenov", 41);
console.log(admin.getFullName());
console.log(admin.getInitials());
console.log(admin.getMessage());
console.log(admin.getUpdatedConfig());

const student = new User("Artur", "Semenov", 22);
console.log(student.getFullName());
console.log(student.getInitials());
console.log(student.canVote());
console.log(student.getMessage());

class Mobile {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDiscription() {
        return `The ${this.name} costs ${this.price}`;
    }
}
class Android extends Mobile {
    getVersion() {
        return 12;
    }
}
class iOS extends Mobile {
    getVersion() {
        return 15;
    }
}
const galaxy = new Android("Sumsung Galaxy", 400);
console.log(galaxy.getDiscription());
console.log(galaxy.getVersion());

const ios = new iOS("iPhone 15", 500);
console.log(ios.getDiscription());
console.log(ios.getVersion());

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
        return this.firstName[0] + this.lastName[0];
    }
    sendPerformanceReview() {
        console.log(
            `Sent performance review for current quarter in ${this.department}`
        );
    }
}

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
        console.log(
            `Sent performance review for current quarter in ${this.department}`
        );
    }
    getFullName() {
        return super.getFullName() + " [manager]";
    }
}

const manager = new Manager("Sam", "Green", "Marketing");
console.log(manager.department);
console.log(manager.getFullName());
console.log(manager.getInitials());

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
    updateConfig() {
        return `Config Updated.`;
    }
}

const admin = new Admin("Eldar", "Semenov", 41, "Senior Programmer");
console.log(admin.getFullName());
console.log(admin.canVote());
console.log(admin.updateConfig());

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    isSquare() {
        return this.width === this.height;
    }
}
const rec = new Rectangle(100, 100);
console.log(rec.isSquare());

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
User.prototype.canVote = function () {
    return this.age >= 18;
};
const user = new User("Jason", "Horiston", 18);
console.log(user.getFullName());
console.log(user.canVote());

class Welcome {
    sayHello() {
        return "Hello World!";
    }
}
const welcome = new Welcome();
console.log(welcome.sayHello());
console.log(welcome);
*/
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
        return "Config updated";
    }
}

const admin = new Admin("Alex", "Blue", 20);
console.log(admin);
console.log(Object.getPrototypeOf(admin));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(admin)));
console.log(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(admin)))
);
console.log(
    Object.getPrototypeOf(
        Object.getPrototypeOf(
            Object.getPrototypeOf(Object.getPrototypeOf(admin))
        )
    )
);