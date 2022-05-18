const dimentions = [20, 5];

const [width, height] = dimentions;
console.log(width);
console.log(height);

const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};
const location = [24.32438, 2.298434];

console.log(getLocationString(location));

console.log(23);
const getLocationString = location => {
    //destructure into 2 variables: lat & lng
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longitude is ${lng}`;
};

// Sample usage - do not modify
const location = [24.235235, 2.5734];
console.log(getLocationString(location)); // "The latitude is 24.235235 and the longitude is 2.5734"

console.log(32);
const getLocationString = location => {
    //destructure into 2 variables: lat & lng
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longitude is ${lng}`;
};

// Sample usage - do not modify
console.log(getLocationString([24.235235, 2.5734]));

const getFullName = athlete => {
    const [firstName, lastName] = athlete;
    return `${firstName} ${lastName}`;
};

console.log(getFullName(["Eldar", "Semenov"]));
console.log(getFullName(["Mahmud", "Leguni"]));

const getLocation = spot => {
    const [ltd, lng] = spot;
    return `The latitude is ${ltd} and the longtitude is ${lng}`;
};
console.log(getLocation([23.4343, 23.95468]));

const lat = [5.234];
const lng = [1.412];

const point = [...lat, ...lng];
console.log(point);

const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];
console.log(otherItems);

const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
};
console.log(getApps(["Calculator"], ["TV"]));

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};

const key = "id";
console.log(user[key]);

const student = {
    name: "Nick Green",
    id: 927483,
};

const paroll = "id";
console.log(student[paroll]);

const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({ id: 2, name: "Sam" }, "name"));
console.log(getValue({ id: 2, name: "Sam" }, "id"));

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const keys = Object.keys(user);
console.log(keys);

const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false,
};
const keys = Object.keys(settings);
console.log(settings);

keys.forEach(key => {
    console.log(settings[key]);
});

const user = {
    id: 1,
    name: "Sam Green",
};
console.log(user.id);

const key = "id";
console.log(user[key]);

const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log(getValue({ id: 1, name: "Sam" }, "name"));
console.log(getValue({ id: 1, name: "Sam" }, "id"));

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
console.log(Object.keys(user));
console.log(Object.values(user));

const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false,
};
const keys = Object.keys(settings);
console.log(keys);

keys.forEach(key => {
    console.log(settings[key]);
});

const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
};

console.log(
    getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "name")
); // "The course name is Learn JavaScript"
console.log(
    getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "year")
); // "The course year is 2021"

const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
};

console.log(
    getUpperCasedProperties({ id: 1, name: "Learn JavaScript", year: 2021 })
); // ["ID", "NAME", "YEAR"]
console.log(
    getUpperCasedProperties({
        name: "Learn JavaScript",
        category: "Programming",
    })
); // ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); // []
