function Rectangle(width, height){
    this.width = width;
    this.height = height;
};
Rectangle.prototype.isSquare = function(){
    return this.width === this.height;
};
const newSquare = new Rectangle(10, 20);
console.log(newSquare.isSquare());
//
function Voting(name, age){
    this.name = name;
    this.age = age;
};
Voting.prototype.CanVote = function(){
    return this.age >= 18;
};
const voter = new Voting("Jennifer Stefony", 17);
console.log(voter.CanVote());
//
function User(first_name, last_name, age){
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
};
User.prototype.GetFullName = function(){
    return `${this.first_name} ${this.last_name} is ${this.age} years old`;
};
const myUser = new User("Alex", "Runo", 23);
console.log(myUser.GetFullName());
//
class user {
    constructor(first_name, last_name){
        this.first_name = first_name;
        this.last_name = last_name;
    }
    getFullname(){
        return `${this.first_name} ${this.last_name}`;
    }
    canEdit(){
        return false;
    }
};
class Admin extends user{
    canEdit(){
        return true;
    }
};
const john = new user("John", "Doe");
console.log(john.canEdit());
console.log(john.getFullname());

const Bob = new Admin("Bob", "Tend");
console.log(Bob.getFullname());
console.log(Bob.canEdit());
//
class worker{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getName(){
        return `${this.first_name} ${this.last_name}`
    }
    addAge(){
        return this.age + 10;
    }
    canMakedecisions(){
        return false;
    }
};
class Manager extends worker{
    canMakedecisions(){
        return true;
    }
};
const newworker = new worker("Tom", "Startos", 23);
console.log(newworker.getName());
console.log(newworker.addAge());
console.log(newworker.canMakedecisions());

const manager = new Manager("George", "Busto", 45);
console.log(manager.getName());
console.log(manager.addAge());
console.log(manager.canMakedecisions());
//
class Animal{
    constructor(name){
        this.name = name;
    }
    canEat(){
        return `can eat`;
    }
};
class Cat extends Animal{
    meow(){
        return `meow`;
    }
};
const tom = new Cat("Tom");
console.log(tom.canEat());
console.log(tom.meow());
//
/*class AppFooter extends Component {
    render(){
        return `<div class = "footer">This
        is the footer of my app</div>`;
    }
};
*/
/*class component{}
class AppNavbar extends component {
    render(){
        return "<div>Navbar</div>"
    }
};
const app = new AppNavbar();
document.getElementById("grades").innerHTML = app.AppNavbar.render();
*/
//Array.prototype.find()
const numbers = [10, 15, 20];
const find = numbers.find(number => number === 10);
console.log(find);
const find1 = numbers.find(number => number === 16);
console.log(find1);
const find2 = numbers.find(number => number === 20);
console.log(find2);
const find3 = numbers.find(number => number === 15);
console.log(find3);
const array = [10, 9, 5, 23, 90, 44];
const found = array.find(element => element > 10);
console.log(found);
const found1 = array.find(num => num < 9);
console.log(found1);
//Array.prototype.every()
const num = [10, 15, 20, 25];
const does = num.every(item => item > 9);
console.log(does);
const does1 = num.every(element => element > 15);
console.log(does1);
//
const limit = (element) => element < 40;
const array2 = [1, 30, 39, 29, 10, 11];
console.log(array2.every(limit));

