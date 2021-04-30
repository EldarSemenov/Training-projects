class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    isSquare(){
        return this.width === this.height;
    }
};
const shape = new Rectangle(20, 21);
console.log(shape.isSquare());
//
class User {
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
};
const jennifer = new User("Jennifer", "Doe", 20);
console.log(jennifer.getFullName());
console.log(jennifer.canVote());
//
class user {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullname(){
        return `${this.first_name} ${this.last_name}`;
    }
    canvote(){
        return this.age >= 18;
    }
    getVotingMessage(){
        if(this.canvote()) {return "You can vote";}
        else {return "You can't vote";}
    }
};
const Natasha = new user("Natasha", "Nilson", 18);
console.log(Natasha.getFullname());
console.log(Natasha.canvote());
console.log(Natasha.getVotingMessage());
//
class Inventory{
    constructor(){
        this.items = [];
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
};
    const inventory = new Inventory();
    inventory.addItem("Laptop");
    inventory.addItem("SmartPhone");
    console.log(inventory.getItems());
    console.log(inventory.getCount());
    console.log(inventory.exists("SmartPhone"));
    console.log(inventory.humanReadableFormat());
//
class cars {
    constructor(){
        this.cars = [];
    }
    addCars(car){
        return this.cars.push(car)
    }
    getCars(){
        return this.cars;
    }
    countCars(){
        return this.cars.length;
    }
    existsCars(car){
        return this.cars.includes(car);
    }
    readableFormat(){
        return this.cars.join(", ");
    }
};
const myCars = new cars();
myCars.addCars("Mitsubishi Lancer");
myCars.addCars("Tesla Model 3");
myCars.addCars("Cyber Truck");
console.log(myCars.getCars());
console.log(myCars.countCars());
console.log(myCars.existsCars("Volga"));
console.log(myCars.readableFormat());
//
class Voting {
    constructor(user, vote){
        this.user = user;
        this.vote = vote;
    }
    static getMaxCandidates(){
        return 10;
    }
}; console.log(Voting.getMaxCandidates());
//
class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod(){
        return 'Static method has been called.';
    }
};console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());
//
class Voter {
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    static getVotingAge (){
        return 18;
    }
    ableVote(){
        return this.age >= Voter.getVotingAge();
    }
};
const Maison = new Voter("Mason", "Jonson-Lee", 32);
console.log(Maison.ableVote());
//
class Planes{
    constructor(){
        this.planes = [];
    }
    addPlane(plane){
        return this.planes.push(plane);
    }
    getPlanes(){
        return this.planes;
    }
    countPlanes(){
        return this.planes.length;
    }
    existsPlanes(plane){
        return this.planes.includes(plane);
    }
    readFormat(){
        return this.planes.join(" - ");
    }
    static returnThisPlane(){
        return "This is my device";
    }
};
const owner = new Planes();
owner.addPlane("A350");
owner.addPlane("A340");
owner.addPlane("B50");
console.log(owner.getPlanes());
console.log(owner.countPlanes());
console.log(owner.existsPlanes("Tu154"));
console.log(owner.readFormat());
console.log(Planes.returnThisPlane());
//
function Rectangles (width, height){
    this.width = width;
    this.height = height;
}