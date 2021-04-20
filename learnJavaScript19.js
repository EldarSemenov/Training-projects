class voter {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
myVoter = new voter("Jeremy Lee", 23);
console.log(myVoter.name + ` ` + myVoter.age);
myVoter = new voter("Monika Robinson", 45);
console.log(myVoter.name + ` ` + myVoter.age);
//
class Ractangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
myRac = new Ractangle(12, 24);
console.log(myRac.height + ` ` + myRac.width);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class User {
    constructor(email){
        this.email = email;
    }
}
const Eldar = new User("cemen@gmail.com");
console.log(Eldar.email);
const Ammy = new User("marry@gmail.com");
console.log(Ammy.email);
//>>>>>>>>>>>>>>>>>>>>>>>>
class ractangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new ractangle(20, 20);
}; console.log(makeSquare());
//
class user {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
};
const getUser = () => {
    return new user(`Mark`, `Eston`, 34);
}; console.log(getUser());
const getUser2 = () => {
    return new user(`Olivia`, `Midolton`, 56);
}; console.log(getUser2());
//
class Rec {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    isSquare(){
        return this.width === this.height;
    }
}
const shape = new Rec(20, 40);
console.log(shape.isSquare());
const mysq = new Rec(10, 10);
console.log(mysq.isSquare());
//
class driver {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    canDrive(){
        return this.age >= 18;
    }
}
const myDriver = new driver(`Jason`, `Kuk`, 35);
console.log(myDriver.getFullName());
console.log(myDriver.canDrive());
//
class uuser {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName(){
        return `${this.first_name} ${this.last_name}`;
    }
    canVote(){
        return this.age >= 18;
    }
    getVotingMessage(){
        if(this.canVote()) {return `You can vote`}
        else{return `You can't vote`}
    }
} 
const Alex = new uuser("Alex", "Doe", 29);
console.log(Alex.canVote());
console.log(Alex.getVotingMessage());
console.log(Alex.getFullName());
//
class student {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGrade(){
        return this.grade;
    }
    canPassForNextLevel (){
        if(this.grade >= 100) {return `You are transfered to the next level`}
        else{return `Repeat what you leraned before`}
    }
}
const Student = new student(`Robert Stolkin`, 19, 78);
console.log(Student.getName());
console.log(Student.getAge());
console.log(Student.getGrade());
console.log(Student.canPassForNextLevel());
//
class visitor {
    constructor(firstName, lastName, number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
    }
    getTheFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getNumber(){
        return this.number;
    }
    getTheRowNumber(){
        if (this.number <= 10) {return `Your row is number 1`;}
        else if (this.number <= 20) {return `Your row is number 2`;}
        else {return `Your row is number 3`}
    }
}
const firstVisitor = new visitor(`Luke`, `Kentwood`, 21);
console.log(firstVisitor.getTheFullName());
console.log(firstVisitor.getNumber());
console.log(firstVisitor.getTheRowNumber());
//
class Inventory {
    constructor(){
        this.items = [];
    }
    addItem(item){
        return this.items.push(item);
    }
    addItems(){
        return this.items;
    }
    getCount(){
        return this.items.length;
    }
    exists(item){
        return this.items.includes(item);
    }
    humanReadableFormat(){
        return this.items.join(", ");
    }
}
try {
    const inventory = new Inventory();
    inventory.addItem("Laptop");
    inventory.addItem("Phone");
    console.log(inventory.getItems());
    console.log(inventory.getCount());
    console.log(inventory.exists("Phone"));
    console.log(inventory.humanReadableFormat());
} catch(error){
}

