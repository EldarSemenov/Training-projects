const dimensions = [20, 5];

const [width, height] = dimensions;

console.log(width);
console.log(height);

const location = [23.9837, 32.093938];

const getLocation = location => {
    const [ltd, lng] = location;
    return `The latitude is ${ltd} and the second paramater is ${lng}`;
};
console.log(getLocation(location));

const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point);

const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(otherItems);

const user = {
    id: 1,
    name: "Sam Green",
};
console.log(user.id);

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const key = "id";
const name = "name";
const age = "age";
console.log(user[key]);
console.log(user[name]);
console.log(user[age]);

const getValue = (user, keyToRead) => {
    return user[keyToRead];
};
console.log({ id: 2, name: "Sam" }, "name");
console.log({ id: 2, name: "Sam" }, "id");

const getDetails = (student, keyToRead) => {
    return student[keyToRead];
};
console.log(
    getDetails({ id: 2, firstName: "Elddar", lastName: "Semenov" }, "lastName")
);
console.log(getDetails({ id: 1, firstName: "Jason", lastName: "Told" }, "id"));

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const keys = Object.keys(user);
console.log(keys);
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

const data = {
    type: "car",
    model: "Tesla Model 3",
    year: 2024,
    owner: "person",
    name: "Eldar Semenov",
};

const keys = Object.keys(data);
console.log(keys);

keys.forEach(key => {
    console.log(data[key]);
});

const personData = {
    firstName: "Eldar",
    lastName: "Semenov",
    age: 37,
};
const datas = Object.keys(personData);
console.log(datas);

datas.forEach(data => {
    console.log(personData[data]);
});

const getUpperCaseProperties = course => {
    return Object.keys(course).map(key => key.toUpperCase());
};

console.log(getUpperCaseProperties({ Name: "JavaScript", year: 2024 }));

const getLowerCaseValues = course => {
    return Object.values(course).map(value => value.toLowerCase());
};
console.log(getLowerCaseValues({ name: "Pithon", author: "Eldar Smenov" }));

const logValues = course => {
    Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
};

logValues({ id: 1, date: 2022, name: "JavaScript" });
