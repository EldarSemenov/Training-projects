class Ractangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Ractangle(100, 100);
}; console.log(makeSquare());
const oldSquare = new Ractangle(200, 200);
console.log(oldSquare);
//
class User{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
};
const getUser = () => {
    return new User("Linda", "Lee", 23)
}; console.log(getUser());
//
class rec {
    constructor(width, height){
        this.width = width;
        this.height = height;
    } 
    isSquare(){
        return this.width === this.height;
    }
};
const smallSquare = new rec(30, 30);
console.log(smallSquare.isSquare());
//
class triangle {
    constructor(first_side, second_side, third_side){
        this.first_side = first_side;
        this.second_side = second_side;
        this.third_side = third_side;
    }
    isTriangle (){
        return this.first_side === this.second_side === this.third_side;
    }
}; const tr = new triangle(10, 10, 10);
console.log(tr.isTriangle());
//
class user {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName(){
        return `${this.first_name} ${this.last_name}`;
    }
    canVote(){return this.age >= 18};
};
const jessica = new user(`Jessica`, `Doel`, 23);
console.log(jessica.getFullName());
console.log(jessica.canVote());
//
class voter {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getfullname(){
        return `${this.first_name} ${this.last_name}`;
    }
    getAge(){
        return this.age;
    }
    canVote(){
        return this.age >= 18;
    }
    getMessage(){
        if(this.canVote()) {return "You can vote";}
        else{return "Sorry, you can't vote";}
    }
};
const Anderson = new voter("Anderson", "Petreus", 32);
console.log(Anderson.getfullname());
console.log(Anderson.getAge());
console.log(Anderson.canVote());
console.log(Anderson.getMessage());
/*
class Inventory{
    constructor(){
        this.item = [];
    }
    addItem(item){
        return this.items.push(item);
    }
    getItems(){
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
try{
    const inventory = new Inventory();
    inventory.addItem("Laptop");
    inventory.addItem("SmartPhone");
    console.log(inventory.getItems());
    console.log(inventory.getCount());
    console.log(inventory.exists("Phone"));
    console.log(inventory.humanReadableFormat());
}catch(error){
}
*/
class Voting {
    constructor(user, vote){
        this.user = user;
        this.vote = vote;
    }
    static getMaxCandidates(){
        return 3;
    }
}; console.log(Voting.getMaxCandidates());
//
class ClassWithStaticMethod{
    static staticProperty = 'someValue';
    static staticMethod(){
        return 'static method has been called';
    }
}; console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());
//
class U_ser{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    static getVotingAge(){
        return 18;
    }
    canVote(){
        return this.age >= U_ser.getVotingAge();
    }
};
const jennifer = new U_ser("Jennifer", "Doe", 20);
console.log(U_ser.getVotingAge());
console.log(jennifer.canVote());
console.log(jennifer);
//
class recrec {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    isSquare(){
        return this.width === this.height;
    }
};console.log(typeof(recrec));
/*
function Rec_tangle(width,height){
    this.width = width;
    this.height = height;
};
Rac_tangle.prototype.isSquare = function(){
    return this.width === this.height;
};
*/
function newuser(first_name, last_name, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
};
newuser.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`;
};
newuser.prototype.addNumber = function(){
    return this.age + 10;
}
const jeni = new newuser("Jeni", "Lee", 12);
console.log(jeni.getFullName());
console.log(jeni.addNumber());
//
class Uder{
    constructor(first_name, last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
    get_full_name(){
        return `${this.first_name} ${this.last_name}`;
    }
    canEdit(){
        return false;
    }
};
class Admin extends Uder {
    canEdit(){
        return true;
    }
};
const Lamperd = new Uder("Lamperd", "Gers");
console.log(Lamperd.canEdit());
const Lindania = new Admin("Lindania", "Tend");
console.log(Lindania.canEdit());
//
class smallMaster{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getNameAge(){
        return `${this.name} ${this.age}`;
    }
    canFix(){
        return false;
    }
}
class oldMaster extends smallMaster{
    canFix(){
        return true;
    }
}
const small = new smallMaster("Jerald Noi", 23);
console.log(small);
console.log(small.canFix());
const old = new oldMaster("Tomas Noiman", 56);
console.log(old);
console.log(old.canFix());
//
class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){return "eats food";}
}
class Cat extends Animal{
    meow(){
        return "meow"
    }
}
const tom = new Cat("Tom");
console.log(tom.eat());
console.log(tom.meow());
//
class Component{

}
class AppNavbar extends Component
{
    render(){
        return "<div>Navbar</div>";
    }
}; 
//
class uusseerr {
    constructor(options = {}){
        this.name = options.name;
        this.age = options.age;
    }
    canVoteThere(){
        return this.age >= 18;
    }
}
const jenijeni = new uusseerr({
    name: 'Jeni',
    age: 18
});console.log(jenijeni.canVoteThere());
//
class Funds {
    constructor(options = {}) {
        this.fund = options.fund;
        this.price = options.price;
    }
    canBuy(){
        return this.fund >= 25000;
    }
};
const buyer = new Funds({
    fund: 325000,
    price: 35000
}); console.log(buyer.canBuy());
//
class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(){
        console.log(`The ${this.type} rabbit says '....'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
console.log(killerRabbit.speak());
console.log(blackRabbit.speak());
//
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}; 
const myCar = new Car("Tesla", 2022);
document.getElementById("grades").innerHTML = 
myCar.name + " " + myCar.year;
//
class car{
    constructor(first_name, last_name, name, year, price){
        this.first_name = first_name;
        this.last_name = last_name;
        this.name = name;
        this.year = year;
        this.price = price;
    }
    discription(){
        return `The owner is ${this.first_name} ${this.last_name} 
        who is selling ${this.name}. The age of the car is ${this.year} years.
        And the price is ${this.price}.`;
    }
}; const owner = new car("Eldar", "Noiman", "Tesla Model 3", 3, 26000);
console.log(owner.discription());
//
class auto {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
};
let myAuto = new auto("Chevrolet", 2019);
console.log("My car is " + myAuto.age() + " years old.");
//
class Auto{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    getFullTitle(){
        return `${this.name} ${this.year}`;
    }
};
const tesla = new Auto("Tesla Rodster", 2023);
console.log(tesla.getFullTitle());
//
class sportCar{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    getage(){
        let date = new.Date();
        return date.getFullYear() - this.year;
    }
};const mySportCar = new sportCar("Audi", 2018);
console.log(mySportCar.getage());








