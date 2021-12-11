class Employee{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
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
    constructor(firstName, lastName, department){
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
const manager = new Manager('Sam', 'Green', 'Marketing');
console.log(manager.department);
console.log(manager.getFullName());
//
setTimeout(() => {
   console.log('Hello World! Delayed for 3 seconds!');
}, 3000);
//
const delayedWelcome = (name = 'user') => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
    }, 2000);
}
delayedWelcome('Alex');
delayedWelcome();
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}
console.log('A');
wait(2000).then(() => {
    console.log('B');
});
console.log('C');
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== 'flight-status'){
            reject('Invalid endpoint. Only flight-status is supported.')
        }
const min = 1;
const max = 2;
const rand = Math.floor(Math.random() * (max - min + 1)) + min;

const dataToResolve = {
    departed: false,
    delayed: true
};
setTimeout(() => {
    resolve(dataToResolve);
}, rand);
    });
}
const logFlightStatus = () => {
    fakeFetch('flight-status').then(data => {
        console.log(data);
    });
}