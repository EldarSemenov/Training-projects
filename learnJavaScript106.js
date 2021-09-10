function getNextAge(age){
    if(age === ""){
        return 0;
    }
    return Number.parseInt(age, 10) + 1;
};
console.log(getNextAge("sd"));
console.log(getNextAge());
console.log(getNextAge('23'));
//
function getDescriptionText(text){
    if(text.length <= 10){
        return text;
    } return text.substring(0, 10) + ' ' + '........';
}
console.log(getDescriptionText('I am learning Java Script'));
console.log(getDescriptionText('This word'));
//
const sumPositiveNumbers = numbers => {
    let sum = 0;
    numbers.forEach(number => {
        if(number >= 0) {
            return sum += number;
        }
    }); return sum;
}
console.log(sumPositiveNumbers([-12, 2, 2, -90, -4, -34]));
//
const getProductDetails = () => {
    const car = {
        id: 2387,
        model: 3,
        price: 41.000,
        inStock: true
    }; return car;
};
console.log(getProductDetails());
//
const logUsersIds = (userIds = []) => {
    userIds.forEach(userId => {
        console.log(userId);
    });
}
console.log(logUsersIds([12, 13, 14]));
console.log(logUsersIds());
//
const users = [
    {
        id: 1,
        name: 'Sam Doe'
    },
    {
        id: 2,
        name: 'Alex Blue'
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);
const csv = userNamesArray.join(", ");
console.log(csv);
//
const html = `<ul>${users.map(user => `<li>${user.name}</li>`).join(" ")}</ul>`;
console.log(html);
//
const persons = [
    {
        firstName: 'Alex',
        lastName: 'Tompson'
    },
    {
        firstName: 'John',
        lastName: 'Rommel'
    }
];
const html2 = `<ol>${persons.map(person => `<li>${person.firstName}</li>`).join('')}</ol>`;
console.log(html2);
const html3 = `<ol>${persons.map(person => `<li>${person.lastName}</li>`).join('')}</ol>`;
console.log(html3);
//
const countries = ['Netherlands', 'Japan', 'Canada'];
//
const getDropDownCountries = countries => {
    return `<option value="">Please select</option>
    ${countries.map(country => `<option value="${country.toLowerCase()}">${country}</option>`).join('')}`;
};
console.log(getDropDownCountries(countries));
//
let grades = [100, 100, 100];
const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const dimensions = [20, 5];
const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = 'id';
console.log(user[key]);
//
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}
console.log(getValue({id: 2, name: 'Sam'}, 'name'));
console.log(getValue({id: 2, name: 'Sam'}, 'id'));
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = Object.keys(user);
const value = Object.values(user);
console.log(key);
console.log(value);
//
const settings = {
    theme: 'Dark',
    version: '2.4.1',
    beta: false
};
const keys = Object.keys(settings);
console.log(keys);
keys.forEach(key => {
    console.log(settings[key]);
});
//
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`;
}
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'name'));
console.log(getCourseDetail({id: 1, name: 'Learn JavaScript', year: 2021}, 'year'));
//
const getUpperCasedProperties = course => {
    return Object.keys(course).map(key => {
        return key.toUpperCase();
    });
}
console.log(getUpperCasedProperties({id: 1, name: 'Learn JavaScript', year: 2021}));
//
const logValues = course => {
    Object.keys(course).forEach(key => {
        console.log(course[key]);
    })
}
logValues({id: 1, name: 'Learn Javascript', year: 2021});
//
const visualizeEntries = course => {
    return Object.entries(course);
}
console.log(visualizeEntries({id: 1, name: 'Learn JavaScript', year: 2021}));
//
const sum = (a, b) => {
    console.log(a);
    console.log(b);
    let total = a + b;
    console.log(total);
    return total;
}
sum(1, 3);
//
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}
sum(1, 3);
//
const getUser = (id, name) => {
    return {id, name};
}
console.log(getUser(2, 'Sam'));
console.log(getUser(5, 'Alex'));
//
const name = 'Document title';
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name: userName, isAdmin, id} = user;
console.log(userName);
//
const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {id, name, isAdmin: admin} = user;
console.log(admin);
//
const firstPerson = {
    name: 'Sam',
    age: 18,
    type: 'employee'
};
const secondPerson = {
    age: 37,
    type: 'Admin'
};
const personsMerged = {...firstPerson, ...secondPerson};
console.log(personsMerged);
//
const sum = values => {
    return values?.[0] + values?.[1] + values?.[2];
}
console.log(sum([10, 10, 10]));

const getPushMessage = status => {
    const messages = {
        "received": "Restaurant started working on your order.",
        "prepared": "Driver is picking up your food.",
        "en_route": "Driver is cycling your way!",
        "arrived": "Enjoy your food!"
    }
    return messages[status] ?? "Unknown status";
}