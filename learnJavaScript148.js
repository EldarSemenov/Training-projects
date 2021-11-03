const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({departed: false, delayed: true});
        }, 1000);
    });
}
fakeFetch().then((ss) => {
    console.log(ss);
});
//
new Promise((resolve, reject) => {
    resolve();
    reject();
});
//
const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject(`Failed. That's the only thing I do.`)
    });
}
alwaysFail().then(() => {
    //will never be called
}).catch(data => {
    console.log(data);
});
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({departed: false, delayed: true});
        }, 2000);
        if(endpoint !== 'flight-status') {
            reject('Endpoint not supported.')
        }
    });
}
fakeFetch('flight-status')
.then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

fakeFetch('user-details')
.then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
//
const fetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint === 'AUTO') {
        setTimeout(() => {
            resolve({
                product: 'Electric automobile.',
                model: 'Tesla Model 3.',
                year: 2022,
                price: 45000,
                nameOfCustumer: 'Eldar Semenov'
            });
        }, 1000);
    } else {
        setTimeout(() => {
            reject('Sorry. This is not AUTO section');
        }, 1500);
    }
    });
}

fetch('AUTO').then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

fetch('Bicycle').then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
//
const failAfter = milliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`You asked me to responce in ${milliseconds}ms and I did so!`)
        }, milliseconds);
    });
}
failAfter(2000).catch(error => {
    console.error(error);
});
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(100, 100);
}
console.log(makeSquare());
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (firstName, lastName) => {
    return new Person(firstName, lastName);
}
console.log(createPerson('Tom', 'Tompson'));
//
class Course{
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}
console.log(new Course('Learn JavaScript', false));
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if(this.isCompleted) {
            return `You have completed ${this.name} course. 
            Tomorrow you will recieve certificate. Congratulations!`;
        }
        else {
            return `You status is: you are currently studying ${this.name} course.
            Keep going.`;
        }
    }
}
const course1 = new Course('Learn JavaScript', false);
console.log(course1.getDescription());

const course2 = new Course('HTML', true);
console.log(course2.getDescription());
//
class User{
    constructor(age) {
        this.age = age;
    }
    get age () {
        return this._age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '18';
console.log(user);
console.log(user.age);
//
class Tasks{
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Laundry', 'Clean kitchen']);
console.log(tasks.todos);
//
class Payment{
    constructor(amount) {
        this.amount = amount;
    }
    set amount(value) {
        return this._cents = Number.parseInt(value, 10) * 100;
    }
    get amount() {
        return this._cents;
    }
}
const payment = new Payment(5);
console.log(payment.amount);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
    }
}
const year = () => {
    return new Config.getYear();
}
console.log(year());
//
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
const course = new Course('JavaScript', 2);
console.log(course.markAsCompleted().setGrade(19).requestCertificate());
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
const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount);
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
console.log(bookSale.applyStudentDiscount().setCurrency('EUR').applyPercentageDiscount(18));