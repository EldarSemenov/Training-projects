class Student {
    constructor(firstName, lastName, prefix, age, sex, idNumber, university, faculty, 
        nameOfAddCourse, isAddCourseCompleted, additionalTodos, amount) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.prefix = prefix;
            this._age = age;
            this.sex = sex;
            this.idNumber = idNumber;
            this.university = university;
            this.faculty = faculty;
            this.nameOfAddCourse = nameOfAddCourse;
            this.isAddCourseCompleted = isAddCourseCompleted;
           
            this._additionalTodos = additionalTodos;
            this.amount = amount;
            this.bookPayAmount = 2000;
        }
        getFullNameOfStudent() {
            return `${this.firstName} ${this.lastName}`;
        }
        getInitialsOfStudent() {
            return this.firstName[0] + this.lastName[0];
        }
        set age(value) {
            return this._age = Number.parseInt(value, 10);
        }
        get age() {
            return this._age;
        }
        getFacultyOfStudent() {
            return `${this.getFullNameOfStudent()} is a student of the ${this.faculty} faculty.`; //instance method
        }
        getGreeting() {
            return `Hello ${this.prefix}. ${this.getFullNameOfStudent()}!
            Thank you for joining us. You became is a student of the ${this.university} 
            of the faculty of ${this.faculty}.`
        }
        markAsCompleted(score) {
            if(score >= 100) {
                this.isAddCourseCompleted = true;
            }
            else {
                `Less than 100 is not sufficient to complete the ${this.nameOfAddCourse}.
                Keep going!`;
            }
            return this; //NOT SURE!
        }
        setGrade(grade) {
            this.grade = grade;
            return this;
        }
        requestCertificate() {
            this.askedForCertificate = true;
            return this;
        }
        canVote() {
            if(this._age >= 20) {
                return `Thank you so much ${this.prefix}. ${this.getFullNameOfStudent()}
                for participation in poll of the University of Minnesota.
                Your vote is important for us.`; 
            }
            else {
                return `Dear ${this.prefix}. ${this.getFullNameOfStudent()}, 
                unfortunately you are not able to vote since your age is ${this._age}.
                The age has to be equal to 20 or more.`; 
            }
        }
        get additionalTodos() {
            return this._additionalTodos.join(', ')
        }
        makePayment() {
            return new PaymentForSnack(this.amount)  //NOT SURE ABOUT THIS FUNCTION
        }
        static getYear() {
            return `Current studying year is: ${new Date().getFullYear()}`;
        }
        static getMonth() {
            return `Current studying of the month is: ${new Date().getMonth()}`;
        }
        static getTime() {
            return new Date().getTime();
        }
        static isValidDiscount() { ///NOT WORKING
            return Math.random() <= 0.5
        }
        applyDiscountForBook() {
            if(this.isValidDiscount()) {
                return this.bookPayAmount = 15000;
            }
        }
        discountForUniform() {
            if(this._age <= 20) {
                return this.amount = 30; //NOT SURE
            }
            else {
                return  this.amount = 45;
            }
        }
        infoRentonSale() {
            let ourStudent = new RentSale;
            return ourStudent.applyRentDiscount().setCurrency('EUR').applyPercentageDiscount(5);
        }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
class Manager extends Student {
    constructor(firstName, lastName, prefix, age, sex, idNumber, university, faculty, department) {
        super(firstName, lastName, prefix, age, sex, idNumber, university, faculty);
        this.department = department;
    }
    getFullName() {
        super.getFullNameOfStudent() + ' [manager]';
        return this;
    }
    getInitials() {
        `${super.getInitialsOfStudent()} [manager]`;
        return this;
    }
    sendConfig() {
        console.log(`Send financial report to ${this.department}`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
class PaymentForSnack {
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
//////////////////////////////////////////////////////////////////////////////////////////////////////
class RentSale {
    constructor() {
        this.amount = 2000;
        this.currency = 'USD';
        this.isStudent = false;
    }
    applyRentDiscount() {
        this.isStudent = true;
        this.amount = 1000;
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


const student1 = new Student('Jason', 'McMuster', 'Mr', 19, 'Male', 82736362, 
'University of Minnesota', 'Computer Science', 'Java Script', false, ['Learn HTML, learn CSS'],
'5',);
console.log(student1);
console.log(student1.getFullNameOfStudent());
console.log(student1.getInitialsOfStudent());
console.log(student1.age);
console.log(student1.getFacultyOfStudent());
console.log(student1.getGreeting());
console.log(student1.markAsCompleted(102).setGrade(102).requestCertificate());
console.log(student1.canVote());
console.log(student1.makePayment());
console.log(Student.getYear());
console.log(Student.getMonth());
console.log(Student.getTime());
console.log(student1.discountForUniform());
console.log(student1.infoRentonSale());

const manager = new Manager('Eldar', 'Neumann', 'Mr', 42, 'Male', 8234223, 
'University of Minnesota', 'Computer Science', 'Coding department');
console.log(manager);
console.log(manager.getFullName());
console.log(manager.getInitials());
manager.sendConfig();
console.log(manager.canVote());
console.log(manager.infoRentonSale());
console.log(manager.discountForUniform());
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(120, 120);
}
console.log(makeSquare());
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
}
console.log(createPerson('Sam', 'Green'));
//
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = 18;
        console.log(firstName + " " + lastName);
    }
}
const person = new Person('Jason', 'Moris');
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}
console.log(new Course('Learn JavaScript', false));
console.log(new Course('HTML', true));