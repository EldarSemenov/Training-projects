const grades = [12, 19, 10, 4, 15, 9];
const getLowestValue = grades => {
    return Math.min(...grades);
}; console.log(getLowestValue(grades));

const getHighestValue = grades => {
    return Math.max(...grades);
}; console.log(getHighestValue(grades));

const getPassingGrades = grades => {
    return grades.filter(grade => grade >= 10).join(", ");
}; console.log(getPassingGrades(grades));

const getFailingGrades = grades => {
    return grades.filter(grade => grade <= 9).join(", ");
}; console.log(getFailingGrades(grades));

const getRaisedNumber = grades => {
    return grades.map(grade => {
        const newValue = grade + 2;
        if (newValue >= 20) {return 20;}
        return newValue;
    }).join(", ");
}; console.log(getRaisedNumber(grades));
//
try {
    getRaisedNumber(grades);
} catch (error) {
    console.log(error);
}
//
const isItNumberZero = number => {
    return number === 0;
}; console.log(isItNumberZero(1));
console.log(isItNumberZero(0));
console.log(isItNumberZero("true"));
//
const voter = {
    name: "Jennido",
    age: 16
};
const canVote = voter => {
    if (voter.age < 18) {
        return "Sorry, you are not able to vote";
    }
    else if (voter.age === 18) {
        return "This is your first vote";
    }
    else {
        return "Thank you for your vote";
    }
}; console.log(canVote(voter));
// CLASSES
class User {
    constructor(email) {
        this.email = email;
    }
};
const john = new User("john@gmail.com");
console.log(john);
//
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
console.log(Rectangle);
//
let Rec = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};console.log(Rec.name);
let Rectangle2 = class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}; console.log(Rectangle2.name);
//
class Location {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}; console.log(Location.name);
console.log(Location.constructor);
//
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
myCar = new Car("Ford Mustang", 2021);
console.log(myCar.name + ` ` + myCar.year);
//
class Student {
    constructor(first_name, last_name, age, grade) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.grade = grade;
    }
}
my_student = new Student("Jeremy", "Dekenson", 21, 100);
console.log(my_student.first_name + " " + my_student.last_name + 
" is " + my_student.age + "." + " He got the highest score " + " - " +
my_student.grade);



