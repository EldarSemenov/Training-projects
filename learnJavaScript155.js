class Discount {
    constructor() {
        this.amount = 1000;
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
    applyDiscount() {
        if(Discount.isValid()) {
            this.amount = 500;
        }
    }
}
console.log(Discount.isValid());
const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount);
//
class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = 'USD';
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
console.log(bookSale.applyStudentDiscount().setCurrency('EUR').applyPercentageDiscount(5));
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
    constructor(firstName, lastName, age, usertype) {
        super(firstName, lastName, age);
        this.usertype = usertype;
    }
    getFullName() {
        return `${super.getFullName()} [${this.usertype}]`
    }
    updateConfig() {
        return 'Config updated';
    }
}
const user = new User('Sam', 'Green', 17);
console.log(user);
console.log(user.getFullName());
console.log(user.canVote());

const admin = new Admin('Eldar', 'Neumann', 39, 'senior programmer');
console.log(admin);
console.log(admin.getFullName());
console.log(admin.canVote());
console.log(admin.updateConfig());