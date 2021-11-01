class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager extends Employee {
    sendPerformanceReview() {
        console.log(`Sent performance review for current querter`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }
}

const manager = new Manager('Sam', 'Green');
manager.sendPerformanceReview();
console.log(manager.getFullName());
console.log(manager.getInitials());
//
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}
//
class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
}
//
class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }
    getFullName() {
        return super.getFullName() + ' [manager]';
    }
}
const manager = new Manager('Sam', 'Green', 'Marketing');
console.log(manager);
console.log(manager.department);
console.log(manager.getFullName());
//
setTimeout(() => {
    console.log('Two seconds has elapsed.')
}, 2000);
//
welcomeUser('Sam', () => {
    console.log('Done welcoming user.')
});
//
const welcomeUser = (name, callback) => {
    setTimeout(() => {
       console.log(`Welcome ${name}`);
       callback();
    }, 1000)
}
//
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        if(callback) {
            callback();
        }
    }, 1000)
}
const sayHello = name => {
    welcomeUser(name, () => {
        console.log('Done!');
    });
}
sayHello('Sam');
//
const temperatures = [10, 5, 3]

const sumTemperatures = (temperatures, callback) => {
    setTimeout(() => {
        const sum = temperatures.reduce((total, current) => total + current, 0);
        callback(sum);
    }, 2000);
}
sumTemperatures(temperatures, value => {
    console.log(value);
});
//
console.log('A');

wait(1000).then(() => {
    console.log('B');
});
console.log('C');
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}
wait(1000).then(() => {
    console.log('waited 1 second');
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    });
}
wait(2000).then(() => {
    console.log('The problem is resolved in 2 seconds.');
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve()
        }, milliseconds)
    });
}
wait(3000).then(() => {
    console.log('The problem resolved in 3 seconds.');
});
//
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
           resolve()
        }, milliseconds)
    });
}
wait(2500).then(() => {
    console.log('The problem is resolved!');
});
*/
const waitOne = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitOne(100).then(() => {
    console.log('🧚🏻‍♀️');
});
//
const waitTwo = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitTwo(200).then(() => {
    console.log('🧚🏾 🧚🏼‍♂️');
});
//
const waitThree = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitThree(300).then(() => {
    console.log('🧜🏻‍♀️ 🧜🏼 🧜🏿‍♂️');
});
//
const waitFour = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitFour(400).then(() => {
    console.log('🧞‍♂️ 🧞 🧞‍♀️ 🧙🏻‍♀️');
});
//
const waitFive = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitFive(500).then(() => {
    console.log('🧖‍♀️ 🧖 🧖🏾‍♂️ 🙎🏻 🧖‍♀️');
});
const waitSix = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitSix(600).then(() => {
    console.log('🐶 🐱 🐭 🐹 🐰 🦊');
});
//
const waitSeven = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitSeven(700).then(() => {
    console.log('🐻 🐼 🐻‍ 🐍 🐊 🦞 🐘 🐈‍');
});
//
const waitEight = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
} 
waitEight(800).then(() => {
    console.log('🗽 ⛱ 🗿 🎡 🎢 🏕 🏭 ⛩ 🏩');
});
//
const waitNine = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitNine(900).then(() => {
    console.log('❤︎');
});
//
const waitTen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitTen(950).then(() => {
    console.log('💛 ❤️ 🧡 💚 💙 💜 🤍 🤎 💔');
});
//
const waitEleven = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitEleven(1000).then(() => {
    console.log('🔴 🟠 🟡 🟢 🔵 🟣 ⚪️ 🟤');
});
//
const waitTwelve = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitTwelve(1050).then(() => {
    console.log('⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 ');
});
//
const waitThirteen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitThirteen(1100).then(() => {
    console.log('🥋 ⛳️ 🛼 🎽 🏂 🤸🏻‍♂️');
});
//
const waitFourteen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitFourteen(1150).then(() => {
    console.log('🏆 🥇 🥈 🥉 🎖 ');
});
//
const waitFifteen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
} 
waitFifteen(1200).then(() => {
    console.log('🚗 🚕 🚙 🚌');
});
//
const waitSixteen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitSixteen(1250).then(() => {
    console.log('🛩 🛳 🚢');
});
//
const waitSeventeen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitSeventeen(1300).then(() => {
    console.log('🎑 🏙');
});
//
const waitEighteen = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    });
}
waitEighteen(1350).then(() => {
    console.log('🎆');
});