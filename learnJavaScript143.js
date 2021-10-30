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
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }
}
const manager = new Manager('Sam', 'Green');
manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class MobilePhone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `The ${this.name} costs ${this.price}`;
    }
}
class Android extends MobilePhone {
    getVersion() {
        return 12;
    }
}
class iOS extends MobilePhone {
    getVersion() {
        return 15;
    }
}
const galaxy = new Android('Galaxy', 400);
console.log(galaxy.getDescription());
console.log(galaxy.getVersion());

const iphone = new iOS('iPhone', 900);
console.log(iphone.getDescription());
console.log(iphone.getVersion());
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
        return super.getFullName() + ' [manager]'; //Calling "parent instance methods"
    }
}
const manager = new Manager('Sam', 'Green', 'Marketing');
console.log(manager);
console.log(manager.department);
console.log(manager.getFullName());
console.log(manager.getInitials());
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
        return `${this.firstName} ${this.lastName} [${this.userType}]`;
    }
    updateConfig() {
        return 'Config updated';
    }
}
const user = new User('Alex', 'Muroston', 17);
console.log(user);
console.log(user.getFullName());
console.log(user.canVote());

const admin = new Admin('Eldar', 'Neuaman', 44, 'Administer');
console.log(admin);
console.log(admin.getFullName());
console.log(admin.canVote());
console.log(admin.updateConfig());