const config = {
    id: 1,
    isAdmin: false,
    theme: {dark: false, 
            accessibility: true}
};
//const id = config.id;
//const isAdmin = config.isAdmin;
//const theme = config.theme;
//console.log(id);
const {id, isAdmin, theme} = config;
//\\
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];
console.log(rest);
//\\
const user = {
    id: 1,
    name: 'Sam',
    number: 32873
};
const {name, isAdmin = false, id, number = 9000} = user;
console.log(name);
console.log(id);
console.log(isAdmin);
console.log(number);
//\\
const name = 'Document title';
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
//console.log(name);
//console.log(user.name);
const {name: userName, isAdmin: admin, id} = user;
console.log(userName);
console.log(admin);
//\\
const firstName = {
    name: 'Sam',
    age: 18
};
const secondName = {
    age: 25,
    type: 'admin'
};
const mergedObject = {...firstName, ...secondName};
console.log(mergedObject);
//\\
const person1 = {
    name: 'Sam Green',
    age: 50,
    id: 2332
};
const person2 = {
    name: 'Daniel Met',
    age: 20,
    id: 1111
};
const joinTogether = {...person1, ...person2};
console.log(joinTogether);
const join2 = {...person2, ...person1};
console.log(join2);
//
const options = {
    tabSize: 4
};
const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'JavaScript'
};
const defaultOptions2 ={
    indentation: 'tab',
    tabSize: 10,
    language: 'Python'
}
const sample = {...defaultOptions, ...options};
const sample2 = {...options, ...defaultOptions};
const mergeOptions = (options, defaultOptions) => {
    return {...defaultOptions, ...options};
};
const mergeOptions1 = (options, defaultOptions) => {
    return {...options, ...defaultOptions};
}
console.log(mergeOptions(options, defaultOptions));
console.log(sample);
console.log(sample2);
const sample3 = {...defaultOptions, ...defaultOptions2};
console.log(sample3);
const sample4 = {...defaultOptions2, ...defaultOptions};
console.log(sample4);
console.log(mergeOptions1(options, defaultOptions));
//\\
const userLocation = {
    lat: 24.8378374,
    lng: 2.9348
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}!`
};
console.log(getLatLng(userLocation));
//\\
const userLocation = {
    lat: 24.873487,
    lng: 3.32948
};
const getLatLngElevation = userLocation => {
    const {lat, lng, elevation = 0} = userLocation;
    return `The latitude is ${lat}, the longtitude is ${lng} and the 
    elevation is ${elevation} meters.`;
};
console.log(getLatLngElevation(userLocation));
//\\
let name = undefined;
if(user.details && user.details.name && user.details.name.firstName){
    name = user.details.name.firstName;
};
//
const name = user.details?.name?.name?.firstName;
console.log(name);
//
const user = {
    details: {
        name: {
            firstName: 'Alex'
        }
    },
    data: null
};
console.log(user.details?.name?.firstName);
console.log(user.data?.id);
//console.log(user.data.id);
console.log(user.children?.names);
console.log(user.details?.parent?.firstName);
//
const adventurer = {
    name: 'Alice',
    cat: {name: 'Dinah'}
};
const dogName = adventurer.dog?.name;
console.log(dogName);
const catName = adventurer.cat?.name;
console.log(catName);
//
const student = {
    name: {
        firstName: "Alex",
        lastName: "Muro"
    },
    parents: {
        father: {
            firstName: "Jason",
            lastName: "Muro"
        },
        mother: {
            firstName: "Alexandra",
            lastName: "Muro"
        }
    },
    idNumber: 87239,
    car: "Volvo",
    address: {
        city: "Colorado Saprings",
        street: 'Avenue Tompson',
        building: 12
    }
};
console.log(student.address.city);
console.log(student.address.phone);
console.log(student.parents?.father?.firstName);
//
const getFullName = user => {
    return user.info?.name;
};
console.log(getFullName({info: {name: 'Sam'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getPaymentValue = user => {
    return user.payment?.details?.value;
};
console.log(getPaymentValue({id: 1, name: 'Alex'}));
console.log(getPaymentValue({id: 2, name: 'Sam', payment: {details: {value: 59}}}));
//
const data = {
    temperatures: [-2, 14, 4]
};
const firstValue = data.temperatures?.[0];
console.log(firstValue);
//
const person = {
    age: 43,
    name: 'Sam'
};
const upperCasedName = person.name?.toUpperCase();
console.log(upperCasedName);
//
const sum = values => {
    return values?.[0] + values?.[1];
};
console.log(sum([2, 3]));
console.log(sum([]));
//
const getFirstGrade = data => {
    return data.results?.grades?.[0];
};
console.log(getFirstGrade({results: {grades: [18, 14, 19]}}));
console.log(getFirstGrade({results: {}}));
console.log(getFirstGrade({}));
//
const getFullName = user => {
   return user.info?.name?.toLowerCase();
}
console.log(getFullName({info: {name: 'ALEX'}}));
console.log(getFullName({info: null}));
console.log(getFullName({}));
//
const getName = name => {
    return name ?? 'Not Applicable';
};
console.log(getName('Sam'));
console.log(getName(undefined));
console.log(getName(null));
//
const getPlaceHolder = () => {
    console.log('getPlaceholder called');
    return 'N/A';
};
const sayHello = name => {
    return `Hello ${name ?? getPlaceHolder()}`;
}
console.log(sayHello('Sam'));
console.log(sayHello());
//
const foo = null ?? 'default string';
console.log(foo);
const baz = 0 ?? 42;
console.log(baz);