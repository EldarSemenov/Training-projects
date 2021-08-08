function isPassing(grade){
    if(grade >= 10){
        return true;
    }else{return false;}
};
console.log(isPassing(12));
console.log(isPassing(9));
//
function ispassing(grade){
    return grade >= 10;
};
console.log(ispassing(10));
console.log(ispassing(1));
//
function canVote(age){
    return age >= 18;
};
console.log(canVote(18));
console.log(canVote(17));
//
function evenOrOdd(number){
    if(number % 2 === 0){return "even";}
    return "odd"
};
console.log(evenOrOdd(10));
console.log(evenOrOdd(-50));
console.log(evenOrOdd(9));
//
//const users = [];
const grades = [10, 8, 13, 15];
const attendees = ["Sam", "Alex"];
const values = [10, false, "John"];
//
console.log(grades.length);
//
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
//
const users = ['Sam', 'Alex', 'Charley'];
console.log(users[1]);
//
const numbers = [10, 8, 13, 15];
numbers.push(100);
console.log(numbers);
console.log(numbers.length);
//
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
//
const numbers = [];
numbers.push(10);
console.log(numbers);
numbers.push(20);
console.log(numbers);
//
function getNumberOfElements(elements){
    return elements.length;
}
console.log(getNumberOfElements([2, 3]));
console.log(getNumberOfElements(['goats', 'tiger', 'cat', 'dog']));
//
function useCalculator(apps){
    apps.push("Calculator");
    return apps;
};
console.log(useCalculator(["Tv", "PC", "SmartPhone"]));
//
function useApp(apps, app){
    apps.push(app);
    return apps;
};
console.log(useApp(['Tv', 'Internet', 'clocks'], 'calculator'));
console.log(useApp([], 'calculator'));
//
function getFirstApp(apps){
    return apps[0];
};
console.log(getFirstApp(['Chrome', 'Clock', 'Twitter']));
console.log(getFirstApp(['clock one', 'Contacts']));
//
function getLastApp(app){
    return app[app.length - 1];
};
console.log(getLastApp(['clock', 'media', 'internet']));
console.log(getLastApp([100, 200, 300, 'network']));
//
function getTheSecondAppFromTheEnd(app){
    return app[app.length - 2];
};
console.log(getTheSecondAppFromTheEnd(['one', 'two', 'three']));
//
const grades = [10, 8, 13];
grades.forEach(function(grade){
    grade += 100;
    console.log(grade);
    return grades;
});
console.log(grades);
//
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
//
function loopThroughElements(elements){
    elements.forEach(function(element){
        console.log(element);
    });
};
loopThroughElements(['Sam', 'Charlie', 'Alex']);
//
function logUserIds(userIds){
    userIds.forEach(function(id){
        console.log(id);
    });
}; 
logUserIds([23, 34, 44]);
//
const people = ['Sam', 'Alex'];
people.forEach(function(person){
    console.log(person);
});
//
function logUserIds(userIds){
    userIds.forEach(function(userId){
        console.log(userId)
    });
    return true;
};
//
function logGrades(grades){
    grades.forEach(function(grade){
        console.log(grade);
        return 10;
    });
    return 20;
};
//
function sumGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
        sum = sum + grade;
    });
    return sum;
};
console.log(sumGrades([100, 100, 100]));
//
function sumOfGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
        sum = sum + grade;
    });
    return sum;
};
console.log(sumOfGrades([1000, 1000]));
//
function sumPositiveNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number >= 0){
            sum += number;
        }
    });
    return sum;
};
console.log(sumPositiveNumbers([-1, -23, -100, 90, 1, -2]));
//
function sumOddNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !== 0){
            sum += number;
        }
    });
    return sum;
};
console.log(sumOddNumbers(20, 1, 31, 34, 22, 10));
//
function sumOfOddNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !== 0){
            sum += number;
        }
    });return sum;
};
console.log(sumOfOddNumbers(1, 99, 20, 30, 40));
//
function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    });
    return sum;
}
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 5
//
function sumOdd(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if(number % 2 !== 0){
            sum = sum + number;
        }
    });
    return sum;
}
console.log(sumOdd([1, 1, 12]));
//
function sumEvenNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if (number % 2 !== 0){
            sum += number;
        }
    });
    return sum;
}
console.log(sumEvenNumbers([22, 22, 99, 1, 101]));
//
function sumOddNumbers(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if (number % 2 !== 0){
            sum = sum + number;
        }
    });
    return sum;
}
console.log(sumOddNumbers(20, 1, 31, 34, 22, 10));
//
function sumOddNum(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        if (number % 2 !== 0){
            sum = sum + number;
        }
    });
    return sum;
};
console.log(sumOddNum([22, 11, 11, 90, 100, 66]));
//
let numbers = [9, 5, 14, 3, 11];
let numbersAbobeTen = numbers.filter(function(number){
    return number >= 10;
});
console.log(numbersAbobeTen);
//
let grades = [0, -2, -4, 3, 44, 100, 1];
let gradesLessThanZero = grades.filter(function(grade){
    return grade <=0;
}); console.log(gradesLessThanZero);
//
let years = [1999, 2000, 2008, 2020, 2023];
let action = years.filter(function(year){
    return year >= 2010;
});console.log(action);