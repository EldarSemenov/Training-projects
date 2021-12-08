const grades = [12, 18, 20, 19, 14, 18, 19, 19.5];

const getRaisedGrades = grades => {
    return grades.map(grade => {
        if(grade + 1 > 20) {
            return 20
        }
        return grade + 1
    }).join(', ');
}
console.log(getRaisedGrades(grades));
//
let apps = 'Calculaytor,Phone,Contacts';
let appsArray = apps.split(',');
console.log(appsArray);
//
const message = 'You are welcome.';
const m = message.replace(' ', '_');
console.log(message);
console.log(m);
//
const message1 = 'You are the best!';
const mm = message1.replaceAll(' ', ':');
console.log(mm);
//
const str = 'Laundry, Wash dishes, learn JavaScript';

const getCountTodos = todos => {
    return todos.split(', ');
}
console.log(getCountTodos(str));
//
const users = [
    {
        id: 1,
        name: 'Sam Doe'
    },
    {
        id: 2,
        name: 'Alex Green'
    }
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);

const csv = userNamesArray.join(', ');
console.log(csv);
//
const list_names = document.querySelector('#list-names');

const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join('')}
</ul>`;
console.log(html);
//
const numbers = [15, 10, 20];

const allAboveTen = numbers.every(number => number > 10);
console.log(allAboveTen);

const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);
//
const items = ['Pen', 'Paper', 'Staples'];
const deleteItems = items.splice(0, 1);
console.log(deleteItems);
console.log(items);
//
const grades = [10, 10, 10];
const sum = grades.reduce((total, current) => {
   return total + current;
}, 0);
console.log(sum);
//
let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
    console.log(`Total is ${total}`);
    console.log(`Current is ${current}`);
    return total + current;
}, 0);
console.log(`Sum is ${sum}`);
//
const numbers = [2, 2, 2];
const result = numbers.reduce((total, current) => {
    return total * current;
}, 1);
console.log(result);
//
const dimensions = [20, 5];

const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const location = [24.83643, 2.2847];

const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`; 
}
console.log(getLocationString(location));
//
const lat = [5.234];
const lng = [1.837];
const point = [...lat, ...lng];
console.log(point);
//
const items = ['Tissues', 'Oranges'];
const otherItems = [...items, 'Tomatoes'];
console.log(otherItems);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const key = 'id';
const key2 = 'name';
const key3 = 'age';
console.log(user[key]);
console.log(user[key2]);
console.log(user[key3]);
console.log('......');
console.log(user.id);
console.log(user.name);
console.log(user.age);
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
const keys = Object.keys(user);
console.log(keys);
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
const logValues = course => {
    return Object.keys(course).forEach(key => {
        console.log(course[key]);
    });
}
logValues({id: 1, name: 'Learn JavaScript', year: 2021});
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
};
const values = Object.values(user);
console.log(values);
const entries = Object.entries(user);
console.log(entries);
entries.forEach(entry => {
    console.log(entry);
});
//
const sum = (a, b) => {
    console.log({a});
    console.log({b});
    let total = a + b;
    console.log({total});
    return total;
}
sum(2, 3);
//
const getUser = (id, name) => {
    return {id, name};
}

console.log(getUser(2, 'Sam'));
console.log(getUser(5, 'Alex'));
//
const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}
getProduct(12, 12);
//
const config = {
    id: 1, 
    isAdmin: false,
    theme: {
        dark: false,
        accesibility: true
    }
};
const {id, isAdmin, theme} = config;
console.log(id);
//
const user = {
   id: 1,
   name: 'Sam',
   isAdmin: true
};
const {name, isAdmin = false} = user;
console.log(isAdmin);
//
const name = 'Document title';

const user = {
    id: 1,
    name: 'Sam',
    isAdmin: true
};
const {name: userName, id, isAdmin} = user;
console.log(userName);
//
const firstPerson = {
    name: 'Sam',
    age: 18
};
const secondPerson = {
    age: 25,
    type: 'admin'
};
const mergedObjects = {...firstPerson, ...secondPerson};
console.log(mergedObjects);