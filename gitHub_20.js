const age = 18;
const person = {
    name: "John",
    age,
};

const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode,
};
console.log(settings);

const sum = (a, b) => {
    console.log(a);
    console.log(b);
    let total = a + b;
    console.log(total);
    return total;
};
sum(10, 10);

const sum = (a, b) => {
    console.log({ a });
    console.log({ b });
    let total = a + b;
    console.log({ total });
    return total;
};
sum(1, 10);

const getUser = (name, id) => {
    return { name, id };
};
console.log(getUser("Artur", 2322));

const getProduct = (a, b) => {
    console.log({ a, b });
    let product = a * b;
    console.log({ product });
    return product;
};
getProduct(3, 3);

const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true,
    },
};
// const id = config.id;
// const isAdmin = config.isAdmin;
// const theme = config.theme;
// console.log(theme);
const {id, isAdmin, theme} = config;

const student = {
    id: 2234345,
    firstName: "Eldar",
    lastName: "Semenov",
    age: 38,
};

const { id, firstName, lastName, age } = student;
console.log(firstName);

const user = {
    id: 1,
    name: "Sam",
};
const { name, isAdmin = false } = user;
console.log(isAdmin);
console.log(name);

const user = {
    id: 1,
    name: "Sam",
    isadmin: true,
};
const { name, isadmin = false } = user;
console.log(isadmin);

const name = "Document title";

const user = {
    id: 2,
    name: "Sam",
    isAdmin: true,
};
const { name: userName, isAdmin } = user;
console.log(userName);

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true,
};
const { id, name: userName, isAdmin: admin } = user;
console.log(id);
console.log(userName);
console.log(admin);

const firstPerson = {
    name: "Sam",
    age: 18,
};

const secondPerson = {
    age: 25,
    type: "admin",
};

const mergedObjects = { ...firstPerson, ...secondPerson };
console.log(mergedObjects);

const userLocation = {
    lat: 2.4934,
    lng: 32.38333,
};

const getUserLocation = location => {
    const { lat, lng } = location;
    return `The user's latitude is ${lat} and the user's longtitude is ${lng}`;
};
console.log(getUserLocation(userLocation));
*/
const location = {
    lat: 3.39283,
    lng: 33.3933,
};

const getUserLocation = userLocation => {
    const { lat, lng, elevation = 2 } = userLocation;
    return `The user's latitude is equal to ${lat} and his longtitude is ${lng}. Elevation will be ${elevation} presumably.`;
};

console.log(getUserLocation(location));