const NumNum = number1 => {
    return number1 > 0;
};
const array3 = [1, 2, 3, 1];
console.log(array3.every(NumNum));
//Array.prototype.some()
const array4 = [10, 14, 34, 20];
const action = array4.some(num => num === 20);
console.log(action);
const action1 = array4.some(num => num < 10);
console.log(action1);
const even = (element) => {
    return element % 2 === 0;
}; console.log(array4.some(even));
//
const myNum = [12, 13, 90, 22, 11];
const NotEven = (number) => {
    return number % 2 !== 0;
}; console.log(myNum.some(NotEven));
//
const shouldAjustGrades = grades => {
    return grades.some(grade => grade <= 10);
}; console.log(shouldAjustGrades([10, 12, 10, 14, 18]));
//
const shouldCancelExam = (grades) => {
    return grades.every(grade => grade >= 18);
}; console.log(shouldCancelExam([12, 10, 11, 17, 13, 12]));
//
const users = [
    {
        id: 2,
        name: "Akerson",
        is_varified: false
    },
    {
        id: 4,
        name: "Poll",
        is_varified: false
    },
    {
        id: 1,
        name: "Felonni",
        is_varified: false
    }
];
const VarifyUsers = (users, id) => {
    const user = users.find(user => user.id === id);
    user.is_varified = true;
    return users;
}; console.log(VarifyUsers(users, 4));
console.log(VarifyUsers(users, 2));
console.log(VarifyUsers(users, 1));
//
const students = [
    {
        first_name: "Jason",
        last_name: "Nill", 
        age: 18,
        id_number: 1290,
        DrLisence: true
    },
    {
        first_name: "Sabrina",
        last_name: "Nilson",
        age: 17,
        id_number: 3402,
        DrLisence: false
    },
    {
        first_name: "Karl",
        last_name: "Morindo",
        age: 21,
        id_number: 4598,
        DrLisence: true
    }
];
const canDrive = (students, DrLisence) => {
    const student = students.find(student => student.DrLisence === true);
    student.DrLisence = true;
    return students
}; console.log(canDrive(students));
//
const user_s = [
    {
        id: 1212,
        name: "John Doe" 
    },
    {
        id: 3445,
        name: "Jennifer Blane"
    }
];
const userNamesArray = user_s.map(use_r => use_r.name);
console.log(userNamesArray);
const str = userNamesArray.join(", ");
document.getElementById("grades").innerHTML = userNamesArray;
console.log(str);
document.getElementById("id01").innerHTML = str;
const newAction = user_s.map(us => us.name).join(", ");
console.log(newAction);
//
const persons = [
    {
        first_name: "Rock",
        last_name: "Martine"
    },
    {
        first_name: "Homer",
        last_name: "Van-Gomer"
    }
];
const getPersonsFullNames = persons => {
    return persons.map(person => `${person.first_name} 
    ${person.last_name}`).join(", ");
}; console.log(getPersonsFullNames(persons));
//
const array1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}; console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 10));
//
const shortArray = [10, 10];
const reduceFunction = (total, value) => total * value;
console.log(shortArray.reduce(reduceFunction));
console.log(shortArray.reduce(reduceFunction, 10));
console.log(shortArray.reduce(reduceFunction, 1000));
//
const minusArray = [15, 20, 100];
const newReduceFunction = (total, value) => total - value;
console.log(minusArray.reduce(newReduceFunction));
//
const thisArray = [2, 4, 2];
const thisFunction = (total, current) => total * current;
console.log(thisArray.reduce(thisFunction));
//
const arrayNumber = [2, 2];
const TwoFunction = (total, value) => total / value;
console.log(arrayNumber.reduce(TwoFunction));
//
const array5 = [50, 50];
const array5Function = (total, current) => total + current / 2;
console.log(array5.reduce(array5Function));
//
const array6 = [20, 30, 40];
const valueProduct = 4;
const product = array6.reduce((total, current) => total * current, valueProduct);
console.log(product);
//
const arnum = [2, 2, 2];
let pro = 1;
const action2 = arnum.forEach(item => pro = pro * item);
//
const product1 = arnum.reduce((total, current) => total * current, 1);
console.log(product1);
//
const $numbers = [175, 50, 25];
const myFunction = (total, number) => {
    return total - number;
}; console.log($numbers.reduce(myFunction));
//
const numberNum = [15.5, 2.3, 1.6, 4.8];
const getSum = (total, number) => {
    return total  + Math.round(number);
}; console.log(numberNum.reduce(getSum));
//
const getSUM = $grades => {
    return $grades.reduce((total, current) => 
    total + current, 0);
}; console.log(getSUM([10, 10, 10]));
//////TodoManager Project//////
    const initialTodos = [
        {
            title: "Learn JavaScript",
            is_completed: true
        },
        {
            title: "Practice flashcards",
            is_completed: false
        }
    ];
class TodoManager {
    constructor(todos){
        this.todos = todos;
    }
    getCompleted(){
        return this.todos.filter(todo => todo.is_completed);
    }
}
const todoManager = new TodoManager(initialTodos);
console.log(todoManager.getCompleted());
//
class Car {
    constructor(brand){
        this.carname = brand;
    }
    push(){
        return this.carname.push(title)
    }
};
const myCar = new Car("Ford");
console.log(myCar.carname);