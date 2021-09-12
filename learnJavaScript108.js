console.log('Step 1');
try{
    nonExistentFunction();
}catch(error){
    console.error("Error");
}
console.log('Step 2');
//
console.log('One');
try{
    isFunction()
}catch(error){
    console.error('This is the error!');
}
console.log('Two');
//
const runCode = () => {
    console.log('This is not mistake');
    try{
        getData();
    }catch(error){
        console.error('This is the ERROR!');
    }
    console.log('This is not mistake also!')
}
runCode();
console.log(getDate());
//
const showDate = () => {
    try{
        getDate();
        return Date();
    }catch(error){
        return 'Can not recieve data of the time'
    }
}
console.log(showDate());
//console.log(Date());
//
const fristArray = [];
const secondArray = fristArray;
console.log(fristArray);
console.log(secondArray);
fristArray.push(10);
console.log(fristArray);
console.log(secondArray);
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

const entry2 = grades.find(grade => grade.id === 2);
entry2.isPassing = false;
console.log(grades);
//
const person = {
    id: 1,
    name: 'Alex',
    passed: false
}
person.passed = true;
console.log(person);
//
const sampleUser = {
    id: 1,
    age: 23
};
const incrementAge = user => {
    user.age += 1;
    user.id += 10;
    return user;
}
console.log(incrementAge(sampleUser));
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
verifyUser(users, 1);
verifyUser(users, 3);
verifyUser(users, 2);
console.log(users);
//
const cars = [
    {
        model: 'Tesla model 3',
        idNumber: 9274823,
        price: 41000,
        isVerified: false
    },
    {
        model: 'Volvo XC40',
        idNumber: 123813333,
        price: 42000,
        isVerified: false
    },
    {
        model: 'Jeep Compass',
        idNumber: 237623533,
        price: 39000,
        isVerified: false
    }
];
const verifiedAndIncreasedPrice = (cars, id) => {
    const car = cars.find(car => car.idNumber === id);
    car.isVerified = true;
    car.price += 10000;
}
verifiedAndIncreasedPrice(cars, 9274823);
console.log(cars);
//
const flats = [
    {
        id: 12,
        number: 23,
        price: 340000,
        isVerified: false
    },
    {
        id: 11,
        number: 34,
        price: 440000,
        isVerified: false
    },
    {
        id: 90,
        number: 21,
        price: 660000,
        isVerified: false
    }
];
const verifiedAndPrice = (flats, idN) => {
    const flat = flats.find(flat => flat.id === idN);
    flat.isVerified = true;
}
verifiedAndPrice(flats, 23);
console.log(flats);
//
const flats = [
    {
        id: 1,
        isVerified: false,
        age: 23
    },
    {
        id: 2,
        isVerified: false,
        age: 23
    }
];
const verifiedFlatAge = (flats, IdNumber) => {
    const flat = flats.find(flat => flat.id === IdNumber);
    flat.isVerified = true;
    flat.age += 10;
}
verifiedFlatAge(flats, 2);
verifiedFlatAge(flats, 1);
console.log(flats);
//
const grades = [10, 20];
const gradeCopy = [...grades];
console.log(gradeCopy);
//
const grades = [10, 20];
const updated = [...grades, 30];
console.log(updated);
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
}
const originalApps = ['Calculator', 'Phone'];
console.log(addApp(originalApps, 'Smart lights'));
console.log(originalApps);
//
const user = {
    id: 1,
    age: 23
};
const cloned = {...user, utah: 'yes'};
console.log(cloned);
console.log(user);
//
const user = {
    id: 1,
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 10
};
console.log(clonedUser);
//
const book = {
    id: 1, 
    title: 'Harry Potter',
    year: 2018,
    rating: 4.5
};
const {year, id, title, rating, ...rest} = book;
console.log(rest);
//
const cloneConfig = config => {
    return {...config};
}
const originalConfig = {
    darkTheme: true
}
const result = cloneConfig(originalConfig);
console.log(result);
console.log(originalConfig === result);
//
const enableDarkTheme = config => {
    return {...config, darkTheme: true};
}
const config = {
    darkTheme: false
}
console.log(enableDarkTheme(config));