const numbers = [5, 2, 10];
const result = numbers.reduce((total, current) => {
    return total * current
}, 1); console.log(result);
//
const n = [50, 50, 50];
let sum = n.reduce((total, current) => {
    return total + current;
}, 0); console.log(sum);
//
const findSum = numbers => {
    return numbers.reduce((total, current) => {
        return total + current;
    }, 0);
}; console.log(findSum(numbers));
//
const sumNum = num => {
    return num.reduce((total, current) => {
        return total + current;
    }, 0);
}; console.log(sumNum([100, 100]));
console.log(sumNum([1000, 2000]));
//
const multiplyNumbers = value => {
    return value.reduce((total, current) => {
        return total * current;
    }, 1);
}; console.log(multiplyNumbers([2, 20, 100]));
console.log(multiplyNumbers([50, 50]));
//
let numbers1 = [12, 14, 6];
const getSum = numbers1 => {
    let sum = 0;
    numbers1.forEach(number => sum += number);
    return sum;
}; console.log(getSum(numbers1));
//
const haveSum = numbers1 => {
    return numbers1.reduce((total, current) => {
        return total + current;
    }, 0);
}; console.log(haveSum(numbers1));
/*
const dimensions = [20, 5];
const width = dimensions[0];
const height = dimensions[1];
console.log(width);
console.log(height);
*/
const dimentions1 = [100, 50];
const [width, height] = dimentions1;
console.log(width);
console.log(height);
//
const foo = ['one', 'two', 'three'];
const        [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
//
let a, b;
[a, b] = [1, 2];
console.log(a); 
console.log(b);
//default value
let x, z;
[x = 100, z = 200] = [1, 3];
console.log(x);
console.log(z);
//
const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and
    the longtitude is ${lng}`;
}; const location = [24.8248274, 2.9327443];
console.log(getLocationString(location));
//
const get_L_N_string = loc => {
    const [lat, lng] = loc;
    return `Your latitude is ${lat} and longtitude is ${lng}`;
}; const loc = [12, 13];
console.log(get_L_N_string(loc));
//
const getAutoData = car => {
    const [age, price] = car;
    return `The price of the car is ${price}$ and the age is ${age} years old`;
}; const car = [17, 2900];
console.log(getAutoData(car));
//
const getFullName = user => {
    const [first_name, last_name] = user;
    return `${first_name} ${last_name}`;
}; console.log(getFullName(["Alex", "Doe"]));
//
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point);
//
const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(otherItems);
//
const sum1 = (x, y, z) => {
    return x + y + z;
};
const numbers2 = [1, 2, 3];
console.log(sum1(...numbers2));
//
const getApps = (apps1, apps2) => {
    return [...apps1, ...apps2];
}; console.log(getApps(["Chrome", "React", "Google"], ["Firefox", "MDN", "Westrn"]));
//
const user1 = {
    id: 23,
    name: "David Pachelbel"
}; console.log(user1.id);
//
const user3 = {
    id: 12,
    name: "Sam Green",
    age: 20
}; const key = "id";
console.log(user3[key]);
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}; console.log(getValue({id: 2, name: "Sam"}, "name"));
console.log(getValue({id: 2, name: "Sam"}, "id"));
//
const user_ = {
    id: 2398,
    name: "Sam Green",
    age: 29
};
const keys = Object.keys(user_);
console.log(keys);
//
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
}; console.log(Object.keys(object1));
//
const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};
const keys1 = Object.keys(settings);
console.log(keys1);
keys1.forEach(key => {
    console.log(settings[key]);
});