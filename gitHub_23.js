class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if (this.isCompleted) {
            return `You have completed the ${this.name} course.`;
        } else {
            return `You are currently studying the ${this.name} course.`;
        }
    }
}
const course1 = new Course("JavaScript", false);
console.log(course1.getDescription());
const course2 = new Course("React", true);
console.log(course2.getDescription());

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getGreeting() {
        return `Hello ${this.getFullName()}`;
    }
}
const user = new User("Eldar", "Semenov");
console.log(user.getFullName());
console.log(user.getGreeting());

class User {
    set age(value) {
        console.log("Age setter");
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User();
user.age = "13";
console.log(user);

class User {
  get age() {
    console.log('age getter')
    return this._age;
  }
  set age(value) {
    console.log('age setter')
    this._age = Number.parseInt(value, 10);
  }
}

class User {
    set age(value) {
        console.log("Age setter");
        this._age = Number.parseInt(value, 10);
    }
    // get age() {
    //     console.log("Age getter");
    //     return this._age;
    // }
}

const user = new User();
user.age = "18";
console.log(user);
console.log(user.age);

class User {
    constructor(age) {
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
}
const user = new User("35");
console.log(user.age);
console.log(user);
user.age = "36";
console.log(user.age);

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set age(value) {
        this._age = Number.parseInt(value, 10);
    }
    get age() {
        return this._age;
    }
    canVote() {
        if (this._age >= 18) {
            return `${this.firstName} ${this.lastName} - you made a chose. Thank you!`;
        } else {
            return `Sorry ${this.firstName} ${this.lastName}, your age is not allows you to vote.`;
        }
    }
}

const student = new Student("Rebeka", "Hammer", "17");
console.log(student.age);
console.log(student.canVote());
console.log(student);
student.age = "18";
console.log(student);
console.log(student.canVote());

class Tasks {
    constructor(todos) {
        this._todos = todos;
    }
    get todos() {
        return this._todos.join(", ");
    }
    func(this._todo) {
        return this._todos.forEach(todo => todo.toUpperCase());
    }
}
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
console.log(tasks.todos);
console.log(tasks.func());