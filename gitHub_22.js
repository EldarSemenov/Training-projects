const grades = [{ grade: 10 }, { grade: 15 }, { grade: 5 }];

const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 1);
console.log(sum);

const tweets = [
    {
        id: 10512,
        stats: {
            likes: 41,
            retweets: 54,
        },
    },
    {
        id: 41241,
        stats: {
            likes: 14,
            retweets: 20,
        },
    },
];
const socialImpact = tweets.reduce((total, current) => {
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);

console.log("Step 1");
try {
    nonExistingFunction();
} catch (error) {
    console.error(error);
}
console.log("Step 2");

const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

const obj1 = new Object();
obj1.car = "Tesla";
console.log(obj1);

const obj2 = new Object();
obj2.car = "Tesla";
console.log(obj2);

console.log(obj1 === obj2);

const firstArray = [];
const secondArray = firstArray;

console.log(firstArray);
console.log(secondArray);

firstArray.push(10);
console.log(firstArray);
console.log(secondArray);

const grades = [
    {
        id: 1,
        grade: 12,
        isPassing: false,
    },
    {
        id: 2,
        grade: 14,
        isPassing: true,
    },
];
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades);

const students = [
    {
        id: 123,
        firstName: "Eldar",
        lastName: "Semenov",
        age: 38,
        isPassingExam: true,
    },
    {
        id: 434,
        firstName: "Mark",
        lastName: "Leventos",
        age: 27,
        isPassingExam: false,
    },
];
const studentSolve = students.find(student => student.firstName === "Mark");
studentSolve.isPassingExam = true;
studentSolve.age = studentSolve.age + 3;

console.log(students);

const incrementUserAge = user => {
    return (user.age += 1);
};

const student = {
    name: "Artur Neumann",
    age: 21,
};
console.log(incrementUserAge(student));
console.log(student);

const student = {
    name: "Eldar Semenov",
    age: 37,
    citizenship: "Russia",
};

const incrementAge = user => {
    return (user.age += 1);
};
const changeCitizenship = citizen => {
    return (citizen.citizenship = "USA");
};

console.log(incrementAge(student));
console.log(changeCitizenship(student));

console.log(student);

const users = [
    {
        id: 1,
        name: "Charlie",
        age: 23,
        isVerified: false,
    },
    {
        id: 2,
        name: "Sam",
        age: 22,
        isVerified: false,
    },
    {
        id: 3,
        name: "Jhon",
        age: 22,
        isVerified: false,
    },
    {
        id: 4,
        name: "Alex",
        age: 24,
        isVerified: false,
    },
];

const verifyUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    return (user.isVerified = true);
};

const incrementAge = (users, userId) => {
    const user = users.find(user => user.id === userId);
    return (user.age += 10);
};

console.log(verifyUser(users, 1));
console.log(verifyUser(users, 3));
console.log(verifyUser(users, 4));
console.log(verifyUser(users, 2));
console.log(incrementAge(users, 1));
console.log(incrementAge(users, 2));
console.log(incrementAge(users, 3));
console.log(incrementAge(users, 4));
console.log(users);

const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy);

const gardes = [10, 20];
const updated = [...gardes, 15];
console.log(updated);

const grades = [10, 20, 15];
const updated = grades.filter(grade => grade !== 20);
console.log(grades);
console.log(updated);

const cloneApps = apps => {
    return [...apps];
};
const originalApps = ["Calculator", "Phone"];
const copiedApps = cloneApps(originalApps);
console.log(copiedApps);
console.log(originalApps === copiedApps);

const addApp = (apps, app) => {
    return [...apps, app];
};
const originalApps = ["Calculator", "Phone", "TV"];
console.log(addApp(originalApps, "SmartPhone"));
console.log(originalApps);

const user = {
    id: 1,
    age: 23,
};
const cloned = { ...user };
console.log(cloned);

const user = {
    id: 1,
    age: 20,
};
const clonedUser = { ...user, age: user.age + 1 };
console.log(clonedUser);

const user = {
    name: "Alex",
    age: 33,
    id: 23,
};
const clonedUser = {
    ...user,
    age: user.age + 10,
};
console.log(clonedUser);
console.log(user);

const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5,
};
const { year, ...rest } = book;
console.log(rest);

const user = {
    name: "Jhon",
    id: 3232,
    age: 22,
    car: "Tesla Model 3",
};

const firstCopy = {
    ...user,
    name: "Alex",
};

const { id, age, name, ...rest } = user;
console.log(user);
console.log(firstCopy);
console.log(rest);

const student = {
    id: 32382,
    firstName: "Jason",
    lastName: "Miros",
    car: "Tesla Model Three",
    status: "Student",
};

const { id, lastName, status, ...rest } = student;
console.log(student);
console.log(rest);

const cloneConfig = config => {
    return { ...config };
};
const originalConfig = {
    darkTheme: true,
};
const result = cloneConfig(originalConfig);
console.log(result);
console.log(originalConfig);
console.log(originalConfig === result);

const enableDarkTheme = config => {
    return { ...config, darkTheme: true };
};
const config = {
    darkTheme: false,
};
console.log(enableDarkTheme(config));
console.log(config);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const makeSquare = () => {
    return new Rectangle(100, 100);
};
console.log(makeSquare());

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const createPerson = (fName, lName) => {
    return new Person(fName, lName);
};
console.log(createPerson("Eldar", "Semenov"));

class Person {
    constructor() {
        console.log("I was automatically called");
    }
}
const person = new Person();
console.log(person);

class Person {
    constructor(firstName, lastName) {
        console.log(`${firstName} ${lastName}`);
    }
}
const person = new Person("Eldar", "Semenov");

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = 18;
    }
}

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
console.log(new User("Eldar", "Semenov", 38));

class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}
console.log(new Course("Learn JavaScript", false));
console.log(new Course("React", true));

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person("Eldar", "Semenov");
console.log(person);
console.log(person.getFullName());

class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if (this.isCompleted) {
            return `You have completed the `;
        }
    }
}
