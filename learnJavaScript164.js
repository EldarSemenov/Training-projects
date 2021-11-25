const divs = document.querySelectorAll('div');
const items = [...divs];
const items = [...document.querySelectorAll('div')];
//
const links = document.querySelectorAll('a');
const logLinks = [...links].filter(link => link.textContent === 'Login');
console.log(logLinks);
//
const setWelcomeMessage = name => {
    return document.querySelector('#welcome-message').innerHTML = 
    `Welcome <strong>${name}!</strong>`;
}
setWelcomeMessage('Alex');
setWelcomeMessage('Eldar');
//
const email = document.querySelector('#email');
console.log(email.value);
//
const element = document.querySelector('#first-item');
element.classList.add('highlighted');
console.log(element);
//
const elements = document.querySelectorAll('li');
elements.forEach(element => {
    element.classList.add('list');
});
console.log(elements);
//
const element = document.querySelector('#first-item');
element.classList.remove('highlighted');
console.log(element);
//
const box = document.querySelector('#box');
console.log(box.classList.contains('activated'));
console.log(box.classList.contains('highlighted'));
//
const box = document.querySelector('#box');
box.classList.toggle('activated');
console.log(box);
box.classList.toggle('activated');
console.log(box);
box.classList.toggle('activated');
console.log(box);
box.classList.replace('activated', 'show');
console.log(box);
//
const banner = document.querySelector('#banner');
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('disabled'));

const button = document.querySelector('#login')
console.log(button.getAttribute('disabled'));
button.removeAttribute('disabled');
console.log(button);
button.setAttribute('disabled', 'disabled');
console.log(button);
button.setAttribute('id', 'navbar');
console.log(button);
console.log(button.hasAttribute('disabled'));
//
const banner = document.querySelector('#banner');
banner.style.backgroundColor = 'red';
banner.style.display = 'none';
banner.style.display = '';
//
const headline = document.querySelector('#headline');
headline.remove();
document.body.style.backgroundColor = 'black';
document.documentElement.style.backgroundColor = 'yellow';
//
const form = document.querySelector('#payment');
console.log(form.dataset.currency);
console.log(form.dataset);
//
const navbar = document.querySelector("#navbar");
navbar.dataset.userId = 56;
navbar.dataset.rememberMe = false;
console.log(navbar);
//
const getIsActiveFromCard = () => {
    const element = document.querySelector("#user-card");
    return element.dataset.isActive === 'false';
}
console.log(getIsActiveFromCard());
const element = document.querySelector("#user-card");
console.log(element);
//
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
console.log(h1.parentElement);
console.log(p.parentElement);
//
const h1 = document.querySelector('h1');
h1.closest('.main');
console.log(h1);
//
const getUserIdFromElement = element => {
    const card = element.closest('.user-card');
    return Number.parseInt(card.dataset.userId, 10);
}
console.log(getUserIdFromElement('#name'));
console.log(getUserIdFromElement('#description'));
//
const getUserIdFromElement = element => {
    return Number.parseInt(card.dataset.userId, 10);
    
    }
    
    // Sample usage - do not modify
    console.log(getUserIdFromElement(document.querySelector("#name"))); // 23
    console.log(getUserIdFromElement(document.querySelector("#description")));
//
const getUserIdCardNumber = element => {
    const card = element.closest('.user-card');
    
    return Number.parseInt(card.dataset.userId, 10);
}    
console.log(getUserIdCardNumber(document.querySelector('#name')));
console.log(getUserIdCardNumber(document.querySelector('#description')));

const cardNumber = document.querySelector("#description").closest('.user-card');
console.log(Number.parseInt(cardNumber.dataset.userId, 10));
//
const element = document.querySelector('h1').closest('.card');
const idNumber = Number.parseInt(element.dataset.idNumber, 10);
console.log(idNumber);
console.log('12abc');
//
const grades = [2, 2, 2];
const multiply = grades.reduce((total, current) => {
    return total * current;
}, 1);
console.log(multiply);
//
const grades = [
    {grade: 10},
    {grade: 15},
    {grade: 5}
];
const sum = grades.reduce((total, current) => {
    return total + current.grade;
}, 0);
console.log(sum);

const multiply = grades.reduce((total, current) => {
    return total * current.grade;
}, 1);
console.log(multiply);
//
const tweets = [
    {
        id: 29833,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 298222,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];
const socialImpact = tweets.reduce((total, current) => {
    console.log(current.stats);
    return total + current.stats.likes + current.stats.retweets;
}, 0);
console.log(socialImpact);
//
console.log('Step 1');
try {
    nonExistingFunction();
}catch(error) {
    console.error(error);
}
console.log('Step 2');