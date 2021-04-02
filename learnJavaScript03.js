const person = {
    name: "Jhon",
    age: 26
};
const canVote = person => {
    return person.age >= 18;
};
document.getElementById("grades").innerHTML =
canVote(person);
console.log(canVote(person));
//------------------------------
const student = {
    name: "Jessica",
    grades: [10, 6, 14, 3, 18],
    age: 17
};
const getTotalGrades = student => {
    let sum = 0;
    student.grades.forEach(grade => sum += grade)
    return sum;
};
document.getElementById("id01").innerHTML =
getTotalGrades(student);
console.log(getTotalGrades(student));
//---------_-_-_-_-_-_-_-_-_-_
const person_ = {
    first_name: "Jennifer",
    grades: [10, 6, 14, 3, 18],
    age: 17,
    parents:{
        father: {
            last_name: "Doe"
        },
        mother :{
            last_name: "Doe"
        }
    }
};
const getFullName = person_ => {
    return `${person_.first_name} ${person_.parents.father.last_name}`;
};
document.getElementById("id02").innerHTML = 
getFullName(person_);
console.log(getFullName(person_));
//__________________________________________________________________________
const grades = [{
    date: "2018-12-13",
    grade: 14
},
    {
        date: "2018-12-15",
        grade: 18
}]
const getNumberOfTestsTaken = grades => {
    return grades.length;
};
document.getElementById("id03").innerHTML = 
getNumberOfTestsTaken(grades);
console.log(getNumberOfTestsTaken(grades));
//-____________________________________________
const results = [{
    date: "2018-12-13",
    grade: 14
}, {
    date: "2018-12-15",
    grade: 18
}]
const getSumOfGrades = results => {
    let sum = 0;
    results.forEach(result => sum += result.grade);
    return sum;
};
document.getElementById("id04").innerHTML = 
getSumOfGrades(results);
console.log(getSumOfGrades(results));
//________________________________________________
const users = [{
    joined_on: "2018-12-13",
    age: 14
}, {
    joined_on: "2018-12-15",
    age: 18
}]
const getAverageAge = users => {
    let total = 0;
    users.forEach(user => total += user.age);
    return total / users.length;
};
document.getElementById("id05").innerHTML =
getAverageAge(users);
console.log(getAverageAge(users));
//______________________________________

