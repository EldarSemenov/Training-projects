class User {
    set age(value) {
        console.log("Age setter");
        this._age = Number.parseInt(value, 10);
    }
}

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
    set year(value) {
        this._year = Number.parseInt(value, 10);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user = new User("Eldar", "Semenov");
user.age = "18";
user.year = "1984";
console.log(user);
console.log(user.getFullName());
console.log(user.age);

class User {
    constructor(age) {
        this.age = age;
    }
    get age() {
        console.log("Age Getter");
        return this._age;
    }
    set age(value) {
        console.log("Age Setter");
        this._age = Number.parseInt(value, 10);
    }
}

const user = new User("37");
console.log(user.age);
user.age = "28";
console.log(user.age);
console.log(user);

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = new Student("Eldar", "Semenov", "37");
console.log(student.getFullName());
console.log(student.age);
student.age = "38";
console.log(student.age);
console.log(student);

class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(", ");
    }
}
const tasks = new Tasks(["Wash your car", "Learn Programming"]);
console.log(tasks.todos);

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    get amount() {
        return this._cents;
    }
    set amount(value) {
        this._cents = Number.parseInt(value, 10) * 100;
    }
}
const payment = new Payment("10");
console.log(payment.amount);
payment.amount = 9;
console.log(payment.amount);
console.log(payment);

class Config {
    static getYear() {
        return new Date().getFullYear();
    }
}

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
        this.grade = grade;
        return this;
    }
    requestCertificate() {
        this.askedForCertificate = true;
        return this;
    }
}
const course = new Course("Learn JavaScript", false);
console.log(course.markAsCompleted().setGrade(18).requestCertificate());
//Course {name: 'Learn JavaScript', isCompleted: true, grade: 18, askedForCertificate: true}

class Discount {
    constructor() {
        this.anount = 1000;
    }
    applyDiscount() {
        if (Discount.isValid()) {
            this.amount = 500;
        }
    }
    static isValid() {
        return Math.random() <= 0.5; // 50% chance return true
    }
}
console.log(Discount.isValid());
const discount = new Discount();
discount.applyDiscount();
console.log(discount.amount);

class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = "usd";
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
        this.amount = this.amount - (this.amount * percent) / 100;
        return this;
    }
}
const bookSale = new BookSale();
//bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(20);
console.log(bookSale);
