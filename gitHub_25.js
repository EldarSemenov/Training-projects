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
        console.log(`Sent performance review for current quarter.`);
    }
    getFullName() {
        return `${this.lastName} ${this.firstName} [manager]`;
    }
}

const manager = new Manager("Mike", "Green");
manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());

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
            `Sent performance review fro current quarter in ${this.department}`
        );
    }
    getFullName() {
        return super.getFullName() + " [Manager]";
    }
}

const manager = new Manager("Alex", "Green", "Marketing");
console.log(manager.department);
console.log(manager.getFullName());
console.log(manager.getInitials());

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

const user = new User("Sam", "Blue", 34);
console.log(user.getFullName());
console.log(user.canVote());

setTimeout(() => {
    console.log("Two seconds has elapsed");
}, 2000);

const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback();
    }, 1000);
};

welcomeUser("Eldar");

const sumTemperatures = (temperatures, callback) => {
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => total + current, 0);
        callback(sum);
    }, 1000);
};

console.log(sumTemperatures([2, 3]));

const sumGrades = (grades, callback) => {
    setTimeout(() => {
        const sum = grades.reduce((total, current) => total + current, 0);
        if (callback) {
            callback(sum);
        }
    }, 1000);
};

const calculateSum = grades => {
    sumGrades(grades, value => {
        console.log(`The sum is: ${value}`);
    });
};

calculateSum([10, 10]);
calculateSum([10, 20]);
