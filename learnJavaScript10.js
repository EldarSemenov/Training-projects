const object = {
    id: 12,
    name: "Jad",
    age: 34
};
const getObject = (id, name, age) => {
    return {id, name, age};
}; console.log(getObject(12, "Jad", 34));
//
const option = {
    size: 100
};
const defaultOption = {
    size: 200,
    model: "Opec",
    year: 2021
};
const changeOption = (defaultOption, option) => {
    return {...defaultOption, ...option};
}; console.log(changeOption(defaultOption, option));
//
const place = {
    lng: 3.12098,
    lat: 1.232,
    elevation: 23,
    location: "Germany"
}; 
const getLocation = place => {
    const {lng, lat} = place;
    return `The longtitude is ${lng} and 
    the latitude is ${lat}. That will be your position.`;
}; console.log(getLocation(place));
//
const userLocation = {
    longtitude: 2.39487,
    latitude: 12.34934
};
const getUserLocation = userLocation => {
    const {longtitude, latitude, elevation = 12} = userLocation;
    return `Your longtitude is ${longtitude}, latitude is ${latitude} and
    elevation is ${elevation}. We will find you there.`;
}; console.log(getUserLocation(userLocation));
//
const voter = {
    first_name: "Leonardo",
    last_name: "Humod",
    age: 27
};
const canVote = voter => {
    return voter.age >= 18;
};console.log(canVote(voter));
//
const student = {
    firstName: "Rommell",
    lastName: "Niz",
    age: 19,
    grades: [12, 37, 12, 90, 67, 45, 67]
};
const getSumGrades = student => {
    let sum = 0;
    student.grades.forEach(grade => sum += grade);
    return sum;
}; console.log(getSumGrades(student));
//
const UniversityStudent = {
    first: "Alexandr",
    gardes: [12, 12, 12, 12, 12],
    age: 18,
    parents: {
        father: {
            last: "Doe"
        },
        mother: {
            last: "Doe"
        } 
    }
};
const getTheFuulName = UniversityStudent => {
    return `${UniversityStudent.first} ${UniversityStudent.parents.father.last}`;
}; console.log(getTheFuulName(UniversityStudent));
//
const grades =[{
    date: "2019-12-18",
    grade: 18
},{
    date: "2019-12-20",
    grade: 18
}];
const howManyTests = grades => {
    return grades.length;
}; console.log(howManyTests(grades));

const theSumOfGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade.grade);
    return sum;
}; console.log(theSumOfGrades(grades));
//
const users = [{
    joined_on: "2018-12-12",
    age: 52
},{
    joined_on: "2018-12-12",
    age: 19
}];
const getAverageAge = users => {
    let total = 0;
    users.forEach(user => total += user.age);
    return total / users.length;
}; console.log(getAverageAge(users));
//

