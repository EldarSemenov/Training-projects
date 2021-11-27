const headline = document.querySelector('#headline');
headline.remove();
document.body.style.backgroundColor = 'pink';
document.documentElement.style.backgroundColor = 'blue';
//
const form = document.querySelector('#payment');
console.log(form.dataset);
console.log(form.dataset.currency);
console.log(form.dataset);
form.dataset.userId = 23;
console.log(form.dataset);
form.dataset.rememberMe = false;
console.log(form.dataset);
//
const h1 = document.querySelector('h1');
console.log(h1.parentElement);
//
const h1 = document.querySelector('h1');
h1.closest('.main');
console.log(h1);
//
const positions = document.querySelector('#job-position');
positions.insertAdjacentHTML('beforeend', `<div class='position'>2007-2009</div>`);
positions.insertAdjacentHTML('afterbegin', `<div class="position">1-2</div>`);
//
const apps = ['Calculator', 'Phone', 'Messages'];

const list = document.querySelector('#apps-list');

apps.forEach(app => {
    list.insertAdjacentHTML('beforeend', `<li>${app}</li>`);
});
//
const addItemToShopList = item => {
    const element = document.querySelector('#shopping');
    element.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
}
addItemToShopList('Apples');
addItemToShopList('Pears');
//
const init = () => {
    const element = document.querySelector('#shopping');
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(product => {
            element.insertAdjacentHTML('beforeend', `<li>${product.item}</li>`);
        });
    });
}
init();

const element = document.querySelector('#shopping');
element.insertAdjacentHTML('beforeend', `<li>Appricot</li>`);
//
const paragraph = document.createElement('p');
paragraph.classList.add('text-center');
paragraph.setAttribute('id', 'content');
paragraph.innerHTML = `<h1><strong>Hello World!</strong></h1>`;
paragraph.style.backgroundColor = 'pink';
console.log(paragraph);

document.body.appendChild(paragraph);
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    console.log('Button clicked');
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', () => {
    setTimeout(() => {
        button.setAttribute('disabled', 'disabled');
        button.textContent = 'Loading.....'
        console.log("clicked")
    }, 2000);
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', event => {
    console.log(event);
});
//
const button = document.querySelector('#app-button');
button.addEventListener('click', event => {
    console.log(event.currentTarget.textContent);
});
//
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.currentTarget.textContent);
    });
});
//
const buttons = document.querySelectorAll('button');

const handleButtonClick = event => {
    console.log(event.currentTarget.textContent);
}
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
const form = document.querySelector('#address-form');
form.addEventListener('submit', event => {
})
//
const form = document.querySelector("#address-form");
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submitted');
});
//
const form = document.querySelector('#address-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Event submitted');
});
//
const form = document.querySelector('#address-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Submit button was successfully applied');
});
//
const form = document.querySelector('#weather-form');
const city = document.querySelector('#city');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(city.value);
    getWeatherInfo(city.value);
});
//
const form = document.querySelector('#login-form');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');

form.addEventListener('submit', event => {
    event.preventDefault();
    processLogin(email.value, password.value);
});
function processLogin(email, password) {
    console.log({email, password});
}