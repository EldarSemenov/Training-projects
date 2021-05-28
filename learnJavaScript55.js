const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
const {isAdmin, theme} = config;
//
const user = {
    id: 42,
    is_verified: true
}; 
const {id, is_verified} = user;
console.log(id);
console.log(is_verified);
//
const user1 = {
    id: 1,
    name: "Sam",
    isAdmin1: true
};
const {name, isAdmin1 = false} = user1;
console.log(isAdmin1);
//
const firstPerson = {
    name: "Sam",
    age: 18
};
const secondPerson = {
    age: 25,
    type: 'admin'
};
const mergeObjects = {...firstPerson, ...secondPerson};
console.log(mergeObjects);
//
const options = {
    tabSize: 4,
};
const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'javascript',
};
const mergeOptions = (options, defaultOptions) => {
    return {...defaultOptions, ...options};
}; console.log(mergeOptions(options, defaultOptions));
//
const userLocation = {
    lat: 24.2847284,
    lng: 2.8934,
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};
console.log(getLatLng(userLocation));
//
const userLocation1 = {
    lat: 23.824837,
    lng: 4.8735,
};
const getLatLngElevation = userLocation1 => {
    const {lat, lng, elevation = 0} = userLocation1;
    return `The latitude is ${lat}, the longtitude is 
    ${lng} and the elevation is ${elevation} meters`;
};
console.log(getLatLngElevation(userLocation1));
//Optional Chaning
//const name = user.details?.name?.firstName;
//
const user2 = {
    details: {
        name:{firstName: "Sam"}
    }, 
    data: null
};
console.log(user2.details?.name?.firstName);
console.log(user2.data?.id);
console.log(user2.children?.names);
console.log(user2.details?.parent?.firstName);
//
const student = {
    name: {
        firstName: "Jerald",
        lastName: "Timerson"
    },
    parents: {
        father: {
            firstName: "Tom",
            lastName: "Timerson"
        },
        mother: {
            firstName: "Marya",
            lastName: "Timerson"
        }
    },
    data: {
        citezenship: "The United States of America",
        idNumber: 823474909247873 
    },
    other_data: null
};
console.log(student.name?.firstName);
console.log(student.name?.lastName);
console.log(student.data?.citezenship);
console.log(student.data?.idNumber);
console.log(student.other_data?.driving_lisence?.id_code);
console.log(student.parents?.mother?.firstName);
//
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};const dogName = adventurer.dog?.name;
console.log(dogName);
console.log(adventurer.someNonExistentMethod?.());
//
const getFullName = user3 => {
    return user3.info?.name;
}; console.log(getFullName({info: {name: "Sam"}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPaymentValue = user4 => {
    return user4.payment?.details?.value;
};
console.log(getPaymentValue({id: 2, name: "Samuel", 
payment: {details: {value: 59}}}));
console.log(getPaymentValue({id: 1, name: "Alex"}));

const data1 = {
    temperatures: [-3, 14, 4]
};
/*
let firstValue = undefined;
if(data1.temperatures) {
    firstValue = data1.temperatures[0];
}
*/
const firstValue = data1.temperatures?.[0];
console.log(firstValue);
//
const person = {
    age: 43,
    name: "Sam"
};
/*
let upperCasedName = person.name;
if(person.name){
    upperCasedName = person.name.toUpperCase();
}
*/
const upperCasedName = person.name?.toUpperCase();
console.log(upperCasedName);
//
const sum = values => {
    return values?.[0] + values?.[1];
}; console.log(sum([3, 2]));
console.log(sum([]));
//
const getFirstGrade = data => {
    return data.results?.grades?.[0];
};
console.log(getFirstGrade({results: {grades: [18, 14, 19]}}));
console.log(getFirstGrade({results:{}}));
console.log(getFirstGrade({}));
//
const getFullName1 = user => {
    return user.info?.name?.toLowerCase();
};
console.log(getFullName1({info:{name: 'ALEX'}}));
console.log(getFullName1({info:null}));
console.log(getFullName1({}));
//
const getName = name => {
    return name ?? "   ";
}; 
console.log(getName("Zilly"));
console.log(getName(undefined));
console.log(getName(null));
//
const getPlaceholder = () => {
    console.log("getPlaceholder called");
    return "N/A";
};
const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
};
console.log(sayHello("Sam"));
console.log(sayHello());
//
const foo = null ?? 'default string';
console.log(foo);
//
const baz = null ?? 42;
console.log(baz);
//
const getAge = user => {
    return user.age ?? "unknown";
};
console.log(getAge({age: 19}));
console.log(getAge({}));
//
const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? "User"}`;
};
console.log(getWelcomeMessage({fullName: "Sam Green"}));
console.log(getWelcomeMessage({}));