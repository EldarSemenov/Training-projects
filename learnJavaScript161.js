const element = document.querySelector('#first-item');
element.classList.add('highlighted');
console.log(element);
//
const item = document.querySelector('#first');
item.classList.add('fruit');
console.log(item);
//
const items = document.querySelectorAll('li');
items.forEach(item => {
    item.classList.add('fruit');
});
console.log(items);
//
const element = document.querySelector('#shopping-list');
element.classList.remove("highlighted")
console.log(element);
//
const items = document.querySelectorAll('li');
items.forEach(item => {
    item.classList.remove('item');
})
console.log(items);
//
const box = document.querySelector('#box');
console.log(box.classList.contains('activated'));
console.log(box.classList.contains('higlighted'));
//
const box = document.querySelector('#box');
console.log(box.classList.toggle('activated'));
console.log(box);

console.log(box.classList.toggle('activated'));
console.log(box);

box.classList.toggle('activated');
console.log(box);
//
const hello = document.querySelector('#id');

hello.classList.toggle('active');
console.log(hello);

hello.classList.toggle('active');
console.log(hello);

hello.classList.toggle('active');
console.log(hello);

hello.classList.toggle('active');
console.log(hello);

hello.classList.toggle('active');
console.log(hello);

hello.classList.replace('active', 'in_move');
console.log(hello);

hello.classList.add('highlighted', 'light');
console.log(hello);

hello.classList.remove('active', 'highlighted', 'in_move');
console.log(hello);
//
const banner = document.querySelector('#banner');
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));

const botton = document.querySelector('#login');
console.log(botton.getAttribute('disabled'));
console.log(botton.getAttribute('id'));
console.log(botton);

botton.removeAttribute('disabled');
console.log(botton);

botton.setAttribute('disabled', 'disabled');
console.log(botton);

botton.setAttribute('id', 'navbar');
console.log(botton);

console.log(botton.hasAttribute('disabled'));
//
const banner = document.querySelector('#banner');
banner.style.backgroundColor = 'red';
banner.style.backgroundColor = 'yellow';
banner.style.backgroundColor = 'brown';
banner.style.backgroundColor = 'green';
banner.style.backgroundColor = 'orange';

banner.style.display = 'none';
banner.style.display = '';
//
const showOrHideConsent = user => {
    const element = document.querySelector('#eu-consent');
    if(user.isEU) {
        element.style.display = '';
    } else {
        element.style.display = 'none';
    }
}
showOrHideConsent({id: 1, isEU: true});
showOrHideConsent({id: 2, isEU: false});
//
const hideEUconsent = () => {
    const element = document.querySelector("#eu-consent");
    element.style.display = 'none';
}
hideEUconsent();
//
let names = ['Sam', 'Alex', 'Charlie'];

let result = names.find(name => name === 'Alex');
console.log(result);

let numbers = [9, 5, 14, 3, 11];

let firstNumberAboveTen = numbers.find(number => number > 10);
console.log(firstNumberAboveTen);

let filter = numbers.filter(number => number > 10);
console.log(filter);
//
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const names = ['sam', 'alex'];
const namesInUpperCase = names.map(name => name.toUpperCase());
console.log(namesInUpperCase);
console.log(names);
//
const groceries = ['Apple', 'Peach', 'Tomato'];
console.log(groceries.includes('Tomato'));
console.log(groceries.includes('Bread'));
//
const groceries = ['Apple', 'Peach', 'Tomato'];
console.log(groceries.toString());
console.log(groceries.join(', '));
console.log(groceries.join('; '));
console.log(groceries.join(' . '));
//
const user = {
    id: 1,
    firstName: 'Sam',
    lastName: 'Doe',
    age: 20
};
console.log(user);

user.lastName = 'Green';
user.age = user.age + 1;
console.log(user);
//
const addOne = (number = 0) => {
    return number + 1;
}
console.log(addOne(1));
console.log(addOne());
//
const welcomeUser = (name = 'User') => {
    return `Welcome ${name}`;
}
console.log(welcomeUser('Sam'));
console.log(welcomeUser());
//
const logUsersIds = (userIds = []) => {
    userIds.forEach(id => {
        console.log(id);
    });
}
logUsersIds();
logUsersIds([23, 14, 45]);
//
const sum = (a, b) => a + b;
console.log(sum(3, 5));
//
const name = '  Sam Green ';
console.log(name.trim());