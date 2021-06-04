class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName(){
        return `${this.prefix} ${this.firstName} ${this.lastName}`;
    }
    canVote(){
        return this.age >= 18;
    }
}
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName());
console.log(user1.canVote());
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName());
console.log(user2.canVote());
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting(){
        const fullName = this.getFullName();
        return `Hello ${fullName}`;
    }
}
const user1 = new User ("Jason", "Doe");
console.log(user1.getFullName());
console.log(user1.getGreeting());
class Todos {
    constructor(){
        this.todos = [
            {
                title: "Learn JavaScript",
                category: "work"
            },
            {
                title: "Meditate",
                category: "personal"
            }
        ]
    }
    getAll(){
        return this.todos;
    }
    getCount(){
        return this.todos.length;
    }
    add(title, category){
        return this.todos.push({title, category});
    }
    getWork(){
        return this.todos.filter(todo => todo.category === "work");
    }
    getWorkCount(){
        return this.getWork().length;
    }
    getPersonal(){
        return this.todos.filter(todo => todo.category === "personal");
    }
    getPersonalCount(){
        return this.getPersonal().length;
    }
};
const todos = new Todos();
console.log(todos.getAll());
console.log(todos.getCount());
console.log(todos.add());
console.log(todos.getWork());
console.log(todos.getWorkCount());
console.log(todos.getPersonal());
console.log(todos.getPersonalCount());
//
class User {
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = "18";
console.log(user);
//
class Currency {
    set amount(value){
        this._amount = value * 100;
    }
}
const currency = new Currency();
currency.amount = 3;
console.log(currency);
class User {
    set age(value){
        this._age = Number.parseInt(value, 10)
    }
}
const user = new User();
user.age = "200";
console.log(user);
//
class Currency {
    set amount(value){
        this._amount = Number.parseInt(value * 100, 10);
    }
}
const currency = new Currency();
currency.amount = "1";
console.log(currency);
class User {
    get age(){
        return this._age
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
};
const user = new User();
user.age = "20";
console.log(user.age);
const obj = {
    log: ['a', 'b', 'c'],
    get latest(){
        if(this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
};
console.log(obj.latest);
class User{
    constructor (age){
        this.age = age
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = Number.parseInt(value, 10);
    }
}const user = new User("30");
console.log(user.age);
user.age = '211';
console.log(user.age);