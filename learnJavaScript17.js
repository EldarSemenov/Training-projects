const firstPerson = {
    name: "John",
    age: 10
};
const seconPerson = {
    age: 20
};
const mergedObjects = {...firstPerson, ...seconPerson};
console.log(mergedObjects);
//
const person = {
    first_name: "Jennica",
    last_name: "Mon",
    age: 24
};
const {first_name, last_name, status = "married"} = person;
console.log(first_name);
console.log(status);
console.log(person);
//
const user = {
    idNumber: 23,
    is_verified: true
};
const {idNumber, is_verified} = user;
console.log(idNumber);
console.log(is_verified);
//
const defaultOptions = {
    verbose: false,
    src: "./src",
    dist: "./dist"
};
const userOption = {
    verbose: true
};
const options = {...defaultOptions, ...userOption};
console.log(options);
//
const {lat, lng} = {
    lat: 34.43957,
    lng: 32.45656,
    elevation: 23
};
console.log(lat, lng);
//
const {id, active = true} = {
    id: 10,
    name: "John"
};
console.log(id, active);
//
const first_user = {
    id: 2,
    name: "Naton"
};
const getObject = (id, name) => {
    return {id, name};
}; console.log(getObject(2, "Naton"));
//
function getobject (id, name) {
    return {id, name};
}; console.log(getobject(34, "Alehandro"));
//
const opt = {
    tabSize: 4,
};
const defaultOpt = {
    indentation: 'tab',
    tabSize: 2,
    lang: 'Java Script'
};
const merge_Options = (opt, defaultOpt) => {
    return {...defaultOpt,...opt};
}; console.log(merge_Options(opt, defaultOpt));
//
const userLocation = {
    lat: 12.20348,
    lng: 2.935839
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the
    longitude is ${lng}`;
}; console.log(getLatLng(userLocation));
//
const myLocation = {
    lat: 3.3947,
    lng: 23.123
};
const getLatLngElevation = myLocation => {
    const {lat, lng, elevation = 10} = myLocation;
    return `So, you can find me in the next location:
    my latitude is ${lat}, my longtitude is ${lng},
    and I am on the elevation of ${elevation};
    All right see you later!`;
}; console.log(getLatLngElevation(myLocation));
//
const voter = {
    name: "Jerald",
    age: 26
};
const canVote = voter => {
    return voter.age >= 18;
}; console.log(canVote(voter));
//
const student = {
    name: "Georgialina",
    grades: [10, 12, 45, 23, 657],
    age: 20
};
const sumGrades = student => {
    let sum = 0;
    student.grades.map(grade => sum += grade);
    return sum;
}; console.log(sumGrades(student));
//
const persona = {
    first_name: "Jennifer",
    gardes: [10, 10, 6, 12, 18],
    age: 18,
    parents: {
        father: {
            last_name: "Frederico"
        },
        mother: {
            last_name: "Frederico"
        }
        
    }
};
const getPersonaFullName = persona => {
   return `${persona.first_name} ${persona.parents.father.last_name}`; 
}; console.log(getPersonaFullName(persona));
//
const grades = [{
    date: "2018-12-13",
    grade: 14
},{
    date: "2018-12-15",
    grade: 15
}];
const getNumberOfGrades = grades => {
    return grades.length;
}; console.log(getNumberOfGrades(grades));
//
const getSumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade.grade);
    return sum;
}; console.log(getSumGrades(grades));
//
const getAverageGrade = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade.grade);
    return sum / grades.length;
}; console.log(getAverageGrade(grades));
//
const items = ["pen", "desk", "paper"];
console.log(items);
//
const deletedItem = items.splice(2, 1);
console.log(items);
items.splice(0, 1);
console.log(items);
//
const apps = ["phone", "calculator", "clock"];
apps.length = 0;
console.log(apps);
const appsitems = ["phone", "console", "calculator", " codetogo", "clock"];
appsitems.splice(2, 3);
console.log(appsitems);
//
const months = ['Jan', 'Feb', 'March', 'April', 'May'];
months.splice(2, 3, 'June', 'July', 'August');
console.log(months);
months.splice(0, 1, 'Apukaka');
console.log(months);
//
const homeapps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
const removeFirst = homeapps => {
    homeapps.splice(0, 1);
    return homeapps;
}; console.log(removeFirst(homeapps));
const removeSecond = homeapps => {
    homeapps.splice(1, 1);
    return homeapps;
}; console.log(removeSecond(homeapps));
const emptyArray = homeapps => {
    homeapps.length = 0;
    return homeapps;
}; console.log(emptyArray(homeapps));
//
const my_name = "Eldar";
const characters = [...my_name];
console.log(my_name);
console.log(characters);
//
const dimensions = [20, 10];
const [width, height] = dimensions;
console.log(width);
console.log(height);
const lat_ = [5.2342];
const lng_ = [3.2323];
const point = [...lat_, ...lng_];
console.log(point);
const [lat_r, lng_r] = [23.2323, 34.9777];
console.log(lat_r, lng_r);
const winners = ["Eldar", "Kale"];
const losers = ["Mahmud", "Lali"];
const wrestlers = [...winners, ...losers];
console.log(wrestlers);
//
const first_half = ["Crome", "Mozilla"];
const second_half = ["Apple", "Google"];
const connectTwoArrays = (first_half, second_half) => {
    const result = [...first_half, ...second_half];
    return result;
}; console.log(connectTwoArrays(first_half, second_half));
//
const str = "Hello World!";
const split = str => {
    return [...str];
}; console.log(split(str));
//
const my_location = [12.1212, 23.9834];
const getMyLocation = my_location => {
    const [lat, lng] = my_location;
    return `Your latitude si ${lat} and longtitude is ${lng}`;
}; console.log(getMyLocation(my_location));
//
const my_grades = [10, 10, 10, 10, 10, 9, 9];
const getaveragegrade = my_grades => {
    let sum = 0;
    my_grades.forEach(grade => sum += grade);
    return Math.round(sum / my_grades.length);
}; console.log(getaveragegrade(my_grades));









