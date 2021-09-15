class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    markAsCompleted() {
        this.isCompleted = true;
        return this;
    }
    setGrade(grade) {
        this.gtade = grade;
        return this;
    }
    requestCertificate() {
        this.askedForCertificate = true;
        return this;
    }
}
//
class Discount {
    constructor() {
        this.amount = 1000;
    }
    applyDiscount() {
        if(Discount.isValid()) {
            this.amount = 500;
        }
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
}
//
class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = 'usd';
        this.isStudent = false;
    }
    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 800;
        return this;
    }
    setCurrency(currency) {
        this.currency = currency;
        return this;
    }
    applyPercentageDiscount(percent) {
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency('eur').applyPercentageDiscount(5);
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
class Manager {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter`);
    }
}
//
class Employee{
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
    sendPerformancereview() {
        console.log(`Send perofrmance review for current quarter`);
    }
}
const manager = new Manager('Sam', 'Green');
manager.sendPerformancereview();
manager.getFullName();
manager.getInitials();
//
class Manager extends Employee {
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }
    sendPerformancereview() {
        console.log(`Send performance review for current quarter`);
    }
}
//
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    canVote() {
        return this.age >= 18;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Admin extends User {
    getFullName() {
        return `${this.firstName} ${this.lastName} [admin]`;
    }
    getConfigUpdated() {
        return `Config. is updated`;
    }
}
const user = new User('Jason', 'Muro', 16);
console.log(user.canVote());
console.log(user.getFullName());
console.log(`-----`);
const admin = new Admin('Alex', 'Green', 44);
console.log(admin.canVote());
console.log(admin.getFullName());
console.log(admin.getConfigUpdated());
//
class MobilePhone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `The ${this.name} costs ${this.price} dollars.`;
    }
}
class Android extends MobilePhone {
    getVersion() {
        return 15;
    }
}
class IOS extends MobilePhone {
    getVersion() {
        return 12;
    }
}
const android = new Android('Samsung Galaxy', 500);
console.log(android.getDescription());
console.log(android.getVersion());
//
const ios = new IOS('iPhone Pro', 1200);
console.log(ios.getDescription());
console.log(ios.getVersion());
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
}
//
class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
    getFullName() {
        return super.getFullName() + ' [manager]';
    }
}
const manager = new Manager('Sam', 'Blue', 'Marketing');
console.log(manager.department);
console.log(manager.getFullName());
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
    updatedConfig() {
        return 'Config updated';
    }
}
const user = new User('Sam', "Green", 17);
console.log(user.canVote());
console.log(user.getFullName());
//
const admin = new Admin('Johnoton', 'Boston', 32, 'SuperAdmin');
console.log(admin.canVote());
console.log(admin.getFullName());
console.log(admin.updatedConfig());