const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
}
console.log(getUpperCasedProperties({id: 1, name: 'Learn JavaScript', year: 2021}));
//
const getLowerCasedValues = course => {
    return Object.values(course).map(value => value.toLowerCase());
}
console.log(getLowerCasedValues({id: 32, name: 'Eldar Semenov', profession: 'WEB DEVELOPER'}));
//
const logValues = course => {
    Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
}
console.log(logValues({name: 'Learn JavaScript', year: 2021, user: 'Eldar Semenov'}));
//
const person = {
    id: 1,
    firstName: 'Sam'
};
console.log(person.firstname);
console.log(person.age);
console.log(`Hello ${person}`);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const values = Object.values(user);
console.log(values);
const keys = Object.keys(user);
console.log(keys);
const values1 = Object.values(user).map(value => value.toUpperCase());
console.log(values1);
const keys1 = Object.keys(user).map(key => key.toUpperCase());
console.log(keys1);
//
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const entries = Object.entries(user);
console.log(entries);
//
const logValues = course => {
    return Object.values(course).map(value => value.toUpperCase());
}
console.log(logValues({name: "JavaScript"}));
//
const getUpperCasedValues = course => {
    return Object.values(course).map(value => value.toUpperCase());
    }
    
    // Sample usage - do not modify
    console.log(getUpperCasedValues({name: "Learn JavaScript"})); // ["LEARN JAVASCRIPT"]
    console.log(getUpperCasedValues({name: "Learn JavaScript", category: "Programming"})); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
    console.log(getUpperCasedValues({})); // []
//
const age = 18;
const person = {
    name: 'Jhon',
    age
};
console.log(person);
//
const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode
};
console.log(settings);
//
let sum = (a, b) => {
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
console.log(getUser(23, 'John'));
console.log(getUser(12, 'Anderson'));
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
    theme: {
        dark: false,
        accessibility: true
    }
};
const id = config.id; (console.log(id));
const isAdmin = config.isAdmin; console.log(isAdmin);
const theme = config.theme; console.log(theme);
const accessibility = config.theme.accessibility; console.log(accessibility);
//
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
const {id, isAdmin, theme} = config;
console.log(id);
console.log(isAdmin);
console.log(theme);
//
const user = {
    id: 1,
    name: 'Sam'
};
const {id, name, isAdmin = false} = user;
console.log(id);
console.log(name);
console.log(isAdmin);
//
const user = {
   id: 1,
   name: 'Sam',
   isAdmin: true
};
const {id, name, isAdmin = false} = user;
console.log(isAdmin);
console.log(id);
console.log(name);
//
const name = 'Document title';

const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {id, name: userName, isAdmin: admin} = user;
console.log(name);
console.log(userName);
console.log(admin);
//console.log(isAdmin);
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
const userLocation = {
    lat: 24.384738,
    lng: 2.37846
};
const getLatLng = userLocation => {
    const {lat, lng} = userLocation;
    return `The latitude is ${lat}, and the longtitude is ${lng}`;
}
console.log(getLatLng(userLocation));
//
const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
};
console.log(user.details?.name?.firstName);
console.log(user.data?.id);
console.log(user.children?.names);
console.log(user.details?.parent?.firstName);
//
const data = {
    temperatures: [-3, 14, 4]
};
let firstValue = undefined;
if(data.temperatures) {
    firstValue = data.temperatures[0];
}
const firstValueOfArray = data.temperatures?.[0];
console.log(firstValueOfArray);
const secondValue = data.temperatures?.[1];
console.log(secondValue);
const thirdValue = data.temperatures?.[2];
console.log(thirdValue);
//
const loopArray = data => {
    return data.temperatures.forEach(value => {
        console.log(value);
    });
}
console.log(loopArray(data));
//
const person = {
    age: 43,
    name: 'Sam'
};
const UpperCasedName = person => {
    return person.name?.toUpperCase();
}
console.log(UpperCasedName(person));
//
const sum = values => {
    return values?.[0] + values?.[1];
}
console.log(sum([100, 100]));
console.log(sum([]));
//
const getFirstGrade = data => {
    return data.results?.grades?.[0];
}
console.log(getFirstGrade({results: {grades:[18, 14, 19]}}));