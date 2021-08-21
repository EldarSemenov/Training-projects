const ages = [12, 18, 19, 22, 41, 11, 90, 45, 23, 56, 79, 32, 33, 46, 71, 44, 39];
const ages1 = [11, 16, 17, 19];
const getVotersCount = ages => {
    return ages.filter(age => {
        return age >= 18;
    }).length;
}
console.log(getVotersCount(ages));
console.log(getVotersCount(ages1));
//
const user = {
    id: 1,
    firstName: 'Sam',
    lastName: 'Doe',
    age: 20
};
user.lastName = 'Blue Dock';
user.age = user.age + 100;
console.log(user);
//
const getMessage = message => {
    if(message.endsWith(".")){
        return message;
    }
    return message + ".";
};
console.log(getMessage("Hello world"));
console.log(getMessage('Welcome home.'));
//
const getUnit = text => {
    if(text.includes("℃")){
        return 'Celsius';
    }
    else if(text.includes("℉")){
        return "Fahrenheit";
    }
    else{return "N/A";}
};
console.log(getUnit("It is 15℃ today"));
console.log(getUnit("It was 90℉ yesterday"));
console.log(getUnit("It is expected to be cold"));
//
const getSlug = name => {
    let result = name.toLowerCase().substring(0, 15).replaceAll(' ', '-');
    return result;
}
console.log(getSlug('IKEA table'));
console.log(getSlug('200cm Bed'));
//
const name = " Sam Blue    ";
name.trim();
console.log(name);
//
const sentence = 'Hello there. Welcome!';
console.log(sentence.startsWith("H"));
console.log(sentence.endsWith("!"));
console.log(sentence.includes("lo"));
//
const getUnit = text => {
    if(text.includes("℃")){
        return "Celsius";
    }
    else if(text.includes("℉")){
        return "Fahrenheit";
    }
    else {return "N/A";}
};
console.log(getUnit("It is 15℃ today"));
console.log(getUnit("It was 90℉ yesterday"));
console.log(getUnit("It is expected to be cold"));
//
let apps = 'Calculator,Phone,Contacts';
let appsArray = apps.split(",");
console.log(appsArray);
let appsDash = apps.split(",");
console.log(appsDash);
//
const message = 'You are welcome.';
let action = message.replace("You", "All of you");
console.log(action);
let action2 = action.replaceAll(" ", " --- ");
console.log(action2);
//
const getSlug = name => {
    return name.substring(0, 15).toLowerCase().replaceAll(" ", "-");
};
console.log(getSlug("Thus, this is IKEA"));
//
const getCountTodos = string => {
    return string.split(",").length;
};
console.log(getCountTodos('Laundry,Wash dishes,Clean table'));
//
const users = [
    {
        id: 1,
        name: "Sam Doe"
    },
    {
        id: 2,
        name: "Alex Chelenger"
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);
const userIdArray = users.map(user => user.id);
console.log(userIdArray);
const csv = userNamesArray.join(", ");
console.log(csv);
//
const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ul>`;
console.log(html);
//
const persons = [
    {
        id: 12978,
        fullName: "Jason Ceo"
    },
    {
        id: 92383,
        fullName: "Elious Martinos"
    },
    {
        id: 92833,
        fullName: "Bob Crommos"
    }
];
const fullNameArray = persons.map(person => person.fullName);
console.log(fullNameArray);
const csv1 = fullNameArray.join(", ");
console.log(csv1);
//
const myHTMLofFullNames = 
`<ul>
${persons.map(person => `<li>${person.fullName}</li>`).join("")}
</ul>`;
console.log(myHTMLofFullNames);
//
const cars = [
    {
        price: 22000,
        name: "Ford Mustang"
    },
    {
        price: 34000,
        name: "Dodge Chalenger"
    },
    {
        price: 50000,
        name: "Jeep"
    },
    {
        price: 90000,
        name: "Lincoln"
    }
];
const arrayNames = cars.map(car => car.name);
console.log(arrayNames);
const string = arrayNames.join(", ");
console.log(string);
const arrayPrices = cars.map(car => car.price).join(", ");
console.log(arrayPrices);
//
const HTML1 = `<ol>${cars.map(car => `<li>${car.name}</li>`).join('')}</ol>`;
console.log(HTML1);
const HTML2 = `<ol>${cars.map(car => `<li>${car.price}</li>`).join('')}</ol>`;
console.log(HTML2);
//
const html3 = cars.map(car => `<ol><li>${car.name}</li></ol>`).join('');//wrong
console.log(html3);
//
const numbers = [15, 10, 20];
const allAboveTen = numbers.every(number => number >= 10);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAboveTen);
console.log(allAbove15);
//
const myNumbers = [20, 30, 40, 50, 60];
const someMore40 = myNumbers.some(number => number > 40);
const someMore70 = myNumbers.some(number => number > 70);
console.log(someMore40);
console.log(someMore70);
//
const shouldAdjustGrades = grades => {
    return grades.some(grade => grade < 10);
};
console.log(shouldAdjustGrades([20, 19, 22, 11, 19]));
console.log(shouldAdjustGrades([2, 3, 9, 17, 9]));
//
const items = ['Pen', 'Paper'];
items.length = 0;
console.log(items);
//
const products = ['Pen', 'Paper', 'Staples'];
const deletedItems = products.splice(0, 1);
console.log(deletedItems);
console.log(products);
//
const resetApps = apps => {
    return apps.splice(0);
};
console.log(resetApps(['apple', 'pear', 'pineapple']));
//
const apps = ['apple', 'chrome', 'google', 'firefox', 'codilak'];
const removeFirstItem = apps => {
    apps.splice(0, 1);
    return apps;
};
console.log(removeFirstItem(apps));
//
const removeSecondApp = apps => {
    apps.splice(1, 1, 'balm');
    return apps;
};
console.log(removeSecondApp(apps));
//
const grades = [12, 8, 10];
const act = grades.reduce((total, current) => {
    return total + current;
}, 0); 
console.log(act);
//
const act1 = grades.reduce((total, current) => {
    return total * current;
}, 1);
console.log(act1);
//
const numbers = [100, 100, 100];
let sumNumbers = numbers.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sumNumbers);
//
const sumGrades = grades => {
    return grades.reduce((total, current) => {
        return total + current;
    }, 0);
};
console.log(sumGrades([10, 10, 10]));
//
const multiplyNumbers = numbers => {
    return numbers.reduce((total, current) => {
    return total * current;
    }, 1);
};
console.log(multiplyNumbers([2, 2]));