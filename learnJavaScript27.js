const first_person = {
    name: "John",
    age: 18
};
const second_person = {
    age: 25
};
const mergedObjects = {...first_person, ...second_person};
console.log(mergedObjects);
//
const person = {
    first_name: "Jennifer",
    last_name: "Doe",
    age: 23,
    id_number: 29387
};
const {first_name, last_name, status = "Single"} = person;
console.log(person);
//
const user = {
    id: 42,
    is_verified: true
};
/*const {id, is_verified} = user;
console.log(id);
console.log(is_verified);
*/
const defaultOptions = {
    first: false,
    access: "no"
};
const userOptions = {
    first: true,
    access: "yes"
};
const options = {...defaultOptions, ...userOptions};
console.log(options);
//
const {lat, lng} = {
    lat: 52.8347834,
    lng: 3.972487
}; console.log(lat, lng);
//
const {id, active = true} = {
    id: 10,
    name: "John"
}; console.log(id, active);
//
const getObject = (id, name) => {
    return {id, name};
}; console.log(getObject(23, "Eldar"));
//
const defaultOption = {
    size: 300,
    permission: "no",
    user: "no"
};
const option = {
    permission: "yes",
    user: "yes"
}; 
const GetMerged = () => {
    return {...defaultOption, ...option};
}; console.log(GetMerged());
//
const userLocation = {
    lat: 12.83487,
    lng: 4.983333
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
}; console.log(getLatLng(userLocation));
//
const income = {
    name: "Eldar Semenov",
    first_income: 1300,
    second_income: 12000
};
const getIncome = income => {
    const {first_income, second_income} = income;
    return `My first income was ${first_income}
    and the next is ${second_income} per month`;
}; console.log(getIncome(income));
//
const userLoc = {
    lat1: 23.343434,
    lng2: 5.2376243
};
const getUserLoc = userLoc => {
    const {lat1, lng2, elevation = 3} = userLoc;
    return `My location is: latitude = ${lat1}, 
    longtitude = ${lng2}, and elevation is ${elevation}`;
}; console.log(getUserLoc(userLoc));
//
const per = {
    name: "Alex Muro",
    age: 23
};
const canVote = per => {
    return per.age >= 18;
}; console.log(canVote(per));
//
const student = {
    name: "Jason Noim",
    age: 22,
    grades: [12, 12, 12, 11, 10, 14] 
};
const getTotalGrades = student => {
    let sum = 0;
    student.grades.map(grade => sum += grade);
    return sum;
}; console.log(getTotalGrades(student));
//
const persona = {
    first_name: "Jessica",
    grades: [10, 11, 12, 14, 10],
    age: 17,
    parents: {
        father: {last_name: "Doe"},
        mother: {last_name: "Doe"}
    }
};
const getFullName = persona => {
    return `${persona.first_name} ${persona.parents.father.last_name}`;
}; console.log(getFullName(persona));
//
const tests = [
    {date: "2018-12-13",
    grade: 15},
    {date: "2019-12-14",
    grade: 14}
];
const getNumberOfTetsts = tests => {
    return tests.length;
}; console.log(getNumberOfTetsts(tests));