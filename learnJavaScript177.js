const grades = [
    {grade: 10},
    {grade: 15},
    {grade: 5}
];
const sum = grades.reduce((total, current) => {
    console.log(current);
    return total + current.grade;
}, 0);
console.log(sum);
//
const tweets = [
    {
        id: 2873,
        stats: {
            likes: 41,
            retweets: 54
        }
    }, 
    {
        id: 3874,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];

const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);
//
console.log('Step 1');
try{
   nonExistentFunction();
}catch(error) {
    console.error(error);
}
console.log('Step 2');
//
const firstArray = [];
const secondArray = firstArray;
console.log(firstArray);
console.log(secondArray);
firstArray.push(10);
console.log(firstArray);
console.log(secondArray);
//
const grades = [
    {
        id: 1,
        grade: 12,
        isPassing: false
    },
    {
        id: 2,
        grade: 14,
        isPassing: true
    }
];
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades);
//
const students = [
    {
        id: 8723,
        name: 'Alex Green',
        grade: 8,
        passed: true
    },
    {
        id: 2933,
        name: 'El Fleem',
        grade: 5,
        passed: false
    }
];
const refactor = students.find(student => student.id === 2933);
refactor.grade = 8;
refactor.passed = true;

console.log(students);
//
const users = [
    {
        id: 1,
        name: 'Alex',
        isVerified: true
    },
    {
        id: 2,
        name: 'El',
        isVerified: true
    },
    {
        id: 3,
        name: 'Tom',
        isVerified: false
    }
];
console.log(users);

const verifiUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
}

console.log(verifiUser(users, 3));
console.log(users);

const isVerifiedUser = (users, number) => {
    const user = users.find(user => user.id === number);
    user.isVerified = false;
}
console.log(isVerifiedUser(users, 1));
console.log(users);
//
const changeNameAndId = (users, numberId) => {
    const user = users.find(user => user.id === numberId);
    user.name = 'Roman';
    user.id = 92385784578;
    user.isVerified = false;
}
console.log(changeNameAndId(users, 2));
console.log(users);
//
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy);
//
const grades = [10, 20, 15];
const updated = [...grades, 15];
console.log(updated);
const act = updated.filter(grade => grade !== 20);
console.log(updated);
console.log(act);
//
const originalApps = ['Calculator', 'Phone'];

const addApp = (apps, app) => {
    return [...apps, app];
}
console.log(addApp(originalApps, 'Smart lights'));
console.log(originalApps);
//
const user = {
    id: 1,
    age: 23
};
const cloned = {...user};
console.log(cloned);
//
const user = {
    id: 1,
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 1
};
console.log(clonedUser);
//
const book = {
    id: 1,
    title: 'Harry Potter',
    year: 2017,
    rating: 4.5
};
const {year, ...book1} = book;
console.log(book1);
//
const car = {
    id: 9283,
    price: '20000',
    owner: 'Jason Julion',
    model: 'BMW m3',
    year: 2022,
    category: 'auto'
};
const {owner, ...restInfoAuto} = car;
console.log(restInfoAuto);
restInfoAuto.price = restInfoAuto.price = '15000';
console.log(restInfoAuto);
restInfoAuto.year = restInfoAuto.year - 1;
console.log(restInfoAuto);

const {category, ...newRestInforAuto} = restInfoAuto;
console.log(newRestInforAuto);
//
const config = {
    darkTheme: false
};
const enableDarkTheme = config => {
    return {...config, darkTheme: true};
}
console.log(enableDarkTheme(config));
console.log(config);
//
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(10, 10);
}
console.log(makeSquare());
//
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if(this.isCompleted) {
            return `You have completed the ${this.name} course.`
        } else {
            return `You are currently studying the ${this.name} course.`
        }
    }
}
const courseOne = new Course('React', false);
console.log(courseOne.getDescription());

const courseTwo = new Course('HTML', true);
console.log(courseTwo.getDescription());
//
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting() {
        return `Hello ${this.getFullName()}!`;
    }
}
const userOne = new User('Alex', 'Mosios');
console.log(userOne.getFullName());
console.log(userOne.getGreeting());
//
class User {
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '18';
console.log(user);
//
class User {
    get age() {
        return this._age
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = '20';
console.log(user.age);
//
class User {
    constructor(age) {
        this.age = age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
    get age(){
        return this._age;
    }
}
const user = new User('20');
console.log(user.age);
user.age = '31';
console.log(user.age);
//
class Tasks {
    constructor(todos){
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(', ');
    }
}
const tasks = new Tasks(['Laundry', 'Clean kitchen']);
console.log(tasks.todos);
//
class Config {
    static getYear() {
        return new Date().getFullYear();
    }
}
const config = new Config();
console.log(config.getYear());
//
class Course {
    constructor(name, isCompleted){
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
const course = new Course('Learn JavaScript', false);
const result = course.markAsCompleted().setGrade(19).requestCertificate();
console.log(result);
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
    applyPercentageStudentDiscount(percent){
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}

const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency('eur').applyPercentageStudentDiscount(70);
console.log(bookSale);
//
class Discount {
    constructor() {
        this.amount = 1000;
    }
    static isValid() {
        return Math.random() <= 0.5;
    }
    applyDiscount(){
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
console.log(Math.floor(Math.random() * 11));