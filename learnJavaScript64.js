class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
};
class Manager {
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter in
        ${this.department}`);
    }
};
//
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
};
//
class Manager extends Employee {
    constructor(firstName, lastName, department){
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformancereview(){
        console.log(`Sent performance review for current 
        quarter in ${this.department}`);
    }
}
const manager = new Manager("Jason", "Muro", "Architecture department");
console.log(manager.getFullName());
console.log(manager.getInitials());
console.log(manager.sendPerformancereview());
//
class Manager extends Employee {
    constructor(firstName, lastName, department){
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current
        quarter in ${this.department}`);
    }
    getFullName(){
        return super.getFullName() + " [manager]";
    }
}
const manager = new Manager("Jason", "Atkinson", "Produce");
console.log(manager.sendPerformanceReview());
console.log(manager.getFullName());
console.log(manager.getInitials());
console.log(manager.department);
//
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    canVote(){
        return this.age >= 18;
    }
};
class Admin extends User {
    constructor(firstName, lastName, age, type) {
        super(firstName, lastName, age);
        this.type = type;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} [superadmin]`;
    }
    updateConfig(){
        return "Config updated";
    }
};
const user = new User("Sam", "Green", 17);
console.log(user.canVote());
console.log(user.getFullName());
//
const admin = new Admin("Alex", "Blue", 20, "superadmin");
console.log(admin.canVote());
console.log(admin.getFullName());
console.log(admin.updateConfig());
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    isSquare(){
        return this.width === this.height;
    }
};
console.log(typeof(Rectangle));
//
Rectangle.prototype.isSquare = function(){
    return this.width === this.height;
}
//
function User(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};
User.prototype.canVote = function(){
    return this.age >= 18;
};
const user = new User("Sam", "Green", 43);
console.log(user.getFullName());
console.log(user.canVote());
//
setTimeout(() => {
    console.log("One second has elapsed");
}, 2000);
setTimeout(() => {
    console.log("One")
}, 3000);
setTimeout(() => {
    console.log("Yes")
}, 4000);
setTimeout(() => {
    console.log("U!")
}, 5000);
//
const delayedWelcome = name => {
    setTimeout(() => {
        console.log(`Welcome ${name}!`);
    });
};
console.log(delayedWelcome("Sam"));
console.log(delayedWelcome("Alex"));