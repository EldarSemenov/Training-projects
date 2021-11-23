const item = document.querySelector('#banner .item');
item.textContent = 'Hello World!';
const correct = document.querySelector('a.menu-link');
correct.innerHTML = 'Hello World!';
const text = document.querySelector('[disabled]');
text.textContent = 'Your words goes here';
//
const div = document.querySelector('div');
console.log(div.textContent);

const paragraph = document.querySelector('p');
if(paragraph) {
    console.log(paragraph.textContent);
}
console.log(paragraph?.textContent);
//
const elements = document.querySelectorAll('p');
console.log(elements.textContent);
elements.forEach(element => {
    console.log(element.textContent);
});
//
const div = document.querySelectorAll('div');
const items = [...div];

const items = [...document.querySelectorAll('div')];
//
const links = document.querySelectorAll('a');
const loginLinks = [...links].filter(link => link.textContent === 'Login');
console.log(loginLinks);
//
const element = document.querySelector('#test');
console.log(element.textContent);
//
const element = document.querySelector('#test');
console.log(element.textContent);
console.log(element.innerHTML);
element.textContent = 'This is a new text';
element.innerHTML = '<h1><strong>Hello World!</strong></h1>';
//
const banner = document.querySelector('#banner');
banner.innerHTML = '';
//
const email = document.querySelector('#email');
console.log(email.value);
//
const name = document.querySelector('#user-name');
console.log(name.value);
//
const comment = document.querySelector('#user-comment');
console.log(comment.value);
//
const element = document.querySelector('#first-item');
element.classList.add('highlighted');
console.log(element);
//
const element = document.querySelector('#first-item');
element.classList.remove('highlighted');
console.log(element);
//
const box = document.querySelector('#box');
console.log(box.classList.contains('activated'));
//
const box = document.querySelector('#box');
box.classList.toggle('activated');
console.log(box);

box.classList.toggle('activated');
console.log(box);

box.classList.toggle('activated');
console.log(box);

box.classList.replace('activated', 'boxes');
console.log(box);
//
const banner = document.querySelector('#banner');
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));

const button = document.querySelector('#login');
console.log(button.getAttribute('disabled'));
button.removeAttribute('disabled');
console.log(button);
button.setAttribute('disabled', 'disabled');
console.log(button);
button.setAttribute('id', 'myOwn');
console.log(button);
console.log(button.hasAttribute('id'));
//
const banner = document.querySelector("#banner");
banner.style.backgroundColor = 'blue';
banner.style.fontSize = 10;
banner.style.display = 'none';
banner.style.display = '';
//
const name = '  Sam Blue  '
console.log(name);
name.trim();
console.log(name);
//
const sentance = 'Hello there. Welcome!';

console.log(sentance.startsWith('H'));
console.log(sentance.endsWith('!'));
console.log(sentance.includes('Sam'));
console.log(sentance.includes('He'));
//
let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(',');
console.log(apps);
console.log(appsArray);
let list = appsArray.join(', ');
console.log(list);
//
const message = 'You are welcome.';
const action = message.replaceAll(" ", "_");
console.log(message);
console.log(action);
//
const getSlug = text => {
    return text.toLowerCase().replaceAll(" ", "-").substring(0, 15) + '...';
}
console.log(getSlug("IKEA table"));
console.log(getSlug('200cm Bed'));
console.log(getSlug('Bedside lavalamp'));
console.log(getSlug('A B C Noodles'));
console.log(getSlug('This is more than 15 carachters'));
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
//
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);

const csv = users.map(user => user.name).join(', ');
console.log(csv);
//
const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}</ul>`;
console.log(html);
//
const html = `<ul>${users.map(user => `<li>${user.name}</li>`).join('')}</ul>`;
console.log(html);
//
const numbers = [15, 10, 20];

const allAboveTen = numbers.every(number => number >= 10);
console.log(allAboveTen);
const allAbove15 = numbers.every(number => number >= 15);
console.log(allAbove15);
const someOver18 = numbers.some(number => number >= 18);
console.log(someOver18);
const someUnder10 = numbers.some(number => number < 10);
console.log(someUnder10);
//
const items = ['Pen', 'Paper'];
items.length = 0;
console.log(items);
//
const items = ['Pen', 'Paper', 'Staples'];
const deleteItem = items.splice(0, 1);
console.log(deleteItem);
console.log(items);
//
const grades = [10, 10, 10];
const sum = grades.reduce((total, current) => {
    return total + current;
}, 0);
console.log(sum);
//
const dimensions = [20, 5];

const width = dimensions[0];
const height = dimensions[1];
console.log(width);
//
const dimensions = [20, 5];

const [width, height] = dimensions;
console.log(width);
console.log(height);
//
const location = [23.82736, 2.82323];
const getLocationString = location => {
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longtitude is ${lng}`;
}
console.log(getLocationString(location));
//
const lat = [5.8722];
const lng = [3.837];
const point = [...lat, ...lng];
console.log(point);
const fruits = ['Apples', 'Pears'];
const veg = ['Onion', 'Carrot'];
const products = [...fruits, ...veg];
console.log(products);
//
const items = ['Tissues', 'Oranges'];
const otherItems = [...items, 'Tomatoes'];
console.log(otherItems);
//
const user = {
    id: 1,
    name: 'Sam Green'
}
console.log(user.id);
//
const user = {
    id: 1,
    name: 'Sam Green',
    age: 20
}
const key1 = 'id';
const key2 = 'name';
const key3 = 'age';

console.log(user[key1]);
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