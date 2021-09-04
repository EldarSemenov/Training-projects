console.log("Hello Prettier");
console.log("Hello world");
console.log(new Array());
console.log(new Object());
console.log(new Array() === new Array());
console.log(new Object() === new Object());
const arr1 = new Array();
arr1.push(10);
console.log(arr1);
const arr2 = new Array();
arr2.push(10);
console.log(arr2);
console.log(arr1 === arr2);
//
const obj1 = new Object();
obj1.key = "someting";
console.log(obj1);
//
const obj2 = new Object();
obj2.key = "something";
console.log(obj2);
//
console.log(obj1 === obj2);
//
const firstArray = [];
const secondaryArray = firstArray;
console.log(firstArray);
console.log(secondaryArray);
firstArray.push(10);
console.log(firstArray);
console.log(secondaryArray);
console.timeLog(firstArray === secondaryArray);
//
const grades = [
  {
    id: 1,
    grade: 12,
    isPassing: false,
  },
  {
    id: 2,
    grade: 14,
    isPassing: true,
  },
];
const entry = grades.find((grade) => grade.id === 1);
entry.isPassing = true;
console.log(grades);
//
const sampleUser = {
  id: 1,
  age: 23,
};
const incrementAge = (user) => {
  return user.age += 1;
};
incrementAge(sampleUser);
console.log(sampleUser);
//
const users = [
  {
    id: 1,
    name: 'Sam',
    isVerified: false
  },
  {
    id: 2,
    name: 'Alex',
    isVerified: false
  },
  {
    id: 3,
    name: 'Charlie',
    isVerified: false
  }
];
const verifyUser = (users, userId) => {
  const user = users.find(user => user.id === userId);
  user.isVerified = true;
}
verifyUser(users, 2);
console.log(users);
verifyUser(users, 3);
verifyUser(users, 1);
//
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy);
grades.push(30);
console.log(grades);
console.log(gradesCopy);
const updated = [...grades, 40];
console.log(updated);
console.log(grades);
const updated1 = grades.filter(grade => grade !== 20);
console.log(updated1);
console.log(grades);
//
const cloneApps = apps => {
  return [...apps];
}
const originalApps = ['Calculator', 'Phone'];
const copiedApps = cloneApps(originalApps);
console.log(copiedApps);
console.log(copiedApps === originalApps);
//
const addApp = (apps, app) => {
  return [...apps, app];
};
const originalApps = ['Calculator', 'Phone'];
console.log(addApp(originalApps, 'Smart lights'));
console.log(originalApps);
//
const user = {
  id: 1,
  age: 23
};
const cloned = {...user};
console.log(cloned);
//
const user = {
  id: 1,
  age: 23
};
const clonedUser = {
  ...user,
  age: user.age + 1
};
console.log(clonedUser);
//
const book = {
  id: 1,
  title: 'Harry Potter',
  year: 2017,
  rating: 4.5
};
//const {year, ...rest} = book;
//console.log(rest);
console.log(book);
const {rating, ...rest} = book;
console.log(rest);
//
const cloneConfig = config => {
  return {...config};
};
const originalConfig = {
  darkTheme: true
};
const result = cloneConfig(originalConfig);
console.log(result);
console.log(originalConfig === result);
//
const enableDarkTheme = config => {
  return {...config, darkTheme: true};
}
const config = {
  darkTheme: false
};
console.log(enableDarkTheme(config));