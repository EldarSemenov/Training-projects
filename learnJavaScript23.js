const users = [{
    id: 1,
    name: "Alex",
    is_verified: false
},
{
    id: 2,
    name: "Jeni",
    is_verified: false
},
{
    id: 3,
    name: "Tommy",
    is_verified: false
}
];
const verifyUser = (users, id) => {
    const user = users.find(user => user.id === id);
    user.is_verified = true;
    return users;
}; console.log(verifyUser(users, 3));
//
const persons = [{
    firt_name: "Jason",
    last_name: "Modi",
    id_number: 129012,
    is_checked: false
},
{
    first_name: "Larson",
    last_name: "Lee",
    id_number: 120934,
    is_checked: false
},
{
    first_name: "Jennika",
    last_name: "Westoni",
    id_number: 123454,
    is_checked: false
}
];
const isPersonChecked = (persons, id_number) => {
    const person = persons.find(person => person.id_number === id_number);
    person.is_checked = true;
    return persons;
}; console.log(isPersonChecked(persons, 120934));
console.log(isPersonChecked(persons, 123454));
console.log(isPersonChecked(persons, 129012));
//
const students = [
    {
        first_name:"Monica",
        last_name:"Stafoni",
        id: 123,
        has_car: false
    },
    {
        first_name:"Karl",
        last_name:"Van_Dif",
        id: 398,
        has_car: false
    },
    {
        first_name:"Poll",
        last_name:"Ronderos",
        id:396,
        has_car: false
    }
];
const checkCar = (students, id) => {
    const student = students.find(student => student.id === id);
    student.has_car = true;
    return students;
}; console.log(checkCar(students, 398));
console.log(checkCar(students, 396));
//
const gests = [
    {
        first_name:"Larson",
        last_name:"Jer",
        age: 45,
        id: 9012,
        has_id: false
    },
    {
        first_name:"Georgy",
        last_name:"Werdino",
        age: 34,
        id: 2093,
        has_id: false
    },
    {
        first_name:"Arsper",
        last_name:"Moduro",
        age: 66,
        id: 3233,
        has_id: false
    },
    {
        first_name:"Tonso",
        last_name:"Rino",
        age: 33,
        id:4323,
        has_id: false
    }
];
const checkingGests = (gests, id) => {
    const gest = gests.find(gest => gest.id === id);
    gest.has_id = true;
    return gests;
}; console.log(checkingGests(gests, 9012));
console.log(checkingGests(gests, 2093));
console.log(checkingGests(gests, 3233));
console.log(checkingGests(gests, 4323));
//
const u_sers = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jennifer Blane"
    }
]; 
const u_sersNamesArray = u_sers.map(user => user.name);
console.log(u_sersNamesArray);
const str = u_sersNamesArray.join(", ");
console.log(str);
const string = u_sers.map(user => user.name).join(", ");
console.log(string);
//
const str1 = ["James", "Alex", "David", "Tom", "Avraam"];
const action = str1.join(", ");
console.log(action);
//
const list = [
    {
        name: "Alex Muro",
        id: 1029
    },
    {
        name: "Istos Parkus",
        id: 2103
    },
    {
        name: "Robert Juliano",
        id: 1222
    }
];
const elements = list.map(element => element.name).join(", ");
console.log(elements);
const numbers = list.map(number => number.id).join(" - ");
console.log(numbers);
//
const pupals = [
    {
        first_name: "Jeddy",
        last_name: "Uro",
        age: 13,
        id: 9023
    },
    {
        first_name: "Rommy",
        last_name: "Polistov",
        age: 12,
        id: 2345
    },
    {
        first_name: "Linda",
        last_name: "Nilson",
        age: 13,
        id: 8989
    }
];
const pupalsId = pupals.map(pupal => pupal.id).join("-");
console.log(pupalsId);
const pupalsNames = pupals.map(pupal => pupal.first_name).join(", ");
console.log(pupalsNames);
const pupalsLastNames = pupals.map(pupal => pupal.last_name).join(", ");
console.log(pupalsLastNames);
const pupalsAge = pupals.map(pupal => pupal.age).join(" --- ");
console.log(pupalsAge);

