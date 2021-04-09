const person = {
    first_name: "Jassica",
    grades: [10, 8, 9, 3, 6, 9],
    age: 17,
    parents:{
        father:{
        last_name: "Doe",
        first_name: "Robert"
    },
    mother: {
        last_name: "Doe",
        first_name: "Monika"
    },
    }
};
const getFullName = person => {
    return `${person.first_name} ${person.parents.mother.last_name}`
}; console.log(getFullName(person));
//
const grades = [{
    date: "2018-12-13",
    grade: 14
},
{
    date: "2018-12-15",
    grade: 18
}]
const getNumberofTests = grades => {
    return grades.length;
}; console.log(getNumberofTests(grades));
//
const results =[{
    date: "2018-12-13",
    grade: 14
},{
    date: "2018-12-15",
    grade: 19
}];
const getSumGrades = results => {
    let sum = 0;
    results.forEach(result => sum += result.grade);
    return sum;
}; console.log(getSumGrades(results));
//
const users = [{
    joined_on: "2018-12-13",
    age: 14
},{
    joined_on: "2018-12-15",
    age: 18
}];
const getAverageAge = users => {
    let sum = 0;
    users.forEach(user => sum += user.age);
    return sum / users.length;
}; console.log(getAverageAge(users));
//

