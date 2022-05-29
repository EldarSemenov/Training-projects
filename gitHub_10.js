class User {
    #votingAge = 18;

    get getVotingAge() {
        return this.#votingAge;
    }
    set getVotingAge(age) {
        if (age >= 18) {
            this.#votingAge = age;
        }
    }
}

const user = new User();
console.log(user.getVotingAge);
user.getVotingAge = 10;
console.log(user.getVotingAge);
user.getVotingAge = 19;
console.log(user.getVotingAge);

class User {
    constructor(age) {
        this.age = age;
        this.#logAge();
    }
    #logAge() {
        console.log(this.age);
    }
}
const user = new User(20);
console.log(user.age);

class ClassWithPrivateMethod {
    #privateMethod() {
        return "Hello World!";
    }
}
const newOne = ClassWithPrivateMethod();
console.log(newOne.privateMethod());

setTimeout(() => {
    console.log("One second has elapsed");
}, 1000);

setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2000);
setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2100);
setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2200);
setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2300);
setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2400);
setTimeout(() => {
    console.log("Hello World! Delayed.");
}, 2500);

const delayedWelcome = name => {
    setTimeout(() => {
        console.log(`Welcome ${name}!`);
    }, 3000);
};
delayedWelcome("Jason");

console.log("A");
setTimeout(() => {
    console.log("B");
}, 1000);
console.log("C");

const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback();
    }, 1000);
};
welcomeUser("Eldar Semenov");

const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        if (callback) {
            callback();
        }
    }, 1000);
};

const sayHello = name => {
    welcomeUser(name, () => {
        console.log("Done!");
    });
};
sayHello("Sam");

const temperatures = [10, 5, 3];

sumTemperatures(temperatures, value => {
    console.log(value);
});

const temperatures = [10, 5, 3];

const sumTemperatures = (temperatures, callback) => {
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => total + current, 0);
        callback(sum);
    }, 2000);
};
sumTemperatures(temperatures, value => {
    console.log(value);
});

const numbers = [5, 5];

const multiplyFive = (numbers, callback) => {
    setTimeout(() => {
        const sum = numbers.reduce((total, current) => total * current, 1);
        callback(sum);
    }, 2000);
};

multiplyFive(numbers, value => {
    console.log(value);
});

const grades = [100, 100, 100];

const getSumGrades = (grades, callback) => {
    setTimeout(() => {
        const sum = grades.reduce((total, current) => total + current, 0);
        callback(sum);
    }, 2000);
};

getSumGrades(grades, number => {
    console.log(number);
}),
    reason => {
        console.error(reason);
    };

const sumGrades = (grades, callback) => {
    setTimeout(() => {
        const sum = grades.reduce((total, current) => total + current, 0);
        if (callback) {
            callback(sum);
        }
    }, 2000);
};
const calculateSum = grades => {
    sumGrades(grades, value => {
        console.log(`The sum is ${value}`);
    });
};

calculateSum([10, 10]);
calculateSum([20, 20]);

const myltiplyNumbers = (numbers, callback) => {
    setTimeout(() => {
        const sum = numbers.reduce((total, current) => total * current, 1);
        callback(sum);
    }, 10);
};

const calculateMyltiplication = numbers => {
    myltiplyNumbers(numbers, value => {
        console.log(`The result is ${value}`);
    }),
        mistake => {
            console.error(mistake);
        };
};
calculateMyltiplication([100, 100]);
calculateMyltiplication([2, 25]);
calculateMyltiplication([4, 4]);
calculateMyltiplication([3, 5, 67]);
calculateMyltiplication([2, 2]);
calculateMyltiplication([30, 30]);
