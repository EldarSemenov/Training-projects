const verifyUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
};

const users = [
    {
        id: 1,
        name: "Sam",
        isVerified: false,
    },
    {
        id: 2,
        name: "Alex",
        isVerified: false,
    },
    {
        id: 3,
        name: "Charlie",
        isVerified: false,
    },
];
verifyUser(users, 2);
verifyUser(users, 1);
verifyUser(users, 3);
console.log(users); // notice that it gets mutated

const identification = (students, studentId) => {
    const student = students.find(student => student.id === studentId);
    student.isPassedExam = true;
};

const students = [
    {
        id: 1,
        name: "Sam Dickens",
        isPassedExam: false,
    },
    {
        id: 2,
        name: "Jason Milko",
        isPassedExam: false,
    },
    {
        id: 3,
        name: "Eldar Semenov",
        isPassedExam: false,
    },
];

identification(students, 3);
console.log(students);

const vertification = (persons, personId) => {
    const person = persons.find(person => person.id === personId);
    person.isPassed = true;
};
const persons = [
    {
        name: "Alex",
        id: 1,
        isPassed: false,
    },
    {
        name: "Mike",
        id: 2,
        isPassed: false,
    },
];
vertification(persons, 2);
console.log(persons);

const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy);

const array = [10, 10, 10, 10];
const arrayCopy = [...array];
console.log(arrayCopy);

const grades = [10, 20];
const updated = [...grades, 15];
console.log(updated);

const grades = [10, 20, 15];
const updated = grades.filter(grade => grade !== 20);
console.log(updated);

const cloneApps = apps => {
    const cloneApps = [...apps];
    return cloneApps;
};
const originalApps = ["Calculator", "Phone"];
const copiedApps = cloneApps(originalApps);
console.log(copiedApps);
console.log(copiedApps === originalApps);

const addApp = (apps, app) => {
    return [...apps, app];
};
const originalApps = ["Calculator", "Phone"];
console.log(addApp(originalApps, "Smart lights"));
console.log(originalApps);

const user = {
    id: 1,
    age: 23,
};
// const cloned = { ...user };
// console.log(cloned);
const clonedUser = {
    ...user,
    age: user.age + 1,
};
console.log(clonedUser);
//
const book = {
    id: 1,
    title: "Harry Porter",
    year: 2017,
    rating: 4.5,
};
const { year, ...rest } = book;
console.log(year);
console.log(rest);

const cloneConfig = config => {
    return { ...config };
};

const originalConfig = {
    darkTheme: true,
};

const result = cloneConfig(originalConfig);
console.log(result);
console.log(originalConfig === result);

const enableDarkTheme = config => {
    return { ...config, darkTheme: true };
};
const config = {
    darkTheme: false,
};
console.log(enableDarkTheme(config));

class Translation {
    constructor(word) {
        this.word = word;
    }
    isEnglishWord() {}
    isSpanishWord() {}
}
const firstTranslation = new Translation("Table");
firstTranslation.isEnglishWord();

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getSquareMiters() {
        return this.width * this.height;
    }
}

const newSquare = () => {
    return new Rectangle(100, 100);
};

console.log(newSquare());

const square = new Rectangle(10, 10);
console.log(square.getSquareMiters());

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

function getSquare() {
    return new Rectangle(10, 10);
}
console.log(getSquare());

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const createPerson = (fName, lName) => {
    return new Person(fName, lName);
};

console.log(createPerson("James", "Rodrigess"));

class Person {
    constructor(firstName, lastName) {
        console.log(firstName + " " + lastName);
    }
}
const person = new Person("Sam", "Green");

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.votingAge = 18;
    }
}
const person = new Person("Eldar", "Semenov");
console.log(person);

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const user = new User("Eldar", "Semenov", 37);
console.log(user);

class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

console.log(new Course("JavaScript", false));

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
console.log(person.getFullName());

class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
    getDescription() {
        if (this.isCompleted) {
            return `You have completed ${this.name} course! Congratulations!`;
        } else {
            return `You have not completed this ${this.name} course. Keep going!`;
        }
    }
}

const course1 = new Course("HTML and CSS", true);
console.log(course1.getDescription());

const course2 = new Course("Java Script", false);
console.log(course2.getDescription());

class User {
    constructor(firstName, lastName, prefix, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }
    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }
    canVote() {
        if (this.age >= 18) {
            return `Thank you for coming!`;
        } else {
            return `Sorry, you are not able to vote.`;
        }
    }
}

const user1 = new User("Eldar", "Semenov", "Mr", 38);
console.log(user1.getFullName());
console.log(user1.canVote());

const user2 = new User("Jassica", "Parker", "Ms", 16);
console.log(user2.getFullName());
console.log(user2.canVote());

class User {
    constructor(firstName, lastName) {
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
const user1 = new User("Eldar", "Semenov");
console.log(user1.getFullName());
console.log(user1.getGreeting());
