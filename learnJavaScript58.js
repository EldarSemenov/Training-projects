console.log(new Array());
console.log(new Object());
//
const arr1 = new Array();
arr1.push(10);
const arr2 = new Array();
arr2.push(10);
console.log(arr1 === arr2);
//
const obj1 = new Object();
obj1.key = "something";
const obj2 = new Object();
obj2.key = "something";
console.log(obj1 === obj2);
//
const firstArray = [];
const secondArray = firstArray;
console.log(firstArray);
console.log(secondArray);
//
firstArray.push(10);
console.log(firstArray);
console.log(secondArray);
console.log(firstArray === secondArray);
//
const grades = [
    {
        id: 1,
        grade: 12,
        isPassing: false
    },
    {
        id: 2,
        grade: 14,
        isPassing: true
    }
];
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades);
//
const sampleUser = {
    id: 1,
    age: 23
};
const incrementAge = user => {
    return user.age = user.age + 1;
};
console.log(incrementAge(sampleUser));
//
const users = [
    {
        id: 1,
        name: "Sam",
        isVerified: false
    },
    {
        id: 2,
        name: "Alex",
        isVerified: false
    },
    {
        id: 3,
        name: "Charlie",
        isVerified: false
    }
];
const verifyUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
};
verifyUser(users, 2);
console.log(users);
verifyUser(users, 3);
console.log(users);
//
const grade_s = [10, 10];
const grade_sCopy = [...grade_s];
console.log(grade_sCopy);
const updated = [...grade_s, 15];
console.log(updated);
//
const GRADES = [10, 15, 20];
const updated1 = GRADES.filter(grade => grade !== 20);
console.log(updated1);
//////////////////////////////////////////////
const originalApps = ["Calculator", "Phone"];

const cloneApps = apps => {
    return [...apps];
};
const copiedApps = cloneApps(originalApps);
console.log(copiedApps);
console.log(copiedApps === originalApps);
//////////////////////////////////////////////
const array1 = [10, 20];

const makeAcloneOfAray1 = numbers => {
    return [...numbers];
};
const copy = makeAcloneOfAray1(array1);
console.log(copy);
console.log(array1 === copy);
//////////////////////////////////////
const original_apps = ["Calculator", "Phone"];
const Copy = [...original_apps, "Smart lights"];
console.log(Copy);
console.log(Copy === original_apps);
//
const orApps = ["calculator", 'phone'];
const addApps = (apps, app) => {
    return [...apps, app];
};
console.log(addApps(orApps, 'smart lights'));
console.log(orApps);
//
const user1 = {
    id: 1,
    age: 23
};
const cloned = {...user1};
console.log(cloned);
console.log(cloned === user1);
//
const user2 = {
    id: 2,
    age: 24
};
const clonedUser = {
    ...user2,
    age: user2.age + 1
};
console.log(clonedUser);
//
const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5
};
const {year, ...rest} = book;
console.log(rest);
//
const originalConfig = {
    darkTheme: true
};
const cloneConfig = config => {
    return {...config};
};
const result = cloneConfig(originalConfig);
console.log(result);
console.log(originalConfig === result);
//
const config = {
    darkTheme: false
};
const enableDarkTheme = config => {
    return {...config, darkTheme: true};
};
console.log(enableDarkTheme(config));