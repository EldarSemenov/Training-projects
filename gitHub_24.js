class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(", ");
    }
}

const tasks = new Tasks(["Homework", "Drill"]);
console.log(tasks.todos);
console.log(tasks);

class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    set amount(value) {
        return (this._cents = Number.parseInt(value, 10) * 100);
    }
    get amount() {
        return this._cents;
    }
}
const payment = new Payment(10);
console.log(payment.amount);
payment.amount = 9;
console.log(payment.amount);

class Config {
  static getYear(){
    const date = new Date();
    return date.getFullYear();
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
        return this; // allows method chaining
    }
}

const course = new Course("JavaScript", false);
console.log(course);

console.log(course.markAsCompleted().setGrade(20).requestCertificate());

class Student {
    constructor(firstName, lastName, age, course, isCompleted) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
        this.isCompleted = isCompleted;
    }
    set age(value) {
        return Number.parseInt(value, 10);
    }
    get age() {
        return this._age;
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
        if ((this.askedForCertificate = true)) {
            return `Student requested certificate.`;
        } else {
            `This student did not send request for certifictae.`;
        }
    }
    getCertificate() {
        this.studentGotCertificate = true;
        return this;
    }
}

const student = new Student("Eldar", "Semenov", "38", "JavaScript", true);
console.log(student);
console.log(student.requestCertificate());
console.log(student.);

class Discount {
    constructor() {
        this.amount = 1000;
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
    applyDiscount() {
        if (Discount.isValid()) {
            this.amount = 500;
        }
    }
}
console.log(Discount.isValid());
const discount = new Discount();
discount.applyDiscount();
console.log(discount.amount);

class BookSale {
    constructor() {
        this.amount = 1000;
        this.currency = "USD";
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
    }
}
const bookSale = new BookSale();
console.log(
    bookSale
        .applyStudentDiscount()
        .setCurrency("CA")
        .applyPercentageDiscount(50)
);
console.log(bookSale);

class Booksale {
    constructor(firstName, lastName) {
        this.amount = 1500;
        this.currency = "USD";
        this.isStudent = false;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static isValidDiscount() {
        return Math.random() <= 0.5;
    }
    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 1000;
        return this;
    }
    setCurrency() {
        this.currency = "CAN";
        return this;
    }
    applyPercentageDiscount(percent) {
        if (Booksale.isValidDiscount()) {
            this.amount =
                this.amount -
                (this.amount * Number.parseInt(percent, 10)) / 100;
        }
    }
    getStudentFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const firstStudentForBookSale = new Booksale("Eldar", "Semenov");
console.log(firstStudentForBookSale);
firstStudentForBookSale
    .applyStudentDiscount()
    .setCurrency()
    .applyPercentageDiscount("10")
    .getStudentFullName();
console.log(firstStudentForBookSale);
