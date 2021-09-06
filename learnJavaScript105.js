class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
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
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter`);
    }
}
const employee = new Employee('Mark', 'Lomet');
console.log(employee.getFullName('Mark', 'Lomet'));
console.log(employee.getInitials('Mark', 'Lomet'));
//
class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
}
class Manager extends Employee {
    sendPerformanceReview(){
        console.log(`Sent performance review for current quarter`);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} (manager)`;
    }
}
const manager = new Manager('Sam', 'Green');
console.log(manager.sendPerformanceReview());
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    canVote(){
        return this.age >= 18;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
class Admin extends User {
    fullName(){
        return `${this.firstName} ${this.lastName} [admin]`
    }
    updatedConfig(){
        return `Config updated`;
    }
}
const user = new User('Tom', 'Pelonsky', 17);
console.log(user.canVote());
console.log(user.fullName());
const admin = new Admin('Alex', 'Leson', 34);
console.log(admin.canVote());
console.log(admin.fullName());
console.log(admin.updatedConfig());
//
class MobilePhone{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getDescription(){
        return `This ${this.name} costs ${this.price}`;
    }
}
class Android extends MobilePhone {
    getVersion(){
        return 12;
    }
}
class iOS extends MobilePhone {
    getVersion(){
        return 15;
    }
}
const android = new Android('Samsung Galaxy', 400);
console.log(android.getDescription());
console.log(android.getVersion());

const ios = new iOS('Apple 12', 500);
console.log(ios.getDescription());
console.log(ios.getVersion());
//
class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return this.firstName[0] + this.lastName[0];
    }
}
class Manager extends Employee{
    constructor(firstName, lastName, department){
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview(){
        console.log(`Sent performance review for current quater in ${this.department}`);
    }
    getFullName(){
        return super.getFullName() + ' [manager]';
    }
}
const manager = new Manager('Sam', 'Blueston', 'Marketing');
console.log(manager.department);
console.log(manager.getFullName());
//
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    canVote(){
        return this.age >= 18
    }
}
class Admin extends User{
    constructor(firstName, lastName, age, userType){
        super(firstName, lastName, age);
        this.userType = userType;
    }
    getFullName(){
        return `${super.getFullName()} [${this.userType}]`;
    }
    updateConfig(){
        return 'Config updated';
    }
}
const user = new User('Sam', 'Green', 17);
console.log(user.canVote());
console.log(user.getFullName());
const admin = new Admin('Alex', 'Blueston', 20, 'superAdmin');
console.log(admin.canVote());
console.log(admin.getFullName());