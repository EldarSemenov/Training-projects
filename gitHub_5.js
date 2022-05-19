const logValues = course => {
    return Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
};

logValues({ id: 1, name: "Learn JavaScript", year: 2021 }); // should log (separately): 1, "Learn JavaScript" and 2021

const user = {
    id: 1,
    name: "Sam Green",
    age: 20,
};
const entries = Object.entries(user);
console.log(entries);

const age = 18;
const person = {
    name: "Jhon",
    age: age,
};
console.log(person);
const student = {
    name: "Alex",
    age,
};
console.log(student);

const isAdmin = false;
const darkMode = true;

const settings = {
    isAdmin,
    darkMode,
};
console.log(settings);

const sum = (a, b) => {
    console.log({ a });
    console.log({ b });
    let total = a + b;
    console.log({ total });
    return total;
};
sum(1, 3);

const getUser = (id, name) => {
    return { id, name };
};
console.log(getUser(23, "Jason"));

const getProduct = (a, b) => {
    console.log({ a, b });
    let product = a * b;
    console.log({ product });
    return product;
};
getProduct(2, 2);

const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true,
    },
};
//const id = config.id;
//const isAdmin = config.isAdmin;
//const theme = config.theme;
const {id, isAdmin, theme} = config;

const user = {
    id: 1,
    name: "Sam",
};
const { name, id, isAdmin = false } = user;
console.log(name);
console.log(id);
console.log(isAdmin);

const student = {
  id: 98324579,
  firstName = 'Eldar',
  lastName = 'Semenov',
  age: 37
}
const {id, firstName, lastName, age} = student;
console.log(id);
console.log(firstName);
console.log(lastName);
console.log(age);

const user = {
    id: 1,
    name: "Sam",
};
const { name, id, isAdmin = false } = user;
console.log(id);
console.log(name);
console.log(isAdmin);

const student = {
    id: 2048,
    name: "Eldar Semenov",
    weight: 65,
    age: 45,
};
const { id, name, weight, age } = student;
console.log(id);
console.log(name);
console.log(weight);
console.log(age);

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true,
};
const { id, name, isAdmin = false } = user;
console.log(isAdmin);

const name = "Document title";

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true,
};
const { name: userName, id, isAdmin } = user;
console.log(userName);

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true,
};
const { id, name, isAdmin: admin } = user;
console.log(admin);

const firstPerson = {
    name: "Sam",
    age: 18,
};
const secondPerson = {
    age: 25,
    type: "admin",
};

const mergeObjects = { ...firstPerson, ...secondPerson };
console.log(mergeObjects);

const getUserLocation = userLocation => {
    const { lat, lng } = userLocation;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
};

const userLocation = {
    lat: 24.9834834,
    lng: 2.34985,
};
console.log(getUserLocation(userLocation));

const user = {
    details: {
        name: {
            firstName: "Sam",
        },
    },
    data: null,
};
console.log(user.details?.name?.firstName);
console.log(user.data?.id);

const data = {
    temperatures: [-3, 14, 4],
};
//let firstValue = undefined;
//if (data.temperatures) {
//    firstValue = data.temperatures[0];
//}
const firstValue = data.temperatures?.[0];
console.log(firstValue);

const getFirstValue = () => {
    return data.temperatures?.[0];
};
console.log(getFirstValue());

const person = {
    age: 43,
    name: "Sam",
};
const upperCasedName = person.name?.toUpperCase();
console.log(upperCasedName);

const sum = values => {
    return values?.[0] + values?.[1];
};
console.log(sum([2, 2]));

const getName = name => {
    return name ?? "N/A";
};
console.log(getName("Sam"));
console.log(getName(undefined));
console.log(getName(null));
console.log(getName());

const getPlaceholder = () => {
    console.log("GetPlaceholder called");
    return "N/A";
};
getPlaceholder();

const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
};
console.log(sayHello("Eldar"));
console.log(sayHello());

const getAge = user => {
    return user.age ?? "Unknown person!";
};
console.log(getAge({ age: 24 }));
console.log(getAge({ name: "Alex" }));

const getWelcomeMessage = user => {
    return `Welcome ${user.fullName ?? "user"}`;
};
console.log(getWelcomeMessage({ fullName: "Sam Green" })); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"

let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
} else {
    name = "N/A";
}
const name = user.details?.name?.firstName ?? "N/A";

const user = {
    id: 1,
    name: "Sam",
    age: null,
};
console.log(user.age);
console.log(user.birthday);

const user = {
    id: 1,
};
const result = 2 + (user.age ?? 18);
console.log(result);

const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        on_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!",
    };
    return messages[status] ?? "Unknown status";
};
console.log(getPushMessage(prepared));

const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`,
    };
    return messages[booking.status] ?? "Unknown booking status.";
};

const booking1 = {
    status: "pending",
};

const booking2 = {
    status: "confirmed",
};

const booking3 = {
    status: "canceled",
};

const booking4 = {
    status: "done",
};
console.log(getStatus("Sam", "Alex", booking1));
console.log(getStatus("Sam", "Tommy", booking2));
console.log(getStatus("Sam", "Alex", booking3));
console.log(getStatus("Sam", "Alex", booking4));

const getBookingStatus = (name, hotel, booking) => {
    const information = {
        taken: `"Unfortunately" ${name}, this room is taken already in this ${hotel},`,
        free: `${name}, you can order this room in the ${hotel}`,
        canceled: `Dear ${name}, you canceled your order in our hotel ${hotel}`,
    };
    return information[booking.current] ?? "Unknown booking status";
};

const booking1 = {
    current: "taken",
};
const booking2 = {
    current: "free",
};
const booking3 = {
    current: "canceled",
};
console.log(getBookingStatus("Jason", "Hilton", booking1));
console.log(getBookingStatus("Jason", "Hilton", booking2));
console.log(getBookingStatus("Jason", "Hilton", booking3));