const getAges = () => {
    const act = pupals.map(pupal => pupal.age).join("....");
    return act;
}; console.log(getAges());
//
const Users = [
    {
        id: 12,
        first_name: "Robert",
        last_name: "Anderson Van Homer",
        is_verified: false
    },
    {
        id: 23,
        first_name: "Jason",
        last_name: "Steferson",
        is_verified: false
    }
];
const getFullName = (Users) => {
    return Users.map(user => `${user.first_name}  ${user.last_name}`).join(", ");
};console.log(getFullName(Users));

const isVerifiedUser = (Users, id) => {
    const actionUser = Users.find(user => user.id === id);
    actionUser.is_verified = true;
    return Users;
}; console.log(isVerifiedUser(Users, 12));
console.log(isVerifiedUser(Users, 23));
//
const array4 = [10, 20];
const action4 = array4.every(number => number >= 8);
console.log(action4);
//ARRAY REDUCE
const num_s = [175, 50, 25];
const myFunc = (total, num) => {
    return total - num;
}; console.log(num_s.reduce(myFunc));
//
const array5 = [200, 200, 100];
const myFunction = (sum, num) => {
    return sum + num;
}; console.log(array5.reduce(myFunction));
//
const array6 = [5, 5, 5];
const multiplyFunction = (sum, number) => {
    return sum * number;
}; console.log(array6.reduce(multiplyFunction));
//
const array1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) =>
accumulator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 15));
//
const array7 = [10, 10, 10, 10, 10];
const reduceAction = (total, value) => total - value;
console.log(array7.reduce(reduceAction));
//
const array8 = [2, 2, 34];
const result = (sum, num) => sum * num;
console.log(array8.reduce(result));
//
const array9 = [2, 3, 4];
const product = array9.reduce((sum, num) => sum * num, 1);
console.log(product);
//
const array10 = [12, 234, 5];
const ac = array10.reduce((total, number) => total * number);
console.log(ac);
//
const arrayNumbers = [1000, 10];
const salary = arrayNumbers.reduce((sum, num) => sum * num);
console.log(salary);
//
const array11 = [2, 4, 3, 9];
const startingValue = 1;
const resulter = array11.reduce((total, current) => {
    return total * current
}, startingValue);
console.log(resulter);
//
const sumGrades = grades => {
    return grades.reduce((total, current) => 
        total + current, 0);
    };
console.log(sumGrades([10, 10, 10, 10, 10]));
//
const multiplyTheseNumbers = numbers => {
    return numbers.reduce((sum, num) => 
    sum * num);
};console.log(multiplyTheseNumbers([12, 12, 12, 12, 12]));
//
const lang = "JavaScript";
const yy = lang[lang.length - 1];
console.log(yy);
const tt = lang[4];
console.log(tt);
//
const getLastCharacterofName = (name) => {
    return name[name.length -1];
}; console.log(getLastCharacterofName("Zorro"));
//
const language = "Java Script";
console.log(language.substring(5, 8));
//
const sayHello = name => {
    return `Hello ${name}`;
}; console.log(sayHello("World!"));
//
const capitalizeWord = word => {
    return word[0].toUpperCase() +
    word.substring(1).toLowerCase();
}; console.log(capitalizeWord("fILM"));
console.log(capitalizeWord("weSt"));
console.log(capitalizeWord("the UnateD States oF AmeriCa"));
//
const str12 = 'Saturday is a nive day';
console.log(str12.startsWith('Sa'));
console.log(str12.startsWith('Sat', 0));
//
let string1 = `To be, or not to be, that is the question.`;
console.log(string1.startsWith('To be'));
console.log(string1.startsWith('that', 21));
//
let string2 = `Cats are the best animals`;
console.log(string2.endsWith('!'));
console.log(string2.endsWith('are', 8));
//
const greeting = 'Hello World!   ';
console.log(greeting);
console.log(greeting.trim());
//
const isMinneapolisFirstWord = word => {
    return word.startsWith("Minneapolis");
}; console.log(isMinneapolisFirstWord("Minneapolis is an awesome city"));