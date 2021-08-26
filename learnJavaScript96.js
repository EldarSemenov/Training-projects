const users = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sam', subscription: {info: {value: 78}}},
    {id: 3, name: 'Charlie', subscription: {info: {value: 32}}}
];
const getTotalSales = users => {
    let sum = 0;
    users.forEach(user => {
        sum += user.subscription?.info?.value ?? 0;
    }); return sum;
};
console.log(getTotalSales(users));
//
const names = ['sam', 'Alex'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
//
const tweets = [
    {
        id: 29783783438468347,
        message: 'Hello Twitter 👋🏻',
        created_at: '2020-01-03 11: 46: 00'
    },
    {
        id: 9374872379393845834,
        message: 'How do you keep track of your notes?',
        created_at: '2021-02-19 15:32:00'
    }
];
const messages = tweets.map(tweet => tweet?.message);
console.log(messages);
//
const recordings = [
    {
        date: '2020-01-03',
        temperature: 3
    },
    {
        date: '2020-01-04',
        temperature: -4
    }
];
const getTemperature = recordings => {
    return recordings.map(record => record.temperature);
};
console.log(getTemperature(recordings));
//
const users = [
    {
        id: 1,
        firstName: 'Sam',
        lastName: 'Green'
    },
    {
        id: 2,
        firstName: 'Alex',
        lastName: 'Blue'
    }
];
const getFullName = users => {
    return users.map(user => `${user.firstName} ${user.lastName}`.toUpperCase());
}
console.log(getFullName(users));
//
const age = 18;
const person = {
    name: 'Jhon',
    age
};
console.log(person.age);
//
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
};
console.log(settings);
//
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}
sum(2, 2);
//
const getUser = (id, name) => {
    return {id, name};
}
console.log(getUser(23, 'Alexander'));
//
const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}
getProduct(10, 10);
//
const config = {
    id: 1,
    isAdmin: false,
    theme: {dark: false, 
            accessibility: true} 
};
const {id, isAdmin, theme} = config;
//
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name, isAdmin = false} = user;
console.log(isAdmin);
//
const name = 'Document title';
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name: userName, isAdmin} = user;//destructure user.name into variable userName
console.log(userName);
const {id, name, isAdmin: admin} = user;
console.log(admin);
//
const name = 'words';
const user = {
    name: 'Alex',
    idNumber: 39784,
    codeWord: 'Earth',
    permission: true
};
const {name: userName, idNumber: id, codeWord: code, permission} = user;
console.log(userName);
console.log(id);
console.log(code);
console.log(permission);
console.log(user.idNumber);
//
const firstPerson = {
    name: 'Sam',
    age: 18
}
const secondPerson = {
    age: 25,
    type: 'admin'
}
const mergeObjects = {...firstPerson, ...secondPerson};
console.log(mergeObjects);
//
const options = {
    tabSize: 4
};
const defaultOptions = {
    indentation: 'tab',
    tabSize: 0,
    language: 'JavaScript'
};
const mergeOptions = (options, defaultOptions) => {
    return {...defaultOptions, ...options};
};
console.log(mergeOptions(options, defaultOptions));
//
const userLocation = {
    lat: 23.9237892,
    lng: 4.39478
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
}
console.log(getLatLng(userLocation));
//
const userLocation = {
    lat: 24.94584,
    lng: 3.9384
};
const getLatLngElevation = userLocation => {
    const {lat, lng, elevation = 0} = userLocation;
    return `The latitude is ${lat}, the longtitude is 
    ${lng} and the elevation is ${elevation} meters`;
};
console.log(getLatLngElevation(userLocation));