//PROTOTYPE
function User(first_name, last_name, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
}
User.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`;
}
const jennifer = new User("Jennifer", "Doe", 34);
console.log(jennifer.getFullName());
//
function Seller(first_name, last_name, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
}
Seller.prototype.addMiddleName = function(){
    return `${this.first_name}- Linda -${this.last_name}`;
}
const Omanda = new Seller("Omanda", "Lee", 34);
console.log(Omanda.addMiddleName());
//
function Bagger(first_name, last_name, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
}
Bagger.prototype.AddAge = function(){
    return this.age + 10;
}
const Mikle = new Bagger("Mikle", "Doe", 22);
console.log(Mikle.AddAge());
//
class user{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName(){
        return `${this.first_name} ${this.last_name}`;
    }
    canEdit(){
        return false;
    }
}
class Admin extends user{
    canEdit(){
        return true;
    }
}
const john = new user("John", "Doe");
console.log(john.canEdit());
const bob = new Admin("Bob", "Utah");
console.log(bob.canEdit());
//
class Animal{
    constructor(name){
        this.name = name;
    }
    canEat(){
        return "Can eat food";
    }
}
class Cat extends Animal{
    meow(){
        return "meow";
    }
}
const tom = new Cat ("Tom");
console.log(tom.canEat());
console.log(tom.meow());
//
const array = [5, 2, 9, 10, 23, 12];// fill find the first one
const find = array.find(element => element > 10);
console.log(find);

const numbers = [100, 200, 300, 400];
const findNumber = () => {
    return numbers.find(number => number > 200);
}; console.log(findNumber());
//
const num = [10, 20, 30];
const EVERY = num.every(item => item >= 10);
console.log(EVERY);
//
const num_num = [2, 4, 9];
const every = num_num.every(item => item > 5);
console.log(every);
//
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [23, 1, 34, 8, 9, 2];
console.log(array1.every(isBelowThreshold));
//
const array2 = [10, 12, 15, 20];
const findSome = array2.some(item => item === 15);
console.log(findSome);
//
const array3 = [12, 34, 10, 56, 34];
const findsome = array3.some(item => item <= 10);
console.log(findsome);
//
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const $some = array4.some(element => element % 2 !== 0);
console.log($some);
//
const shouldAdjustGrades = () => {
    const grades = [10, 12, 10, 14];
    return grades.some(grade => grade < 10);
}; console.log(shouldAdjustGrades());
//
const shouldCancelxam = () => {
    const grades = [12, 12, 12, 12, 14];
    return grades.every(grade => grade >= 18);
}; console.log(shouldCancelxam());
//
const users = [{
    id: 1,
    name: "Alex",
    is_varified: false
},
{
    id: 2,
    name: "Tom",
    is_varified: false
},
{
    id: 3,
    name: "Bob",
    is_varified: false
}
];
const verifyUser = (users, id) => {
    const user = users.find(user => user.id === id);
    user.is_varified = true;
    return users;
}; console.log(verifyUser(users, 3));






