const person = {
    age: 36,
    firstName: "Eldar",
    lastName: "Semenov",
    ocupation: "Programmer"
};
function getObjectKeys(person){
    return Object.keys(person);
}; console.log(getObjectKeys(person));
//
const getObjectValues = person => {
    return Object.values(person);
}; console.log(getObjectValues(person));
//
function getDynamicKey(person, key){
    return person[key];
}; console.log(getDynamicKey(person, "age"));
console.log(getDynamicKey(person, "firstName"));
//
function getObject(id, name){
    return {id, name};
}; console.log(getObject(81273, "Jenica"));
//
const person$ = {
    idNum: 2348762,
    fName: "Karl",
    lName: "Simpson",
    age: 23,
    work: "Police Department",
    hobby: "Wrestling"
};
const getNameId = (idNum, fName) => {
    return {idNum, fName};
}; console.log(getNameId(2348762, "Karl"));
//
const car = {
    model: "BMW",
    year: 1989,
    owner: "Karl"
};
const year = {
    year: 2021
};
let funPlus = (car, year) => {
    return {...car, ...year};
};
console.log(funPlus(car, year));
//
const userLocation = {
    lat: 12.20490,
    lng: 23.98347
};
const getUserLocation = userLocation => {
    const {lat, lng} = userLocation;
    return `Your ccordinations: the lat: ${lat} and lng is ${lng}`;
}; console.log(getUserLocation(userLocation));
//
const userLoc = {
    lt: 24.875353,
    lg: 2.948593
};
const getLatLngElevation = userLoc => {
    const {lt, lg, elevation = 0} = userLoc; 
}; console.log(getLatLngElevation(userLoc));
//
const votePerson = {
    name: "Jerald Batler",
    age: 22
};
const canVote = votePerson => {
    return votePerson.age >= 18;
}; console.log(canVote(votePerson));
//
const student = {
    first_name: "Alex",
    last_name: "Muro",
    grades: [12, 23, 34, 11, 90, 67, 34],
    age: 23 
};
const getSumGrades = student => {
    let sum = 0;
    student.grades.forEach(grade => sum += grade);
    return sum;
}; console.log(getSumGrades(student));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pupal = {
    name: "Fedo Rosso",
    age: 34,
    grades: [12, 1000, 2000, 234, 834, 133]
};
const sumGrade = pupal => {
    let sum = 0;
    pupal.grades.forEach(grade => sum += grade);
    return sum;
}; console.log(sumGrade(pupal));

